DEAD LINE - first person zombie shooter (three.js)

Play online: https://cuzvaries-commits.github.io/dead-line/

Run locally (needs Node.js 18+ from nodejs.org):
  npm install
  npm run dev
  then open http://localhost:8000

How it plays:
  Time moves only when you move. Stand still and the world nearly freezes;
  walk, turn or shoot and it runs at full speed. Some zombies carry pistols:
  their bullets are slow enough to see and dodge.
  Desktop: WASD move, mouse look (first click captures the mouse), click fire,
  right click aim, Shift sprint, F shove, R reload, 1-6 weapons, G grenade, Esc pause.
  Phone (landscape): left thumb moves, right thumb drags to look, FIRE/ADS/SHOVE buttons.

Layout:
  src3d/game.js   game source
  web/            the playable game (index.html, assets/); npm run build writes web/game.js
  .github/workflows/pages.yml   builds web/ and publishes it to the gh-pages branch on every push to main

Asset credits: web/assets/CREDITS.txt
