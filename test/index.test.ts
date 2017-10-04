import { URL } from '../';

describe('URL', function () {
  describe('.join()', function () {
    it('should remove unnecessary slashes', function () {
      expect(URL.join('/v1', '/', '/users')).to.equal('/v1/users');
    });
    it('should preserve protocol', function () {
      expect(URL.join('http://example.com', 'v1', 'users')).to.equal('http://example.com/v1/users');
    });
  });
  describe('.ensureHTTPProtocol()', function () {
    it('should add missing protocol - default to http', function () {
      expect(URL.ensureHTTPProtocol('example.com/v1/user')).to.equal('http://example.com/v1/user');
    });
    it('should leave the parameter unchanged', function () {
      expect(URL.ensureHTTPProtocol('http://example.com/v1/user')).to.equal('http://example.com/v1/user');
    });
    it('should change from http to https', function () {
      expect(URL.ensureHTTPProtocol('http://example.com/v1/user', true)).to.equal('https://example.com/v1/user');
    });
    it('should add https', function () {
      expect(URL.ensureHTTPProtocol('example.com/v1/user', true)).to.equal('https://example.com/v1/user');
    });
    it('should add http', function () {
      expect(URL.ensureHTTPProtocol('example.com/v1/user', false)).to.equal('http://example.com/v1/user');
    });
  });
});