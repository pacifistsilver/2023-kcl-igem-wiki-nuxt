# Team KCL-UK 2023 Wiki

This wiki was built using Nuxt3, a Vue.js framework. 

## Folder Layout
	|-> assets / css and js files bundled when building
	|-> components / vue files that are imported into all pages
	|-> layouts / determines site layout
	|-> pages / site content
	|-> plugins / js/ts functions used in site
	|-> public  / files that don't change/have to keep their names
	-> .gitignore
	-> .gitlab-ci.yml / pipeline config
	-> .npmrc / npm config
	-> nuxt.config.ts / nuxt config
	-> package-lock.json / dependencies of dependencies
	-> package.json / dependencies
	-> README.md
	-> tsconfig.json / typescript config

## How do I build locally?
    git clone https://gitlab.igem.org/2023/kcl-uk.git
    cd kcl-uk
    npm install
    npm run dev
