import { HTTP_PROTOCOL_REG } from '../constants/http-protocol-reg';
import { join } from './join';

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