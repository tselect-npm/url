import { PROTOCOL_REG } from "../constants/protocol-reg";

export function join(...parts: string[]) {
  const args = Array.prototype.slice.call(arguments, 0);
  let ret = args.join('/');
  let protocol = ret.match(PROTOCOL_REG);
  protocol = protocol ? protocol[0] : '';
  ret = ret.replace(protocol, '');
  if (protocol) ret = ret.replace(/^\/+/, '');
  return protocol + ret.replace(/\/{2,}/g, '/');
}