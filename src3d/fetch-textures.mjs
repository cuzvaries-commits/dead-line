// Downloads the CC0 PBR textures and glTF models from Poly Haven into web/assets (run: node src3d/fetch-textures.mjs)
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

const get = async url => { const res = await fetch(url); if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`); return Buffer.from(await res.arrayBuffer()); };
const save = (path, buf) => { mkdirSync(dirname(path), { recursive: true }); writeFileSync(path, buf); };

const SETS = { asphalt: 'asphalt_02', concrete: 'concrete_wall_008', carmetal: 'rusty_painted_metal', barrel: 'rusty_metal_02', wood: 'wood_planks_dirt' };
const MAPS = { Diffuse: 'diff', nor_gl: 'nor', Rough: 'rough' };
for (const [name, id] of Object.entries(SETS)) {
  const files = await (await fetch(`https://api.polyhaven.com/files/${id}`)).json();
  for (const [key, suffix] of Object.entries(MAPS)) {
    const url = files[key]?.['1k']?.jpg?.url;
    if (!url) { console.warn(`missing ${key} for ${id}`); continue; }
    save(`web/assets/tex/${name}_${suffix}.jpg`, await get(url));
    console.log(`${name}_${suffix}.jpg  <-  ${id}`);
  }
}
// models keep Poly Haven's own file layout: <id>.gltf next to its .bin and textures/
const MODELS = ['service_pistol', 'bolt_action_rifle_7_62', 'covered_car', 'barrel_03', 'wooden_crate_01', 'ammo_box', 'medical_box'];
for (const id of MODELS) {
  const g = (await (await fetch(`https://api.polyhaven.com/files/${id}`)).json()).gltf['1k'].gltf;
  save(`web/assets/models/${id}/${id}.gltf`, await get(g.url));
  for (const [rel, f] of Object.entries(g.include || {})) save(`web/assets/models/${id}/${rel}`, await get(f.url));
  console.log(`models/${id}`);
}
