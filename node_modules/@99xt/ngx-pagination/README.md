# @99xt/ngx-pagination

[![npm (scoped)](https://img.shields.io/npm/v/@99xt/ngx-pagination.svg)](https://www.npmjs.com/package/@99xt/ngx-pagination)
[![license](https://img.shields.io/github/license/99xt/ngx-pagination.svg)](https://github.com/99xt/ngx-pagination/blob/master/LICENSE)

Simple pagination component for angular2+ apps.

## Installation

To install this library, run:

```bash
npm install @99xt/ngx-pagination --save
```

## Usage

example.module.ts
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './example.component';

// Import the library
import { PaginationModule } from '@99xt/ngx-pagination';

@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    PaginationModule
  ],
  providers: [],
  bootstrap: [ ExampleComponent ]
})
export class ExampleModule { }
```

example.component.ts
```typescript
export class ExampleComponent {
  totalRecordCount: number;
  selectedPage: number;
  recordsPerPage: number;

  constructor() {
    this.totalRecordCount = 330;
    this.recordsPerPage = 10;
    this.selectedPage = 1;
  }

  selectPage(page: number) {
    this.selectedPage = page;
    // call your page contents loading method here
  }
}
```

example.component.html
```html
<pagination
  [total]="totalRecordCount"
  [limit]="recordsPerPage"
  (onSelectPage)="selectPage($event)">
</pagination>
```

## Contributing Guide

### Setting up the development environment

Clone the repository to your workstation

```bash
git clone git@github.com:99xt/ngx-pagination.git
```

Navigate to the project directory 

```bash
cd ngx-pagination
```

Install and build the library
> Generate all `*.js`, `*.d.ts` files

```bash
npm install
npm run build
```

You can find the compiled version in the `dist/`

Create a symlink from the `dist` directory to the global `node_modules`

```bash
cd dist
npm link
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

### Run Demo app

```
cd demo
npm install
npm start
```

### Publish to NPM

Update the version in `src/package.json`;

```
npm run build
npm publish dist
```

## License

MIT
