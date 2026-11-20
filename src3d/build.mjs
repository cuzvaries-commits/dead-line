// Bundles src3d/game.js + three.js into web/game.js. The game is the web/ folder: index.html, game.js, assets/.
import { build } from 'esbuild';
await build({ entryPoints: ['src3d/game.js'], bundle: true, minify: true, format: 'iife', target: 'es2020', outfile: 'web/game.js', legalComments: 'none' });
console.log('built web/game.js');
