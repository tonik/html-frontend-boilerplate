> This is a template file with instructions about usage of this project. You should fill it accordingly and distribute along with project files.

# <project-name> — HTML Front-end Boilerplate

A modern front-end boilerplate for building fast, organized and standardized web apps or sites.

## Requirements

Make sure you have all these dependencies installed before moving on:

- [Node.js](//nodejs.org/en/)
- [NPM](//www.npmjs.com/)

## Dependencies

Building a project requires a few dependencies, they are needed only during development and should not be installed on production. They will be installed along with your project dependencies when running `npm install` command.

- [Gulp](//gulpjs.com/) - Task runner
- [Nunjucks](//mozilla.github.io/nunjucks/) - Templates engine
- [SASS](//sass-lang.com/) - CSS preprocessor
- [Babel](//babeljs.io/) - JavaScript ES6 to ES5 compiler
- [Rollup](//rollupjs.org/) - JavaScript bundler
- [Stylelint](//stylelint.io/) - CSS/SCSS linter
- [ESLint](//eslint.org/) - JavaScript linter

## Building

Destination files are not kept in the repository. This requires you to run project builder to get the final files. Start by downloading or cloning the project repository to the desired directory.

```bash
# Clone repository to the themes folder.
$ git clone git@github.com:<repository-name>.git <project-name>
```

Change working directory to cloned one and run following commands.

> Destination files will be outputted to the `public/` directory and it will contain all necessary files.

```bash
# Change directory to the cloned folder.
$ cd <project-name>

# Install required npm dependences for building a theme.
$ npm install

# Build project for development.
$ npm run dev

# Build project for production (minify CSS, JavaScript, and images).
$ npm run prod
```

## Development

To make development fast and pleasant builder can watch your files and automatically rebuild and refresh your browser.

```bash
# Compile project files and rebuild after changes.
$ npm run watch
```

## Important things

- The `public/` directory is read-only. Please, do not change anything in here, because it will be overwritten by the builder.
