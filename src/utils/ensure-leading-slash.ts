/**
 * @description Ensure that a leading slash is present/absent. Deduplicate leading slashes if multiple are found.
 *
 * @example
 * ```typescript
 * URL.ensureLeadingSlash('foo'); // /foo
 * ```
 *
 * @example
 * ```typescript
 * URL.ensureLeadingSlash('//foo'); // /foo
 * ```
 *
 * @example
 * ```typescript
 * URL.ensureLeadingSlash('/foo', false); // foo
 * ```
 */
export function ensureLeadingSlash(url: string, value: boolean = true): string {
  url = url.replace(/^\/+/, '');

  if (value) {
    url = '/' + url;
  }

  return url;
}