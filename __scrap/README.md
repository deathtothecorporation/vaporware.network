# Setup

- Ruby 3.2.2 (or close)
  - Have bundler installed (`gem install bundler`)
- Node 18.17.0

- `bundle install`
- `npm install` (maybe don't do this from root)
- `cd _frontend && npm install`

## What's where

- `_frontend` holds vue components loaded by div id in layouts
- `_frontend/entrypoints/application.js` is basically the Vue `main.js`
- `root` directory tailwind configs are the real tailwind configs
  - but use `_frontend/src/assets/index.scss` for any customization

# Running the app

- `bin/vite dev` then
- `bin/jekyll-vite wait && bundle exec jekyll serve --livereload`
- go to the jekyll port reported by the prior command