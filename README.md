# URL

[![npm](https://img.shields.io/npm/v/@bluejay/url.svg?style=flat-square)](https://www.npmjs.com/package/@bluejay/url)
 [![npm](https://img.shields.io/npm/dm/@bluejay/url.svg?style=flat-square)](https://www.npmjs.com/package/@bluejay/url)
[![npm](https://img.shields.io/npm/l/@bluejay/url.svg?style=flat-square)](https://www.npmjs.com/package/@bluejay/url)

URL related utilities.

## Requirements

- `node >= 8.6`, tested with:
 - `node@8.6.0`
 - `node@12.8.1`
- `typescript >= 4.0`, tested with:
 - `typescript@4.0.2`

## Installation

`npm i @bluejay/url`

## Usage

```typescript
import * as URL from '@bluejay/url';

URL.ensureSlashes('/foo', { leading: false, trailing: true }); // foo/
```

## Documentation

See [Github Pages](https://bluebirds-blue-jay.github.io/url/).
