import { HTTP_PROTOCOL_REG } from '../constants/http-protocol-reg';
import { join } from './join';

/**
 * @description Ensure that an HTTP protocol is present. Set useHTTPS to `true` to force HTTPS. Set it to `false` to
 * force HTTP. Let it blank to keep the original protocol or just ensure HTTP.
 *
 * @example
 * ```typescript
 * URL.ensureHTTPProtocol('example.com'); // http://example.com
 * ```
 *
 * @example
 * ```typescript
 * URL.ensureHTTPProtocol('example.com', true); // https://example.com
 * ```
 *
 * @example
 * ```typescript
 * URL.ensureHTTPProtocol('https://example.com', false); // http://example.com
 * ```
 *
 * @example
 * ```typescript
 * URL.ensureHTTPProtocol('http://example.com', true); // https://example.com
 * ```
 */
export function ensureHTTPProtocol(url: string, useHTTPS: boolean | undefined = undefined) {
  const forceProtocol = useHTTPS !== undefined;
  const matches = url.match(HTTP_PROTOCOL_REG);

  let protocol: string = matches ? matches[0] : '';

  if (protocol) {
    url = url.replace(protocol, '');
  } else {
    protocol = ['http', useHTTPS ? 's' : '', '://'].join('');
  }

  if (useHTTPS) {
    protocol = protocol.replace(/^http(s)?/, 'https');
  } else if (forceProtocol) {
    protocol = protocol.replace(/^http(s)?/, 'http');
  }

  return join(protocol, url);
}
