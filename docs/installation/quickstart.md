﻿# Installtion

## Quick Start

- Homeworks current version needs `jquery`.

```html
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
```

- Also jquery typings is needed.

```bash
# Install typings cli tool for install type definition (d.ts) files.
$ npm install typings -g

# Install jquery typings that is dependented with homeworks.
$ typings install dt~jquery --save --global
```

- Download HomeWorks from Git or Whatever.

 ```bash
$ git clone git@github.com:IGAWorksDev/homeworks.git

# or

$ npm install homeworks --save

# or

$ yarn install homeworks --save

# or

$ bower install homeworks --save
```

- And you need to put the code that the follows for using homeworks core javascript functions.

```html
<script src="node_modules/homeworks/dist/js/homeworks.min.js"></script>
<link rel="stylesheet" href="node_modules/homeworks/dist/css/homeworks.min.css" />
```

 - Import ng2 module on your app module ts file.

 ```typescript
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { Homeworks } from 'homeworks';

@NgModule({
    imports: [
        BrowserModule,
        Homeworks
    ],
    exports: [
    ],
    providers: [
    ],
    declarations: [
    ],
    bootstrap: [
    ]
})
export class AppModule {
    constructor() {
    }
}
```

 - Update your systemjs.config.js file for using homework on your browser without bundler.

  ```javascript
/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'Content',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',

      // you must to add this line for using homeworks
      'homeworks': 'npm:homeworks/lib/ng2'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: 'main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },

      // and also you must to add this line for using homeworks
      homeworks: {
          main: 'core.js',
          defaultExtension: 'js'
      }
    }
  });
})(this);
```