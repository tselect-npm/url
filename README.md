# URL

[![npm](https://img.shields.io/npm/v/@tselect/url.svg?style=flat-square)](https://www.npmjs.com/package/@tselect/url)
 [![npm](https://img.shields.io/npm/dm/@tselect/url.svg?style=flat-square)](https://www.npmjs.com/package/@tselect/url)
[![npm](https://img.shields.io/npm/l/@tselect/url.svg?style=flat-square)](https://www.npmjs.com/package/@tselect/url)

URL related utilities.

## Installation

`npm i @tselect/url`

## Usage

```typescript
import * as URL from '@tselect/url';

URL.ensureSlashes('/foo', { leading: false, trailing: true }); // foo/
```
