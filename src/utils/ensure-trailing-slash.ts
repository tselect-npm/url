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
  url = url.replace(/\/+$/, '');

  if (value) {
    url = url + '/';
  }

  return url;
}
