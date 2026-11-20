// Downloads the CC0 PBR textures from Poly Haven into web/assets/tex (run: node src3d/fetch-textures.mjs)
import { mkdirSync, writeFileSync } from 'node:fs';

const SETS = { asphalt: 'asphalt_02', concrete: 'concrete_wall_008', carmetal: 'rusty_painted_metal', barrel: 'rusty_metal_02', wood: 'wood_planks_dirt' };
const MAPS = { Diffuse: 'diff', nor_gl: 'nor', Rough: 'rough' };
mkdirSync('web/assets/tex', { recursive: true });
for (const [name, id] of Object.entries(SETS)) {
  const files = await (await fetch(`https://api.polyhaven.com/files/${id}`)).json();
  for (const [key, suffix] of Object.entries(MAPS)) {
    const url = files[key]?.['1k']?.jpg?.url;
    if (!url) { console.warn(`missing ${key} for ${id}`); continue; }
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
    writeFileSync(`web/assets/tex/${name}_${suffix}.jpg`, Buffer.from(await res.arrayBuffer()));
    console.log(`${name}_${suffix}.jpg  <-  ${id}`);
  }
}
