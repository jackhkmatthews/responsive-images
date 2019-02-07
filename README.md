# Image Experiments

Sister repository to the SOON\_ image experiments [notion page](https://www.notion.so/soon/Responsive-Images-acc12551773246e0ad769ece1494f909). A playground for experimenting with different approaches to responsive images built with Polymer.

## Installing / Getting started

### Prerequisites

You will need to have a recent version of [Node][nodejs] installed.

### Clone the repository

Clone the repository using [git][git]

### Install dependencies

Dependencies are managed using [Yarn][yarn] or alternatively you can use [npm][npm].

```bash
yarn # or npm install
```

This will install the projects dependencies into the `node_modules` directory.

## Developing

### Built With

The core framework is [Polymer][polymer] which is a framework for building web components.

### Setting up Dev

There is dev environment setup for building and preview components. It uses [Webpack Dev Server][webpack-dev-server] to create a build to preview components and view the documentation.

```bash
yarn start # or npm start
```

This will create a bundle of static assets (js, html css, etc...) based on the [Webpack][webpack] configuration in `webpack.dev.js` and store it in memory and serve the assets using a web server.

You can then view the dev server at `http://localhost:8080/`

### Writing Docs

We use the [Polymer Analyzer][polymer-analyzer] tool which scans javascript code in the `src/components` directory to generate documentation.

The tool will perform static analysis of any code in this folder and pick up any documentation written in [jsdoc][jsdoc] format to generate a json file. This json file contains the data nessessary to generate the documentation displayed by a [`<iron-component-page>`][iron-component-page] component.

### Creating Demos

The starting point for the docs site is `src/index.html`. From the here the [`<iron-component-page>`][iron-component-page] component will generate documentation pages. Demos for components are locationed in `src/demo`.

Demos can be linked to component by using `@demo` jsdoc notation for the class like so

```js
/**
 * `sn-bar`
 *
 * This is an example component
 *
 * @customElement
 * @polymer
 * @demo demo/example/example.html
 */
class ExampleComponent extends class extends LitElement {} { ... }
```

### Linting

Linting is performed using [ESLint][eslint] and [Stylelint][stylelint] to maintain code quality. Code formating is performed using [Prettier][prettier] for consistancy. Errors with code formatting and linting are automatically fixed before commits using git hooks.

```bash
yarn lint # or npm run lint
```

### Browser support

Browser support is achieved using [Babel][babel] to transpile modern javascript to an older standard and with [PostCSS][postcss] to compile modern and future CSS into an older standard [Browserslist][browserslist].

Both [Babel][babel] and [PostCSS][postcss] make use of [Browserslist][browserlist] which defines a list of supported browsers to target when compile CSS and Javascript.

### Webpack

There are three webpack configs `webpack.dev.js`, `webpack.components.js`, `webpack.prod.js` for dev and production environments. There is also a common config located in `webpack.common.js` which contains shared config options.
