import { ensureLeadingSlash } from "./ensure-leading-slash";
import { ensureTrailingSlash } from "./ensure-trailing-slash";

export function ensureSlashes(url: string, options: { leading?: boolean, trailing?: boolean }): string {
  if ('leading' in options) {
    url = ensureLeadingSlash(url, options.leading);
  }

  if ('trailing' in options) {
    url = ensureTrailingSlash(url, options.trailing);
  }

  return url;
}