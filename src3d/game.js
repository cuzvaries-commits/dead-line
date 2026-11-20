// Dead Line FPS. First-person zombie defense, three.js, bundled into one offline html by build.mjs.
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils.js';
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js';
import { Lensflare, LensflareElement } from 'three/examples/jsm/objects/Lensflare.js';

// ================= CONFIG =================
const W = 480, H = 270, STEP = 1 / 60;          // HUD canvas size, fixed sim step
const WORLD_L = 40, Z_MIN = -3, Z_MAX = 2.6, Z_WALL = -4, U = .04; // U: pose unit in meters (a body is ~46U tall)
const ROAD_X0 = -10, ROAD_LEN = WORLD_L + 20, ROAD_Z0 = -4, ROAD_D = 7.6, DW = 1536, DH = 192;
const CAM = { y: 1.9, z: 2.6, lookY: 1.2, lookZ: -1.6, fov: 55, half: 5.6 }; // menu camera: inside the corridor, looking down the road
const Z_WALL2 = 3.6, EYE_H = 1.62, FOV = 72, SENS = .0026, VM_S = U * .5; // first person: second wall, eye height, look speed, viewmodel scale
const CONFIG = {
  gravity: 15, playerSpeed: 3.2, playerHP: 100, bulletRange: 40,
  weapons: {
    knife:   { name: 'KNIFE', dmg: 45, rate: .38, mag: Infinity, knock: 3, pen: 3, melee: true },
    pistol:  { name: 'PISTOL', dmg: 34, rate: .16, mag: 12, reserve: Infinity, reload: 1.0, recoil: .06, knock: 1.6, pen: 1, spread: .012, auto: false, shake: 1.2 },
    smg:     { name: 'SMG', dmg: 15, rate: .06, mag: 40, reserve: 240, reload: 1.4, recoil: .022, knock: 1.1, pen: 1, spread: .02, spreadGrow: .006, spreadMax: .07, auto: true, shake: 1 },
    rifle:   { name: 'RIFLE', dmg: 24, rate: .085, mag: 30, reserve: 150, reload: 1.6, recoil: .035, knock: 1.9, pen: 2, spread: .01, spreadGrow: .008, spreadMax: .06, auto: true, shake: 1.5 },
    shotgun: { name: 'SHOTGUN', dmg: 16, pellets: 6, rate: .62, mag: 6, reserve: 30, reload: 1.9, recoil: .12, knock: 4.5, pen: 1, spread: .08, auto: false, shake: 3.5 },
    sniper:  { name: 'SNIPER', dmg: 160, rate: .9, mag: 5, reserve: 30, reload: 2.2, recoil: .2, knock: 6, pen: 4, spread: .002, auto: false, shake: 4, zoom: .35 },
  },
  zombies: {
    walker:  { hp: 60, speed: .65, dmg: 10, scale: 1, cash: 5 },
    runner:  { hp: 34, speed: 1.8, dmg: 6, scale: .95, cash: 6 },
    brute:   { hp: 420, speed: .45, dmg: 26, scale: 1.35, cash: 40, barricadeMul: 3 },
    crawler: { hp: 48, speed: .5, dmg: 8, scale: 1, cash: 6 },
    spitter: { hp: 55, speed: .62, dmg: 12, scale: 1, cash: 8, range: 6.5, cooldown: 2.6 },
  },
  headshotMul: 2.5, headshotCash: 3, killScore: 10, maxParticles: 2200, maxRagdolls: 36,
  waveBase: 6, wavePerDiff: 3, hordeMul: 1.6,
  grenade: { dmg: 220, radius: 2.8, fuse: 1.4, startCount: 2 },
  defenses: { wire: { hp: 320, cost: 40, slow: .4, dps: 9 }, spikes: { hp: 220, cost: 35, dps: 22 }, sandbags: { hp: 520, cost: 60 } },
  shop: { ammo: 15, grenade: 25, shotgun: 120, smg: 150, sniper: 220, heal: 20, upDmg: 60, upRate: 60, upReload: 50, upHP: 50 },
  upgrade: { dmg: .15, rate: .10, reload: .12, hp: 25 },
  drops: { ammo: .07, med: .04, nade: .02 },
  move: { sprintMul: 1.6, stamina: 100, drain: 28, regen: 22, meleeCost: 18, meleeDmg: 20, meleeCd: .8, adsMul: .62 },
};
const WEAP_ORDER = ['knife', 'pistol', 'smg', 'rifle', 'shotgun', 'sniper'];
const LEVELS = [
  { name: 'CHECKPOINT', obj: 'waves', waves: 5, startCash: 0, flank: 0, dark: 0, mix: { runner: .1, crawler: .08, spitter: 0 },
    pal: { skyT: [178, 168, 172], skyB: [150, 156, 142], fog: [150, 160, 140], wall: [100, 110, 114], stripeA: [206, 192, 58], stripeB: [44, 48, 66], post: [96, 128, 28], road: [94, 72, 50], fg: [74, 64, 40], light: [216, 240, 192] } },
  { name: 'OVERPASS', obj: 'hold', waves: 6, startCash: 250, flank: .1, dark: .15, mix: { runner: .18, crawler: .12, spitter: .08 },
    pal: { skyT: [214, 140, 90], skyB: [170, 100, 76], fog: [190, 120, 90], wall: [110, 96, 90], stripeA: [190, 50, 40], stripeB: [220, 210, 200], post: [70, 70, 70], road: [100, 74, 52], fg: [70, 54, 40], light: [255, 200, 120] } },
  { name: 'QUARANTINE', obj: 'survive', waves: 6, startCash: 550, flank: .2, dark: .45, mix: { runner: .25, crawler: .15, spitter: .1 },
    pal: { skyT: [20, 24, 44], skyB: [40, 46, 70], fog: [36, 42, 64], wall: [60, 66, 80], stripeA: [200, 190, 60], stripeB: [30, 32, 44], post: [40, 90, 40], road: [64, 52, 44], fg: [40, 36, 30], light: [255, 240, 200] } },
  { name: 'BLACKSITE', obj: 'protect', waves: 7, startCash: 900, flank: .25, dark: .3, mix: { runner: .2, crawler: .15, spitter: .18, brute: .04 },
    pal: { skyT: [60, 30, 34], skyB: [90, 44, 40], fog: [90, 40, 38], wall: [70, 62, 64], stripeA: [220, 40, 30], stripeB: [30, 26, 28], post: [90, 90, 90], road: [74, 54, 44], fg: [46, 36, 32], light: [255, 70, 50] } },
  { name: 'LAST STAND', obj: 'waves', waves: Infinity, startCash: 1300, flank: .3, dark: .2, mix: { runner: .25, crawler: .15, spitter: .18, brute: .05 },
    pal: { skyT: [120, 140, 90], skyB: [96, 116, 66], fog: [120, 150, 80], wall: [86, 96, 80], stripeA: [190, 200, 60], stripeB: [40, 46, 30], post: [120, 150, 40], road: [84, 72, 48], fg: [60, 58, 36], light: [200, 255, 120] } },
];

// ================= UTIL =================
const rnd = (a = 0, b = 1) => a + Math.random() * (b - a);
const pick = a => a[Math.random() * a.length | 0];
const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
const lerp = (a, b, t) => a + (b - a) * t;
const lerpC = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
const css = (c, k = 1) => `rgb(${clamp(c[0] * k, 0, 255) | 0},${clamp(c[1] * k, 0, 255) | 0},${clamp(c[2] * k, 0, 255) | 0})`;
const C3 = (c, k = 1) => new THREE.Color().setRGB(clamp(c[0] * k / 255, 0, 1), clamp(c[1] * k / 255, 0, 1), clamp(c[2] * k / 255, 0, 1), THREE.SRGBColorSpace);
const HEXC = {}; const hex3 = h => HEXC[h] || (HEXC[h] = new THREE.Color(h));
function palette(o) { const col = {}, colB = {}; for (const k in o) { col[k] = C3(o[k]); colB[k] = C3(o[k], .78); } return { col, colB }; }
const WHITE3 = new THREE.Color(1, 1, 1), WHITEP = new Proxy({}, { get: () => WHITE3 });
const turnTo = (a, b, m) => { const d = ((b - a + Math.PI) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) - Math.PI; return a + clamp(d, -m, m); };
function mk(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }

// ================= HUD CANVAS, FONT, ICONS =================
const gl = document.getElementById('gl'), uiCv = document.getElementById('ui'), ctx = uiCv.getContext('2d');
const FONT = {
  A: '010101111101101', B: '110101110101110', C: '011100100100011', D: '110101101101110', E: '111100110100111', F: '111100110100100',
  G: '011100101101011', H: '101101111101101', I: '111010010010111', J: '001001001101010', K: '101101110101101', L: '100100100100111',
  M: '101111111101101', N: '110101101101101', O: '010101101101010', P: '110101110100100', Q: '010101101110011', R: '110101110101101',
  S: '011100010001110', T: '111010010010010', U: '101101101101111', V: '101101101101010', W: '101101111111101', X: '101101010101101',
  Y: '101101010010010', Z: '111001010100111', 0: '111101101101111', 1: '010110010010111', 2: '110001010100111', 3: '110001010001110',
  4: '101101111001001', 5: '111100110001110', 6: '011100111101111', 7: '111001010010010', 8: '111101111101111', 9: '111101111001110',
  '$': '011110010011110', '/': '001001010100100', ':': '000010000010000', '.': '000000000000010', '!': '010010010000010',
  '?': '110001010000010', '-': '000000111000000', '+': '000010111010000', '%': '101001010100101', '(': '001010010010001',
  ')': '100010010010100', "'": '010010000000000', '>': '100010001010100', '<': '001010100010001',
};
function text(c, str, x, y, col, s = 1, align = 'left', shadow = false) {
  str = String(str).toUpperCase();
  const w = str.length * 4 * s - s;
  if (align === 'center') x -= w / 2 | 0; else if (align === 'right') x -= w;
  if (shadow) text(c, str, x + s, y + s, 'rgba(0,0,0,.7)', s);
  c.fillStyle = col;
  for (let i = 0; i < str.length; i++) {
    const gl_ = FONT[str[i]]; if (!gl_) continue;
    for (let j = 0; j < 15; j++) if (gl_[j] === '1') c.fillRect(x + i * 4 * s + (j % 3) * s, y + (j / 3 | 0) * s, s, s);
  }
}
const IPAL = { k: '#141210', w: '#f2f0ea', g: '#9a9a9a', d: '#555', r: '#d42a2a', R: '#8a1010', y: '#f0d040', Y: '#b08a20', o: '#e07020', G: '#5a8a3a', D: '#2e4a22', b: '#7a5a34', B: '#3a2a1a', t: '#c8b088', p: '#fff4c0' };
const ICON_MAPS = {
  heart: ['.kk...kk.', 'krrk.krrk', 'krwrkrrrk', 'krrrrrrrk', 'krrrrrrRk', '.krrrrRk.', '..krrRk..', '...kRk...', '....k....'],
  coin: ['..kkkkk..', '.kyyyyyk.', 'kyppyyyYk', 'kypyyyyYk', 'kyyyyyyYk', 'kyyyyyyYk', 'kyyyyyYYk', '.kYYYYYk.', '..kkkkk..'],
  skull: ['.kkkkkkk.', 'kwwwwwwwk', 'kwwwwwwwk', 'kwkkwkkwk', 'kwkkwkkwk', 'kwwwkwwwk', '.kwwwwwk.', '..kwkwk..', '..kkkkk..'],
  nade: ['....kkk..', '...kg.gk.', '..kkdkk..', '.kGGGGGk.', 'kGDGDGDGk', 'kGGGGGGGk', 'kGDGDGDGk', 'kGGGGGGGk', '.kGDGDGk.', '..kkkkk..'],
  ammo: ['...........', '.kkkkkkkkk.', 'kDDDDDDDDDk', 'kGGGGGGGGGk', 'kGyyyyyyyGk', 'kGGGGGGGGGk', 'kGGGGGGGGGk', 'kDDDDDDDDDk', '.kkkkkkkkk.'],
  med: ['...kkkkk...', '...k...k...', 'kkkkkkkkkkk', 'kwwwwrwwwwk', 'kwwwrrrwwwk', 'kwwwwrwwwwk', 'kgwwwwwwwgk', 'kkkkkkkkkkk'],
  burst: ['....r....', '.r..r..r.', '..rrorr..', '.rroyorr.', 'rrooyoorr', '.rroyorr.', '..rrorr..', '.r..r..r.', '....r....'],
  bolt: ['.....kkk.', '....kyyk.', '...kyyk..', '..kyyyk..', '.kyyyyyk.', '..kkyyk..', '...kyk...', '..kyk....', '..kk.....'],
  reload: ['..wwww...', '.w....w.w', 'w......ww', 'w.....www', 'w........', 'w.......w', '.w.....w.', '..wwwww..'],
  swap: ['......w..', 'wwwwwwwww', '......w..', '..w......', 'wwwwwwwww', '..w......'],
  wire: ['b.......b', 'bgg.g.ggb', 'b.gg.gg.b', 'bg.ggg.gb', 'b.gg.gg.b', 'bgg.g.ggb', 'b.......b'],
  spikes: ['.w..w..w.', '.g..g..g.', 'ggggggggg', 'BBBBBBBBB', 'bBbBbBbBb'],
  bags: ['.kkkkkkkkk.', 'ktttttttttk', 'kbbbbbbbbbk', '.kkkkkkkkk.', 'kttttkttttk', 'kbbbbkbbbbk', '.kkkk.kkkk.'],
  lock: ['..kkk..', '.k...k.', '.k...k.', 'kkkkkkk', 'kyyyyyk', 'kyykyyk', 'kyyyyyk', 'kkkkkkk'],
  sound: ['...k.....', '..kk..w..', 'kkwk...w.', 'kwwk.w.w.', 'kkwk...w.', '..kk..w..', '...k.....'],
  mute: ['...k.....', '..kk.....', 'kkwk.r.r.', 'kwwk..r..', 'kkwk.r.r.', '..kk.....', '...k.....'],
  star: ['...y...', '...y...', 'yyyyyyy', '.yyyyy.', '..yyy..', '.yy.yy.', '.y...y.'],
  flag: ['k.......', 'krrrrr..', 'krrrrrrr', 'krrrrr..', 'k.......', 'k.......', 'k.......'],
  phone: ['kkkkk', 'kwwwk', 'kwwwk', 'kwwwk', 'kwwwk', 'kwwwk', 'kkkkk'],
};
const ICONS = {};
for (const n in ICON_MAPS) {
  const m = ICON_MAPS[n], c = mk(m[0].length, m.length), g = c.getContext('2d');
  m.forEach((row, y) => [...row].forEach((ch, x) => { if (IPAL[ch]) { g.fillStyle = IPAL[ch]; g.fillRect(x, y, 1, 1); } }));
  ICONS[n] = c;
}
function icon(c, n, x, y, s = 1) { const i = ICONS[n]; c.drawImage(i, Math.round(x), Math.round(y), i.width * s, i.height * s); }
try {
  const f = mk(32, 32), g = f.getContext('2d'); g.imageSmoothingEnabled = false;
  g.fillStyle = '#5a0a0a'; g.fillRect(0, 0, 32, 32); g.drawImage(ICONS.skull, 3, 3, 27, 27);
  const l = document.createElement('link'); l.rel = 'icon'; l.href = f.toDataURL(); document.head.appendChild(l);
} catch (e) { }
const GUNS = {
  pistol: [[-1, -3, 9, 2, '#a9a9a9'], [-1, -1, 8, 2, '#2c2c2c'], [-1, 0, 3, 4, '#1e1e1e']],
  rifle: [[-8, -2, 6, 3, '#3a3328'], [-3, -3, 13, 3, '#2a2a2a'], [10, -2, 8, 1, '#1c1c1c'], [10, -1, 5, 1, '#333'], [3, 0, 2, 4, '#1c1c1c'], [0, -4, 5, 1, '#111'], [-1, 0, 2, 3, '#1c1c1c'], [-2, -3, 10, 1, '#444']],
  shotgun: [[-9, -2, 8, 3, '#6b4a2a'], [-1, -3, 6, 3, '#2a2a2a'], [5, -3, 13, 1, '#3c3c3c'], [5, -2, 11, 1, '#2b2b2b'], [8, -2, 5, 2, '#6b4a2a'], [-1, 0, 2, 3, '#6b4a2a']],
  knife: [[-2, -1, 3, 2, '#2d3a1a'], [1, -1, 7, 2, '#d8d8d8'], [8, -1, 1, 1, '#d8d8d8']],
  smg: [[-6, -2, 5, 3, '#2e2e2e'], [-1, -3, 10, 3, '#262626'], [9, -2, 5, 1, '#1a1a1a'], [2, 0, 2, 6, '#1c1c1c'], [-1, 0, 2, 3, '#1c1c1c'], [1, -4, 3, 1, '#111']],
  sniper: [[-10, -2, 8, 3, '#4a3a26'], [-2, -3, 12, 3, '#2a2a2a'], [10, -2, 14, 1, '#1c1c1c'], [0, -6, 9, 2, '#151515'], [1, -4, 2, 1, '#111'], [6, -4, 2, 1, '#111'], [-1, 0, 2, 3, '#4a3a26'], [3, 0, 2, 3, '#1c1c1c']],
};
const MUZZLE = { pistol: 8, smg: 14, rifle: 18, shotgun: 18, sniper: 24, knife: 9 };
function drawGun2D(c, type, x, y, sc = 1) { c.save(); c.translate(x, y); c.scale(sc, sc); for (const r of GUNS[type]) { c.fillStyle = r[4]; c.fillRect(r[0], r[1], r[2], r[3]); } c.restore(); }

// ================= AUDIO =================
const A = { ctx: null, on: true, noise: null, master: null, dest: null, musicBus: null, last: {} };
function audioInit() {
  if (A.ctx) { if (A.ctx.state === 'suspended') A.ctx.resume(); return; }
  try { const C = window.AudioContext || window.webkitAudioContext; if (!C) return; A.ctx = new C(); } catch (e) { return; }
  const c = A.ctx;
  A.master = c.createGain(); A.master.gain.value = A.on ? .6 : 0; A.master.connect(c.destination); A.dest = A.master;
  A.musicBus = c.createGain(); A.musicBus.gain.value = 0; A.musicBus.connect(A.master);
  const b = c.createBuffer(1, c.sampleRate, c.sampleRate), d = b.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  A.noise = b;
  const g = c.createGain(); g.gain.value = .05; const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 180;
  f.connect(g); g.connect(A.dest || A.master);
  [55, 55.7, 82.4].forEach(fr => { const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = fr; o.connect(f); o.start(); });
}
function env(g, t, a, peak, d) { g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + a); g.gain.exponentialRampToValueAtTime(.0001, t + a + d); }
function noiseHit(freq, type, peak, dur, delay = 0, q = 1) {
  const c = A.ctx, t = c.currentTime + delay, s = c.createBufferSource();
  s.buffer = A.noise; s.playbackRate.value = .7 + Math.random() * .6;
  const f = c.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
  const g = c.createGain(); env(g, t, .003, peak, dur);
  s.connect(f); f.connect(g); g.connect(A.dest || A.master); s.start(t, Math.random() * .5); s.stop(t + dur + .05);
}
function tone(type, f0, f1, peak, dur, delay = 0) {
  const c = A.ctx, t = c.currentTime + delay, o = c.createOscillator();
  o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(Math.max(1, f1), t + dur);
  const g = c.createGain(); env(g, t, .004, peak, dur); o.connect(g); g.connect(A.dest || A.master); o.start(t); o.stop(t + dur + .05);
}
const SFX = {
  pistol() { noiseHit(2600, 'lowpass', .5, .12); tone('sine', 160, 40, .6, .12); },
  rifle() { noiseHit(3200, 'lowpass', .45, .09); noiseHit(900, 'bandpass', .3, .18, 0, .7); tone('sine', 120, 35, .5, .1); },
  shotgun() { noiseHit(1500, 'lowpass', .8, .35); tone('sine', 90, 30, .9, .25); },
  knife() { noiseHit(4000, 'highpass', .15, .08); },
  tink() { tone('sine', 3200 + Math.random() * 1200, 2600, .06, .06, .25 + Math.random() * .2); },
  click() { tone('square', 1400, 900, .08, .03); tone('square', 900, 600, .08, .03, .08); },
  impact() { noiseHit(500, 'lowpass', .35, .1); },
  ric() { tone('sine', 2400, 900, .05, .12); },
  groan() {
    const c = A.ctx, t = c.currentTime, f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 450 + Math.random() * 300; f.Q.value = 4;
    const g = c.createGain(); env(g, t, .15, .12, .9); f.connect(g); g.connect(A.dest || A.master);
    const base = 70 + Math.random() * 40;
    [0, 7].forEach(dt => { const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(base + dt, t); o.frequency.linearRampToValueAtTime(base * .8 + dt, t + 1); o.connect(f); o.start(t); o.stop(t + 1.1); });
  },
  boom() { noiseHit(600, 'lowpass', 1, .9); tone('sine', 80, 25, 1, .7); },
  blip() { tone('square', 660, 880, .08, .06); },
  pickup() { tone('square', 520, 1040, .1, .08); tone('square', 780, 1560, .08, .08, .07); },
  hurt() { tone('sawtooth', 220, 110, .2, .15); },
  splat() { noiseHit(300, 'lowpass', .3, .15); },
  stomp() { tone('sine', 60, 30, .35, .12); },
  step() { noiseHit(220, 'lowpass', .3, .07); },
  shove() { noiseHit(700, 'lowpass', .45, .12); tone('sine', 140, 60, .4, .1); },
  alarm() { tone('square', 520, 380, .07, .14); },
};
// positional sound: pan by side, quieter with distance, muffled when behind the player
function spatial(x, z) { const p = player, dx_ = x - p.x, dz_ = z - p.z, d = Math.hypot(dx_, dz_), rel = Math.atan2(dz_, dx_) - p.heading; return { pan: clamp(Math.sin(rel), -1, 1) * .9, gain: 1 / (1 + d * .18), behind: Math.cos(rel) < -.2, d }; }
function sfxAt(name, x, z, ms = 30) {
  if (!A.ctx || !A.on || !fpsView()) return sfx(name, ms);
  const sp = spatial(x, z); if (sp.gain < .03) return;
  const t = performance.now(); if (A.last[name] && t - A.last[name] < ms) return; A.last[name] = t;
  const c = A.ctx, g = c.createGain(), f = c.createBiquadFilter(), pn = c.createStereoPanner ? c.createStereoPanner() : null;
  g.gain.value = sp.gain; f.type = 'lowpass'; f.frequency.value = sp.behind ? 900 : 16000; g.connect(f);
  if (pn) { pn.pan.value = sp.pan; f.connect(pn); pn.connect(A.master); } else f.connect(A.master);
  A.dest = g; try { SFX[name](); } catch (e) { } A.dest = A.master;
  setTimeout(() => { try { g.disconnect(); } catch (e) { } }, 2500);
}
// procedural music: kick, snare, hats and a bass riff, faster and denser as the fight heats up
const MUSIC = { next: 0, step: 0 }, RIFF = [55, 55, 65.4, 49];
const musicBpm = inten => 84 + inten * 56;
function musicIntensity() { return clamp(zombies.length / 18 + (wave.n - 1) * .06 + (wave.spec && wave.spec.horde ? .3 : 0), 0, 1); }
function updMusic() {
  if (!A.ctx || !A.musicBus) return;
  const on = settings.music && settings.sound && state === 'play', c = A.ctx, now = c.currentTime;
  A.musicBus.gain.setTargetAtTime(on ? .45 : 0, now, .4);
  if (!on) { MUSIC.next = 0; return; }
  const inten = musicIntensity(), eighth = 30 / musicBpm(inten);
  if (MUSIC.next < now) MUSIC.next = now + .05;
  A.dest = A.musicBus;
  while (MUSIC.next < now + .12) {
    const d = MUSIC.next - now, st = MUSIC.step % 8, root = RIFF[(MUSIC.step >> 3) % 4];
    if (st === 0 || st === 4 || (inten > .7 && st === 6)) tone('sine', 110, 40, .7, .18, d);
    if (inten > .35 && (st === 2 || st === 6)) noiseHit(1800, 'bandpass', .22, .1, d, .8);
    if (inten > .15) noiseHit(7000, 'highpass', .06, .03, d);
    if (st % 2 === 0) tone('triangle', root * (st === 4 ? 2 : 1), root, .22, eighth * 1.6, d);
    MUSIC.next += eighth; MUSIC.step++;
  }
  A.dest = A.master;
}
function sfx(name, ms = 30) {
  if (!A.ctx || !A.on) return;
  const t = performance.now(); if (A.last[name] && t - A.last[name] < ms) return; A.last[name] = t;
  try { SFX[name](); } catch (e) { }
}

// ================= INPUT =================
const input = { keys: {}, mx: W * .75, my: 150, mouseDown: false, firePressed: false, touch: false, joy: null, look: null, ads: false, fireTouch: 0, holds: {} };
let UI = [];
function toLocal(e) { const r = uiCv.getBoundingClientRect(); return [(e.clientX - r.left) / r.width * W, (e.clientY - r.top) / r.height * H]; }
uiCv.addEventListener('pointerdown', e => {
  if (e.pointerType !== 'mouse') e.preventDefault(); // on mouse it would suppress mousedown/mouseup
  audioInit();
  const [x, y] = toLocal(e), touch = e.pointerType !== 'mouse';
  if (touch) input.touch = true;
  try { uiCv.setPointerCapture(e.pointerId); } catch (_) { }
  if (!touch || state !== 'play') { input.mx = x; input.my = y; }
  for (let i = UI.length - 1; i >= 0; i--) {
    const b = UI[i];
    if (x >= b.x && x < b.x + b.w && y >= b.y && y < b.y + b.h) {
      input.uiHit = true;
      if (b.disabled) return;
      if (b.hold) { input.holds[e.pointerId] = b.hold; if (b.hold === 'fire') input.fireTouch++; if (b.hold === 'ads') input.ads = true; }
      else { b.fn(); sfx('blip', 40); }
      return;
    }
  }
  if (state === 'title') { state = 'levels'; return; }
  if (state === 'place') { const gp = groundAt(x, y); if (gp) placeDefense(gp.x); return; }
  if (state !== 'play') return;
  if (touch) {
    if (x < W * .42 && y > 110) input.joy = { id: e.pointerId, cx: x, cy: y, x, y };
    else input.look = { id: e.pointerId, x, y };
  }
});
uiCv.addEventListener('pointermove', e => {
  const [x, y] = toLocal(e);
  if (input.joy && input.joy.id === e.pointerId) { input.joy.x = x; input.joy.y = y; return; }
  if (input.look && input.look.id === e.pointerId) { look((x - input.look.x) * 2.4, (y - input.look.y) * 2.4); input.look.x = x; input.look.y = y; return; }
  const mvx = e.movementX || 0, mvy = e.movementY || 0; // Chrome can report bogus jumps of hundreds of px around pointer lock: drop them
  if (state === 'play' && e.pointerType === 'mouse' && (document.pointerLockElement === uiCv || e.buttons) && Math.abs(mvx) < 150 && Math.abs(mvy) < 150) look(mvx, mvy);
  if (e.pointerType === 'mouse' || state !== 'play') { input.mx = x; input.my = y; }
});
function pointerEnd(e) {
  if (input.joy && input.joy.id === e.pointerId) input.joy = null;
  if (input.look && input.look.id === e.pointerId) input.look = null;
  if (input.holds[e.pointerId] === 'fire') input.fireTouch = Math.max(0, input.fireTouch - 1);
  if (input.holds[e.pointerId] === 'ads') input.ads = false;
  delete input.holds[e.pointerId];
  if (e.pointerType === 'mouse') { input.mouseDown = false; input.ads = false; }
}
// mouse buttons: mousedown/mouseup fire for every button even when chorded, pointer events do not
uiCv.addEventListener('mousedown', e => {
  if (input.uiHit) { input.uiHit = false; return; }
  if (state !== 'play') return;
  if (e.button === 0) { input.mouseDown = true; input.firePressed = true; } else if (e.button === 2) input.ads = true;
  lockPointer();
});
uiCv.addEventListener('mouseup', e => { if (e.button === 0) input.mouseDown = false; else if (e.button === 2) input.ads = false; });
uiCv.addEventListener('pointerup', pointerEnd);
uiCv.addEventListener('pointercancel', pointerEnd);
uiCv.addEventListener('contextmenu', e => e.preventDefault());
addEventListener('keydown', e => {
  audioInit();
  if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
  if (e.repeat) return;
  input.keys[e.code] = true;
  if ((e.code === 'Escape' && performance.now() - lockLost > 300) || e.code === 'KeyP') togglePause();
  if ((e.code === 'Enter' || e.code === 'Space') && state === 'title') state = 'levels';
  if (state !== 'play') return;
  if (e.code === 'KeyR') startReload();
  if (e.code === 'KeyQ') cycleWeapon(-1);
  if (e.code === 'KeyE') cycleWeapon(1);
  if (e.code === 'KeyG') throwNade();
  if (e.code === 'KeyF') melee();
  if (e.code === 'Space') { input.mouseDown = true; input.firePressed = true; }
  const n = '123456'.indexOf(e.key); if (n >= 0) selectWeapon(WEAP_ORDER[n]);
});
addEventListener('keyup', e => { input.keys[e.code] = false; if (e.code === 'Space') input.mouseDown = false; });
addEventListener('blur', () => { input.keys = {}; input.mouseDown = false; input.ads = false; });
let lockLost = 0;
function look(dx, dy) { if (state !== 'play' || !player.alive) return; const k = SENS * settings.sens * lerp(1, .5, player.adsT); player.heading += dx * k; player.pitch = clamp(player.pitch - dy * k, -1.35, 1.35); }
function lockPointer() { if (input.touch || document.pointerLockElement === uiCv || !uiCv.requestPointerLock) return; try { const r = uiCv.requestPointerLock(); if (r && r.catch) r.catch(() => { }); } catch (e) { } }
// the browser drops pointer lock on Esc: treat it as pause
document.addEventListener('pointerlockchange', () => { if (!document.pointerLockElement) { lockLost = performance.now(); if (state === 'play') state = 'pause'; } });
document.addEventListener('visibilitychange', () => { if (document.hidden && state === 'play') togglePause(); });

// ================= THREE SETUP =================
const renderer = new THREE.WebGLRenderer({ canvas: gl, antialias: true, powerPreference: 'high-performance' });
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = .6;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(FOV, W / H, .05, 160);
const hemi = new THREE.HemisphereLight(0xffffff, 0x443322, .35); scene.add(hemi);
const sun = new THREE.DirectionalLight(0xffffff, 3);
sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); sun.shadow.bias = -.0004; sun.shadow.normalBias = .03;
Object.assign(sun.shadow.camera, { left: -16, right: 16, top: 14, bottom: -14, near: 1, far: 70 }); sun.shadow.camera.updateProjectionMatrix();
scene.add(sun, sun.target);
const SUN_DIR = new THREE.Vector3(-.4, .8, .45).normalize();
const muzzleLight = new THREE.PointLight(0xffc070, 0, 10, 2); scene.add(muzzleLight);
const boomLight = new THREE.PointLight(0xff8a30, 0, 18, 2); scene.add(boomLight);
const lampLights = [0, 1, 2].map(() => { const l = new THREE.PointLight(0xffffff, 0, 14, 2); scene.add(l); return l; });
// physical sky; its light is baked into an environment map so every surface gets sky reflections and ambient
const sky = new Sky(); sky.scale.setScalar(140); scene.add(sky);
const envScene = new THREE.Scene(), envSky = new Sky(); envSky.scale.setScalar(100); envScene.add(envSky);
const pmrem = new THREE.PMREMGenerator(renderer); let envRT = null;
const starGeo = new THREE.BufferGeometry(), starPos = new Float32Array(1500);
for (let i = 0; i < 500; i++) { const a = rnd(0, 6.283), e = Math.asin(rnd(.08, 1)); starPos.set([Math.cos(a) * Math.cos(e) * 120, Math.sin(e) * 120, Math.sin(a) * Math.cos(e) * 120], i * 3); }
starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xdfe6ff, size: 1.5, sizeAttenuation: false, fog: false })); stars.visible = false; scene.add(stars);
// post: ambient occlusion, bloom on lights and flashes, filmic tone, then grain/vignette/grade
const GRADE = {
  uniforms: { tDiffuse: { value: null }, time: { value: 0 }, vig: { value: .38 }, grain: { value: .035 }, tint: { value: new THREE.Vector3(1, 1, 1) }, ca: { value: .006 }, blur: { value: 0 }, split: { value: .55 }, bars: { value: 0 } },
  vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `uniform sampler2D tDiffuse; uniform float time, vig, grain, ca, blur, split, bars; uniform vec3 tint; varying vec2 vUv;
    float rnd(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233)) + time) * 43758.5453); }
    void main() {
      vec2 d = vUv - .5; float r2 = dot(d, d); vec2 off = d * ca * r2 * 4.0;
      vec3 c = vec3(texture2D(tDiffuse, vUv - off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv + off).b);
      if (blur > .0005) { for (int i = 1; i < 6; i++) c += texture2D(tDiffuse, vUv - d * blur * float(i)).rgb; c /= 6.0; }
      c *= tint;
      float l = dot(c, vec3(.299, .587, .114));
      c = mix(c, c * mix(vec3(.86, 1.0, 1.08), vec3(1.1, 1.0, .85), smoothstep(.1, .75, l)), split);
      c = mix(vec3(l), c, 1.1);
      c *= 1.0 - vig * r2 * 2.2;
      c += (rnd(vUv * 731.0) - .5) * grain;
      float bar = .11 * bars; if (vUv.y < bar || vUv.y > 1.0 - bar) c = vec3(0.0);
      gl_FragColor = vec4(c, 1.0);
    }`,
};
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const gtao = new GTAOPass(scene, camera, 640, 360); composer.addPass(gtao);
const bokeh = new BokehPass(scene, camera, { focus: 8, aperture: .0018, maxblur: .008 }); bokeh.enabled = false; composer.addPass(bokeh);
const bloom = new UnrealBloomPass(new THREE.Vector2(640, 360), .55, .5, .88); composer.addPass(bloom);
composer.addPass(new OutputPass());
const grade = new ShaderPass(GRADE); composer.addPass(grade);

// geometry is instanced: one draw call per shape+material, rebuilt each frame
const RBOX = new RoundedBoxGeometry(1, 1, 1, 2, .14), BOXG = new THREE.BoxGeometry(1, 1, 1), CAPS = new THREE.CapsuleGeometry(.5, 1, 4, 10);
const SPH = new THREE.SphereGeometry(.5, 14, 10), CYL = new THREE.CylinderGeometry(.5, .5, 1, 16), PLANE = new THREE.PlaneGeometry(1, 1);
function inst(geo, mat, n, shadow, bill = false) {
  const m = new THREE.InstancedMesh(geo, mat, n);
  m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  m.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(n * 3), 3); m.instanceColor.setUsage(THREE.DynamicDrawUsage);
  m.castShadow = m.receiveShadow = shadow; m.frustumCulled = false; m.count = 0;
  Object.assign(m.userData, { max: n, bill, half: geo === CAPS }); scene.add(m); return m;
}
const std = (r, mt = 0) => new THREE.MeshStandardMaterial({ roughness: r, metalness: mt });
const SOFT = (() => { // soft round sprite for fire, sparks and smoke
  const c = mk(64, 64), g = c.getContext('2d'), gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(.4, 'rgba(255,255,255,.55)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
})();
const solid = inst(RBOX, std(.8), 6000, true);
const limbs = inst(CAPS, std(.75), 2600, true);
const balls = inst(SPH, std(.55), 3200, true);
const metal = inst(RBOX, std(.45, .6), 900, true); metal.material.envMapIntensity = .45; // dark gunmetal, not chrome
const cyls = inst(CYL, std(.6, .2), 300, true);
const glow = inst(PLANE, new THREE.MeshBasicMaterial({ map: SOFT, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, fog: false }), 2600, false, true);
const beam = inst(BOXG, new THREE.MeshBasicMaterial({ blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, fog: false }), 400, false);
const smoke = inst(PLANE, new THREE.MeshLambertMaterial({ map: SOFT, transparent: true, opacity: .5, depthWrite: false }), 1500, false, true);
const statics = inst(RBOX, std(.85), 1800, true);
const staticMetal = inst(RBOX, std(.38, .55), 500, true);
const staticCyl = inst(CYL, std(.6, .3), 400, true);
const staticGlow = inst(BOXG, new THREE.MeshBasicMaterial(), 600, false);
const DYN = [solid, limbs, balls, metal, cyls, glow, beam, smoke], STATIC = [statics, staticMetal, staticCyl, staticGlow];
// AO must not see particles, sky or decals: hide them while it renders its own depth/normal pass
const gtaoRender = gtao.render.bind(gtao), AO_HIDE = () => [glow, beam, smoke, sky, stars, decalMesh];
const hideWhile = (pass, fn) => (...a) => { const h = AO_HIDE(), v = h.map(o => o.visible); h.forEach(o => { o.visible = false; }); fn(...a); h.forEach((o, i) => { o.visible = v[i]; }); };
gtao.render = hideWhile(gtao, gtaoRender); bokeh.render = hideWhile(bokeh, bokeh.render.bind(bokeh)); // depth passes must not see particles or sky
// lens flare from the sun: warm glow plus teal ghosts across the frame
const flareTex = (() => {
  const c = mk(64, 64), g = c.getContext('2d'); g.strokeStyle = 'rgba(255,255,255,.45)'; g.lineWidth = 2;
  g.beginPath(); for (let i = 0; i < 7; i++) { const a = i / 6 * 6.283; g.lineTo(32 + Math.cos(a) * 26, 32 + Math.sin(a) * 26); } g.stroke();
  g.fillStyle = 'rgba(255,255,255,.12)'; g.fill(); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
})();
const flare = new Lensflare();
flare.addElement(new LensflareElement(SOFT, 280, 0, new THREE.Color(.8, .62, .45)));
for (const [sz, dist, col] of [[40, .45, [.35, 1, .7]], [70, .62, [.3, .9, .8]], [28, .78, [.9, .7, .4]], [90, .95, [.25, .8, .7]]]) flare.addElement(new LensflareElement(flareTex, sz, dist, new THREE.Color(...col).multiplyScalar(.35)));
scene.add(flare);
const IDQ = new THREE.Quaternion(), QX90 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2);
const _m4 = new THREE.Matrix4(), _v = new THREE.Vector3(), _sv = new THREE.Vector3(), _q = new THREE.Quaternion(), _hq = new THREE.Quaternion();
function box(mesh, x, y, z, sx, sy, sz, c, q = IDQ, k = 1) {
  const i = mesh.count, u = mesh.userData; if (i >= u.max) return;
  _v.set(x, y, z); _sv.set(sx, u.half ? sy / 2 : sy, sz); _m4.compose(_v, u.bill ? camera.quaternion : q, _sv); mesh.setMatrixAt(i, _m4);
  mesh.instanceColor.setXYZ(i, c.r * k, c.g * k, c.b * k); mesh.count = i + 1;
}
const _up = new THREE.Vector3(), _sd = new THREE.Vector3(), _fw = new THREE.Vector3(), _bm = new THREE.Matrix4();
// rotation whose local Y follows (ux,uy,uz) and local X follows the given side hint; sets _q, returns the length
function orient(ux, uy, uz, sx, sy, sz) {
  _up.set(ux, uy, uz); const len = _up.length() || 1e-5; _up.multiplyScalar(1 / len);
  _sd.set(sx, sy, sz); _sd.addScaledVector(_up, -_sd.dot(_up));
  if (_sd.lengthSq() < 1e-8) { _sd.set(_up.y, -_up.x, 0); if (_sd.lengthSq() < 1e-8) _sd.set(1, 0, 0); _sd.addScaledVector(_up, -_sd.dot(_up)); }
  _sd.normalize(); _fw.crossVectors(_sd, _up); _bm.makeBasis(_sd, _up, _fw); _q.setFromRotationMatrix(_bm); return len;
}
function seg(mesh, P, a, b, w, d, c, side, ext = 0, k = 1) {
  const ax = P[a * 3], ay = P[a * 3 + 1], az = P[a * 3 + 2], bx = P[b * 3], by = P[b * 3 + 1], bz = P[b * 3 + 2];
  const len = orient(bx - ax, by - ay, bz - az, side.x, side.y, side.z);
  box(mesh, (ax + bx) / 2, (ay + by) / 2, (az + bz) / 2, w, len + ext, d, c, _q, k);
}
function line3(mesh, x0, y0, z0, x1, y1, z1, th, c, k = 1) {
  const len = orient(x1 - x0, y1 - y0, z1 - z0, 0, 0, 1);
  box(mesh, (x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2, th, len, th, c, _q, k);
}
const ray = new THREE.Raycaster(), _ndc = new THREE.Vector2();
function screenRay(sx, sy) { _ndc.set(sx / W * 2 - 1, -(sy / H * 2 - 1)); ray.setFromCamera(_ndc, camera); return ray.ray; }
function groundAt(sx, sy) {
  const r = screenRay(sx, sy); if (r.direction.y > -1e-4) return null;
  const t = -r.origin.y / r.direction.y; return { x: r.origin.x + r.direction.x * t, z: r.origin.z + r.direction.z * t };
}
const _pv = new THREE.Vector3();
function toScreen(x, y, z) { // z out > 1 when the point is behind the camera
  const front = _pv.set(x, y, z).applyMatrix4(camera.matrixWorldInverse).z < -.05;
  _pv.set(x, y, z).project(camera); return [(_pv.x + 1) / 2 * W, (1 - _pv.y) / 2 * H, front ? _pv.z : 2];
}

// ================= ENVIRONMENT =================
const decalCv = mk(DW, DH), dctx = decalCv.getContext('2d');
const decalTex = new THREE.CanvasTexture(decalCv);
decalTex.generateMipmaps = false; decalTex.minFilter = THREE.LinearFilter; decalTex.colorSpace = THREE.SRGBColorSpace;
// blood and casings painted onto a wet, glossy layer over the road
const decalMesh = new THREE.Mesh(new THREE.PlaneGeometry(ROAD_LEN, ROAD_D), new THREE.MeshStandardMaterial({ map: decalTex, roughness: .3, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }));
decalMesh.rotation.x = -Math.PI / 2; decalMesh.position.set(ROAD_X0 + ROAD_LEN / 2, .004, ROAD_Z0 + ROAD_D / 2); decalMesh.receiveShadow = true; decalMesh.renderOrder = 1;
scene.add(decalMesh);
let decalDirty = false, frameNo = 0;
const DPX = DW / ROAD_LEN, DPZ = DH / ROAD_D;
function paint(x, z, w, h, col) { dctx.fillStyle = col; dctx.fillRect((x - ROAD_X0) * DPX | 0, (z - ROAD_Z0) * DPZ | 0, w, h); decalDirty = true; }
function stampPool(x, z, r) {
  for (let i = 0; i < r * r * 900 + 20; i++) { const a = rnd(0, 6.283), rr = Math.sqrt(Math.random()) * r; paint(x + Math.cos(a) * rr, z + Math.sin(a) * rr, rnd(1, 3) | 0, 1, pick(BLOOD_CSS)); }
}
function fadeDecals() { dctx.globalCompositeOperation = 'destination-out'; dctx.fillStyle = 'rgba(0,0,0,.55)'; dctx.fillRect(0, 0, DW, DH); dctx.globalCompositeOperation = 'source-over'; decalDirty = true; }

const envGroup = new THREE.Group(); scene.add(envGroup);
let obstacles = [];
const CAR_C = ['#6a3020', '#3e4c5a', '#7a6a40', '#3a4a3a', '#5a2a2a', '#8a8a86'].map(h => new THREE.Color(h));
function genObstacles(Lv) { // wrecks, barriers and crates; keeps the spawn spot and the objective area clear
  obstacles = [];
  const add = (x, z, w, d, h, kind) => obstacles.push({ x0: x - w / 2, x1: x + w / 2, z0: z - d / 2, z1: z + d / 2, h, kind, x, z, w, d });
  for (let x = 3 + rnd(3.5, 6); x < WORLD_L - 2; x += rnd(3.5, 6)) {
    if (Math.abs(x - 12) < 3.5 || Math.abs(x - 22) < 4) continue;
    const r = Math.random();
    if (r < .45) add(x, pick([-2.35, 1.95]), 3.4, 1.6, 1.25, 'car');
    else if (r < .75) add(x, rnd(-2.2, 1.8), 1.7, .62, .85, 'jersey');
    else add(x, rnd(-2.3, 1.9), 1, 1, 1, 'crate');
  }
  if (Lv.obj === 'protect') add(22, -1.75, 4.4, 1.9, 2.1, 'truck');
  const tire = hex3('#161616'), rim = hex3('#8a8a8a'), glass = hex3('#1c242c'), bump = hex3('#9a968c'), conc = hex3('#8e8c86'), wood = hex3('#7a5a36'), woodD = hex3('#4a3220'), rust = hex3('#5a3a22');
  for (const b of obstacles) {
    if (b.kind === 'car') {
      const col = pick(CAR_C);
      box(staticMetal, b.x, .58, b.z, b.w, .52, b.d, col); box(staticMetal, b.x - .25, 1.08, b.z, b.w * .52, .5, b.d * .9, col);
      box(staticMetal, b.x - .25, 1.08, b.z, b.w * .5, .36, b.d * .92, glass); box(staticMetal, b.x - .25 + b.w * .27, 1.06, b.z, .05, .4, b.d * .86, glass);
      box(staticMetal, b.x + b.w / 2, .5, b.z, .1, .18, b.d * .96, bump); box(staticMetal, b.x - b.w / 2, .5, b.z, .1, .18, b.d * .96, bump);
      box(statics, b.x + rnd(-.8, .8), .86, b.z + rnd(-.3, .3), rnd(.3, .8), .02, rnd(.2, .5), rust);
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) { box(staticCyl, b.x + sx * b.w * .31, .3, b.z + sz * b.d * .47, .6, .24, .6, tire, QX90); box(staticCyl, b.x + sx * b.w * .31, .3, b.z + sz * b.d * .5, .34, .2, .34, rim, QX90); }
    } else if (b.kind === 'jersey') { box(statics, b.x, .17, b.z, b.w, .34, b.d, conc); box(statics, b.x, .58, b.z, b.w, .56, b.d * .48, conc); }
    else if (b.kind === 'crate') { box(statics, b.x, .5, b.z, 1, 1, 1, wood); box(statics, b.x, .5, b.z, 1.03, .1, 1.03, woodD); box(statics, b.x, .5, b.z, .1, 1.03, 1.03, woodD); }
  }
}
function inBox(x, z, r) { for (const b of obstacles) if (x > b.x0 - r && x < b.x1 + r && z > b.z0 - r && z < b.z1 + r) return b; return null; }
function pushOut(o, r) { // push a circle (o.x, o.z, r) out of every box
  for (const b of obstacles) {
    const dx_ = o.x - clamp(o.x, b.x0, b.x1), dz_ = o.z - clamp(o.z, b.z0, b.z1), d2 = dx_ * dx_ + dz_ * dz_;
    if (d2 >= r * r) continue;
    if (d2 > 1e-8) { const d = Math.sqrt(d2), f = (r - d) / d; o.x += dx_ * f; o.z += dz_ * f; continue; }
    const l = o.x - b.x0, rt = b.x1 - o.x, t = o.z - b.z0, bt = b.z1 - o.z, m = Math.min(l, rt, t, bt);
    if (m === l) o.x = b.x0 - r; else if (m === rt) o.x = b.x1 + r; else if (m === t) o.z = b.z0 - r; else o.z = b.z1 + r;
  }
}
function rayBoxes(ox, oy, oz, dx_, dy_, dz_) { // distance to the nearest box along a ray (slab test), 1e9 if none
  let best = 1e9;
  for (const b of obstacles) {
    let t0 = 0, t1 = 1e9;
    for (const [o, d, lo, hi] of [[ox, dx_, b.x0, b.x1], [oy, dy_, 0, b.h], [oz, dz_, b.z0, b.z1]]) {
      if (Math.abs(d) < 1e-9) { if (o < lo || o > hi) { t0 = 1e9; break; } continue; }
      let a = (lo - o) / d, c = (hi - o) / d; if (a > c) [a, c] = [c, a];
      t0 = Math.max(t0, a); t1 = Math.min(t1, c); if (t0 > t1) { t0 = 1e9; break; }
    }
    if (t0 < best) best = t0;
  }
  return best;
}
let LAMPS = [];
const ENV = { road: null, walls: [] };
function pbr(set, rx, ry, mat, withMap = true, normalScale = 1) { // put a downloaded texture set on a material (shared image, own tiling)
  const t = ASSETS.tex && ASSETS.tex[set]; if (!t) return false;
  const tile = k => { const c = t[k].clone(); c.repeat.set(rx, ry); c.needsUpdate = true; return c; };
  if (withMap) mat.map = tile('diff'); mat.normalMap = tile('nor'); mat.normalScale.setScalar(normalScale); mat.roughnessMap = tile('rough'); mat.roughness = 1; mat.needsUpdate = true;
  return true;
}
function applySurfaces(Lv) { // real asphalt, concrete, rusted paint and metal once the textures are in
  if (ENV.road && pbr('asphalt', ROAD_LEN / 3.5, ROAD_D / 3.5, ENV.road.material)) ENV.road.material.color.copy(C3(lerpC([255, 255, 255], Lv.pal.road, .25)));
  for (const w of ENV.walls) pbr('concrete', ROAD_LEN / 2.4, 1, w.material, false, .8);
  pbr('carmetal', 1, 1, staticMetal.material); pbr('barrel', 1, 1, staticCyl.material, false); pbr('concrete', 1, 1, statics.material, false, .6);
}
function stripTex(paint, w, h, rx) { const c = mk(w, h), g = c.getContext('2d'); paint(g, w, h); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = THREE.RepeatWrapping; t.repeat.set(rx, 1); t.anisotropy = 8; return t; }
// procedural surfaces: albedo drawn with layered blotches, normal map derived from its brightness
function surface(w, h, paintFn, rx, ry, bump = 2) {
  const c = mk(w, h), g = c.getContext('2d'); paintFn(g, w, h);
  const src = g.getImageData(0, 0, w, h).data, n = mk(w, h), ng = n.getContext('2d'), out = ng.createImageData(w, h), od = out.data;
  const lum = (x, y) => { const i = (((y + h) % h) * w + ((x + w) % w)) * 4; return (src[i] + src[i + 1] + src[i + 2]) / 765; };
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const dx_ = (lum(x + 1, y) - lum(x - 1, y)) * bump, dy_ = (lum(x, y + 1) - lum(x, y - 1)) * bump, l = Math.hypot(dx_, dy_, 1), i = (y * w + x) * 4;
    od[i] = (-dx_ / l * .5 + .5) * 255; od[i + 1] = (dy_ / l * .5 + .5) * 255; od[i + 2] = (1 / l * .5 + .5) * 255; od[i + 3] = 255;
  }
  ng.putImageData(out, 0, 0);
  const tex = (cv, srgb) => { const t = new THREE.CanvasTexture(cv); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rx, ry); t.anisotropy = 8; if (srgb) t.colorSpace = THREE.SRGBColorSpace; return t; };
  return { map: tex(c, true), normalMap: tex(n, false) };
}
function blotches(g, w, h, rgb, n, sizeMin, sizeMax, alpha) {
  for (let i = 0; i < n; i++) {
    const r = rnd(sizeMin, sizeMax), k = rnd(-1, 1);
    g.fillStyle = k > 0 ? `rgba(255,255,255,${alpha * k})` : `rgba(0,0,0,${-alpha * k})`;
    g.beginPath(); g.ellipse(rnd(0, w), rnd(0, h), r, r * rnd(.4, 1), rnd(0, 3), 0, 6.283); g.fill();
  }
  g.fillStyle = css(rgb); g.globalCompositeOperation = 'destination-over'; g.fillRect(0, 0, w, h); g.globalCompositeOperation = 'source-over';
}
const SKY = [ // per level: sun elevation and heading (deg), haze, exposure, fog density, colour grade
  { el: 34, az: 200, turb: 7, ray: 1.6, exp: .55, hdrExp: .65, fog: .009, tint: [1, 1, 1] },
  { el: 3, az: 255, turb: 9, ray: 3, exp: .62, hdrExp: .6, fog: .013, tint: [1.06, .98, .9] },
  { el: -7, az: 220, turb: 2, ray: .6, exp: .9, hdrExp: 1.4, fog: .03, tint: [.9, .96, 1.1] },
  { el: 7, az: 160, turb: 18, ray: 4, exp: .55, hdrExp: .6, fog: .028, tint: [1.12, .9, .86] },
  { el: 20, az: 210, turb: 20, ray: 2.2, exp: .55, hdrExp: .6, fog: .018, tint: [.96, 1.05, .88] },
];
function equirectDir(u, v, out) { // inverse of three's equirectUv(): texture coordinate -> world direction
  const lon = (u - .5) * 2 * Math.PI, lat = (v - .5) * Math.PI;
  return out.set(Math.cos(lat) * Math.cos(lon), Math.sin(lat), Math.cos(lat) * Math.sin(lon));
}
function hdrSun(tex) { // brightest texel of the photo = the sun; null for skies without a clear sun
  const { data, width: w, height: h } = tex.image, half = tex.type === THREE.HalfFloatType, rd = i => half ? THREE.DataUtils.fromHalfFloat(data[i]) : data[i];
  let best = 0, bi = -1;
  for (let y = 0; y < h; y += 2) for (let x = 0; x < w; x += 2) { const i = (y * w + x) * 4, l = rd(i) + rd(i + 1) + rd(i + 2); if (l > best) { best = l; bi = y * w + x; } }
  if (best < 30) return null;
  const x = bi % w, y = bi / w | 0;
  return equirectDir((x + .5) / w, tex.flipY ? 1 - (y + .5) / h : (y + .5) / h, new THREE.Vector3());
}
function applySky(Lv) { // photographed sky when loaded (background + lighting), physical sky shader otherwise
  const p = Lv.pal, dk = Lv.dark, i = LEVELS.indexOf(Lv), sk = SKY[i] || SKY[0], hdr = ASSETS.hdr[HDR_FOR[i]];
  SUN_DIR.setFromSphericalCoords(1, THREE.MathUtils.degToRad(90 - sk.el), THREE.MathUtils.degToRad(sk.az));
  if (envRT) envRT.dispose();
  if (hdr) { scene.background = hdr; sky.visible = false; stars.visible = false; envRT = pmrem.fromEquirectangular(hdr); renderer.toneMappingExposure = sk.hdrExp; if (hdr.userData.sun && sk.el >= 0) SUN_DIR.copy(hdr.userData.sun); }
  else {
    for (const s of [sky, envSky]) { const u = s.material.uniforms; u.turbidity.value = sk.turb; u.rayleigh.value = sk.ray; u.mieCoefficient.value = .005; u.mieDirectionalG.value = .8; u.sunPosition.value.copy(SUN_DIR); }
    scene.background = null; sky.visible = true; stars.visible = sk.el < 0; envRT = pmrem.fromScene(envScene, 0, .1, 200); renderer.toneMappingExposure = sk.exp;
  }
  scene.environment = envRT.texture; grade.uniforms.tint.value.set(...sk.tint);
  const night = sk.el < 0;
  if (night) SUN_DIR.set(.35, .75, .55).normalize(); // moonlight
  scene.fog = new THREE.FogExp2(C3(night ? [14, 18, 30] : lerpC(p.fog, [120, 124, 130], .4)), sk.fog);
  hemi.color.copy(C3(p.skyT)); hemi.groundColor.copy(C3(p.road, .5)); hemi.intensity = night ? .25 : .35;
  sun.color.copy(night ? C3([150, 170, 220]) : sk.el < 10 ? C3([255, 170, 110]) : C3([255, 246, 232])); sun.intensity = night ? .45 : sk.el < 10 ? 2.4 : 3.2;
  for (const l of lampLights) { l.color.copy(C3(p.light)); l.intensity = dk > 0 ? 25 + dk * 70 : 0; }
  flare.visible = !night && SUN_DIR.y > .02;
}
function buildLevel(Lv) {
  for (const o of [...envGroup.children]) { envGroup.remove(o); o.geometry.dispose(); for (const k of ['map', 'normalMap']) if (o.material[k]) o.material[k].dispose(); o.material.dispose(); }
  const p = Lv.pal, dk = Lv.dark;
  applySky(Lv);
  const add = (geo, mats, x, y, z, rx = 0, rough = .9) => { const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ ...mats, roughness: rough })); m.position.set(x, y, z); m.rotation.x = rx; m.receiveShadow = true; envGroup.add(m); return m; };
  // asphalt: aggregate noise, tyre wear, cracks, oil stains, faded paint
  const asphalt = lerpC(p.road, [70, 70, 72], .55);
  add(new THREE.PlaneGeometry(ROAD_LEN, ROAD_D), surface(1024, 640, (g, w, h) => {
    blotches(g, w, h, asphalt, 900, 2, 40, .07);
    for (let i = 0; i < 9000; i++) { g.fillStyle = `rgba(${Math.random() < .5 ? '255,255,255' : '0,0,0'},${rnd(.05, .2)})`; g.fillRect(rnd(0, w), rnd(0, h), 1.5, 1.5); }
    for (const zz of [.25, 1.95]) { const y = (zz - ROAD_Z0) / ROAD_D * h; g.fillStyle = 'rgba(0,0,0,.12)'; g.fillRect(0, y - 14, w, 28); }
    g.strokeStyle = 'rgba(15,12,10,.6)'; g.lineWidth = 1.5;
    for (let i = 0; i < 26; i++) { let x = rnd(0, w), y = rnd(0, h); g.beginPath(); g.moveTo(x, y); for (let j = 0; j < 8; j++) { x += rnd(-22, 22); y += rnd(-22, 22); g.lineTo(x, y); } g.stroke(); }
    for (let i = 0; i < 8; i++) { g.fillStyle = `rgba(10,8,8,${rnd(.15, .35)})`; g.beginPath(); g.ellipse(rnd(0, w), rnd(0, h), rnd(10, 40), rnd(6, 20), rnd(0, 3), 0, 6.283); g.fill(); }
  }, ROAD_LEN / 12, 1, 3), ROAD_X0 + ROAD_LEN / 2, 0, ROAD_Z0 + ROAD_D / 2, -Math.PI / 2, .92);
  ENV.road = envGroup.children[envGroup.children.length - 1];
  const lane = new THREE.Mesh(new THREE.PlaneGeometry(ROAD_LEN, .13), new THREE.MeshStandardMaterial({ map: stripTex((g, w, h) => { for (let x = 0; x < w; x += 256) { g.fillStyle = 'rgba(225,215,185,.75)'; g.fillRect(x, 0, 128, h); for (let i = 0; i < 40; i++) g.clearRect(x + rnd(0, 128), rnd(0, h), rnd(1, 4), rnd(1, 3)); } }, 512, 8, ROAD_LEN / 6), transparent: true, roughness: .6, depthWrite: false }));
  lane.rotation.x = -Math.PI / 2; lane.position.set(ROAD_X0 + ROAD_LEN / 2, .003, -.35); lane.receiveShadow = true; envGroup.add(lane);
  // concrete wall panels: stains, drips, seam, worn hazard stripe
  const wallS = surface(256, 280, (g, w, h) => {
    blotches(g, w, h, p.wall, 500, 2, 34, .07);
    for (let i = 0; i < 40; i++) { g.fillStyle = `rgba(20,18,16,${rnd(.04, .12)})`; g.fillRect(rnd(0, w), rnd(0, h * .4), rnd(2, 6), rnd(30, 160)); }
    g.fillStyle = 'rgba(0,0,0,.65)'; g.fillRect(w - 5, 0, 5, h); g.fillStyle = 'rgba(255,255,255,.08)'; g.fillRect(0, 0, w, 6);
    for (const bx of [24, w - 30]) for (const by of [20, h - 24]) { g.fillStyle = 'rgba(40,36,32,.8)'; g.beginPath(); g.arc(bx, by, 3, 0, 6.283); g.fill(); }
  }, ROAD_LEN / 2.4, 1, 2.5);
  const wall = add(new THREE.BoxGeometry(ROAD_LEN, 2.6, .5), wallS, ROAD_X0 + ROAD_LEN / 2, 1.3, Z_WALL - .25, 0, .88);
  wall.castShadow = true;
  const wall2 = wall.clone(); wall2.material = wall.material.clone(); wall2.position.z = Z_WALL2 + .25; envGroup.add(wall2); ENV.walls = [wall, wall2];
  const stripeMat = new THREE.MeshStandardMaterial({ map: stripTex((g, w, h) => { // worn hazard paint, chipped at the edges
    g.fillStyle = css(p.stripeB); g.fillRect(0, 0, w, h);
    for (let x = -h; x < w; x += 36) { g.fillStyle = css(p.stripeA); g.beginPath(); g.moveTo(x, h); g.lineTo(x + 18, h); g.lineTo(x + 18 + h, 0); g.lineTo(x + h, 0); g.fill(); }
    for (let i = 0; i < 140; i++) g.clearRect(rnd(0, w), Math.random() < .5 ? rnd(0, 6) : rnd(h - 6, h), rnd(2, 9), rnd(2, 5));
    for (let i = 0; i < 50; i++) g.clearRect(rnd(0, w), rnd(0, h), rnd(1, 5), rnd(1, 4));
  }, 256, 46, ROAD_LEN / 2.4), alphaTest: .5, roughness: .75 });
  for (const [z, ry] of [[Z_WALL + .006, 0], [Z_WALL2 - .006, Math.PI]]) { const st = new THREE.Mesh(new THREE.PlaneGeometry(ROAD_LEN, .44), stripeMat); st.position.set(ROAD_X0 + ROAD_LEN / 2, 1.9, z); st.rotation.y = ry; st.receiveShadow = true; envGroup.add(st); }
  // static props
  for (const m of STATIC) m.count = 0;
  const postC = C3(p.post), poleC = hex3('#2e3034'), lightC = C3(p.light, 3);
  for (let x = ROAD_X0 + 2.4 - .1; x < ROAD_X0 + ROAD_LEN; x += 2.4) { box(staticMetal, x, 1.86, Z_WALL + .04, .14, .6, .1, postC); box(staticMetal, x, 1.86, Z_WALL2 - .04, .14, .6, .1, postC); }
  LAMPS = [];
  for (let x = 3; x < WORLD_L; x += 10) {
    LAMPS.push(x);
    box(staticCyl, x, 2.2, Z_WALL + .35, .12, 4.4, .12, poleC); box(staticMetal, x + .4, 4.35, Z_WALL + .35, .9, .1, .1, poleC);
    box(staticMetal, x + .75, 4.3, Z_WALL + .35, .42, .1, .26, poleC); box(staticGlow, x + .75, 4.24, Z_WALL + .35, .34, .03, .2, lightC);
  }
  const olive = hex3('#3e4a3a'), oliveD = hex3('#2a3328'), orange = hex3('#d0601c'), whiteC = hex3('#e8e8e8'), concrete = hex3('#8a8a86'), tire = hex3('#161616');
  for (let i = 0; i < 34; i++) {
    const x = rnd(-9, WORLD_L + 9), z = Math.random() < .5 ? rnd(Z_WALL + .45, Z_WALL + .9) : rnd(Z_WALL2 - .9, Z_WALL2 - .45), r = Math.random(); // props hug the walls
    if (r < .35) { box(staticCyl, x, .44, z, .58, .88, .58, olive); box(staticCyl, x, .3, z, .6, .05, .6, oliveD); box(staticCyl, x, .62, z, .6, .05, .6, oliveD); }
    else if (r < .6) { for (let j = 0; j < 4; j++) box(staticCyl, x, .07 + j * .15, z, .4 - j * .09, .15, .4 - j * .09, j === 2 ? whiteC : orange); box(statics, x, .02, z, .5, .04, .5, orange); }
    else if (r < .8) box(statics, x, .26, z, 1.2, .52, .62, concrete);
    else box(staticCyl, x, .14, z, .66, .28, .66, tire);
  }
  // distant blocks, with lit windows after dark
  const silC = C3(lerpC(p.wall, [60, 62, 66], .5), .7), win = C3([255, 200, 130], 2.2);
  for (let i = 0; i < 22; i++) {
    const w = rnd(4, 10), h = rnd(5, 18), x = rnd(-24, WORLD_L + 24), side = pick([-1, 1]), z = side * rnd(14, 34);
    box(statics, x, h / 2, z, w, h, rnd(4, 8), silC);
    if (dk > .2) for (let j = 0; j < 10; j++) if (Math.random() < .5) box(staticGlow, x + rnd(-w / 2 + .4, w / 2 - .4), rnd(1.5, h - 1), z - side * 2.1, .5, .7, .05, win);
  }
  applySurfaces(Lv);
  genObstacles(Lv);
  if (Lv.obj === 'hold') { box(statics, 22, .25, 0, .6, .5, .6, hex3('#4a5a3a')); box(staticCyl, 22, 1.4, 0, .06, 2.2, .06, poleC); box(staticMetal, 22.15, 2.3, 0, .32, .04, .32, hex3('#9a9a9a')); }
  for (const m of STATIC) { m.instanceMatrix.needsUpdate = true; m.instanceColor.needsUpdate = true; }
}

// ================= SKELETON + POSES =================
// 15 points: head, neck, pelvis, L shoulder/elbow/hand, R shoulder/elbow/hand, L hip/knee/foot, R hip/knee/foot
const HEAD = 0, NECK = 1, PELV = 2, LSH = 3, LEL = 4, LHA = 5, RSH = 6, REL = 7, RHA = 8, LHIP = 9, LKN = 10, LFT = 11, RHIP = 12, RKN = 13, RFT = 14;
const STICKS = [[0, 1], [1, 2], [1, 3], [1, 6], [3, 6], [3, 2], [6, 2], [2, 9], [2, 12], [9, 12], [9, 3], [12, 6], [3, 12], [6, 9],
  [3, 4], [4, 5], [6, 7], [7, 8], [9, 10], [10, 11], [12, 13], [13, 14], [0, 3], [0, 6]];
const GORE_SEGS = [[0, 0], [1, 2], [9, 10], [10, 11], [12, 13], [13, 14], [3, 4], [4, 5], [6, 7], [7, 8]];
// [a, b, t, radius in U, isHead, armSide] sphere hitboxes along the skeleton
const HIT = [[0, 0, 0, 4.6, true], [1, 2, .15, 4.6], [1, 2, .5, 4.8], [1, 2, .85, 4.6], [3, 6, .5, 4.4], [9, 10, .5, 3.2], [10, 10, 0, 3], [10, 11, .5, 3], [12, 13, .5, 3.2], [13, 13, 0, 3], [13, 14, .5, 3],
  [4, 4, 0, 2.8, false, -1], [5, 5, 0, 2.8, false, -1], [7, 7, 0, 2.8, false, 1], [8, 8, 0, 2.8, false, 1]];
const NOCUT = {};
let _bx = 0, _by = 0, _bz = 0, _fx = 1, _fz = 0, _S = U;
function frame(x, z, heading, S, by = 0) { _bx = x; _by = by; _bz = z; _fx = Math.cos(heading); _fz = Math.sin(heading); _S = S; }
// local pose coords: u forward, v up, w right (character's right = forward x up)
function setL(P, i, u, v, w) { P[i * 3] = _bx + (_fx * u - _fz * w) * _S; P[i * 3 + 1] = _by + v * _S; P[i * 3 + 2] = _bz + (_fz * u + _fx * w) * _S; }

function poseZombie(z) {
  const P = z.P, ph = z.phase, Lg = z.lunge;
  frame(z.x, z.z, z.heading, z.s * U, -Math.max(0, z.rise || 0) / 1.2 * 1.9 * z.s);
  if (z.type === 'crawler') {
    const sw = Math.sin(ph), b = Math.abs(sw);
    setL(P, PELV, -13, 4, 0); setL(P, LHIP, -13, 4, -3); setL(P, RHIP, -13, 4, 3);
    setL(P, NECK, 2, 8 + b, 0); setL(P, LSH, 2, 7.5 + b, -4.5); setL(P, RSH, 2, 7.5 + b, 4.5); setL(P, HEAD, 6.5, 10 + b, 0);
    setL(P, LKN, -22, 2, -3.5); setL(P, LFT, -30, 1, -3.5); setL(P, RKN, -21, 3, 3.5); setL(P, RFT, -29, 2, 3.5);
    setL(P, LHA, 9 + sw * 4 + Lg * 4, 1, -5); setL(P, RHA, 9 - sw * 4 + Lg * 4, 1, 5);
    setL(P, LEL, 4 + sw * 2, 8, -6); setL(P, REL, 4 - sw * 2, 7, 6);
    return;
  }
  const run = z.type === 'runner', lean = (run ? 6 : 2.5) + Lg * 4, sw = Math.sin(ph), cs = Math.cos(ph);
  const bob = Math.abs(cs) * 1.4 + (z.limp ? Math.max(0, sw) * 2.2 : 0), stride = run ? 7 : 5, pv = 22 - bob * .4;
  setL(P, PELV, 0, pv, 0); setL(P, LHIP, 0, pv - 1, -3); setL(P, RHIP, 0, pv - 1, 3);
  const nu = lean + (z.limp ? sw * 1.5 : 0) - (z.flinch > 0 ? 4 : 0), nv = 40 - bob - (run ? 2 : 0), sv = nv - 1.5;
  setL(P, NECK, nu, nv, 0); setL(P, LSH, nu, sv, -4.5); setL(P, RSH, nu, sv, 4.5);
  const tw = z.tilt + Math.sin(time * 6 + z.seed) * .05;
  setL(P, HEAD, nu + 1.5 + lean * .25 - (z.flinch > 0 ? 2 : 0), nv + 5.2 - Math.abs(tw) * 1.5, tw * 8);
  const k = z.limp ? .3 : 1; // limpers drag the left leg
  setL(P, LKN, sw * stride * .6 * k + 2 - (z.limp ? 2 : 0), 11, -3.2); setL(P, LFT, sw * stride * k - (z.limp ? 4 : 0), z.limp ? 0 : Math.max(0, cs) * 3, -3.4);
  setL(P, RKN, -sw * stride * .6 + 2, 11, 3.2); setL(P, RFT, -sw * stride, Math.max(0, -cs) * 3, 3.4);
  const reach = (z.type === 'brute' ? 11 : 13) + Lg * 7;
  const arm = (sd, el, ha, phs, dy) => {
    let hu, hv, hw;
    if (z.dangle === sd) { hu = nu + 1 + Math.sin(ph * .5 + sd) * 1.5; hv = sv - 15; hw = sd * 5.5; }
    else if (run && Lg === 0) { hu = nu + Math.sin(ph + phs) * 7; hv = sv - 12; hw = sd * 5.5; }
    else { hu = nu + reach; hv = sv - dy - Math.sin(ph * .7 + phs) * 1.5; hw = sd * 3.5; }
    setL(P, ha, hu, hv, hw); setL(P, el, (nu + hu) / 2, (sv + hv) / 2 - 2.5, sd * 5.5);
  };
  arm(-1, LEL, LHA, 0, 1); arm(1, REL, RHA, Math.PI, 3);
}

// ================= RAGDOLLS (3D Verlet) =================
let ragId = 0;
function makeRagdoll(src, vx, vy, vz, kind) {
  const P = Float32Array.from(src.P), O = new Float32Array(45), hs = 1.8 * src.s;
  for (let i = 0; i < 15; i++) {
    const k = .6 + Math.random() * .8, h = clamp(P[i * 3 + 1] / hs, 0, 1.3), m = .5 + h * .7;
    O[i * 3] = P[i * 3] - vx * k * m * STEP; O[i * 3 + 1] = P[i * 3 + 1] - (vy * k + Math.random() * .4) * STEP; O[i * 3 + 2] = P[i * 3 + 2] - vz * k * m * STEP;
  }
  const sticks = STICKS.map(([a, b]) => [a, b, Math.hypot(P[b * 3] - P[a * 3], P[b * 3 + 1] - P[a * 3 + 1], P[b * 3 + 2] - P[a * 3 + 2])]);
  return { id: ragId++, P, O, sticks, s: src.s, col: src.col, colB: src.colB, gore: src.gore || [], cut: {}, missing: src.missing || 0, kind, type: src.type, still: 0, age: 0, spurts: [], sleep: false, sink: 0, x: src.x, z: src.z, heading: src.heading };
}
function stepRag(r, dt, others) {
  const P = r.P, O = r.O, gy = CONFIG.gravity * dt * dt; let mv = 0;
  for (let i = 0; i < 15; i++) {
    const ix = i * 3, rad = i === HEAD ? .11 * r.s : .05;
    const vx = (P[ix] - O[ix]) * .995, vy = (P[ix + 1] - O[ix + 1]) * .995, vz = (P[ix + 2] - O[ix + 2]) * .995;
    O[ix] = P[ix]; O[ix + 1] = P[ix + 1]; O[ix + 2] = P[ix + 2];
    P[ix] += vx; P[ix + 1] += vy - gy; P[ix + 2] += vz;
    mv = Math.max(mv, Math.abs(vx) + Math.abs(vy) + Math.abs(vz));
    if (P[ix + 1] < rad) { P[ix + 1] = rad; O[ix] = P[ix] - vx * .5; O[ix + 2] = P[ix + 2] - vz * .5; O[ix + 1] = rad + vy * .2; }
    if (P[ix + 2] < Z_WALL + .08) P[ix + 2] = Z_WALL + .08; else if (P[ix + 2] > Z_WALL2 - .08) P[ix + 2] = Z_WALL2 - .08;
    const bx = inBox(P[ix], P[ix + 2], 0);
    if (bx && P[ix + 1] < bx.h + rad) { // land on top if coming from above, else slide off the side
      if (O[ix + 1] >= bx.h - .05 || P[ix + 1] > bx.h - .3) { P[ix + 1] = bx.h + rad; O[ix] = P[ix] - vx * .5; O[ix + 2] = P[ix + 2] - vz * .5; }
      else { const o = { x: P[ix], z: P[ix + 2] }; pushOut(o, .02); P[ix] = o.x; P[ix + 2] = o.z; }
    }
  }
  for (let k = 0; k < 6; k++) {
    for (const s of r.sticks) {
      const a = s[0] * 3, b = s[1] * 3; let dx_ = P[b] - P[a], dy_ = P[b + 1] - P[a + 1], dz_ = P[b + 2] - P[a + 2];
      const d = Math.hypot(dx_, dy_, dz_) || 1e-5, f = (d - s[2]) / d * .5;
      dx_ *= f; dy_ *= f; dz_ *= f; P[a] += dx_; P[a + 1] += dy_; P[a + 2] += dz_; P[b] -= dx_; P[b + 1] -= dy_; P[b + 2] -= dz_;
    }
    for (let i = 0; i < 15; i++) { const rad = i === HEAD ? .11 * r.s : .05; if (P[i * 3 + 1] < rad) P[i * 3 + 1] = rad; }
  }
  // corpses pile up: push this body's points out of older bodies nearby
  if (others) for (const o of others) {
    if (o === r || o.id > r.id || Math.abs(o.P[6] - P[6]) > 2 || Math.abs(o.P[8] - P[8]) > 2) continue;
    for (let i = 0; i < 15; i++) for (let j = 0; j < 15; j++) {
      const ix = i * 3, jx = j * 3, dx_ = P[ix] - o.P[jx], dy_ = P[ix + 1] - o.P[jx + 1], dz_ = P[ix + 2] - o.P[jx + 2], d2 = dx_ * dx_ + dy_ * dy_ + dz_ * dz_;
      if (d2 < .04 && d2 > 1e-8) { const d = Math.sqrt(d2), f = (.2 - d) / d; P[ix] += dx_ * f * .25; P[ix + 1] += Math.max(dy_ * f, .006); P[ix + 2] += dz_ * f * .25; O[ix] += (P[ix] - O[ix]) * .6; O[ix + 2] += (P[ix + 2] - O[ix + 2]) * .6; }
    }
  }
  r.x = P[6]; r.z = P[8];
  return mv;
}
function cutStick(r, a, b) { r.sticks = r.sticks.filter(s => !(s[0] === a && s[1] === b)); r.cut[a + '-' + b] = 1; }
function cutHead(r, dx_, dz_) {
  cutStick(r, 0, 1); cutStick(r, 0, 3); cutStick(r, 0, 6);
  r.O[0] = r.P[0] - dx_ * 3 * STEP; r.O[1] = r.P[1] - 3.5 * STEP; r.O[2] = r.P[2] - dz_ * 3 * STEP;
  r.spurts.push({ i: NECK, t: 1.6 }, { i: HEAD, t: .7 });
}
function cutLimb(r) {
  const [a, b] = pick([[LSH, LEL], [RSH, REL], [LHIP, LKN], [RHIP, RKN]]);
  if (r.cut[a + '-' + b] || (r.missing === -1 && a === LSH) || (r.missing === 1 && a === RSH)) return;
  cutStick(r, a, b); r.spurts.push({ i: a, t: 1.2 }, { i: b, t: .7 });
  for (let i = 0; i < 6; i++) spawnP(T.CHUNK, r.P[a * 3], r.P[a * 3 + 1], r.P[a * 3 + 2], rnd(-2.5, 2.5), rnd(1, 4), rnd(-2.5, 2.5), pick(GIB3), '#7a1414', .06, 3);
}

// ================= ASSETS: photo skies + rigged humans (loaded over http; procedural looks stay as fallback) =================
const ASSETS = { hdr: {}, done: false, failed: false, progress: 0 };
const TEX_SETS = ['asphalt', 'concrete', 'carmetal', 'barrel', 'wood'];
const HDR_FOR = ['quarry_01_1k.hdr', 'venice_sunset_1k.hdr', 'moonless_golf_1k.hdr', 'blouberg_sunrise_2_1k.hdr', 'pedestrian_overpass_1k.hdr'];
const RIGS = { ready: false, tpl: {}, pool: { soldier: [], michelle: [] } };
const BONE_NAMES = { hips: 'Hips', spine: 'Spine', spine1: 'Spine1', spine2: 'Spine2', neck: 'Neck', head: 'Head', lArm: 'LeftArm', lFore: 'LeftForeArm', lHand: 'LeftHand', rArm: 'RightArm', rFore: 'RightForeArm', rHand: 'RightHand', lUp: 'LeftUpLeg', lLeg: 'LeftLeg', lFoot: 'LeftFoot', rUp: 'RightUpLeg', rLeg: 'RightLeg', rFoot: 'RightFoot' };
const CHILD = { spine: 'spine1', spine1: 'spine2', spine2: 'neck', neck: 'head', lArm: 'lFore', lFore: 'lHand', rArm: 'rFore', rFore: 'rHand', lUp: 'lLeg', lLeg: 'lFoot', rUp: 'rLeg', rLeg: 'rFoot' };
// each driven bone points from one skeleton point to another (parents listed before children)
const DRIVE = [['spine', PELV, NECK], ['spine1', PELV, NECK], ['spine2', PELV, NECK], ['neck', NECK, HEAD], ['head', NECK, HEAD],
  ['lArm', LSH, LEL], ['lFore', LEL, LHA], ['rArm', RSH, REL], ['rFore', REL, RHA], ['lUp', LHIP, LKN], ['lLeg', LKN, LFT], ['rUp', RHIP, RKN], ['rLeg', RKN, RFT]];
const ZTINT = [[.62, .72, .6], [.7, .68, .62], [.58, .66, .62], [.75, .7, .6]].map(c => new THREE.Color(...c)), SPIT_TINT = new THREE.Color(.6, .82, .45), BLOODY = new THREE.Color(.28, .05, .04);
function findBones(root) {
  const b = {}, want = Object.entries(BONE_NAMES);
  root.traverse(o => { if (!o.isBone) return; const n = o.name.replace(/^mixamorig:?/, ''); for (const [k, v] of want) if (v === n) b[k] = o; });
  return b;
}
const _bU = new THREE.Vector3(), _bR = new THREE.Vector3(), _bL = new THREE.Vector3(), _bF = new THREE.Vector3(), _bM = new THREE.Matrix4();
function bodyQuat(right, up, out) { // rotation of the frame (left, up, forward) of a body with these right and up axes
  _bU.copy(up).normalize(); _bR.copy(right).addScaledVector(_bU, -right.dot(_bU)).normalize(); _bL.copy(_bR).negate(); _bF.crossVectors(_bL, _bU);
  _bM.makeBasis(_bL, _bU, _bF); return out.setFromRotationMatrix(_bM);
}
function prepTemplate(gltf, key) {
  const root = gltf.scene; root.updateMatrixWorld(true);
  const b = findBones(root), rest = {}, wp = k => b[k].getWorldPosition(new THREE.Vector3());
  for (const k in b) {
    const q = b[k].quaternion.clone(), c = CHILD[k] && b[CHILD[k]];
    rest[k] = { q, dirP: (c ? c.position.clone() : new THREE.Vector3(0, 1, 0)).normalize().applyQuaternion(q).normalize() };
  }
  const right = wp('rUp').sub(wp('lUp')).add(wp('rArm').sub(wp('lArm'))), up = wp('neck').sub(wp('hips'));
  RIGS.tpl[key] = { scene: root, rest, q0inv: bodyQuat(right, up, new THREE.Quaternion()).invert(), hipsW: b.hips.getWorldQuaternion(new THREE.Quaternion()) };
}
function acquireRig(e) {
  const key = e.type === 'brute' || Math.random() < .72 ? 'soldier' : 'michelle', t = RIGS.tpl[key];
  let rig = RIGS.pool[key].pop();
  if (!rig) {
    const root = cloneSkinned(t.scene), mats = [];
    root.traverse(o => { if (o.isMesh) { o.material = o.material.clone(); mats.push(o.material); o.frustumCulled = false; o.castShadow = o.receiveShadow = true; } });
    rig = { key, root, b: findBones(root), mats, base: mats.map(m => m.color.clone()), tpl: t, gore: -1 };
    scene.add(root);
  }
  rig.root.visible = true; rig.gore = -1; rig.tint = e.type === 'spitter' ? SPIT_TINT : pick(ZTINT);
  for (const k in rig.b) rig.b[k].scale.set(1, 1, 1);
  return rig;
}
function releaseRig(rig) { if (!rig) return; rig.root.visible = false; RIGS.pool[rig.key].push(rig); }
const _a3 = new THREE.Vector3(), _f3 = new THREE.Vector3(), _pq = new THREE.Quaternion(), _q2 = new THREE.Quaternion(), _bodyQ = new THREE.Quaternion(), _r3 = new THREE.Vector3(), _u3 = new THREE.Vector3(), _d3 = new THREE.Vector3();
// pose a skinned human from the 15-point skeleton: hips take the body's facing, every limb bone turns to point along its bone segment
function driveRig(rig, P, s, standing) {
  const b = rig.b, t = rig.tpl, rest = t.rest, p3 = i => _a3.set(P[i * 3], P[i * 3 + 1], P[i * 3 + 2]);
  rig.root.scale.setScalar(s); rig.root.updateMatrixWorld(true);
  _r3.set(P[36] - P[27] + P[18] - P[9], P[37] - P[28] + P[19] - P[10], P[38] - P[29] + P[20] - P[11]);
  _u3.set(P[3] - P[6], P[4] - P[7], P[5] - P[8]);
  bodyQuat(_r3, _u3, _bodyQ).multiply(t.q0inv).multiply(t.hipsW);
  const hp = b.hips.parent; hp.getWorldQuaternion(_pq); b.hips.quaternion.copy(_pq.invert().multiply(_bodyQ));
  b.hips.position.copy(hp.worldToLocal(p3(PELV)));
  for (const [k, from, to] of DRIVE) {
    const bone = b[k]; if (!bone) continue;
    _d3.set(P[to * 3] - P[from * 3], P[to * 3 + 1] - P[from * 3 + 1], P[to * 3 + 2] - P[from * 3 + 2]);
    if (_d3.lengthSq() < 1e-10) continue;
    bone.parent.getWorldQuaternion(_pq); _d3.normalize().applyQuaternion(_pq.invert());
    bone.quaternion.copy(_q2.setFromUnitVectors(rest[k].dirP, _d3)).multiply(rest[k].q);
  }
  // keep feet on the road while standing, and never sink below it when down
  let minY = 1e9;
  for (const k of standing ? ['lFoot', 'rFoot'] : ['lFoot', 'rFoot', 'head', 'hips', 'lHand', 'rHand']) if (b[k] && b[k].scale.x > .5) minY = Math.min(minY, b[k].getWorldPosition(_f3).y);
  const dy = standing ? .08 * s - minY : Math.max(0, .1 * s - minY);
  if (Math.abs(dy) > 1e-4 && minY < 1e8) { p3(PELV).y += dy; b.hips.position.copy(hp.worldToLocal(_a3)); }
}
async function loadAssets() {
  const rgbe = new RGBELoader(), gl_ = new GLTFLoader(), tl = new THREE.TextureLoader(), total = HDR_FOR.length + 2 + TEX_SETS.length * 3; let n = 0;
  ASSETS.tex = {};
  const tick = () => { ASSETS.progress = ++n / total; };
  try {
    await Promise.all([
      ...HDR_FOR.map(f => rgbe.loadAsync('assets/' + f).then(t => { t.mapping = THREE.EquirectangularReflectionMapping; t.userData.sun = hdrSun(t); ASSETS.hdr[f] = t; tick(); })),
      ...TEX_SETS.flatMap(n_ => ['diff', 'nor', 'rough'].map(m => tl.loadAsync(`assets/tex/${n_}_${m}.jpg`).then(t => {
        t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; if (m === 'diff') t.colorSpace = THREE.SRGBColorSpace;
        (ASSETS.tex[n_] = ASSETS.tex[n_] || {})[m] = t; tick();
      }))),
      gl_.loadAsync('assets/Soldier.glb').then(g => { prepTemplate(g, 'soldier'); tick(); }),
      gl_.loadAsync('assets/Michelle.glb').then(g => { prepTemplate(g, 'michelle'); tick(); }),
    ]);
    RIGS.ready = true; applySky(L); applySurfaces(L);
    if (/[?&]test\b/.test(location.search)) rigTest();
  } catch (e) { ASSETS.failed = true; console.warn('assets unavailable, using procedural looks', e); }
  ASSETS.done = true;
}
function rigTest() { // posed rig must follow the skeleton it is driven by
  const out = [], ok = (n, c) => out.push((c ? 'PASS ' : 'FAIL ') + n);
  for (const type of ['walker', 'brute', 'crawler']) {
    const z = newZombie(type, 10, 0); z.heading = .8; poseZombie(z); const rig = acquireRig(z);
    driveRig(rig, z.P, z.s, type !== 'crawler');
    const ang = (k, c, a, b) => { const p0 = rig.b[k].getWorldPosition(new THREE.Vector3()), p1 = rig.b[c].getWorldPosition(new THREE.Vector3()); return p1.sub(p0).normalize().angleTo(new THREE.Vector3(z.P[b * 3] - z.P[a * 3], z.P[b * 3 + 1] - z.P[a * 3 + 1], z.P[b * 3 + 2] - z.P[a * 3 + 2]).normalize()); };
    ok(type + ' rig: forearms, shins and spine follow the skeleton', Math.max(ang('lFore', 'lHand', LEL, LHA), ang('rLeg', 'rFoot', RKN, RFT), ang('spine', 'neck', PELV, NECK)) < .12);
    const feet = Math.min(rig.b.lFoot.getWorldPosition(new THREE.Vector3()).y, rig.b.rFoot.getWorldPosition(new THREE.Vector3()).y);
    ok(type + ' rig stays on the road', feet > -.02 && feet < .4);
    releaseRig(rig);
  }
  out.forEach(l => console.log(l));
  console.log(out.every(l => l.startsWith('PASS')) ? 'RIGTEST: ALL PASS' : 'RIGTEST: FAILURES');
}

// ================= STATE =================
let state = 'title', time = 0, score = 0, money = 0, shake = 0, flashFrames = 0, hurtFlash = 0, screenFlash = 0, hitStop = 0, msg = null;
const objective = { type: 'waves', meter: 100, x: 22, z: 0, r: 2.2, truck: null, fail: '', contested: false, boomed: false };
let hurtDirs = [], fade = 1, hitMark = 0, hitKill = false, streak = 0, streakT = 0, streakShow = null;
const stats = { kills: 0, heads: 0, shots: 0, hits: 0, time: 0 };
let zombies = [], rags = [], projs = [], tracers = [], pops = [], defenses = [], drops = [], arcs = [], rings = [];
let placing = null, muzzle = null, boomT = 0, player, lvl = 0, L = LEVELS[0];
const cam = { x: 12, kx: 0 };
const up = { dmg: 0, rate: 0, reload: 0, hp: 0 };
const settings = { sound: true, music: true, shake: true, sens: 1, fov: FOV, quality: 'auto' };
try { const s = JSON.parse(localStorage.getItem('deadlinefps_settings') || 'null'); if (s && typeof s === 'object') for (const k in settings) if (typeof s[k] === typeof settings[k]) settings[k] = s[k]; } catch (e) { }
settings.sens = clamp(settings.sens, .2, 3); settings.fov = clamp(settings.fov, 55, 100); if (!['auto', 'high', 'med', 'low'].includes(settings.quality)) settings.quality = 'auto';
A.on = settings.sound;
function saveSettings() { try { localStorage.setItem('deadlinefps_settings', JSON.stringify(settings)); } catch (e) { } }
const wave = { n: 0, phase: 'idle', t: 0, queue: [], spec: null };
let progress = { unlocked: 1, best: LEVELS.map(() => ({ wave: 0, score: 0 })), guns: { smg: false, shotgun: false, sniper: false }, bank: 0 };
try {
  const s = JSON.parse(localStorage.getItem('deadline3d_v1') || 'null');
  if (s && Number.isInteger(s.unlocked) && Array.isArray(s.best)) { progress.unlocked = clamp(s.unlocked, 1, LEVELS.length); s.best.forEach((b, i) => { if (progress.best[i] && b && typeof b.wave === 'number' && typeof b.score === 'number') progress.best[i] = { wave: b.wave, score: b.score }; });
    if (s.guns) for (const k in progress.guns) progress.guns[k] = s.guns[k] === true;
    if (Number.isFinite(s.bank) && s.bank >= 0) progress.bank = Math.floor(s.bank); }
} catch (e) { }
function saveProgress() { try { localStorage.setItem('deadline3d_v1', JSON.stringify(progress)); } catch (e) { } }
let runEarned = 0, lastBank = 0;
function earn(n) { money += n; runEarned += n; }
const bankShare = n => Math.floor(n * .1); // 10% of a run's earnings carries over
function bankRun() { lastBank = bankShare(runEarned); progress.bank += lastBank; runEarned = 0; saveProgress(); }
function recordBest() { const b = progress.best[lvl]; b.wave = Math.max(b.wave, wave.n); b.score = Math.max(b.score, score); saveProgress(); }

// ================= PARTICLES =================
const T = { BLOOD: 0, CASING: 1, SPARK: 2, SMOKE: 3, CHUNK: 4, ACID: 5, FIRE: 6, MIST: 7, DUST: 8 };
const KIND = ['solid', 'solid', 'glow', 'smoke', 'solid', 'solid', 'glow', 'smoke', 'smoke'];
const BLOOD_CSS = ['#7c0e0e', '#951414', '#5e0a0a', '#a81c1c', '#6a0c0c', '#4e0808'], BLOOD3 = BLOOD_CSS.map(h => new THREE.Color(h));
const GIB3 = ['#8a1a1a', '#b0505a', '#5e0a0a'].map(h => new THREE.Color(h));
const PARTS = Array.from({ length: CONFIG.maxParticles }, () => ({ x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, life: 0, max: 1, type: 0, col: null, css: '', size: .05 }));
let nParts = 0, partCap = CONFIG.maxParticles;
function spawnP(type, x, y, z, vx, vy, vz, col, cssc, size, life) {
  if (nParts >= partCap) return;
  const q = PARTS[nParts++];
  q.type = type; q.x = x; q.y = y; q.z = z; q.vx = vx; q.vy = vy; q.vz = vz; q.col = col; q.css = cssc; q.size = size; q.life = q.max = life;
}
const MIST3 = hex3('#9a1010'), DUST3 = hex3('#8c7458'), SMOKE3 = hex3('#c8c4bc');
function bloodBurst(x, y, z, dx_, dz_, n, force = 1) {
  for (let i = 0; i < n; i++) { const c = rnd(0, BLOOD3.length) | 0; spawnP(T.BLOOD, x, y, z, dx_ * rnd(.3, 3) * force + rnd(-.7, .7), rnd(0, 2.6) * force, dz_ * rnd(.3, 3) * force + rnd(-.7, .7), BLOOD3[c], BLOOD_CSS[c], rnd(.03, .06), 3); }
  for (let i = 0; i < n / 3; i++) { const c = rnd(0, BLOOD3.length) | 0; spawnP(T.BLOOD, x, y, z, dx_ * rnd(3.5, 6.5) * force, rnd(.2, 1.4), dz_ * rnd(3.5, 6.5) * force, BLOOD3[c], BLOOD_CSS[c], .035, 3); }
  for (let i = 0; i < 3; i++) spawnP(T.MIST, x + rnd(-.05, .05), y + rnd(-.05, .05), z + rnd(-.05, .05), dx_ * rnd(.2, 1), rnd(-.1, .3), dz_ * rnd(.2, 1), MIST3, '', rnd(.1, .18), .35);
}

// ================= ENTITIES =================
const PLAYER_PAL_SKIN = [196, 146, 112];
const SKINS = [[150, 160, 138], [160, 150, 140], [132, 142, 125], [170, 158, 145], [120, 130, 115]];
const SHIRTS = [[190, 184, 172], [52, 74, 96], [110, 30, 30], [88, 92, 100], [130, 122, 100], [60, 44, 40]];
const PANTS = [[44, 72, 104], [54, 54, 64], [120, 110, 80], [80, 60, 50]];
const HAIR = [[40, 30, 26], [70, 50, 35], [55, 55, 55], [90, 70, 50]];
function newPlayer() {
  const mag = {}, res = {}, owned = { knife: true, pistol: true, rifle: true };
  for (const k of WEAP_ORDER) { const w = CONFIG.weapons[k]; if (!w.melee) { mag[k] = w.mag; res[k] = w.reserve; } if (progress.guns[k]) owned[k] = true; }
  return {
    kind: 'player', x: 12, z: 0, s: 1, heading: 0, pitch: 0, kick: 0, hp: CONFIG.playerHP, maxHp: CONFIG.playerHP, alive: true,
    phase: 0, moving: false, recoil: 0, cool: 0, reloadT: 0, weapon: 'rifle', throwT: 0, mag, res, owned,
    nades: CONFIG.grenade.startCount, nadeCd: 0, inv: 0, heat: 0, swing: 0, deadT: 0, gunPitch: 0, aimT: { x: 16, y: 1.05, z: 0 },
    stamina: CONFIG.move.stamina, staminaT: 0, sprint: false, adsT: 0, swapT: 0, meleeT: 0, meleeCd: 0,
  };
}
function weaponDamage(w, dmgLv, head) { return w.dmg * (1 + dmgLv * CONFIG.upgrade.dmg) * (head ? CONFIG.headshotMul : 1); }
function newZombie(type, x, z) {
  const C = CONFIG.zombies[type], spec = wave.spec || { speedMul: 1, hpMul: 1 };
  const skin = type === 'spitter' ? [150, 190, 90] : pick(SKINS), hp = C.hp * spec.hpMul;
  const zb = {
    kind: 'zombie', type, cfg: C, x: x ?? 20, z: z ?? rnd(Z_MIN, Z_MAX), s: C.scale * rnd(.94, 1.06), heading: Math.PI, hp, maxHp: hp,
    phase: rnd(0, 6), seed: rnd(0, 100), lastStep: 0, flinch: 0, hitT: 0, atkCd: rnd(0, 1), lunge: 0, kvx: 0, kvz: 0, spitCd: rnd(1, 2.5),
    speedMul: spec.speedMul * rnd(.85, 1.15), P: new Float32Array(45), gore: [], dead: false,
    ...palette({ skin, shirt: type === 'brute' ? [90, 70, 60] : pick(SHIRTS), pants: pick(PANTS), shoe: [42, 36, 32], hair: pick(HAIR) }),
    limp: (type === 'walker' || type === 'brute') && Math.random() < .35, tilt: rnd(-.35, .35), dangle: 0, missing: 0,
  };
  if (type !== 'crawler') { if (Math.random() < .12) zb.missing = pick([-1, 1]); else if (Math.random() < .25) zb.dangle = pick([-1, 1]); }
  poseZombie(zb);
  for (let i = rnd(0, 5) | 0; i > 0; i--) addGore(zb, zb.x + rnd(-.2, .2), rnd(.2, 1.6), zb.z);
  return zb;
}
function addGore(e, hx, hy, hz) {
  if (e.gore.length >= 26) return;
  const P = e.P; let bestD = 1e9, bs = GORE_SEGS[1], bt = .5;
  for (const sg of GORE_SEGS) {
    const a = sg[0] * 3, b = sg[1] * 3, vx = P[b] - P[a], vy = P[b + 1] - P[a + 1], vz = P[b + 2] - P[a + 2], l2 = vx * vx + vy * vy + vz * vz;
    const t = l2 ? clamp(((hx - P[a]) * vx + (hy - P[a + 1]) * vy + (hz - P[a + 2]) * vz) / l2, 0, 1) : 0;
    const d = Math.hypot(P[a] + vx * t - hx, P[a + 1] + vy * t - hy, P[a + 2] + vz * t - hz);
    if (d < bestD) { bestD = d; bs = sg; bt = t; }
  }
  const torso = bs[0] === 1, face = Math.random() < .5;
  e.gore.push({ a: bs[0], b: bs[1], t: bt, o1: face ? (torso ? 4.3 : 2.1) * pick([-1, 1]) : rnd(-2, 2), o2: face ? rnd(-2, 2) : (torso ? 2.6 : 2.1) * pick([-1, 1]), sz: 1.2 + Math.random() * 1.6, c: pick(BLOOD3) });
}

function goalOf(z) { // where this zombie is heading: the player, the radio point or the truck
  const p = player, dp = Math.hypot(p.x - z.x, p.z - z.z), t = objective.truck;
  if (z.goal === 'zone' && (dp > 3.5 || !p.alive)) return [objective.x + (z.seed % 1 - .5) * 2.4, objective.z + ((z.seed * 7) % 1 - .5) * 2.4, 'zone'];
  if (z.goal === 'truck' && t && t.hp > 0 && (dp > 3 || !p.alive)) return [clamp(z.x, t.x0, t.x1), clamp(z.z, t.z0, t.z1), 'truck'];
  return [p.x, p.z, 'player'];
}
function updZombie(z, dt) {
  const C = z.cfg, p = player;
  z.flinch = Math.max(0, z.flinch - dt); z.hitT -= dt; z.atkCd -= dt; z.lunge = Math.max(0, z.lunge - dt * 3);
  if (z.rise > 0) { z.rise -= dt; if (Math.random() < dt * 20) spawnP(T.DUST, z.x + rnd(-.3, .3), .05, z.z + rnd(-.3, .3), rnd(-.5, .5), rnd(.3, .8), rnd(-.5, .5), DUST3, '', rnd(.1, .2), .7); poseZombie(z); return; }
  let sp = C.speed * z.speedMul * (z.flinch > 0 ? .25 : 1) * (z.limp ? .55 + .9 * Math.max(0, Math.sin(z.phase)) : 1), blocked = null;
  for (const d of defenses) {
    if (d.hp <= 0) continue;
    const ddx = z.x - d.x;
    if (d.type === 'sandbags') { if (ddx > .15 && ddx < .45 * z.s + .15) blocked = d; }
    else if (Math.abs(ddx) < .3) {
      const D = CONFIG.defenses[d.type];
      if (d.type === 'wire') sp *= D.slow;
      z.hp -= D.dps * dt; d.hp -= dt * (z.type === 'brute' ? 8 : 1.5);
      if (Math.random() < dt * 3) bloodBurst(z.x, .3, z.z, 1, 0, 2, .5);
    }
  }
  if (z.hp <= 0) { killZombie(z, 1, 0, 0, 1, false, 10); return; }
  const [gx, gz, gk] = goalOf(z), dx_ = gx - z.x, dz_ = gz - z.z, dist = Math.hypot(dx_, dz_), dp = Math.hypot(p.x - z.x, p.z - z.z), near = dp < 16;
  let want = blocked ? Math.PI : Math.atan2(dz_, dx_);
  if (!blocked) { // steer around cover: slide toward the box edge on the open side
    const hx = Math.cos(want), b = inBox(z.x + hx * .6, z.z + Math.sin(want) * .6, .3);
    if (b && !(b.kind === 'truck' && gk === 'truck')) {
      const upE = b.z0 - .55, dnE = b.z1 + .55, goUp = upE > Z_MIN - .01 && (dnE > Z_MAX + .01 || Math.abs(z.z - upE) < Math.abs(z.z - dnE));
      want = Math.atan2(goUp ? -1 : 1, Math.sign(hx || 1) * .35);
    }
  }
  const active = p.alive || gk !== 'player';
  if (active) z.heading = turnTo(z.heading, want, dt * 5);
  let walking = false;
  if (blocked) {
    z.phase += dt * 2;
    if (z.atkCd <= 0) { z.atkCd = 1; z.lunge = 1; blocked.hp -= C.dmg * (C.barricadeMul || 1); sfxAt('impact', z.x, z.z, 80); }
  } else if (p.alive && dp < .7 * z.s + .15) {
    z.phase += dt * 2; z.heading = turnTo(z.heading, Math.atan2(p.z - z.z, p.x - z.x), dt * 8);
    if (z.atkCd <= 0) { z.atkCd = 1.1; z.lunge = 1; hurtPlayer(C.dmg, z.x, z.z); }
  } else if (gk === 'truck' && dist < .45) {
    z.phase += dt * 2;
    if (z.atkCd <= 0) { z.atkCd = 1.1; z.lunge = 1; objective.truck.hp -= C.dmg * (C.barricadeMul || 1); sfxAt('impact', z.x, z.z, 80); for (let i = 0; i < 3; i++) spawnP(T.SPARK, gx, rnd(.4, 1.2), gz, rnd(-1, 1), rnd(.5, 2), rnd(-1, 1), hex3('#ffd080'), '', .03, .3); }
  } else if (gk === 'zone' && dist < .5) z.phase += dt;
  else if (p.alive && z.type === 'spitter' && dp < C.range && near) {
    z.phase += dt * 1.5; z.spitCd -= dt; z.heading = turnTo(z.heading, Math.atan2(p.z - z.z, p.x - z.x), dt * 8);
    if (z.spitCd <= 0) {
      z.spitCd = C.cooldown * rnd(.8, 1.2); z.lunge = 1;
      const T_ = 1, y0 = 1.6 * z.s, hx = z.P[0], hz = z.P[2];
      projs.push({ kind: 'acid', x: hx, y: y0, z: hz, vx: (p.x - hx) / T_, vy: (.5 * CONFIG.gravity * T_ * T_ - y0) / T_, vz: (p.z - hz) / T_, t: 0, dmg: C.dmg });
      sfxAt('splat', z.x, z.z, 100);
    }
  } else if (active) {
    walking = true;
    z.x += Math.cos(z.heading) * sp * dt; z.z += Math.sin(z.heading) * sp * dt;
    z.phase += dt * sp * 7.7;
  } else z.phase += dt;
  if (walking) { // footsteps you can locate; brutes shake the ground
    const st = Math.floor(z.phase / Math.PI);
    if (st !== z.lastStep) {
      z.lastStep = st;
      if (dp < 12) sfxAt('step', z.x, z.z, 70);
      if (z.type === 'brute' && near) { shake = Math.max(shake, 1.4); sfxAt('stomp', z.x, z.z, 150); for (let i = 0; i < 4; i++) spawnP(T.DUST, z.x + rnd(-.3, .3), .05, z.z + rnd(-.3, .3), rnd(-.6, .6), rnd(.2, .5), rnd(-.3, .3), DUST3, '', rnd(.12, .22), .6); }
    }
  }
  z.x = clamp(z.x + z.kvx * dt, -5, WORLD_L + 5); z.z = clamp(z.z + z.kvz * dt, Z_MIN, Z_MAX);
  const damp = Math.max(0, 1 - 8 * dt); z.kvx *= damp; z.kvz *= damp;
  pushOut(z, .22 * z.s); z.z = clamp(z.z, Z_MIN, Z_MAX);
  poseZombie(z);
}
function damageZombie(z, dmg, head, dx_, dy_, dz_, knock, hx, hy, hz) {
  if (z.dead) return;
  const d = dmg * (head ? CONFIG.headshotMul : 1);
  z.hp -= d; z.flinch = .18; z.hitT = .06; z.kvx += dx_ * knock * .7; z.kvz += dz_ * knock * .7; hitMark = .12; hitKill = false;
  bloodBurst(hx, hy, hz, dx_, dz_, head ? 16 : 10, head ? 1.3 : 1);
  addGore(z, hx, hy, hz); if (head) addGore(z, hx, hy, hz);
  sfxAt('impact', z.x, z.z, 40);
  if (z.hp <= 0) killZombie(z, dx_, dy_, dz_, knock, head, d);
}
function killZombie(z, dx_, dy_, dz_, knock, head, dmg, blast) {
  z.dead = true;
  const f = 1.4 + knock * .9, r = makeRagdoll(z, dx_ * f, dy_ * f + 1.4 + knock * .35, dz_ * f, 'zombie');
  if (head && (dmg >= 60 || Math.random() < .45)) cutHead(r, dx_, dz_);
  else if (blast && dmg > 140 && Math.random() < .4) cutHead(r, dx_, dz_);
  if (dmg >= 70 && Math.random() < .5) cutLimb(r);
  if (blast && dmg > 120 && Math.random() < .5) cutLimb(r);
  r.rig = z.rig; z.rig = null;
  addRag(r);
  stampPool(z.x, z.z, .32 * z.s); bloodBurst(z.x, .8 * z.s, z.z, dx_, dz_, 22, 1.3);
  const cash = z.cfg.cash + (head ? CONFIG.headshotCash : 0);
  earn(cash); score += CONFIG.killScore * (z.type === 'brute' ? 6 : 1) + (head ? 5 : 0);
  pops.push({ x: z.x, y: 2 * z.s, z: z.z, text: '+$' + cash, t: 1, col: head ? '#ffd84a' : '#e8e8e8' });
  stats.kills++; hitKill = true;
  if (head) { stats.heads++; pops.push({ x: z.x, y: 2.3 * z.s, z: z.z, text: 'HEADSHOT', t: .9, col: '#ff6040' }); }
  streak = streakT > 0 ? streak + 1 : 1; streakT = 1.4;
  if (streak >= 3) { const bonus = streak * 2; earn(bonus); streakShow = { n: streak, bonus, t: 1.4 }; }
  if (z.type === 'brute') { hitStop = .07; shake = Math.max(shake, 5); }
  const roll = Math.random(), D = CONFIG.drops;
  const drop = roll < D.ammo ? 'ammo' : roll < D.ammo + D.med ? 'med' : roll < D.ammo + D.med + D.nade ? 'nade' : null;
  if (drop) drops.push({ type: drop, x: z.x, z: z.z, t: 15 });
  sfx('splat', 50);
}
function addRag(r) {
  rags.push(r);
  const live = rags.filter(o => !o.sink);
  if (live.length > CONFIG.maxRagdolls) { const o = live[0]; o.sink = 1.2; o.sleep = true; stampPool(o.x, o.z, .3); }
}
function wake(r) { if (!r.sink) { r.sleep = false; r.still = 0; } }
function hurtPlayer(d, sx, sz) {
  const p = player; if (!p.alive || p.inv > 0) return;
  const dx_ = p.x - sx, dz_ = p.z - sz, l = Math.hypot(dx_, dz_) || 1;
  p.hp -= d; p.inv = .45; hurtFlash = .35; shake = Math.max(shake, 3); sfx('hurt', 80);
  hurtDirs.push({ a: Math.atan2(-dz_, -dx_), t: 1 });
  p.x = clamp(p.x + dx_ / l * .15, .5, WORLD_L - .5); p.z = clamp(p.z + dz_ / l * .15, Z_MIN, Z_MAX);
  bloodBurst(p.x, 1.2, p.z, dx_ / l, dz_ / l, 10);
  if (p.hp <= 0) { p.hp = 0; p.alive = false; stampPool(p.x, p.z, .45); sfx('splat'); }
}

// ================= WEAPONS =================
function selectWeapon(wn) {
  const p = player; if (!p.alive || !p.owned[wn] || p.weapon === wn) return;
  p.weapon = wn; p.reloadT = 0; p.cool = .35; p.swapT = .35; p.heat = 0; sfx('click', 60);
}
function cycleWeapon(d) { const L_ = WEAP_ORDER.filter(w => player.owned[w]); const i = L_.indexOf(player.weapon); selectWeapon(L_[(i + d + L_.length) % L_.length]); }
function startReload() {
  const p = player, w = CONFIG.weapons[p.weapon];
  if (!p.alive || w.melee || p.reloadT > 0 || p.mag[p.weapon] >= w.mag || p.res[p.weapon] <= 0) return false;
  p.reloadT = w.reload * (1 - up.reload * CONFIG.upgrade.reload); sfx('click', 100); return true;
}
function finishReload() {
  const p = player, wn = p.weapon, w = CONFIG.weapons[wn], take = Math.min(w.mag - p.mag[wn], p.res[wn]);
  p.mag[wn] += take; p.res[wn] -= take; sfx('click', 60);
}
// gun frame: X along the barrel, Y up from it, Z = X x Y
const GX = new THREE.Vector3(), GY = new THREE.Vector3(), GZ = new THREE.Vector3(), _cd = new THREE.Vector3();
function gunFrame(heading, pitch) {
  const ch = Math.cos(heading), shd = Math.sin(heading), cp = Math.cos(pitch), sp = Math.sin(pitch);
  GX.set(ch * cp, sp, shd * cp); GY.set(-ch * sp, cp, -shd * sp); GZ.crossVectors(GX, GY);
}
// first-person gun: placed in the camera frame, then aimed along its own pitch
function viewGrip(p) {
  const rel = p.reloadT > 0, a = p.adsT, knife = p.weapon === 'knife';
  const bob = (p.moving ? Math.sin(p.phase) * (p.sprint ? .03 : .012) : Math.sin(time * 2) * .004) * (1 - a * .8);
  const swap = p.swapT > 0 ? Math.sin(p.swapT / .35 * Math.PI) * .25 : 0, jab = p.meleeT > 0 ? Math.sin(p.meleeT / .25 * Math.PI) * .14 : 0;
  gunFrame(p.heading, p.pitch + p.kick);
  const c = camera.position, ox = lerp(.38, .3, a) - p.recoil * .05 + jab, oy = lerp(-.17, -.125, a) + bob - (rel ? .06 : 0) - p.throwT * .1 - swap - (p.sprint ? .06 : 0), oz = lerp(p.weapon === 'pistol' ? .13 : .16, 0, a);
  const g = [c.x + GX.x * ox + GY.x * oy + GZ.x * oz, c.y + GX.y * ox + GY.y * oy + GZ.y * oz, c.z + GX.z * ox + GY.z * oy + GZ.z * oz];
  p.gunPitch = p.pitch + p.kick - (rel ? .7 : 0) - p.throwT * .9 - swap * 2 - (p.sprint ? .5 : 0) + (knife ? (p.swing > 0 ? p.swing * 1.6 - 1.2 : -.3) : 0);
  gunFrame(p.heading + (knife && p.swing > 0 ? (p.swing - .5) * .8 : 0) + (p.sprint ? .35 : 0), p.gunPitch);
  return g;
}
function muzzlePoint(p) {
  const [gx, gy, gz] = viewGrip(p), m = MUZZLE[p.weapon] * VM_S;
  return [gx + GX.x * m + GY.x * 2 * VM_S, gy + GX.y * m + GY.y * 2 * VM_S, gz + GX.z * m + GY.z * 2 * VM_S];
}
const scoped = p => p.weapon === 'sniper' && p.adsT > .8;
function raySpheres(ox, oy, oz, dx_, dy_, dz_, z, scale = 1) {
  const P = z.P; let tMin = 1e9, head = false;
  for (const hc of HIT) {
    if (hc[5] && z.missing === hc[5]) continue;
    const a = hc[0] * 3, b = hc[1] * 3, t0 = hc[2];
    const ex = lerp(P[a], P[b], t0) - ox, ey = lerp(P[a + 1], P[b + 1], t0) - oy, ez = lerp(P[a + 2], P[b + 2], t0) - oz;
    const t = ex * dx_ + ey * dy_ + ez * dz_; if (t < 0) continue;
    const r = hc[3] * z.s * U * scale;
    if (ex * ex + ey * ey + ez * ez - t * t < r * r) { if (hc[4]) head = true; if (t < tMin) tMin = t; }
  }
  return tMin < 1e8 ? { t: tMin, head } : null;
}
function hitscan(ox, oy, oz, dx_, dy_, dz_, w, dmg, tx = ox, ty = oy, tz = oz) {
  const hits = [], tb = rayBoxes(ox, oy, oz, dx_, dy_, dz_);
  for (const z of zombies) { if (z.dead) continue; const h = raySpheres(ox, oy, oz, dx_, dy_, dz_, z); if (h && h.t < tb) hits.push({ z, t: h.t, head: h.head }); }
  hits.sort((a, b) => a.t - b.t);
  let pen = w.pen, end = CONFIG.bulletRange;
  for (const h of hits) {
    if (pen-- <= 0) break;
    damageZombie(h.z, dmg, h.head, dx_, dy_, dz_, w.knock, ox + dx_ * h.t, oy + dy_ * h.t, oz + dz_ * h.t);
    end = h.t;
  }
  if (pen < w.pen) stats.hits++;
  if (pen > 0) {
    end = CONFIG.bulletRange;
    const tg = dy_ < -1e-4 ? -oy / dy_ : 1e9, tw = Math.min(tb, dz_ < -1e-4 ? (Z_WALL - oz) / dz_ : dz_ > 1e-4 ? (Z_WALL2 - oz) / dz_ : 1e9);
    if (tg < end || tw < end) {
      const ground = tg < tw; end = Math.min(tg, tw);
      const ix = ox + dx_ * end, iy = oy + dy_ * end, iz = oz + dz_ * end;
      for (let i = 0; i < 5; i++) spawnP(T.SPARK, ix, iy + .02, iz, rnd(-1.5, 1.5) - dx_, rnd(.5, 2.5), ground ? rnd(-1.5, 1.5) : rnd(.5, 2), pick([hex3('#ffe080'), hex3('#ffb040')]), '', .03, .25);
      for (let i = 0; i < 3; i++) spawnP(T.DUST, ix, iy, iz + (ground ? 0 : .1), rnd(-.4, .4), rnd(.3, .8), rnd(-.2, .4), DUST3, '', rnd(.08, .16), .5);
      if (ground) paint(ix, iz, 1, 1, '#3a2a1c'); else sfxAt('ric', ix, iz, 120);
    }
  }
  for (const r of rags) {
    if (r.sink) continue;
    for (let i = 0; i < 15; i++) {
      const ex = r.P[i * 3] - ox, ey = r.P[i * 3 + 1] - oy, ez = r.P[i * 3 + 2] - oz, t = ex * dx_ + ey * dy_ + ez * dz_;
      if (t > 0 && t < end && ex * ex + ey * ey + ez * ez - t * t < .02) {
        wake(r); r.O[i * 3] -= dx_ * 2.5 * STEP; r.O[i * 3 + 1] -= 1.6 * STEP; r.O[i * 3 + 2] -= dz_ * 2.5 * STEP;
        bloodBurst(r.P[i * 3], r.P[i * 3 + 1], r.P[i * 3 + 2], dx_, dz_, 5); break;
      }
    }
  }
  tracers.push({ x0: tx, y0: ty, z0: tz, x1: ox + dx_ * end, y1: oy + dy_ * end, z1: oz + dz_ * end, t: .08 });
}
function fire() {
  const p = player, w = CONFIG.weapons[p.weapon], rateMul = 1 - up.rate * CONFIG.upgrade.rate;
  if (w.melee) {
    p.cool = w.rate * rateMul; p.swing = 1; sfx('knife'); let n = w.pen;
    arcs.push({ x: p.x, y: camera.position.y - .2, z: p.z, h: p.heading, p: p.pitch, t: .15 });
    const fx = Math.cos(p.heading), fz = Math.sin(p.heading);
    for (const z of zombies) {
      if (z.dead || n <= 0) continue;
      const ex = z.x - p.x, ez = z.z - p.z, along = ex * fx + ez * fz, across = Math.abs(-ex * fz + ez * fx);
      if (along > -.1 && along < 1.15 && across < .55) { n--; damageZombie(z, weaponDamage(w, up.dmg, false), false, fx, -.2, fz, w.knock, z.x - fx * .1, 1.1 * z.s, z.z - fz * .1); }
    }
    return;
  }
  if (p.mag[p.weapon] <= 0) { if (!startReload()) { p.cool = .25; sfx('click', 200); } return; }
  p.mag[p.weapon]--; p.cool = w.rate * rateMul; stats.shots += w.pellets || 1;
  const [mx, my, mz] = muzzlePoint(p), eye = camera.position;
  camera.getWorldDirection(_cd); const dx_ = _cd.x, dy_ = _cd.y, dz_ = _cd.z;
  const spread = (w.spread + p.heat) * lerp(1, .3, p.adsT), dmg = weaponDamage(w, up.dmg, false);
  for (let i = 0; i < (w.pellets || 1); i++) {
    let ex = dx_ + rnd(-spread, spread), ey = dy_ + rnd(-spread, spread), ez = dz_ + rnd(-spread, spread); const el = Math.hypot(ex, ey, ez);
    hitscan(eye.x, eye.y, eye.z, ex / el, ey / el, ez / el, w, dmg, mx, my, mz);
  }
  if (w.spreadGrow) p.heat = Math.min(w.spreadMax, p.heat + w.spreadGrow);
  p.recoil = 1; p.kick = Math.min(.12, p.kick + w.recoil * 1.2); p.pitch = clamp(p.pitch + w.recoil * .06, -1.35, 1.35); shake = Math.max(shake, w.shake * .5); flashFrames = 2;
  screenFlash = Math.max(screenFlash, .03 * w.shake);
  muzzle = { x: mx, y: my, z: mz, big: w.pellets ? 1.6 : 1, v: Math.random() };
  muzzleLight.position.set(mx, my, mz + .3); muzzleLight.intensity = (w.pellets ? 26 : 16) * (1 + L.dark * 2);
  for (let i = 0; i < (w.pellets ? 4 : 1); i++) spawnP(T.SMOKE, mx, my, mz, GX.x * rnd(.6, 1.4), rnd(.1, .3), GX.z * rnd(.6, 1.4), SMOKE3, '', rnd(.015, .03), rnd(.3, .6));
  const [gx, gy, gz] = viewGrip(p);
  spawnP(T.CASING, gx + GZ.x * .04, gy + .03, gz + GZ.z * .04, -GX.x * rnd(.2, .6) + GZ.x * rnd(1.6, 2.4), rnd(1.2, 2), -GX.z * rnd(.2, .6) + GZ.z * rnd(1.6, 2.4),
    p.weapon === 'shotgun' ? hex3('#b02a20') : hex3('#d8b040'), p.weapon === 'shotgun' ? '#b02a20' : '#d8b040', .04, 9);
  sfx(p.weapon, 25); if (Math.random() < .5) sfx('tink', 60);
  if (p.mag[p.weapon] === 0) startReload();
}
function throwNade() {
  const p = player; if (!p.alive || p.nades <= 0 || p.nadeCd > 0 || state !== 'play') return;
  p.nades--; p.nadeCd = .6; p.throwT = 1;
  let tx = p.aimT.x, tz = p.aimT.z;
  if (input.touch) { const t = nearestZombie(); tx = t ? t.x : p.x + Math.cos(p.heading) * 6; tz = t ? t.z : p.z + Math.sin(p.heading) * 6; }
  const dx_ = tx - p.x, dz_ = tz - p.z, d = Math.hypot(dx_, dz_), k = d > 9 ? 9 / d : 1;
  tx = p.x + dx_ * k; tz = clamp(p.z + dz_ * k, Z_MIN - .3, Z_MAX + .3);
  const T_ = .85, y0 = 1.5, sx = p.x + Math.cos(p.heading) * .4, sz = p.z + Math.sin(p.heading) * .4;
  projs.push({ kind: 'nade', x: sx, y: y0, z: sz, vx: (tx - sx) / T_, vy: (.5 * CONFIG.gravity * T_ * T_ - y0) / T_, vz: (tz - sz) / T_, t: 0 });
  sfx('knife');
}
function explode(x, z) {
  const R = CONFIG.grenade.radius;
  sfxAt('boom', x, z, 0); shake = Math.max(shake, 9); hitStop = .04; screenFlash = .45; boomT = .35;
  boomLight.position.set(x, 1.2, z); boomLight.intensity = 120 * (1 + L.dark);
  rings.push({ x, z, t: .35 });
  for (const zb of zombies) {
    if (zb.dead) continue;
    const ddx = zb.x - x, ddz = zb.z - z, d = Math.hypot(ddx, ddz);
    if (d < R) {
      const dm = CONFIG.grenade.dmg * (1 - d / R) + 30, nx = ddx / (d || 1), nz_ = ddz / (d || 1);
      zb.hp -= dm; zb.hitT = .08; addGore(zb, zb.x, .9, zb.z);
      if (zb.hp <= 0) killZombie(zb, nx, .45, nz_, 3, false, dm, true); else { zb.kvx += nx * 4 * (1 - d / R); zb.kvz += nz_ * 4 * (1 - d / R); zb.flinch = .4; }
    }
  }
  for (const r of rags) {
    if (r.sink) continue;
    const d = Math.hypot(r.x - x, r.z - z);
    if (d < R) { wake(r); const k = 1 - d / R; for (let i = 0; i < 15; i++) { const ddx = r.P[i * 3] - x, ddz = r.P[i * 3 + 2] - z, l = Math.hypot(ddx, ddz) || 1; r.O[i * 3] -= ddx / l * 5 * k * STEP; r.O[i * 3 + 1] -= 4.5 * k * STEP * rnd(.5, 1.2); r.O[i * 3 + 2] -= ddz / l * 5 * k * STEP; } }
  }
  const FIRE3 = ['#fff3b0', '#ffc040', '#ff7a20', '#d84010'].map(hex3), SMK = ['#3a3530', '#4a4540', '#2a2622'].map(hex3), DIRT = ['#4a3626', '#5a4430', '#2e2218'];
  for (let i = 0; i < 46; i++) spawnP(T.FIRE, x + rnd(-.3, .3), rnd(.05, .6), z + rnd(-.3, .3), rnd(-2.5, 2.5), rnd(.3, 3.5), rnd(-2.5, 2.5), pick(FIRE3), '', rnd(.12, .26), rnd(.2, .6));
  for (let i = 0; i < 16; i++) spawnP(T.FIRE, x + rnd(-.6, .6), .05, z + rnd(-.6, .6), rnd(-.2, .2), rnd(.1, .5), rnd(-.2, .2), pick(FIRE3), '', rnd(.04, .08), rnd(1.2, 2.4));
  for (let i = 0; i < 26; i++) spawnP(T.SMOKE, x + rnd(-.5, .5), rnd(.2, 1.2), z + rnd(-.5, .5), rnd(-.8, .8), rnd(.4, 1.6), rnd(-.8, .8), pick(SMK), '', rnd(.25, .45), rnd(1.2, 2.6));
  for (let i = 0; i < 26; i++) { const c = pick(DIRT); spawnP(T.CHUNK, x, .1, z, rnd(-5, 5), rnd(3, 8), rnd(-5, 5), hex3(c), c, rnd(.05, .09), 3); }
  for (let i = 0; i < 420; i++) { const a = rnd(0, 6.283), rr = Math.sqrt(Math.random()) * 1.2; dctx.fillStyle = `rgba(20,14,10,${(.85 - rr / 1.4).toFixed(2)})`; dctx.fillRect((x + Math.cos(a) * rr - ROAD_X0) * DPX | 0, (z + Math.sin(a) * rr - ROAD_Z0) * DPZ | 0, 1, 1); }
  decalDirty = true;
}
function nearestZombie() { // closest zombie roughly in front of the player
  let best_ = null, bs = 1e9;
  for (const z of zombies) {
    if (z.dead || z.rise > 0) continue;
    const a = Math.atan2(z.z - player.z, z.x - player.x), d = Math.hypot(z.x - player.x, z.z - player.z);
    if (Math.abs(turnTo(0, a - player.heading, 9)) < .7 && d < 25 && d < bs) { bs = d; best_ = z; }
  }
  return best_;
}
// what is under the cursor: a zombie body part, else the road at chest height, else the wall
function aimPoint(sx, sy) {
  const r = screenRay(sx, sy), o = r.origin, d = r.direction;
  let bt = 1e9;
  for (const z of zombies) { if (z.dead) continue; const h = raySpheres(o.x, o.y, o.z, d.x, d.y, d.z, z, 1.25); if (h && h.t < bt) bt = h.t; }
  if (bt < 1e8) return { x: o.x + d.x * bt, y: o.y + d.y * bt, z: o.z + d.z * bt };
  const tbx = rayBoxes(o.x, o.y, o.z, d.x, d.y, d.z);
  if (d.y < -1e-4) { const t = -o.y / d.y, gz = o.z + d.z * t; if (gz > Z_WALL && t < tbx) return { x: o.x + d.x * t, y: 1.05, z: gz }; }
  if (tbx < 60) return { x: o.x + d.x * tbx, y: o.y + d.y * tbx, z: o.z + d.z * tbx };
  const wz = d.z > 0 ? Z_WALL2 : Z_WALL, t = Math.min(60, (wz - o.z) / (Math.abs(d.z) > 1e-4 ? d.z : -1e-4)); return { x: o.x + d.x * t, y: o.y + d.y * t, z: o.z + d.z * t };
}

// ================= WAVES =================
const isHorde = (li, w) => LEVELS[li].waves === Infinity ? w % 5 === 0 : w === LEVELS[li].waves;
function waveCount(li, w) { return Math.round((CONFIG.waveBase + (li * 3 + w) * CONFIG.wavePerDiff) * (isHorde(li, w) ? CONFIG.hordeMul : 1)); }
function waveSpec(li, w) {
  const Lv = LEVELS[li], d = li * 3 + w, horde = isHorde(li, w), n = waveCount(li, w), list = [], m = Lv.mix, ramp = Math.min(1, .4 + w * .15);
  const pb = (m.brute || 0) * ramp, pr = m.runner * ramp, pc = m.crawler * ramp, ps = m.spitter * ramp;
  for (let i = 0; i < n; i++) {
    const r = Math.random();
    list.push(r < pb ? 'brute' : r < pb + pr ? 'runner' : r < pb + pr + pc ? 'crawler' : r < pb + pr + pc + ps ? 'spitter' : 'walker');
  }
  const brutes = horde ? 1 + (li >> 1) + (Lv.waves === Infinity ? Math.floor(w / 10) : 0) : 0;
  for (let i = 0; i < brutes; i++) list.splice(Math.floor(list.length * (i + 1) / (brutes + 1)), 0, 'brute');
  return { list, horde, hpMul: 1 + d * .04, speedMul: 1 + d * .03, interval: Math.max(.25, 1.3 / (1 + d * .1)), flank: Lv.flank };
}
function startWave() {
  wave.timer = 30 + (wave.n + 1) * 5;
  wave.n++; wave.spec = waveSpec(lvl, wave.n); wave.queue = wave.spec.list.slice(); wave.phase = 'countdown'; wave.t = 2.6;
  msg = { text: 'WAVE ' + wave.n, sub: wave.spec.horde ? 'HORDE INCOMING' : L.name, t: 2.4 }; sfx('blip');
}
function spawnFromSide(type) { // zombies claw out of the road around the player, mostly from the far end
  const p = player, side = Math.random() < wave.spec.flank ? -1 : 1;
  let x = clamp(p.x + side * rnd(8, 16), .5, WORLD_L - .5);
  if (Math.abs(x - p.x) < 5) x = clamp(p.x - side * rnd(8, 16), .5, WORLD_L - .5);
  const z = newZombie(type, x); for (let k = 0; k < 8 && inBox(x, z.z, .45); k++) z.z = rnd(Z_MIN, Z_MAX);
  const g = Math.random(); z.goal = L.obj === 'hold' && g < .5 ? 'zone' : L.obj === 'protect' && g < .45 ? 'truck' : 'player';
  z.heading = Math.atan2(p.z - z.z, p.x - x); z.rise = 1.2; zombies.push(z);
  for (let i = 0; i < 8; i++) { const c = pick(['#4a3626', '#5a4430']); spawnP(T.CHUNK, x, .05, z.z, rnd(-1.5, 1.5), rnd(1.5, 3.5), rnd(-1.5, 1.5), hex3(c), c, .06, 2); }
  stampPool(x, z.z, .2);
}
function updWave(dt) {
  if (wave.phase === 'countdown') { wave.t -= dt; if (wave.t <= 0) { wave.phase = 'spawn'; wave.t = 0; } }
  else if (wave.phase === 'spawn') {
    wave.t -= dt;
    if (L.obj === 'survive') { wave.timer -= dt; if (!wave.queue.length && wave.timer > 3 && zombies.length < 24) wave.queue.push(pick(wave.spec.list)); }
    if (wave.queue.length && wave.t <= 0) {
      const n = wave.spec.horde && Math.random() < .4 ? 2 : 1;
      for (let i = 0; i < n && wave.queue.length; i++) spawnFromSide(wave.queue.shift());
      wave.t = wave.spec.interval * rnd(.6, 1.4);
    }
    const done = L.obj === 'survive' ? wave.timer <= 0 : !wave.queue.length && !zombies.some(z => !z.dead);
    if (done && player.alive) {
      if (L.obj === 'survive') { wave.queue = []; for (const z of zombies) if (!z.dead) killZombie(z, 0, 1, 0, 1, false, 10); }
      wave.phase = 'clear'; wave.t = 2.2;
      const b = 20 + wave.n * 6; earn(b); score += wave.n * 50;
      msg = { text: 'WAVE CLEARED', sub: '+$' + b + ' BONUS', t: 2 };
    }
  } else if (wave.phase === 'clear') {
    wave.t -= dt;
    if (wave.t <= 0) {
      fadeDecals(); wave.phase = 'idle';
      if (wave.n >= L.waves) { progress.unlocked = Math.max(progress.unlocked, Math.min(LEVELS.length, lvl + 2)); recordBest(); bankRun(); state = 'levelclear'; fade = .6; }
      else state = 'shop';
    }
  }
}

// ================= SHOP =================
function shopItems() {
  const p = player, S = CONFIG.shop, U_ = CONFIG.upgrade, D = CONFIG.defenses;
  const lv = (k, max, cost) => { const c = cost * (up[k] + 1), maxed = up[k] >= max; return { cost: c, can: !maxed, sub: maxed ? 'MAX' : 'LV' + (up[k] + 1) + ' $' + c }; };
  const def = t => ({ cost: D[t].cost, can: defenses.length < 8, buy() { placing = t; state = 'place'; } });
  const gun = k => ({ label: CONFIG.weapons[k].name, cost: S[k], can: !p.owned[k], sub: p.owned[k] ? 'OWNED' : null, buy() { p.owned[k] = true; progress.guns[k] = true; saveProgress(); selectWeapon(k); } });
  const lowAmmo = Object.keys(p.res).some(g => p.owned[g] && p.res[g] < CONFIG.weapons[g].reserve);
  return [
    { label: 'AMMO REFILL', cost: S.ammo, can: lowAmmo, buy() { for (const g in p.res) if (p.owned[g]) p.res[g] = CONFIG.weapons[g].reserve; } },
    { label: 'GRENADE +1', cost: S.grenade, can: p.nades < 9, buy() { p.nades++; } },
    gun('smg'), gun('shotgun'), gun('sniper'),
    { label: 'HEAL +40', cost: S.heal, can: p.hp < p.maxHp, buy() { p.hp = Math.min(p.maxHp, p.hp + 40); } },
    { label: 'DAMAGE', ...lv('dmg', 8, S.upDmg), buy() { up.dmg++; } },
    { label: 'FIRE RATE', ...lv('rate', 5, S.upRate), buy() { up.rate++; } },
    { label: 'RELOAD', ...lv('reload', 5, S.upReload), buy() { up.reload++; } },
    { label: 'MAX HP', ...lv('hp', 8, S.upHP), buy() { up.hp++; p.maxHp += U_.hp; p.hp += U_.hp; } },
    { label: 'BARBED WIRE', ...def('wire') },
    { label: 'SPIKE STRIP', ...def('spikes') },
    { label: 'SANDBAGS', ...def('sandbags') },
  ];
}
function placeDefense(x) {
  const D = CONFIG.defenses[placing];
  defenses.push({ type: placing, x: clamp(x, 1, WORLD_L - 1), hp: D.hp, max: D.hp });
  placing = null; state = 'shop'; sfx('impact');
}

// ================= GAME FLOW =================
function startLevel(i, keep) {
  lvl = i; L = LEVELS[i]; buildLevel(L);
  for (const e of [...zombies, ...rags]) releaseRig(e.rig);
  zombies = []; rags = []; projs = []; tracers = []; pops = []; defenses = []; drops = []; arcs = []; rings = []; hurtDirs = []; nParts = 0;
  dctx.clearRect(0, 0, DW, DH); decalDirty = true; msg = null; shake = 0; hurtFlash = 0; screenFlash = 0;
  fade = 1; streak = 0; streakT = 0; streakShow = null; Object.keys(stats).forEach(k => stats[k] = 0);
  Object.assign(objective, { type: L.obj, meter: 100, fail: '', contested: false, boomed: false, truck: obstacles.find(b => b.kind === 'truck') || null });
  if (objective.truck) objective.truck.hp = objective.truck.max = 900;
  if (keep && player && player.alive) { player.hp = player.maxHp; money += 100; }
  else {
    Object.keys(up).forEach(k => up[k] = 0); player = newPlayer(); score = 0; runEarned = 0;
    money = L.startCash + progress.bank;
    if (progress.bank) { pops.push({ x: WORLD_L * .3 + 3, y: 1.8, z: 0, text: 'BANK +$' + progress.bank, t: 2.5, col: '#9fe870' }); progress.bank = 0; saveProgress(); }
  }
  player.x = WORLD_L * .3; player.z = 0; player.heading = 0; player.pitch = 0; player.inv = 0;
  cam.x = clamp(player.x + 1.4, CAM.half, WORLD_L - CAM.half);
  wave.n = 0; wave.phase = 'idle'; wave.spec = null;
  if (money > 0) state = 'shop'; else { state = 'play'; startWave(); }
}
function gameOver() { state = 'over'; recordBest(); bankRun(); }
function togglePause() { if (state === 'play') state = 'pause'; else if (state === 'pause') { state = 'play'; lockPointer(); } }
function moveDir(yaw, f, s) { const c = Math.cos(yaw), n = Math.sin(yaw); return [c * f - n * s, n * f + c * s]; } // forward/strafe to world x,z
function melee() { // quick shove with the gun: low damage, big knockback, costs stamina
  const p = player, M = CONFIG.move;
  if (!p.alive || state !== 'play' || p.meleeCd > 0 || p.stamina < M.meleeCost) return;
  p.meleeCd = M.meleeCd; p.meleeT = .25; p.stamina -= M.meleeCost; p.staminaT = .6; p.sprint = false; sfx('knife');
  const fx = Math.cos(p.heading), fz = Math.sin(p.heading); let hit = false;
  for (const z of zombies) {
    if (z.dead || z.rise > 0) continue;
    const ex = z.x - p.x, ez = z.z - p.z, along = ex * fx + ez * fz, across = Math.abs(-ex * fz + ez * fx);
    if (along > -.1 && along < 1.3 && across < .7) { hit = true; damageZombie(z, M.meleeDmg, false, fx, 0, fz, 7, z.x - fx * .1, 1.2 * z.s, z.z - fz * .1); z.flinch = .6; }
  }
  if (hit) { sfx('shove'); shake = Math.max(shake, 2); }
}
function updPlayer(dt) {
  const p = player, M = CONFIG.move;
  if (!p.alive) { p.deadT += dt; p.adsT = 0; if (p.deadT > 2.2 && state === 'play') gameOver(); return; }
  let f = 0, s = 0; const k = input.keys;
  if (k.KeyW || k.ArrowUp) f += 1; if (k.KeyS || k.ArrowDown) f -= 1;
  if (k.KeyD || k.ArrowRight) s += 1; if (k.KeyA || k.ArrowLeft) s -= 1;
  if (input.joy) { s += clamp((input.joy.x - input.joy.cx) / 22, -1, 1); f -= clamp((input.joy.y - input.joy.cy) / 22, -1, 1); }
  const m = Math.hypot(f, s); if (m > 1) { f /= m; s /= m; }
  p.moving = m > .15;
  const wantSprint = (k.ShiftLeft || k.ShiftRight || (input.joy && f > .9)) && f > .3 && !input.ads && p.reloadT <= 0;
  p.sprint = wantSprint && (p.sprint ? p.stamina > 0 : p.stamina > 15);
  if (p.sprint) { p.stamina = Math.max(0, p.stamina - M.drain * dt); p.staminaT = .6; } else if ((p.staminaT -= dt) <= 0) p.stamina = Math.min(M.stamina, p.stamina + M.regen * dt);
  const w = CONFIG.weapons[p.weapon];
  p.adsT = clamp(p.adsT + (input.ads && !p.sprint && !w.melee ? 7 : -7) * dt, 0, 1);
  const spd = CONFIG.playerSpeed * (p.sprint ? M.sprintMul : 1) * lerp(1, .55, p.adsT), [mx, mz] = moveDir(p.heading, f, s);
  p.x = clamp(p.x + mx * spd * dt, .5, WORLD_L - .5);
  p.z = clamp(p.z + mz * spd * dt, Z_MIN, Z_MAX);
  for (const z of zombies) { // zombies are solid
    const dx_ = p.x - z.x, dz_ = p.z - z.z, d = Math.hypot(dx_, dz_);
    if (d < .45 && d > 1e-4 && !(z.rise > 0)) { p.x = clamp(p.x + dx_ / d * (.45 - d), .5, WORLD_L - .5); p.z = clamp(p.z + dz_ / d * (.45 - d), Z_MIN, Z_MAX); }
  }
  pushOut(p, .3); p.z = clamp(p.z, Z_MIN, Z_MAX);
  if (p.moving) { const st0 = Math.floor(p.phase / Math.PI); p.phase += dt * (p.sprint ? 13 : 9) * Math.min(1, m); if (Math.floor(p.phase / Math.PI) !== st0) sfx('step', 100); }
  const held = input.mouseDown || input.fireTouch > 0;
  if (input.touch && held) { const t = nearestZombie(); if (t) { const a = Math.atan2(t.z - p.z, t.x - p.x); if (Math.abs(turnTo(0, a - p.heading, 9)) < .3) p.heading = turnTo(p.heading, a, dt * 2.5); } }
  p.kick = Math.max(0, p.kick - dt * 5);
  p.recoil = Math.max(0, p.recoil - dt * 9); p.cool -= dt; p.inv -= dt; p.swing = Math.max(0, p.swing - dt * 4); p.nadeCd -= dt; p.throwT = Math.max(0, p.throwT - dt * 4);
  p.swapT = Math.max(0, p.swapT - dt); p.meleeT = Math.max(0, p.meleeT - dt); p.meleeCd -= dt;
  placeCamera(); p.aimT = aimPoint(W / 2, H / 2);
  p.heat = Math.max(0, p.heat - dt * (w.spreadMax ? .12 : 1));
  if (p.reloadT > 0) { p.reloadT -= dt; if (p.reloadT <= 0) finishReload(); }
  const want = (w.auto || w.melee || input.touch) ? held || input.firePressed : input.firePressed;
  if (want) p.sprint = false; // shooting stops the sprint
  if (want && p.cool <= 0 && p.reloadT <= 0 && p.swapT <= 0) fire();
  input.firePressed = false;
  for (let i = drops.length - 1; i >= 0; i--) {
    const d = drops[i];
    if (Math.hypot(d.x - p.x, d.z - p.z) < .55) {
      if (d.type === 'ammo') { for (const g in p.res) if (p.owned[g] && p.res[g] !== Infinity) p.res[g] = Math.min(CONFIG.weapons[g].reserve, p.res[g] + CONFIG.weapons[g].mag * 2); }
      else if (d.type === 'med') p.hp = Math.min(p.maxHp, p.hp + 25);
      else p.nades = Math.min(9, p.nades + 1);
      pops.push({ x: d.x, y: 1.2, z: d.z, text: { ammo: '+AMMO', med: '+25 HP', nade: '+GRENADE' }[d.type], t: 1, col: '#9fe870' });
      drops.splice(i, 1); sfx('pickup', 50);
    }
  }
}
function updParts(dt) {
  const G = CONFIG.gravity;
  for (let i = 0; i < nParts; i++) {
    const q = PARTS[i]; q.life -= dt; let kill = q.life <= 0;
    if (!kill) {
      if (KIND[q.type] === 'smoke' || q.type === T.FIRE) {
        q.x += q.vx * dt; q.y += q.vy * dt; q.z += q.vz * dt; const d = Math.pow(.1, dt); q.vx *= d; q.vz *= d; q.vy *= Math.pow(.3, dt);
        q.size += dt * (q.type === T.SMOKE ? .35 : q.type === T.FIRE ? .05 : .2);
      } else {
        q.vy -= G * dt; q.x += q.vx * dt; q.y += q.vy * dt; q.z += q.vz * dt;
        if (q.z < Z_WALL + .02) { q.z = Z_WALL + .02; q.vz = -q.vz * .3; } else if (q.z > Z_WALL2 - .02) { q.z = Z_WALL2 - .02; q.vz = -q.vz * .3; }
        const qb = inBox(q.x, q.z, 0); if (qb && q.y < qb.h) kill = true;
        else if (q.y <= 0) {
          q.y = 0;
          if (q.type === T.CASING) {
            if (q.vy < -1.2) { q.vy = -q.vy * .38; q.vx *= .5; q.vz *= .5; }
            else { paint(q.x, q.z, 2, 1, q.css); paint(q.x, q.z, 1, 1, '#fff0b0'); kill = true; }
          } else if (q.type === T.SPARK) kill = true;
          else {
            const sp = Math.hypot(q.vx, q.vz);
            if (q.type === T.BLOOD && sp > 2.5) { const n = Math.min(6, sp / 1.1) | 0, ux = q.vx / sp * .04, uz = q.vz / sp * .04; for (let j = 0; j < n; j++) paint(q.x - ux * j, q.z - uz * j, 1, 1, q.css); }
            else paint(q.x, q.z, q.size > .045 ? 2 : 1, 1, q.css || '#5a0a0a');
            kill = true;
          }
        }
      }
    }
    if (kill) { PARTS[i] = PARTS[nParts - 1]; PARTS[nParts - 1] = q; nParts--; i--; }
  }
}
function fail(reason) { if (objective.fail || state !== 'play') return; objective.fail = reason; player.alive = false; player.deadT = 0; sfx('hurt'); }
function updObjective(dt) {
  const o = objective;
  if (state !== 'play' || wave.phase === 'idle') return;
  if (o.type === 'hold') {
    let zin = 0; for (const z of zombies) if (!z.dead && !(z.rise > 0) && Math.hypot(z.x - o.x, z.z - o.z) < o.r) zin++;
    const pin = player.alive && Math.hypot(player.x - o.x, player.z - o.z) < o.r;
    o.contested = zin > 0 && !pin;
    if (o.contested) { o.meter -= 5 * Math.min(zin, 4) * dt; sfx('alarm', 900); } else o.meter = Math.min(100, o.meter + 3 * dt);
    if (o.meter <= 0) fail('THE RADIO POINT WAS OVERRUN');
  } else if (o.type === 'protect' && o.truck) {
    const t = o.truck, k = t.hp / t.max;
    if (k < .5 && Math.random() < dt * 8) spawnP(T.SMOKE, t.x1 - .6, 1.6, t.z, rnd(-.2, .2), rnd(.6, 1.2), rnd(-.2, .2), hex3(k < .25 ? '#2a2622' : '#6a6660'), '', rnd(.2, .35), rnd(1.5, 2.5));
    if (k < .25 && Math.random() < dt * 10) spawnP(T.FIRE, t.x1 - .6 + rnd(-.3, .3), 1.5, t.z + rnd(-.4, .4), 0, rnd(.6, 1.4), 0, hex3(pick(['#ffc040', '#ff7a20'])), '', rnd(.08, .16), rnd(.4, .8));
    if (t.hp <= 0) { if (!o.boomed) { o.boomed = true; explode(t.x + 1, t.z); } fail('THE CONVOY TRUCK WAS DESTROYED'); }
  }
}
function updCamera(dt) {
  const t = player.x + Math.cos(player.heading) * 1.4;
  cam.x = clamp(cam.x + (t - cam.x) * Math.min(1, dt * 4), CAM.half, WORLD_L - CAM.half);
  cam.kx *= .8;
}
function update(dt) {
  time += dt;
  updMusic();
  fade = Math.max(0, fade - dt * 2.5); hitMark = Math.max(0, hitMark - dt);
  muzzleLight.intensity *= Math.pow(.0005, dt); boomLight.intensity *= Math.pow(.002, dt); boomT = Math.max(0, boomT - dt);
  if (state === 'title' || state === 'levels') { // menu backdrop: zombies shamble past
    for (const z of zombies) { z.heading = Math.PI; z.x -= z.cfg.speed * dt; z.phase += dt * z.cfg.speed * 7.7; poseZombie(z); if (z.x < cam.x - CAM.half - 1.5) z.x = cam.x + CAM.half + rnd(1, 6); }
    return;
  }
  if (state === 'play' && portrait()) { state = 'pause'; return; }
  if (state !== 'play' && state !== 'over') return;
  if (hitStop > 0) { hitStop -= dt; return; }
  if (state === 'play' && player.alive) stats.time += dt;
  if ((streakT -= dt) <= 0) streak = 0;
  if (streakShow && (streakShow.t -= dt) <= 0) streakShow = null;
  updPlayer(dt);
  updCamera(dt);
  if (state === 'play') updWave(dt);
  for (let i = zombies.length - 1; i >= 0; i--) { const z = zombies[i]; if (!z.dead) updZombie(z, dt); if (z.dead) zombies.splice(i, 1); }
  for (let i = 0; i < zombies.length; i++) for (let j = i + 1; j < zombies.length; j++) {
    const a = zombies[i], b = zombies[j], dx_ = a.x - b.x, dz_ = a.z - b.z, d2 = dx_ * dx_ + dz_ * dz_, r = .42 * (a.s + b.s) / 2;
    if (d2 < r * r && d2 > 1e-6) { const d = Math.sqrt(d2), f = (r - d) / d * .5 * Math.min(1, dt * 10); a.x += dx_ * f; a.z = clamp(a.z + dz_ * f, Z_MIN, Z_MAX); b.x -= dx_ * f; b.z = clamp(b.z - dz_ * f, Z_MIN, Z_MAX); }
  }
  for (let i = rags.length - 1; i >= 0; i--) {
    const r = rags[i];
    r.age += dt;
    if (r.sink) { r.sink -= dt; for (let j = 1; j < 45; j += 3) r.P[j] -= dt * .5; if (r.sink <= 0) { releaseRig(r.rig); rags.splice(i, 1); } continue; }
    for (const sp of r.spurts) if (sp.t > 0) { sp.t -= dt; if (Math.random() < .7) { const c = rnd(0, BLOOD3.length) | 0; spawnP(T.BLOOD, r.P[sp.i * 3], r.P[sp.i * 3 + 1], r.P[sp.i * 3 + 2], rnd(-1, 1), rnd(.8, 2.4), rnd(-1, 1), BLOOD3[c], BLOOD_CSS[c], .04, 3); } }
    if (r.age < 4 && Math.random() < .3) { const rr = r.age * .12 * r.s, a = rnd(0, 6.283); paint(r.x + Math.cos(a) * rr, r.z + Math.sin(a) * rr, 2, 1, pick(BLOOD_CSS)); }
    if (r.sleep) continue;
    const v = stepRag(r, dt, rags);
    r.still = v < .0015 ? r.still + 1 : 0;
    if (r.still > 45 && r.spurts.every(s => s.t <= 0)) r.sleep = true;
  }
  for (let i = projs.length - 1; i >= 0; i--) {
    const q = projs[i]; q.t += dt; q.vy -= CONFIG.gravity * dt; q.x += q.vx * dt; q.y += q.vy * dt; q.z += q.vz * dt;
    if (q.kind === 'nade') {
      if (q.y <= .05) { q.y = .05; if (q.vy < -1.5) { q.vy = -q.vy * .35; q.vx *= .55; q.vz *= .55; } else { q.vy = 0; q.vx *= .9; q.vz *= .9; } }
      if (q.z < Z_WALL + .1) { q.z = Z_WALL + .1; q.vz = -q.vz * .4; } else if (q.z > Z_WALL2 - .1) { q.z = Z_WALL2 - .1; q.vz = -q.vz * .4; }
      const gb = inBox(q.x, q.z, .05);
      if (gb && q.y < gb.h) { if (q.y - q.vy * dt >= gb.h - .03) { q.y = gb.h; q.vy = Math.abs(q.vy) * .35; q.vx *= .6; q.vz *= .6; } else { q.x -= q.vx * dt; q.z -= q.vz * dt; q.vx *= -.4; q.vz *= -.4; } }
      if (Math.random() < .5) spawnP(T.SMOKE, q.x, q.y + .05, q.z, 0, .4, 0, hex3('#bdbdbd'), '', .05, .5);
      if (q.t >= CONFIG.grenade.fuse) { explode(q.x, q.z); projs.splice(i, 1); }
    } else if (q.y <= 0) {
      const p = player;
      if (p.alive && Math.hypot(p.x - q.x, p.z - q.z) < .5) hurtPlayer(q.dmg, q.x - q.vx, q.z - q.vz);
      for (let j = 0; j < 10; j++) spawnP(T.ACID, q.x, .02, q.z, rnd(-1.5, 1.5), rnd(.5, 2), rnd(-1.5, 1.5), pick([hex3('#9be22a'), hex3('#6fae18')]), '#7fc020', .04, 2);
      spawnP(T.MIST, q.x, .1, q.z, 0, .3, 0, hex3('#7fc020'), '', .3, .5);
      projs.splice(i, 1);
    } else if (Math.random() < .5) spawnP(T.MIST, q.x, q.y, q.z, 0, 0, 0, hex3('#7fc020'), '', .08, .25);
  }
  updParts(dt);
  for (let i = defenses.length - 1; i >= 0; i--) {
    const d = defenses[i];
    if (d.hp <= 0) {
      const c = d.type === 'sandbags' ? '#9a8458' : '#777777';
      for (let j = 0; j < 20; j++) spawnP(T.CHUNK, d.x, rnd(.1, .5), rnd(Z_MIN, Z_MAX), rnd(-2, 2), rnd(1, 3), rnd(-1, 1), hex3(c), c, .07, 2);
      defenses.splice(i, 1); sfx('impact');
    }
  }
  for (let i = drops.length - 1; i >= 0; i--) if ((drops[i].t -= dt) <= 0) drops.splice(i, 1);
  for (let i = tracers.length - 1; i >= 0; i--) if ((tracers[i].t -= dt) <= 0) tracers.splice(i, 1);
  for (let i = arcs.length - 1; i >= 0; i--) if ((arcs[i].t -= dt) <= 0) arcs.splice(i, 1);
  for (let i = rings.length - 1; i >= 0; i--) if ((rings[i].t -= dt) <= 0) rings.splice(i, 1);
  for (let i = pops.length - 1; i >= 0; i--) { pops[i].t -= dt; pops[i].y += dt * .5; if (pops[i].t <= 0) pops.splice(i, 1); }
  if (msg && (msg.t -= dt) <= 0) msg = null;
  shake = shake > .1 ? shake * Math.pow(.0004, dt) : 0;
  hurtFlash = Math.max(0, hurtFlash - dt); screenFlash = Math.max(0, screenFlash - dt * 3);
  for (let i = hurtDirs.length - 1; i >= 0; i--) if ((hurtDirs[i].t -= dt) <= 0) hurtDirs.splice(i, 1);
  if (zombies.length && Math.random() < dt * .35 * Math.min(zombies.length, 6) / 6) { const z = pick(zombies); sfxAt('groan', z.x, z.z, 700); }
  updObjective(dt);
}

// ================= 3D DRAWING =================
const _side = new THREE.Vector3(), _tup = new THREE.Vector3(), _tfw = new THREE.Vector3(), _hup = new THREE.Vector3(), _hfw = new THREE.Vector3();
const EYE = hex3('#ffe070'), EYE_SP = hex3('#b7ff3a'), MOUTH = hex3('#2a0808'), STUMP = hex3('#6a0a0a'), SOCKET = hex3('#140808');
function drawBody(e, white) {
  if (RIGS.ready && e.kind === 'zombie') { if (!e.rig) e.rig = acquireRig(e); return drawRigged(e, white); }
  const P = e.P, S = e.s * U, cut = e.cut || NOCUT, miss = e.missing;
  const C = white ? WHITEP : e.col, B = white ? WHITEP : e.colB;
  _side.set(P[18] - P[9], P[19] - P[10], P[20] - P[11]).normalize();
  _tup.set(P[3] - P[6], P[4] - P[7], P[5] - P[8]).normalize();
  _tfw.crossVectors(_tup, _side).normalize();
  const side = _side, fw = _tfw;
  const Lg = (a, b, w, col) => { if (!cut[a + '-' + b]) seg(limbs, P, a, b, w * S, w * S, col, side); };
  const ball = (i, sx, sy, sz, col) => box(balls, P[i * 3], P[i * 3 + 1], P[i * 3 + 2], sx * S, sy * S, sz * S, col);
  const shoe = (i, col) => { orient(fw.x, fw.y, fw.z, side.x, side.y, side.z); box(solid, P[i * 3] + fw.x * 1.3 * S, P[i * 3 + 1] + .9 * S, P[i * 3 + 2] + fw.z * 1.3 * S, 3.6 * S, 6.6 * S, 2.6 * S, col, _q); };
  // legs, hips, torso
  Lg(LHIP, LKN, 4.6, B.pants); Lg(LKN, LFT, 3.9, B.pants); if (!cut['9-10']) { ball(LKN, 4.3, 4.3, 4.3, B.pants); shoe(LFT, B.shoe); }
  Lg(RHIP, RKN, 4.6, C.pants); Lg(RKN, RFT, 3.9, C.pants); if (!cut['12-13']) { ball(RKN, 4.3, 4.3, 4.3, C.pants); shoe(RFT, C.shoe); }
  seg(solid, P, LHIP, RHIP, 5.4 * S, 5 * S, C.pants, fw, 3.6 * S);
  seg(solid, P, PELV, NECK, 8.4 * S, 5.4 * S, C.shirt, side, 1.4 * S);
  // arms: capsules joined by round shoulders and elbows
  const arm = (sh, el, ha, cs) => { ball(sh, 4.4, 4.4, 4.4, cs.shirt); Lg(sh, el, 3.4, cs.shirt); if (!cut[sh + '-' + el]) ball(el, 3.1, 3.1, 3.1, cs.skin); Lg(el, ha, 2.9, cs.skin); ball(ha, 3.1, 3.5, 2.4, cs.skin); };
  if (miss !== -1) arm(LSH, LEL, LHA, B); else ball(LSH, 3.6, 3, 3.6, STUMP);
  if (miss !== 1) arm(RSH, REL, RHA, C); else ball(RSH, 3.6, 3, 3.6, STUMP);
  // head in its own frame: skull, hair, ears, sunken glowing eyes, mouth
  orient(P[0] - P[3], P[1] - P[4], P[2] - P[5], side.x, side.y, side.z); _hq.copy(_q);
  _hup.set(P[0] - P[3], P[1] - P[4], P[2] - P[5]).normalize(); _hfw.crossVectors(_hup, side).normalize();
  const hx = P[0], hy = P[1], hz = P[2];
  const hp = (du, dv, dw, sx, sy, sz, c, mesh = balls, k = 1) => box(mesh, hx + (_hfw.x * du + _hup.x * dv + side.x * dw) * S, hy + (_hfw.y * du + _hup.y * dv + side.y * dw) * S, hz + (_hfw.z * du + _hup.z * dv + side.z * dw) * S, sx * S, sy * S, sz * S, c, _hq, k);
  if (!cut['0-1']) hp(-1, -4.8, 0, 3, 4, 3, C.skin, limbs); // neck
  hp(0, 0, 0, 7, 8.2, 7.6, C.skin);
  hp(-.7, 2.6, 0, 7.3, 3.2, 7.6, C.hair, solid);
  hp(0, .2, 3.6, 1.2, 2, 1.4, C.skin); hp(0, .2, -3.6, 1.2, 2, 1.4, C.skin);
  hp(3.1, .7, 1.5, 1.8, 1.4, 1.2, SOCKET); hp(3.1, .7, -1.5, 1.8, 1.4, 1.2, SOCKET);
  const ec = e.type === 'spitter' ? EYE_SP : EYE;
  hp(3.6, .7, 1.5, 1.4, 1.4, 1, ec, glow, .9); hp(3.6, .7, -1.5, 1.4, 1.4, 1, ec, glow, .9);
  hp(3.3, -2.3, .2, 3.2, 1.1, 1.2, MOUTH);
  if (cut['0-1']) ball(NECK, 3.6, 2.4, 3.6, STUMP);
  if (white) return;
  for (const gd of e.gore) { // wet blood soaked into clothes and skin
    if (cut[gd.a + '-' + gd.b] || (miss === -1 && (gd.a === LSH || gd.a === LEL)) || (miss === 1 && (gd.a === RSH || gd.a === REL))) continue;
    const a = gd.a * 3, b = gd.b * 3, x = lerp(P[a], P[b], gd.t) + (side.x * gd.o1 + fw.x * gd.o2) * S, y = lerp(P[a + 1], P[b + 1], gd.t) + (side.y * gd.o1 + fw.y * gd.o2) * S, z = lerp(P[a + 2], P[b + 2], gd.t) + (side.z * gd.o1 + fw.z * gd.o2) * S;
    box(balls, x, y, z, gd.sz * S, gd.sz * .7 * S, gd.sz * S, gd.c);
  }
}
function drawRigged(e, white) { // textured human skin posed from the skeleton; severed parts and stumps drawn on top
  const r = e.rig, cut = e.cut || NOCUT, P = e.P, S = e.s * U, C = e.col;
  r.root.visible = true;
  const hide = (k, on) => { if (r.b[k]) r.b[k].scale.setScalar(on ? .001 : 1); };
  hide('head', !!cut['0-1']); hide('lArm', !!cut['3-4'] || e.missing === -1); hide('rArm', !!cut['6-7'] || e.missing === 1); hide('lUp', !!cut['9-10']); hide('rUp', !!cut['12-13']);
  driveRig(r, P, e.s, !e.O);
  const g = e.gore.length; // clothes and skin darken with blood as hits pile up
  if (g !== r.gore || white !== r.white) { r.gore = g; r.white = white; const k = Math.min(.6, g / 26); r.mats.forEach((m, i) => { m.color.copy(r.base[i]).multiply(r.tint).lerp(BLOODY, k); m.emissive.setScalar(white ? .4 : 0); }); }
  _side.set(P[18] - P[9], P[19] - P[10], P[20] - P[11]).normalize();
  const ball = (i, sx, sy, sz, col) => box(balls, P[i * 3], P[i * 3 + 1], P[i * 3 + 2], sx * S, sy * S, sz * S, col);
  if (cut['0-1']) { ball(HEAD, 7, 8.2, 7.6, C.skin); ball(NECK, 3.6, 2.4, 3.6, STUMP); }
  if (cut['3-4']) { seg(limbs, P, LEL, LHA, 2.9 * S, 2.9 * S, C.skin, _side); ball(LSH, 3.6, 3, 3.6, STUMP); }
  if (cut['6-7']) { seg(limbs, P, REL, RHA, 2.9 * S, 2.9 * S, C.skin, _side); ball(RSH, 3.6, 3, 3.6, STUMP); }
  if (cut['9-10']) { seg(limbs, P, LKN, LFT, 3.9 * S, 3.9 * S, C.pants, _side); ball(LHIP, 4, 3, 4, STUMP); }
  if (cut['12-13']) { seg(limbs, P, RKN, RFT, 3.9 * S, 3.9 * S, C.pants, _side); ball(RHIP, 4, 3, 4, STUMP); }
  if (e.missing) ball(e.missing < 0 ? LSH : RSH, 3.6, 3, 3.6, STUMP);
  if (L.dark > .2 && !cut['0-1'] && r.b.head) { // eyes catch the light after dark
    r.b.head.getWorldPosition(_a3); _tup.set(P[3] - P[6], P[4] - P[7], P[5] - P[8]).normalize(); _tfw.crossVectors(_tup, _side).normalize();
    const ec = e.type === 'spitter' ? EYE_SP : EYE, s = e.s;
    for (const sd of [-1, 1]) box(glow, _a3.x + _tup.x * .08 * s + _tfw.x * .09 * s + _side.x * .032 * sd * s, _a3.y + _tup.y * .08 * s + _tfw.y * .09 * s, _a3.z + _tup.z * .08 * s + _tfw.z * .09 * s + _side.z * .032 * sd * s, .035 * s, .035 * s, 1, ec, IDQ, .8);
  }
}
const _gq = new THREE.Quaternion(), _gm = new THREE.Matrix4();
const VM_SKIN = C3(PLAYER_PAL_SKIN, .72), VM_SLEEVE = C3([86, 92, 70]), VM_GLOVE = C3([30, 30, 28]); // arms sit inches from the lens: darker reads as normal skin
const WOOD = new Set(['#6b4a2a', '#4a3a26', '#3a3328', '#2d3a1a']);
function drawGun3D(p) {
  const [gx, gy, gz] = viewGrip(p), S = VM_S;
  _gm.makeBasis(GX, GY, GZ); _gq.setFromRotationMatrix(_gm);
  for (const r of GUNS[p.weapon]) { // steel parts are metallic, stocks and grips are not
    const cx = (r[0] + r[2] / 2) * S, cy = -(r[1] + r[3] / 2) * S;
    box(WOOD.has(r[4]) ? solid : metal, gx + GX.x * cx + GY.x * cy, gy + GX.y * cx + GY.y * cy, gz + GX.z * cx + GY.z * cy, r[2] * S, r[3] * S, (r[3] > 2 ? 2 : 1.4) * S, hex3(r[4]), _gq);
  }
  // arms: gloved hands on the gun, forearms and sleeves running out of the bottom of the screen
  const c = camera.position, arm = (hx, hy, hz, dz) => {
    const ex = c.x + GX.x * .12 - GY.x * .45 + GZ.x * dz, ey = c.y - .45, ez = c.z + GX.z * .12 - GY.z * .45 + GZ.z * dz;
    const mx = lerp(hx, ex, .45), my = lerp(hy, ey, .45), mz = lerp(hz, ez, .45);
    line3(limbs, hx, hy, hz, mx, my, mz, .06, VM_SKIN); line3(limbs, mx, my, mz, ex, ey, ez, .085, VM_SLEEVE);
    box(balls, hx, hy, hz, .065, .055, .07, VM_GLOVE);
  };
  arm(gx, gy - .01, gz, .24);
  if (p.weapon === 'rifle' || p.weapon === 'shotgun' || p.weapon === 'smg' || p.weapon === 'sniper') { const k = 9 * S; arm(gx + GX.x * k, gy + GX.y * k - .01, gz + GX.z * k, -.05); }
}
const DEF_C = { post: hex3('#4a3a28'), wire: hex3('#9a9a9a'), plank: hex3('#3a2c1c'), spike: hex3('#8a8a8a'), bagD: hex3('#7e6e4e'), bag: hex3('#a89468') };
const Q45 = new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI / 4, 0, Math.PI / 4));
function drawDefense(d, ghost) {
  const k = ghost ? .6 : .55 + .45 * d.hp / d.max, z0 = Z_MIN - .4, z1 = Z_MAX + .4;
  if (d.type === 'wire') {
    for (let z = z0; z <= z1; z += .9) box(solid, d.x, .32, z, .06, .64, .06, DEF_C.post, IDQ, k);
    for (let z = z0; z <= z1; z += .05) { const a = z * 9; box(metal, d.x + Math.cos(a) * .2, .32 + Math.sin(a) * .2, z, .02, .02, .05, DEF_C.wire, IDQ, k); }
  } else if (d.type === 'spikes') {
    box(solid, d.x, .03, (z0 + z1) / 2, .36, .06, z1 - z0, DEF_C.plank, IDQ, k);
    for (let z = z0 + .1; z <= z1; z += .28) for (const ox of [-.1, .1]) box(metal, d.x + ox, .1, z, .11, .11, .11, DEF_C.spike, Q45, k);
  } else {
    for (let z = z0; z <= z1; z += .5) for (let j = 0; j < 3; j++) { const oz = (j & 1) * .25; box(solid, d.x, .1 + j * .18, z + oz, .5, .2, .46, j & 1 ? DEF_C.bagD : DEF_C.bag, IDQ, k); }
  }
}
const DROP_C = { ammo: hex3('#4a5a2c'), band: hex3('#d8b040'), med: hex3('#e8e8e0'), red: hex3('#c02020'), nade: hex3('#3c5a2a') };
const _dq = new THREE.Quaternion(), _ax = new THREE.Vector3(0, 1, 0);
const TRACER = hex3('#ffe2a0'), FLASH = hex3('#fff2c0'), FLASH2 = hex3('#ffa040'), RING = hex3('#ffd090'), WHITE_GLOW = hex3('#ffffff');
function render3D() {
  placeCamera();
  for (const m of DYN) m.count = 0;
  for (const e of zombies) if (e.rig) e.rig.root.visible = false; // only rigs drawn this frame stay visible
  for (const r of rags) if (r.rig) r.rig.root.visible = false;
  const fps = fpsView(), cx0 = fps ? player.x : cam.x, vis = x => Math.abs(x - cx0) < (fps ? 40 : CAM.half + 3);
  for (const z of zombies) if (!z.dead && vis(z.x)) drawBody(z, z.hitT > 0);
  for (const r of rags) if (vis(r.x)) drawBody(r, false);
  if (fps && player.alive && !scoped(player)) drawGun3D(player);
  const tr = objective.truck;
  if (tr && vis(tr.x)) { // convoy truck darkens as it takes damage
    const k = .4 + .6 * Math.max(0, tr.hp) / tr.max, olive = hex3('#4e5a36'), oliveD = hex3('#3a4428'), dark = hex3('#161616'), glass = hex3('#1c242c');
    box(solid, tr.x0 + 1.55, 1.4, tr.z, 3.1, 1.5, tr.d, olive, IDQ, k); box(metal, tr.x0 + 2.1, .62, tr.z, 4.3, .22, tr.d * .9, dark, IDQ, k);
    box(metal, tr.x1 - .65, 1.05, tr.z, 1.25, 1.1, tr.d * .95, oliveD, IDQ, k); box(metal, tr.x1 - .05, 1.25, tr.z, .1, .5, tr.d * .8, glass, IDQ, k);
    for (const wx of [tr.x0 + .6, tr.x0 + 1.6, tr.x1 - .7]) for (const sz of [-1, 1]) box(cyls, wx, .36, tr.z + sz * tr.d * .46, .72, .26, .72, dark, QX90, k);
  }
  if (fps && L.obj === 'hold') {
    const o = objective, col = o.contested ? hex3('#ff3020') : hex3('#9fe870');
    for (let i = 0; i < 48; i++) { const a = i / 48 * 6.283 + time * .3; box(glow, o.x + Math.cos(a) * o.r, .05, o.z + Math.sin(a) * o.r, .2, .2, 1, col, IDQ, .5 + .3 * Math.sin(time * 5)); }
    if (Math.sin(time * 4) > 0) box(glow, 22.15, 2.55, 0, .3, .3, 1, col, IDQ, 1.5);
  }
  for (const d of defenses) if (vis(d.x)) drawDefense(d, false);
  if (state === 'place') { const gp = groundAt(input.mx, input.my); if (gp) drawDefense({ type: placing, x: clamp(gp.x, 1, WORLD_L - 1), hp: 1, max: 1 }, true); }
  for (const d of drops) {
    if (!vis(d.x) || (d.t < 3 && (time * 8 | 0) % 2)) continue;
    _dq.setFromAxisAngle(_ax, time * 2 + d.x); const y = .22 + Math.abs(Math.sin(time * 4 + d.x)) * .1;
    if (d.type === 'ammo') { box(solid, d.x, y, d.z, .36, .24, .24, DROP_C.ammo, _dq); box(metal, d.x, y + .03, d.z, .37, .06, .25, DROP_C.band, _dq); }
    else if (d.type === 'med') { box(solid, d.x, y, d.z, .34, .26, .26, DROP_C.med, _dq); box(solid, d.x, y, d.z, .35, .06, .2, DROP_C.red, _dq); box(solid, d.x, y, d.z, .35, .2, .06, DROP_C.red, _dq); }
    else box(cyls, d.x, y, d.z, .14, .2, .14, DROP_C.nade, _dq);
    box(glow, d.x, .05, d.z, .7, .7, 1, DROP_C.band, IDQ, .2 + .1 * Math.sin(time * 6));
  }
  for (const q of projs) { if (q.kind === 'nade') box(cyls, q.x, q.y, q.z, .09, .12, .09, DROP_C.nade); else box(glow, q.x, q.y, q.z, .3, .3, 1, EYE_SP); }
  for (let i = 0; i < nParts; i++) {
    const q = PARTS[i], kd = KIND[q.type], f = Math.max(0, q.life / q.max);
    if (kd === 'solid') { if (q.type === T.CASING) box(metal, q.x, q.y + .01, q.z, .024, .01, .01, q.col); else box(balls, q.x, q.y + q.size / 2, q.z, q.size, q.size * .8, q.size, q.col); }
    else if (kd === 'glow') box(glow, q.x, q.y, q.z, q.size * 2.6, q.size * 2.6, 1, q.col, IDQ, f * 1.6);
    else { const s = q.size * 1.8 * Math.min(1, f * 2.2); box(smoke, q.x, q.y, q.z, s, s, 1, q.col); }
  }
  for (const t of tracers) { const a = t.t / .08; line3(beam, t.x0, t.y0, t.z0, t.x1, t.y1, t.z1, .008, TRACER, a * 1.5); line3(beam, t.x0, t.y0, t.z0, t.x1, t.y1, t.z1, .02, FLASH2, a * .3); }
  if (flashFrames > 0 && muzzle) {
    const b = muzzle.big, l = (.28 + muzzle.v * .2) * b;
    box(glow, muzzle.x, muzzle.y, muzzle.z, .07 * b, .07 * b, 1, FLASH, IDQ, 1.6);
    line3(beam, muzzle.x, muzzle.y, muzzle.z, muzzle.x + GX.x * l * .4, muzzle.y + GX.y * l * .4, muzzle.z + GX.z * l * .4, .025 * b, FLASH2, 2);
    flashFrames--;
  }
  for (const a of arcs) {
    const k = a.t / .15, fx = Math.cos(a.h), fz = Math.sin(a.h);
    for (let i = 0; i < 9; i++) { const an = a.p + 1.5 - i * .3, r = .55; box(glow, a.x + fx * Math.cos(an) * r, a.y + Math.sin(an) * r, a.z + fz * Math.cos(an) * r, .1, .1, 1, WHITE_GLOW, IDQ, k); }
  }
  for (const r of rings) {
    const k = r.t / .35, rad = .2 + (1 - k) * CONFIG.grenade.radius * 1.1;
    for (let i = 0; i < 32; i++) { const a = i / 32 * 6.283; box(glow, r.x + Math.cos(a) * rad, .1, r.z + Math.sin(a) * rad, .5, .5, 1, RING, IDQ, k * 1.5); }
  }
  for (let x = ROAD_X0 + 1.2; x < ROAD_X0 + ROAD_LEN; x += 2.4) { if (!vis(x)) continue; if (Math.sin(time * 2 + x * .7) > 0) box(glow, x, .3, Z_WALL + .03, .12, .12, 1, C3(L.pal.light), IDQ, 1.2); }
  for (const m of DYN) { m.instanceMatrix.needsUpdate = true; m.instanceColor.needsUpdate = true; }
  if (decalDirty && frameNo % 3 === 0) { decalTex.needsUpdate = true; decalDirty = false; }
  // lamps: the three nearest get real lights on dark levels
  const near = LAMPS.slice().sort((a, b) => Math.abs(a - cx0) - Math.abs(b - cx0));
  lampLights.forEach((l, i) => { const x = near[i] ?? -100; l.position.set(x + .75, 4, Z_WALL + .9); });
  const gu = grade.uniforms, menu = state === 'title' || state === 'levels' || state === 'over' || state === 'levelclear';
  gu.time.value = time % 100; const nowR = performance.now(), dtR = Math.min(.25, (nowR - (render3D.lt ?? nowR)) / 1000); render3D.lt = nowR; gu.bars.value = lerp(gu.bars.value, menu ? 1 : 0, 1 - Math.exp(-dtR * 5));
  const turn = Math.abs(turnTo(0, player.heading - (render3D.lastH ?? player.heading), 9)); render3D.lastH = player.heading;
  gu.blur.value = fps ? clamp(turn * .35 + (player.sprint ? .006 : 0), 0, .03) : 0; gu.ca.value = .006 + hurtFlash * .03;
  bokeh.enabled = qLevel === 0 && (menu || player.adsT > .3); // depth of field: aiming focuses on the target, menus on the street
  if (bokeh.enabled) bokeh.uniforms.focus.value = menu ? 7 : Math.max(1, camera.position.distanceTo(_a3.set(player.aimT.x, player.aimT.y, player.aimT.z)));
  composer.render();
}
function fpsView() { return state !== 'title' && state !== 'levels'; }
function placeCamera() {
  const sh = settings.shake ? shake * .02 : 0, fps = fpsView(), fov = fps ? settings.fov * lerp(1, CONFIG.weapons[player.weapon].zoom || CONFIG.move.adsMul, player.adsT) : CAM.fov;
  if (camera.fov !== fov) { camera.fov = fov; camera.updateProjectionMatrix(); }
  let sx;
  if (fps) {
    const p = player, d = p.alive ? 0 : Math.min(1, p.deadT * 1.6), bob = p.alive && p.moving ? Math.abs(Math.sin(p.phase)) * .04 : 0;
    const y = lerp(EYE_H * p.s + bob, .28, d), pt = p.pitch + p.kick;
    camera.position.set(p.x + rnd(-sh, sh) * .3, y + rnd(-sh, sh) * .3, p.z + rnd(-sh, sh) * .3);
    camera.lookAt(p.x + Math.cos(p.heading) * Math.cos(pt), y + Math.sin(pt), p.z + Math.sin(p.heading) * Math.cos(pt));
    if (d > 0) camera.rotateZ(d * .9); // fall over when dead
    sx = p.x + Math.cos(p.heading) * 8;
  } else {
    camera.position.set(cam.x - 4 + cam.kx + rnd(-sh, sh), CAM.y + rnd(-sh, sh), CAM.z);
    camera.lookAt(cam.x + 6, CAM.lookY, CAM.lookZ);
    sx = cam.x;
  }
  camera.updateMatrixWorld();
  sky.position.copy(camera.position); stars.position.copy(camera.position); flare.position.copy(camera.position).addScaledVector(SUN_DIR, 120);
  sun.position.set(sx + SUN_DIR.x * 30, SUN_DIR.y * 30, SUN_DIR.z * 30); sun.target.position.set(sx, 0, 0); sun.target.updateMatrixWorld();
}

// ================= HUD / MENUS =================
function render() {
  UI = []; frameNo++;
  render3D();
  ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, W, H); ctx.imageSmoothingEnabled = false; ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
  if (screenFlash > 0) { ctx.fillStyle = `rgba(255,190,120,${Math.min(.35, screenFlash).toFixed(3)})`; ctx.fillRect(0, 0, W, H); }
  for (const pp of pops) { const [sx, sy, sz] = toScreen(pp.x, pp.y, pp.z); if (sz < 1) { ctx.globalAlpha = Math.min(1, pp.t * 2); text(ctx, pp.text, sx | 0, sy | 0, pp.col, 1, 'center', true); } }
  ctx.globalAlpha = 1;
  if (hurtFlash > 0 || (state === 'play' && player.alive && player.hp < player.maxHp * .3)) {
    const a = Math.max(hurtFlash, player.hp < player.maxHp * .3 ? .15 + .1 * Math.sin(time * 6) : 0);
    ctx.fillStyle = `rgba(150,0,0,${a.toFixed(2)})`; ctx.fillRect(0, 0, W, 10); ctx.fillRect(0, H - 10, W, 10); ctx.fillRect(0, 0, 10, H); ctx.fillRect(W - 10, 0, 10, H);
  }
  if (state === 'title') drawTitle(ctx);
  else if (state === 'levels') drawLevels(ctx);
  else {
    drawHUD(ctx);
    if (msg && state === 'play') { ctx.globalAlpha = Math.min(1, msg.t * 2); text(ctx, msg.text, W / 2, 64, '#fff', 4, 'center', true); text(ctx, msg.sub, W / 2, 90, '#e8c860', 2, 'center', true); ctx.globalAlpha = 1; }
    if (state === 'shop') drawShop(ctx);
    else if (state === 'place') drawPlace(ctx);
    else if (state === 'pause') drawPause(ctx);
    else if (state === 'over') drawOver(ctx);
    else if (state === 'levelclear') drawLevelClear(ctx);
  }
  if (state !== 'play' && document.pointerLockElement) document.exitPointerLock();
  const cur = state === 'play' && !input.touch && player.alive ? 'none' : 'default';
  if (uiCv.style.cursor !== cur) uiCv.style.cursor = cur;
  if (fade > 0) { ctx.fillStyle = `rgba(0,0,0,${fade.toFixed(2)})`; ctx.fillRect(0, 0, W, H); }
  if (portrait()) {
    ctx.fillStyle = 'rgba(0,0,0,.88)'; ctx.fillRect(0, 0, W, H);
    ctx.save(); ctx.translate(W / 2, 100); ctx.rotate(Math.sin(time * 2) > 0 ? Math.PI / 2 : 0); icon(ctx, 'phone', -15, -21, 6); ctx.restore();
    text(ctx, 'ROTATE TO LANDSCAPE', W / 2, 160, '#fff', 3, 'center', true);
  }
}
function portrait() { return input.touch && innerHeight > innerWidth; }
function fmtTime(t) { const m = Math.floor(t / 60), s = Math.floor(t % 60); return m + ':' + (s < 10 ? '0' : '') + s; }
function toggleSound() { settings.sound = A.on = !settings.sound; if (A.master) A.master.gain.value = A.on ? .6 : 0; saveSettings(); }
function toggleMusic() { settings.music = !settings.music; saveSettings(); }
function goFullscreen() {
  try {
    const d = document.documentElement, f = d.requestFullscreen || d.webkitRequestFullscreen, r = f && f.call(d);
    if (r && r.catch) r.catch(() => { });
    if (screen.orientation && screen.orientation.lock) screen.orientation.lock('landscape').catch(() => { });
  } catch (e) { }
}
function panel(c, x, y, w, h, col = 'rgba(10,10,10,.55)', border = 'rgba(255,255,255,.22)') {
  c.fillStyle = col; c.fillRect(x, y, w, h); c.strokeStyle = border; c.lineWidth = 1; c.strokeRect(x + .5, y + .5, w - 1, h - 1);
}
function button(c, x, y, w, h, label, fn, opts = {}) {
  UI.push({ x, y, w, h, fn, hold: opts.hold, disabled: opts.disabled });
  panel(c, x, y, w, h, opts.disabled ? 'rgba(30,30,30,.55)' : opts.col || 'rgba(14,14,14,.6)', opts.border);
  if (label) text(c, label, x + w / 2, y + (h - 5 * (opts.s || 2)) / 2 | 0, opts.disabled ? '#777' : opts.tc || '#fff', opts.s || 2, 'center', true);
}
function drawMinimap(c, x, y, w, h) {
  panel(c, x, y, w, h, 'rgba(0,0,0,.5)');
  const sx = w / WORLD_L, gy = z => y + 1 + (clamp(z, Z_MIN, Z_MAX) - Z_MIN) / (Z_MAX - Z_MIN) * (h - 3);
  c.fillStyle = '#8a8a8a'; for (const d of defenses) c.fillRect(x + d.x * sx, y + 1, 1, h - 2);
  c.fillStyle = '#f0d040'; for (const d of drops) c.fillRect(x + d.x * sx, gy(d.z), 1, 1);
  for (const z of zombies) {
    if (z.dead) continue;
    const big = z.type === 'brute' ? 2 : 1;
    c.fillStyle = big > 1 ? '#ff7040' : '#d02020'; c.fillRect(clamp(x + z.x * sx, x, x + w - 2), gy(z.z), big, big);
  }
  if (player.alive) { const px = x + player.x * sx, pz = gy(player.z); c.fillStyle = '#7cff5a'; c.fillRect(px - 1, pz - 1, 2, 2); c.fillStyle = '#c8ffb0'; c.fillRect(px + Math.cos(player.heading) * 3, pz + Math.sin(player.heading) * 2, 1, 1); }
}
function drawAmmo(c, x, p, w) {
  const wn = p.weapon;
  text(c, w.name, x, 224, '#aaa', 1);
  if (w.melee) { text(c, '--', x, 234, '#fff', 2, 'left', true); return; }
  const mag = p.mag[wn], shell = wn === 'shotgun', bw = shell ? 3 : 2, gap = shell ? 4 : 3, low = mag <= Math.ceil(w.mag * .25);
  for (let i = 0; i < w.mag; i++) {
    const bx = x + i * gap, on = i < mag;
    c.fillStyle = on ? (shell ? '#c03020' : '#d8b040') : '#2a2622'; c.fillRect(bx, 233, bw, 6);
    if (on) { c.fillStyle = shell ? '#d8b040' : '#fff0b0'; c.fillRect(bx, 233, bw, shell ? 2 : 1); }
  }
  if (p.reloadT > 0) { const t = 1 - p.reloadT / (w.reload * (1 - up.reload * CONFIG.upgrade.reload)); c.fillStyle = '#e8c860'; c.fillRect(x, 241, w.mag * gap * clamp(t, 0, 1), 2); }
  text(c, p.res[wn] === Infinity ? 'INF' : p.res[wn], x, 246, '#fff', 2, 'left', true);
  if (p.reloadT > 0) text(c, 'RELOADING', x + 40, 250, '#e8c860', 1);
  else if (low && (time * 4 | 0) % 2) text(c, mag ? 'LOW AMMO' : input.touch ? 'RELOAD' : 'RELOAD [R]', x + 40, 250, '#e04040', 1);
}
function drawHUD(c) {
  const p = player, w = CONFIG.weapons[p.weapon];
  button(c, 4, 4, 24, 24, '', togglePause);
  c.fillStyle = '#fff'; c.fillRect(11, 10, 3, 12); c.fillRect(18, 10, 3, 12);
  const k = clamp(p.hp / p.maxHp, 0, 1);
  icon(c, 'heart', 33, 5); panel(c, 45, 6, 92, 9);
  c.fillStyle = k > .3 ? '#5fbf3a' : (time * 6 | 0) % 2 ? '#d03a2a' : '#801a10'; c.fillRect(46, 7, 90 * k, 7);
  c.fillStyle = 'rgba(255,255,255,.25)'; c.fillRect(46, 7, 90 * k, 2);
  text(c, Math.ceil(p.hp) + '/' + p.maxHp, 49, 9, '#fff', 1);
  panel(c, 45, 16, 92, 4, 'rgba(0,0,0,.5)'); c.fillStyle = p.stamina < 15 ? '#c08020' : '#e8d070'; c.fillRect(46, 17, 90 * p.stamina / CONFIG.move.stamina, 2);
  icon(c, 'coin', 33, 22); text(c, money, 45, 24, '#ffd84a', 2, 'left', true);
  icon(c, 'skull', 33, 35); text(c, stats.kills, 45, 37, '#ddd', 1, 'left', true);
  text(c, L.name, W / 2, 3, '#bbb', 1, 'center', true);
  text(c, 'WAVE ' + wave.n + (L.waves === Infinity ? '' : '/' + L.waves), W / 2, 10, '#fff', 2, 'center', true);
  if (wave.spec && wave.phase !== 'idle') {
    const total = wave.spec.list.length, left = wave.queue.length + zombies.length;
    panel(c, W / 2 - 50, 23, 100, 5, 'rgba(0,0,0,.5)'); c.fillStyle = '#c02020'; c.fillRect(W / 2 - 49, 24, 98 * clamp(1 - left / total, 0, 1), 3);
    text(c, L.obj === 'survive' && wave.phase === 'spawn' ? 'SURVIVE ' + fmtTime(Math.max(0, wave.timer)) : left + ' LEFT', W / 2, 30, '#ccc', 1, 'center', true);
  }
  if (L.obj === 'hold') { const o = objective, bad = o.contested && (time * 6 | 0) % 2; text(c, 'RADIO POINT ' + Math.ceil(o.meter) + '%' + (o.contested ? ' - RETAKE IT' : ''), W / 2, 38, bad ? '#ff4030' : '#9fe870', 1, 'center', true); }
  if (L.obj === 'protect' && objective.truck) { const t = objective.truck, k = Math.max(0, t.hp) / t.max; text(c, 'CONVOY TRUCK', W / 2, 38, '#ddd', 1, 'center', true); panel(c, W / 2 - 40, 45, 80, 4, 'rgba(0,0,0,.5)'); c.fillStyle = k > .3 ? '#7cc050' : '#d03a2a'; c.fillRect(W / 2 - 39, 46, 78 * k, 2); }
  if (streakShow) text(c, 'X' + streakShow.n + ' CHAIN +$' + streakShow.bonus, W / 2, 54, '#ff9a30', streakShow.t > 1.1 ? 3 : 2, 'center', true);
  drawMinimap(c, W - 130, 6, 92, 14);
  text(c, 'SCORE ' + score, W - 38, 24, '#ddd', 1, 'right', true);
  if (state === 'play' && (wave.phase === 'countdown' || (wave.phase === 'spawn' && wave.queue.length))) {
    c.globalAlpha = .45 + .55 * (.5 + .5 * Math.sin(time * 8)); c.fillStyle = '#e01010';
    c.beginPath(); c.moveTo(W - 34, 6); c.lineTo(W - 6, 16); c.lineTo(W - 34, 26); c.closePath(); c.fill();
    if (L.flank > 0) { c.beginPath(); c.moveTo(32, 46); c.lineTo(6, 55); c.lineTo(32, 64); c.closePath(); c.fill(); }
    c.globalAlpha = 1;
  }
  const ring = (a, col, r) => { // marker on a ring around the crosshair, pointing to world angle a
    const rel = a - player.heading, fc = Math.cos(rel), rc = Math.sin(rel), x = W / 2 + rc * 100, y = H / 2 - fc * 62;
    c.fillStyle = col; c.fillRect(x - r, y - r, r * 2, r * 2);
  };
  if (p.alive) for (const z of zombies) { // threats outside the view
    if (z.dead) continue;
    const a = Math.atan2(z.z - p.z, z.x - p.x), d = Math.hypot(z.x - p.x, z.z - p.z);
    if (d < 14 && Math.abs(turnTo(0, a - p.heading, 9)) > .85) ring(a, `rgba(224,32,32,${(1 - d / 14).toFixed(2)})`, 2);
  }
  for (const h of hurtDirs) ring(h.a, `rgba(255,40,30,${(h.t * .8).toFixed(2)})`, 5);
  WEAP_ORDER.forEach((wn, i) => {
    const y = 68 + i * 28, own = p.owned[wn], act = p.weapon === wn;
    button(c, 4, y, 34, 26, '', () => selectWeapon(wn), { border: act ? '#f0d040' : undefined, col: act ? 'rgba(60,50,10,.6)' : undefined });
    c.globalAlpha = own ? 1 : .3; drawGun2D(c, wn, 13, y + 13, .85); c.globalAlpha = 1;
    text(c, String(i + 1), 6, y + 2, act ? '#f0d040' : '#999', 1);
    if (!own) icon(c, 'lock', 28, y + 16);
    else if (!CONFIG.weapons[wn].melee) text(c, p.mag[wn], 36, y + 19, p.mag[wn] ? '#ddd' : '#e04040', 1, 'right');
  });
  button(c, 148, 228, 36, 36, '', throwNade);
  icon(c, 'nade', 157, 236, 2);
  panel(c, 146, 222, 14, 11, '#a02020'); text(c, p.nades, 153, 225, '#fff', 1, 'center');
  if (!input.touch) { text(c, 'G', 181, 257, '#999', 1, 'right'); text(c, 'SHIFT SPRINT  F SHOVE  RMB AIM', W - 6, 258, '#777', 1, 'right'); }
  drawAmmo(c, input.touch ? 284 : 196, p, w);
  if (input.touch && state === 'play') {
    button(c, 192, 228, 40, 36, '', startReload); icon(c, 'reload', 203, 238, 2);
    button(c, 238, 228, 40, 36, '', () => cycleWeapon(1)); icon(c, 'swap', 249, 240, 2);
    button(c, W - 106, 158, 42, 32, 'ADS', () => { }, { s: 1, hold: 'ads', col: input.ads ? 'rgba(60,90,140,.6)' : undefined });
    button(c, W - 58, 152, 52, 36, 'SHOVE', melee, { s: 1 });
    const fx = W - 60, fy = 196, held = input.fireTouch > 0;
    UI.push({ x: fx, y: fy, w: 56, h: 56, hold: 'fire' });
    c.fillStyle = held ? 'rgba(200,60,40,.6)' : 'rgba(0,0,0,.4)'; c.beginPath(); c.arc(fx + 28, fy + 28, 27, 0, 6.283); c.fill();
    c.strokeStyle = 'rgba(255,255,255,.4)'; c.stroke(); text(c, 'FIRE', fx + 28, fy + 24, '#fff', 2, 'center', true);
    const j = input.joy, jx = j ? j.cx : 48, jy = j ? j.cy : 222;
    c.strokeStyle = 'rgba(255,255,255,.25)'; c.beginPath(); c.arc(jx, jy, 22, 0, 6.283); c.stroke();
    const kx = j ? clamp(j.x - j.cx, -22, 22) : 0, ky = j ? clamp(j.y - j.cy, -22, 22) : 0;
    c.fillStyle = 'rgba(255,255,255,.35)'; c.beginPath(); c.arc(jx + kx, jy + ky, 9, 0, 6.283); c.fill();
  }
  if (p.alive && p.reloadT > 0 && !w.melee) {
    const t = clamp(1 - p.reloadT / (w.reload * (1 - up.reload * CONFIG.upgrade.reload)), 0, 1);
    panel(c, W / 2 - 12, H / 2 + 14, 24, 4, 'rgba(0,0,0,.6)'); c.fillStyle = '#e8c860'; c.fillRect(W / 2 - 11, H / 2 + 15, 22 * t, 2);
  }
  if (state === 'play' && p.alive && scoped(p)) { // sniper scope: black ring with fine crosshairs
    c.fillStyle = '#000'; c.beginPath(); c.rect(0, 0, W, H); c.arc(W / 2, H / 2, 112, 0, Math.PI * 2); c.fill('evenodd');
    c.fillStyle = 'rgba(0,0,0,.85)'; c.fillRect(W / 2 - 112, H / 2, 224, 1); c.fillRect(W / 2, H / 2 - 112, 1, 224);
    c.fillStyle = '#ff3030'; c.fillRect(W / 2 - 1, H / 2 - 1, 2, 2);
  } else if (state === 'play' && p.alive && p.adsT > .5) { c.fillStyle = '#fff'; c.fillRect(W / 2 - 1, H / 2 - 1, 2, 2); }
  else if (state === 'play' && p.alive) {
    const mx = W / 2, my = H / 2, gap = Math.round(3 + ((w.spread || 0) + p.heat) * 120 + p.recoil * 3);
    const bar = (x, y, bw, bh) => { c.fillStyle = 'rgba(0,0,0,.6)'; c.fillRect(x - 1, y - 1, bw + 2, bh + 2); c.fillStyle = '#fff'; c.fillRect(x, y, bw, bh); };
    bar(mx - gap - 4, my, 4, 1); bar(mx + gap + 1, my, 4, 1); bar(mx, my - gap - 4, 1, 4); bar(mx, my + gap + 1, 1, 4);
    c.fillStyle = '#fff'; c.fillRect(mx, my, 1, 1);
    if (hitMark > 0) { c.fillStyle = hitKill ? '#ff3030' : '#fff'; for (let i = 2; i < 5; i++) { c.fillRect(mx - i, my - i, 1, 1); c.fillRect(mx + i, my - i, 1, 1); c.fillRect(mx - i, my + i, 1, 1); c.fillRect(mx + i, my + i, 1, 1); } }
  }
}
function drawStats(c, y) {
  const acc = stats.shots ? Math.round(stats.hits / stats.shots * 100) : 0;
  [['skull', stats.kills, 'KILLS'], ['burst', stats.heads, 'HEADSHOTS'], ['bolt', acc + '%', 'ACCURACY'], ['flag', fmtTime(stats.time), 'TIME'], ['coin', score, 'SCORE']].forEach(([ic, v, l], i) => {
    const x = W / 2 - 200 + i * 80;
    panel(c, x, y, 76, 44, 'rgba(0,0,0,.45)');
    icon(c, ic, x + 38 - ICONS[ic].width, y + 4, 2);
    text(c, v, x + 38, y + 25, '#fff', 2, 'center', true);
    text(c, l, x + 38, y + 37, '#aaa', 1, 'center');
  });
}
function drawTitle(c) {
  c.fillStyle = 'rgba(0,0,0,.3)'; c.fillRect(0, 0, W, H);
  text(c, 'DEAD LINE', W / 2 + 3, 39, '#5a0808', 7, 'center');
  text(c, 'DEAD LINE', W / 2, 36, '#ece4d4', 7, 'center');
  text(c, 'FPS', W / 2 + 128, 36, '#d04030', 3, 'left', true);
  for (let i = 0; i < 9; i++) {
    const x = W / 2 - 118 + i * 29 + (i * 7) % 11, len = (time * 5 + i * 3.7) % 16;
    c.fillStyle = '#8a1010'; c.fillRect(x, 71, 2, len); if (len > 12) c.fillRect(x, 74 + len, 2, 2);
  }
  text(c, 'HOLD THE ROAD. DO NOT FALL BACK.', W / 2, 98, '#d04030', 2, 'center', true);
  const coarse = matchMedia('(pointer:coarse)').matches;
  if ((time * 2 | 0) % 2) text(c, coarse ? 'TAP TO START' : 'CLICK OR PRESS ENTER', W / 2, 200, '#fff', 2, 'center', true);
  text(c, coarse ? 'LEFT THUMB MOVE (PUSH TO SPRINT)  -  DRAG RIGHT SIDE TO LOOK  -  HOLD FIRE' : 'WASD MOVE  MOUSE LOOK  CLICK FIRE  RMB AIM  SHIFT SPRINT  F SHOVE  R RELOAD  1-6 WEAPONS  G GRENADE  ESC PAUSE', W / 2, 222, '#ddd', 1, 'center', true);
  if (!ASSETS.done) text(c, 'LOADING ASSETS ' + Math.round(ASSETS.progress * 100) + '%', W / 2, 252, '#aaa', 1, 'center', true);
  else if (ASSETS.failed) text(c, 'ASSETS MISSING - RUN THROUGH A WEB SERVER (NPM RUN DEV)', W / 2, 252, '#e08060', 1, 'center', true);
  icon(c, 'star', W / 2 - 52, 240); text(c, 'ZONES OPEN ' + progress.unlocked + '/' + LEVELS.length, W / 2 - 42, 241, '#e8c860', 1);
  if (coarse) button(c, W - 64, 6, 58, 22, 'FULL', goFullscreen, { s: 1 });
}
function drawLevels(c) {
  c.fillStyle = 'rgba(0,0,0,.6)'; c.fillRect(0, 0, W, H);
  text(c, 'SELECT LEVEL', W / 2, 24, '#e8c860', 3, 'center', true);
  LEVELS.forEach((Lv, i) => {
    const x = 8 + i * 94, y = 56, w = 88, h = 150, locked = i >= progress.unlocked, p = Lv.pal;
    button(c, x, y, w, h, '', () => startLevel(i, false), { disabled: locked, col: 'rgba(24,22,18,.92)', border: locked ? undefined : '#6a5a3a' });
    c.fillStyle = css(p.skyT); c.fillRect(x + 4, y + 4, w - 8, 14); c.fillStyle = css(p.fog); c.fillRect(x + 4, y + 18, w - 8, 6);
    c.fillStyle = css(p.wall); c.fillRect(x + 4, y + 24, w - 8, 16);
    for (let k = 0; k < w - 8; k += 4) { c.fillStyle = css((k >> 2) & 1 ? p.stripeA : p.stripeB); c.fillRect(x + 4 + k, y + 28, 4, 3); }
    c.fillStyle = css(p.road); c.fillRect(x + 4, y + 40, w - 8, 22); c.fillStyle = css(p.fg); c.fillRect(x + 4, y + 62, w - 8, 6);
    if (Lv.dark) { c.fillStyle = `rgba(4,6,16,${Lv.dark})`; c.fillRect(x + 4, y + 4, w - 8, 64); }
    text(c, (i + 1) + '', x + 8, y + 76, '#999', 2);
    text(c, Lv.name, x + w / 2, y + 96, locked ? '#777' : '#fff', 2, 'center', true);
    text(c, (Lv.waves === Infinity ? 'ENDLESS' : Lv.waves + ' WAVES'), x + w / 2, y + 110, '#aaa', 1, 'center');
    text(c, { waves: 'CLEAR', hold: 'HOLD POINT', survive: 'SURVIVE', protect: 'PROTECT' }[Lv.obj], x + w / 2, y + 118, '#e8a060', 1, 'center');
    const b = progress.best[i];
    if (locked) icon(c, 'lock', x + w / 2 - 7, y + 124, 2);
    else if (b.wave) { icon(c, 'star', x + 14, y + 128); text(c, 'BEST W' + b.wave, x + 24, y + 129, '#e8c860', 1); }
  });
  button(c, 8, 230, 70, 28, '< BACK', () => { state = 'title'; }, { s: 1 });
  text(c, 'CLEAR A ZONE TO UNLOCK THE NEXT', W / 2, 242, '#999', 1, 'center');
  if (progress.bank) text(c, 'BANK $' + progress.bank, W - 12, 242, '#9fe870', 1, 'right');
}
const SHOP_IC = ['ammo', 'nade', 'gun:smg', 'gun:shotgun', 'gun:sniper', 'med', 'burst', 'bolt', 'reload', 'heart', 'wire', 'spikes', 'bags'];
const SHOP_LV = [null, null, null, null, null, null, ['dmg', 8], ['rate', 5], ['reload', 5], ['hp', 8], null, null, null];
function drawShop(c) {
  c.fillStyle = 'rgba(0,0,0,.5)'; c.fillRect(0, 0, W, H);
  panel(c, 8, 6, W - 16, H - 12, 'rgba(24,22,18,.94)', '#6a5a3a');
  text(c, 'SUPPLY DEPOT', 18, 12, '#e8c860', 2, 'left', true);
  icon(c, 'coin', W - 18 - (String(money).length * 8 - 2) - 12, 11); text(c, money, W - 18, 12, '#ffd84a', 2, 'right', true);
  text(c, wave.n ? 'WAVE ' + wave.n + ' CLEARED' : L.name, W / 2, 14, '#aaa', 1, 'center');
  shopItems().forEach((it, i) => {
    const col = i % 3, row = i / 3 | 0, x = 18 + col * 150, y = 28 + row * 37, ok = it.can && money >= it.cost;
    button(c, x, y, 144, 33, '', () => { if (!(it.can && money >= it.cost)) return; money -= it.cost; it.buy(); }, { disabled: !ok, col: 'rgba(40,36,28,.9)' });
    c.globalAlpha = ok ? 1 : .45;
    const ic = SHOP_IC[i];
    if (ic.startsWith('gun:')) drawGun2D(c, ic.slice(4), x + 15, y + 16, .8);
    else icon(c, ic, x + 17 - ICONS[ic].width, y + 16 - ICONS[ic].height, 2);
    c.globalAlpha = 1;
    text(c, it.label, x + 36, y + 5, ok ? '#fff' : '#888', 2);
    const lv = SHOP_LV[i];
    if (lv) {
      for (let j = 0; j < lv[1]; j++) { c.fillStyle = j < up[lv[0]] ? '#e8c860' : '#3a3428'; c.fillRect(x + 36 + j * 6, y + 23, 5, 4); }
      text(c, up[lv[0]] >= lv[1] ? 'MAX' : '$' + it.cost, x + 138, y + 23, ok ? '#e8c860' : '#776a50', 1, 'right');
    } else text(c, it.sub || '$' + it.cost, x + 36, y + 21, ok ? '#e8c860' : '#776a50', 1);
  });
  button(c, W / 2 - 80, 222, 160, 36, wave.n ? 'NEXT WAVE >' : 'START >', () => { state = 'play'; startWave(); }, { col: 'rgba(120,30,20,.9)', border: '#e04030' });
  text(c, 'DEFENSES ' + defenses.length + '/8', 330, 236, '#999', 1);
  text(c, 'GUNS STAY UNLOCKED', 330, 246, '#777', 1);
}
function drawPlace(c) {
  panel(c, W / 2 - 150, 30, 300, 24, 'rgba(0,0,0,.7)');
  icon(c, { wire: 'wire', spikes: 'spikes', sandbags: 'bags' }[placing], W / 2 - 142, 37);
  text(c, 'TAP THE ROAD TO PLACE ' + { wire: 'BARBED WIRE', spikes: 'SPIKES', sandbags: 'SANDBAGS' }[placing], W / 2 + 6, 40, '#fff', 1, 'center');
  button(c, W / 2 - 50, 222, 100, 34, 'CANCEL', () => { money += CONFIG.defenses[placing].cost; placing = null; state = 'shop'; });
}
function stepper(c, x, y, label, val, fn) {
  panel(c, x, y, 150, 30, 'rgba(14,14,14,.6)');
  button(c, x + 2, y + 2, 30, 26, '-', () => { fn(-1); saveSettings(); });
  button(c, x + 118, y + 2, 30, 26, '+', () => { fn(1); saveSettings(); });
  text(c, label + ' ' + val, x + 75, y + 10, '#fff', 2, 'center', true);
}
function drawPause(c) {
  c.fillStyle = 'rgba(0,0,0,.65)'; c.fillRect(0, 0, W, H);
  text(c, 'PAUSED', W / 2, 18, '#fff', 4, 'center', true);
  const x0 = W / 2 - 155, x1 = W / 2 + 5, row = r => 50 + r * 36, onoff = v => v ? 'ON' : 'OFF';
  button(c, x0, row(0), 150, 30, 'RESUME', togglePause, { col: 'rgba(40,90,30,.9)', border: '#9fe870' });
  button(c, x1, row(0), 150, 30, 'RESTART', () => startLevel(lvl, false));
  button(c, x0, row(1), 150, 30, 'LEVELS', () => { state = 'levels'; fade = .6; });
  button(c, x1, row(1), 150, 30, '    SOUND', toggleSound); icon(c, settings.sound ? 'sound' : 'mute', x1 + 46, row(1) + 8, 2);
  button(c, x0, row(2), 150, 30, 'MUSIC ' + onoff(settings.music), toggleMusic);
  button(c, x1, row(2), 150, 30, 'SHAKE ' + onoff(settings.shake), () => { settings.shake = !settings.shake; saveSettings(); });
  button(c, x0, row(3), 150, 30, 'FULLSCREEN', goFullscreen);
  button(c, x1, row(3), 150, 30, 'GFX ' + (settings.quality === 'auto' ? 'AUTO ' : '') + QN[qLevel], cycleQuality);
  stepper(c, x0, row(4), 'SENS', settings.sens.toFixed(1), d => { settings.sens = clamp(Math.round((settings.sens + d * .1) * 10) / 10, .2, 3); });
  stepper(c, x1, row(4), 'FOV', settings.fov, d => { settings.fov = clamp(settings.fov + d * 5, 55, 100); });
  icon(c, 'skull', W / 2 - 70, 236); text(c, stats.kills + ' KILLS', W / 2 - 58, 238, '#aaa', 1);
  icon(c, 'flag', W / 2 + 10, 237); text(c, fmtTime(stats.time), W / 2 + 22, 238, '#aaa', 1);
}
function drawOver(c) {
  if (player.deadT < 2.2) return;
  c.fillStyle = 'rgba(30,0,0,.6)'; c.fillRect(0, 0, W, H);
  text(c, 'THE LINE FELL', W / 2, 18, '#e04030', 5, 'center', true);
  if (objective.fail) text(c, objective.fail, W / 2, 50, '#ff8060', 2, 'center', true);
  text(c, L.name + '  -  WAVE ' + wave.n, W / 2, 66, '#fff', 2, 'center', true);
  drawStats(c, 82);
  const b = progress.best[lvl];
  icon(c, 'star', W / 2 - 90, 135); text(c, 'BEST WAVE ' + b.wave + '   BEST SCORE ' + b.score, W / 2 - 80, 136, '#e8c860', 1);
  if (lastBank) text(c, 'BANKED +$' + lastBank + ' FOR YOUR NEXT RUN', W / 2, 148, '#9fe870', 1, 'center', true);
  button(c, W / 2 - 170, 166, 160, 36, 'RETRY', () => startLevel(lvl, false), { col: 'rgba(120,30,20,.9)', border: '#e04030' });
  button(c, W / 2 + 10, 166, 160, 36, 'LEVELS', () => { state = 'levels'; fade = .6; });
}
function drawLevelClear(c) {
  c.fillStyle = 'rgba(0,0,0,.55)'; c.fillRect(0, 0, W, H);
  text(c, 'ZONE SECURED', W / 2, 24, '#9fe870', 5, 'center', true);
  text(c, L.name, W / 2, 62, '#fff', 2, 'center', true);
  drawStats(c, 82);
  const next = lvl + 1 < LEVELS.length;
  if (next) text(c, 'NEXT: ' + LEVELS[lvl + 1].name + '  (KEEP GEAR, +$100)', W / 2, 134, '#e8c860', 1, 'center', true);
  if (lastBank) text(c, 'BANKED +$' + lastBank + ' FOR YOUR NEXT RUN', W / 2, 146, '#9fe870', 1, 'center', true);
  if (next) button(c, W / 2 - 170, 166, 160, 36, 'NEXT ZONE >', () => startLevel(lvl + 1, true), { col: 'rgba(40,90,30,.9)', border: '#9fe870' });
  button(c, next ? W / 2 + 10 : W / 2 - 80, 166, 160, 36, 'LEVELS', () => { state = 'levels'; fade = .6; });
}

// ================= SELF-TEST (?test) =================
function selfTest() {
  const out = [], ok = (n, c) => out.push((c ? 'PASS ' : 'FAIL ') + n);
  const z = newZombie('walker', 10, 0); const r = makeRagdoll(z, 3, 2, 1, 'zombie');
  for (let i = 0; i < 120; i++) stepRag(r, STEP, null);
  let worst = 0; for (const [a, b, Ln] of r.sticks) worst = Math.max(worst, Math.abs(Math.hypot(r.P[b * 3] - r.P[a * 3], r.P[b * 3 + 1] - r.P[a * 3 + 1], r.P[b * 3 + 2] - r.P[a * 3 + 2]) - Ln) / Ln);
  ok('3d verlet stick lengths within 5% after 120 steps (worst ' + (worst * 100).toFixed(2) + '%)', worst < .05);
  ok('ragdoll rests on the ground', r.P.every((v, i) => i % 3 !== 1 || (v >= 0 && v < .5)));
  const r2 = makeRagdoll(z, 0, 0, 0, 'zombie'); // same body, so rest lengths match the copied pose
  for (let i = 0; i < 15; i++) { r2.P[i * 3] = r.P[i * 3]; r2.P[i * 3 + 2] = r.P[i * 3 + 2]; r2.P[i * 3 + 1] = r.P[i * 3 + 1] + .5; r2.O.set(r2.P); }
  for (let i = 0; i < 180; i++) stepRag(r2, STEP, [r]);
  ok('a corpse dropped on a corpse piles on top', Array.from(r2.P).filter((v, i) => i % 3 === 1 && v > .14).length >= 6);
  orient(0, 0, 1, 1, 0, 0); const yv = new THREE.Vector3(0, 1, 0).applyQuaternion(_q);
  ok('segment orientation maps local Y onto the bone', yv.distanceTo(new THREE.Vector3(0, 0, 1)) < 1e-4);
  let mono = true; for (let w = 1; w < 30; w++) if (w % 5 && (w + 1) % 5 && waveCount(4, w + 1) <= waveCount(4, w)) mono = false;
  ok('endless wave count grows between normal waves', mono);
  ok('last wave of a level is a horde with a brute', isHorde(0, 5) && waveSpec(0, 5).list.includes('brute'));
  ok('later levels are harder', waveSpec(2, 1).hpMul > waveSpec(0, 1).hpMul && waveCount(2, 1) > waveCount(0, 1));
  ok('rifle dmg lv2 headshot', Math.abs(weaponDamage(CONFIG.weapons.rifle, 2, true) - 24 * 1.3 * 2.5) < 1e-9);
  const zz = newZombie('walker', 14, 0); zz.hp = 10; zombies = [zz];
  const hs = raySpheres(10, 1, 0, 1, 0, 0, zz);
  ok('ray hits a zombie standing in its path', !!hs && hs.t > 3 && hs.t < 4.5);
  damageZombie(zz, 34, false, 1, 0, 0, 1.6, zz.x, 1, zz.z);
  ok('lethal hit kills and spawns a ragdoll', zz.dead && rags.length === 1);
  limbs.count = 0; box(limbs, 0, 0, 0, 1, 2, 1, WHITE3); const lm = new THREE.Matrix4(), ls = new THREE.Vector3(); limbs.getMatrixAt(0, lm); lm.decompose(new THREE.Vector3(), new THREE.Quaternion(), ls); limbs.count = 0;
  ok('capsule limbs span exactly the bone length', Math.abs(ls.y - 1) < 1e-6);
  glow.count = 0; camera.quaternion.setFromEuler(new THREE.Euler(.3, .7, 0)); box(glow, 0, 0, 0, 1, 1, 1, WHITE3); const gq = new THREE.Quaternion(); glow.getMatrixAt(0, lm); lm.decompose(new THREE.Vector3(), gq, ls); glow.count = 0;
  ok('particles are billboards facing the camera', gq.angleTo(camera.quaternion) < 1e-4);
  ok('filmic tone mapping and soft shadows are on', renderer.toneMapping === THREE.ACESFilmicToneMapping && renderer.shadowMap.type === THREE.PCFSoftShadowMap);
  { const d = equirectDir(.3, .7, new THREE.Vector3()), u = Math.atan2(d.z, d.x) / (2 * Math.PI) + .5, v = Math.asin(d.y) / Math.PI + .5;
    ok('photo-sky sun direction round-trips through the sky mapping', Math.abs(u - .3) < 1e-6 && Math.abs(v - .7) < 1e-6); }
  ok('cinematic grade has bars, aberration and split toning', ['bars', 'ca', 'split', 'blur'].every(k => k in grade.uniforms));
  ok('icon maps are rectangular', Object.values(ICON_MAPS).every(m => m.every(rw => rw.length === m[0].length)));
  zombies = []; streakT = 0; for (let i = 0; i < 3; i++) { const q = newZombie('walker', 14 + i, 0); zombies.push(q); killZombie(q, 1, 0, 0, 1, false, 10); }
  ok('kill chain counts and pays a bonus', streak === 3 && streakShow && streakShow.bonus === 6);
  ok('time format', fmtTime(65) === '1:05');
  player.x = 0; updCamera(1); const lo = cam.x; player.x = WORLD_L; for (let i = 0; i < 60; i++) updCamera(.1);
  ok('camera stays inside the world', lo === CAM.half && Math.abs(cam.x - (WORLD_L - CAM.half)) < 1e-6);
  cam.x = 12; placeCamera(); const gp = groundAt(W / 2, H * .7);
  ok('cursor ray finds the road', !!gp && gp.z > ROAD_Z0 && gp.z < Z_WALL2);
  const [fx, fz] = moveDir(Math.PI / 2, 1, 0), [rx, rz] = moveDir(0, 0, 1);
  ok('W walks where you look, D strafes right', Math.abs(fx) < 1e-9 && Math.abs(fz - 1) < 1e-9 && Math.abs(rx) < 1e-9 && Math.abs(rz - 1) < 1e-9);
  state = 'play'; player.x = 12; player.z = 0; player.heading = .7; player.pitch = .2; placeCamera();
  const mz_ = muzzlePoint(player); camera.getWorldDirection(_cd); const ahead = (mz_[0] - camera.position.x) * _cd.x + (mz_[1] - camera.position.y) * _cd.y + (mz_[2] - camera.position.z) * _cd.z;
  ok('gun muzzle sits just in front of the eye', ahead > .2 && ahead < 1);
  const za = newZombie('walker', 16, 0); za.heading = Math.PI; za.rise = 1.2; zombies = [za];
  const zz2 = newZombie('walker', 16, 0); zz2.heading = Math.PI; poseZombie(zz2);
  const hsS = raySpheres(camera.position.x, 1.2, 0, 1, 0, 0, zz2);
  ok('center ray from the eye hits a zombie ahead', !!hsS);
  poseZombie(za); const y0 = za.P[1]; updZombie(za, .6);
  ok('spawning zombie rises out of the ground', y0 < .3 && za.P[1] > y0 + .5);
  const zf = newZombie('walker', player.x + .8, player.z); zf.heading = Math.PI; poseZombie(zf); zombies = [zf]; player.stamina = 100; player.meleeCd = 0; player.heading = 0; const hp0 = zf.hp;
  melee(); ok('shove hurts and knocks back the zombie in front', zf.hp < hp0 && zf.kvx > 2 && player.stamina < 100);
  player.heading = 0; const sR = spatial(player.x, player.z + 3), sB = spatial(player.x - 4, player.z), sFar = spatial(player.x + 20, player.z), sNear = spatial(player.x + 2, player.z);
  ok('3d sound: right is panned right, behind is muffled, far is quieter', sR.pan > .5 && sB.behind && !sNear.behind && sFar.gain < sNear.gain);
  ok('auto quality only steps down when slow', nextQuality(30, 0) === 1 && nextQuality(60, 1) === 1 && nextQuality(20, 3) === 3);
  ok('music speeds up with intensity', musicBpm(1) > musicBpm(0));
  ok('10% of run earnings is banked', bankShare(95) === 9 && bankShare(0) === 0);
  const keepObs = obstacles; obstacles = [{ x0: 0, x1: 2, z0: 0, z1: 2, h: 1, kind: 'crate' }];
  const po = { x: 1, z: -.1 }; pushOut(po, .3); const pi = { x: 1.9, z: 1 }; pushOut(pi, .3);
  ok('cover pushes bodies out of it', Math.abs(po.z + .3) < 1e-6 && Math.abs(pi.x - 2.3) < 1e-6);
  ok('bullets stop on cover', Math.abs(rayBoxes(-5, .5, 1, 1, 0, 0) - 5) < 1e-6 && rayBoxes(-5, 1.5, 1, 1, 0, 0) > 1e8);
  obstacles = keepObs;
  const keepObj = { ...objective }; Object.assign(objective, { type: 'hold', meter: 100, x: 22, z: 0 }); wave.phase = 'spawn';
  const zh = newZombie('walker', 22, 0); zombies = [zh]; player.x = 5; updObjective(1);
  ok('radio point drains while zombies hold it alone', objective.meter < 100 && objective.contested && !objective.fail);
  Object.assign(objective, keepObj); wave.phase = 'idle';
  state = 'title';
  zombies = []; rags = []; drops = []; nParts = 0; money = 0; score = 0; pops = []; dctx.clearRect(0, 0, DW, DH); hurtDirs = [];
  player = newPlayer(); streak = 0; streakT = 0; streakShow = null; hitMark = 0; Object.keys(stats).forEach(k => stats[k] = 0);
  out.forEach(l => console.log(l));
  console.log(out.every(l => l.startsWith('PASS')) ? 'SELFTEST: ALL PASS' : 'SELFTEST: FAILURES');
}

// ================= MAIN LOOP =================
let qLevel = 0, perfT = 0, perfN = 0;
const QN = ['HIGH', 'MED', 'LOW', 'MIN'], QSCALE = [1, .85, .7, .5], QSET = ['auto', 'high', 'med', 'low'];
const nextQuality = (fps, q) => fps < 45 && q < 3 ? q + 1 : q; // only ever steps down
function resize() {
  const s = Math.min(innerWidth / W, innerHeight / H), w = W * s, h = H * s, pr = Math.min(devicePixelRatio || 1, 1.5) * QSCALE[qLevel];
  for (const c of [gl, uiCv]) { c.style.width = w + 'px'; c.style.height = h + 'px'; c.style.left = (innerWidth - w) / 2 + 'px'; c.style.top = (innerHeight - h) / 2 + 'px'; }
  renderer.setPixelRatio(pr); renderer.setSize(w, h, false); composer.setPixelRatio(pr); composer.setSize(w, h);
}
function applyQuality(q) { // HIGH: AO + bloom + 2k soft shadows ... MIN: half resolution, no shadows
  qLevel = q; gtao.enabled = q === 0; bloom.enabled = q < 2; sun.castShadow = q < 3; partCap = q >= 3 ? 900 : CONFIG.maxParticles;
  const ms = q === 0 ? 2048 : 1024; if (sun.shadow.mapSize.x !== ms) { sun.shadow.mapSize.set(ms, ms); if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; } }
  resize();
}
function cycleQuality() { settings.quality = QSET[(QSET.indexOf(settings.quality) + 1) % 4]; if (settings.quality !== 'auto') applyQuality(QSET.indexOf(settings.quality) - 1); saveSettings(); }
addEventListener('resize', resize);
applyQuality(settings.quality !== 'auto' ? QSET.indexOf(settings.quality) - 1 : matchMedia('(pointer:coarse)').matches ? 1 : 0);
buildLevel(L);
player = newPlayer(); player.x = 12; cam.x = 13;
if (/[?&]test\b/.test(location.search)) { selfTest(); window.__dl = () => ({ heading: player.heading, pitch: player.pitch, kick: player.kick, state, lock: !!document.pointerLockElement, ads: input.ads, adsT: player.adsT, fov: camera.fov, q: qLevel, sun: SUN_DIR.toArray(), flare: flare.visible }); window.__look = (h, p) => { player.heading = h; player.pitch = p; }; } // test-only probe
for (let i = 0; i < 6; i++) zombies.push(newZombie(pick(['walker', 'walker', 'runner', 'crawler', 'brute']), cam.x + 1.5 + i * 1.6, rnd(Z_MIN, Z_MAX)));
let acc = 0, last = performance.now();
function loop(now) {
  let d = (now - last) / 1000; last = now; if (d > .25) d = .25;
  if (state === 'play' && settings.quality === 'auto') { perfT += d; perfN++; if (perfT >= 2) { const q = nextQuality(perfN / perfT, qLevel); if (q !== qLevel) applyQuality(q); perfT = perfN = 0; } } else perfT = perfN = 0;
  acc += d; let n = 0;
  while (acc >= STEP && n < 5) { update(STEP); acc -= STEP; n++; }
  if (n === 5) acc = 0;
  render();
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
loadAssets();
