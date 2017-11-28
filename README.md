# Nightshade Icons

_At the moment nightshade icons relies heavily on gulp and assumes you are
using es6._

**NOTES:**

- You must use node < 7 in order to run this gulp task. It's recommended to use `nvm use 5.10.1`.
- You can't use `yarn` for this, it doesn't generate the correct output! Stick with `npm` (unless you want to setup a `yarn.lock` file with the right dependencies).

### Use external symbols map

Currently in use by storefront

```
npm install -D CasperSleep/nightshade-icons
```

Reference the symbols map located in `node_modules/@casper/nightshade-icons/dist/storefront/sprite.symbol.svg`.

### Generate `sprite.symbol.svg`

```
gulp storefrontSvg
```

## Installation

Once the sprite file has been generated, it needs be copied manually to _both_ the Storefront (https://github.com/CasperSleep/Casper) and Sleep SPA (https://github.com/CasperSleep/sleep-spa) repos. The locations to copy to are:

- Storefront: `app/assets/images/sprite.symbol.svg`
- Sleep SPA: `src/assets-spa/icons/sprite.symbol.svg`

### Use as a gulp task

To build your own set of nightshade-icons, your project needs to have a
`gulpfile.babel.js`.

```
npm install -D CasperSleep/nightshade-icons
```

Import icon task in your project `gulpfile.babel.js`

```
import { svg } from './node_modules/@casper/nightshade-icons';
```

Configure your options

```
const config = {
  'cwd': './node_modules/@casper/nightshade-icons/lib',
  'dest': './app/assets/images',
  'files': [
    '**/*.svg'
  ]
};
```

Create local svg task that calls nightshade-icons svg task

```
gulp.task('svg', svg(gulp, config));
```

### Creating your own build

If you can't use this module via gulp, you can still create your own build
directly from node_modules folder by running tests. Add the files you want to
the `config.files` array first.

## Todos

- [ ] Group icons by their respective component, ex. review, core
- [ ] Build a symbols file for each component
- [ ] Replace svg task with call to lib for svg task
- [ ] Build es5 version of gulp task (low)
