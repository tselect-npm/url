import { ensureLeadingSlash } from "./ensure-leading-slash";
import { ensureTrailingSlash } from "./ensure-trailing-slash";

/**
 * @description Combines `ensureLeadingSlash` and `ensureTrailingSlash` for convenience.
 *
 * @example
 * ```typescript
 * URL.ensureSlashes('foo', { leading: true, trailing: true }); // /foo/
 * ```
 *
 * @example
 * ```typescript
 * URL.ensureSlashes('foo/', { leading: true, trailing: false }); // /foo
 * ```
 */
export function ensureSlashes(url: string, options: { leading?: boolean, trailing?: boolean }): string {
  if ('leading' in options) {
    url = ensureLeadingSlash(url, options.leading);
  }

  if ('trailing' in options) {
    url = ensureTrailingSlash(url, options.trailing);
  }

  return url;
}