export function ensureLeadingSlash(url: string, value: boolean = true): string {
  url = url.replace(/^\/+/, '');

  if (value) {
    url = '/' + url;
  }

  return url;
}