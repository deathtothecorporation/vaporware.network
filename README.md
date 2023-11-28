This site is built based on the boilerplate provided by @mzrnsh's jekyllwind repo: https://github.com/mzrnsh/jekyllwind

It uses Jekyll and Tailwind CSS to generate a static site for https://vaporware.network

Have the following installed in your dev environment:
- Ruby 3.1.0p0 (or higher?)
- gem & bundler
- yarn

To get running on your local machine: 
```
git clone https://github.com/deathtothecorporation/vaporware.network.git
cd ./vaporware.network
bundle exec jekyll build
bundle exec jekyll serve --livereload
```