import { ensureLeadingSlash } from "./ensure-leading-slash";
import { ensureTrailingSlash } from "./ensure-trailing-slash";

type TLeadingSlashOption = { leading: boolean };
type TTrailingSlashOption = { trailing: boolean };

type TOptions = TLeadingSlashOption | TTrailingSlashOption | (TLeadingSlashOption & TTrailingSlashOption);

export function ensureSlashes(url: string, options: TOptions): string {
  if ('leading' in options) {
    url = ensureLeadingSlash(url, (<TLeadingSlashOption>options).leading);
  }

  if ('trailing' in options) {
    url = ensureTrailingSlash(url, (<TTrailingSlashOption>options).trailing);
  }

  return url;
}