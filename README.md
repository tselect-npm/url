# @tselect/url

[![npm](https://img.shields.io/npm/v/@tselect/url.svg?style=flat-square)](https://www.npmjs.com/package/@tselect/url)
[![npm](https://img.shields.io/npm/dm/@tselect/url.svg?style=flat-square)](https://www.npmjs.com/package/@tselect/url)
[![license](https://img.shields.io/npm/l/@tselect/url.svg?style=flat-square)](./LICENSE)

URL related utilities.

Zero runtime dependencies. Ships both ESM and CommonJS builds, with TypeScript types for each.

## Installation

```bash
npm i @tselect/url
```

```bash
pnpm add @tselect/url
```

## Usage

```typescript
import * as URL from '@tselect/url';

URL.ensureSlashes('/foo', { leading: false, trailing: true }); // 'foo/'
```

Named imports and `require()` both work:

```typescript
import { join, ensureHTTPProtocol } from '@tselect/url';
```

```javascript
const { join } = require('@tselect/url');
```

## API

### `join(...parts: string[]): string`

Like Node's `path.join()`, but for URLs. Collapses duplicate slashes while preserving the protocol.

```typescript
URL.join('/v1', '/', '/users');                // '/v1/users'
URL.join('http://example.com', 'v1', 'users'); // 'http://example.com/v1/users'
```

### `ensureHTTPProtocol(url: string, useHTTPS?: boolean): string`

Ensures an HTTP protocol is present. Pass `true` to force HTTPS, `false` to force HTTP, or omit it to keep the existing protocol and default to HTTP when none is present.

```typescript
URL.ensureHTTPProtocol('example.com');                // 'http://example.com'
URL.ensureHTTPProtocol('example.com', true);          // 'https://example.com'
URL.ensureHTTPProtocol('https://example.com', false); // 'http://example.com'
URL.ensureHTTPProtocol('http://example.com', true);   // 'https://example.com'
```

### `ensureLeadingSlash(url: string, value?: boolean): string`

Adds a leading slash, or removes it when `value` is `false`. Duplicate leading slashes are collapsed. Defaults to `true`.

```typescript
URL.ensureLeadingSlash('foo');         // '/foo'
URL.ensureLeadingSlash('//foo');       // '/foo'
URL.ensureLeadingSlash('/foo', false); // 'foo'
```

### `ensureTrailingSlash(url: string, value?: boolean): string`

Adds a trailing slash, or removes it when `value` is `false`. Duplicate trailing slashes are collapsed. Defaults to `true`.

```typescript
URL.ensureTrailingSlash('foo');         // 'foo/'
URL.ensureTrailingSlash('foo//');       // 'foo/'
URL.ensureTrailingSlash('foo/', false); // 'foo'
```

### `ensureSlashes(url: string, options: { leading?: boolean, trailing?: boolean }): string`

Applies `ensureLeadingSlash` and `ensureTrailingSlash` in one call. An omitted option leaves that end of the URL untouched.

```typescript
URL.ensureSlashes('foo', { leading: true, trailing: true });     // '/foo/'
URL.ensureSlashes('/foo/', { leading: false, trailing: false }); // 'foo'
URL.ensureSlashes('foo', { trailing: true });                    // 'foo/'
```

### `HTTP_PROTOCOL_REG: RegExp`

Matches a leading `http://` or `https://`, case-insensitive.

### `PROTOCOL_REG: RegExp`

Matches a leading `http://`, `https://`, `ftp://`, `sftp://`, `smb://` or `file:///`, case-insensitive.

Note that the `file` form requires three slashes — `file://host/path` and `file:/path` do not match.

## License

[MIT](./LICENSE) © Sylvain Estevez
