This site is built based on the boilerplate provided by @mzrnsh's jekyllwind repo: https://github.com/mzrnsh/jekyllwind

It uses Jekyll and Tailwind CSS to generate a static site for https://vaporware.network

Have the following installed:
- Ruby 3.1.0p0 (or higher?)
- gem & bundler
- yarn

First, I cloned the boilerplate: 
```
curl -L https://codeload.github.com/mzrnsh/jekyllwind/tar.gz/refs/tags/v1.0.0 | tar -xz --strip-components=1
```
then I ran the initializing commands:
```
bundle
yarn
```

From there I edited the files as needed.

To get the site to build, I run: `bundle exec jekyll build`

and then to serve it: `bundle exec jekyll serve`. add the `--livereload` flag if desired.