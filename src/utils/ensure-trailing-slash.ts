/** Code unit for `'/'` (U+002F SOLIDUS). */
const FORWARD_SLASH_CHAR_CODE = 0x2f;

/**
 * @description Ensure that a trailing slash is present/absent. Deduplicate trailing slashes if multiple are found.
 *
 * @example
 * ```typescript
 * URL.ensureTrailingSlash('foo'); // foo/
 * ```
 *
 * @example
 * ```typescript
 * URL.ensureTrailingSlash('foo//'); // foo/
 * ```
 *
 * @example
 * ```typescript
 * URL.ensureTrailingSlash('foo/', false); // foo
 * ```
 */
export function ensureTrailingSlash(url: string, value = true): string {
  // Linear scan instead of a `/\/+$/` regex: the anchored quantifier backtracks
  // quadratically on inputs made of many '/' not followed by end of string.
  let end = url.length;
  while (end > 0 && url.charCodeAt(end - 1) === FORWARD_SLASH_CHAR_CODE) {
    end--;
  }
  url = url.slice(0, end);

  if (value) {
    url = `${url}/`;
  }

  return url;
}
