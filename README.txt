DEAD LINE - first person zombie shooter (three.js)

Play online: the GitHub Pages link of this repository (Settings > Pages).

Run locally (needs Node.js 18+ from nodejs.org):
  npm install
  npm run dev
  then open http://localhost:8000

Layout:
  src3d/game.js   game source
  web/            the playable game (index.html, assets/); npm run build writes web/game.js
  .github/workflows/pages.yml   builds and publishes web/ on every push to main

Asset credits: web/assets/CREDITS.txt
