import { PROTOCOL_REG } from '../constants/protocol-reg';

/**
 * @description Similar to Node's Path.join(), but for URLs.
 *
 * @example
 * ```typescript
 * URL.join('http://example.com/', '/foo'); // http://example.com/foo
 * ```
 */
export function join(...parts: string[]) {
  let ret = parts.join('/');
  const protocolMatches = ret.match(PROTOCOL_REG);
  const protocol = protocolMatches ? protocolMatches[0] : '';
  ret = ret.replace(protocol, '');
  if (protocol) {
    ret = ret.replace(/^\/+/, '');
  }
  return protocol + ret.replace(/\/{2,}/g, '/');
}
