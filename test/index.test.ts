import { expect } from 'chai';
import * as URL from '../';

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
  describe('.ensureLeadingSlash()', function () {
    it('should add leading slash if non present', () => {
      expect(URL.ensureLeadingSlash('foo')).to.equal('/foo');
    });
    it('should preserve leading slash', () => {
      expect(URL.ensureLeadingSlash('/foo')).to.equal('/foo');
    });
    it('should dedup leading slashes', () => {
      expect(URL.ensureLeadingSlash('//foo')).to.equal('/foo');
    });
    it('should remove leading slash', () => {
      expect(URL.ensureLeadingSlash('/foo', false)).to.equal('foo');
    });
    it('should leave url untouched', () => {
      expect(URL.ensureLeadingSlash('foo', false)).to.equal('foo');
    });
  });
  describe('.ensureTrailingSlash()', function () {
    it('should add trailing slash if non present', () => {
      expect(URL.ensureTrailingSlash('foo')).to.equal('foo/');
    });
    it('should preserve trailing slash', () => {
      expect(URL.ensureTrailingSlash('foo/')).to.equal('foo/');
    });
    it('should dedup trailing slashes', () => {
      expect(URL.ensureTrailingSlash('foo//')).to.equal('foo/');
    });
    it('should remove trailing slash', () => {
      expect(URL.ensureTrailingSlash('foo/', false)).to.equal('foo');
    });
    it('should leave the url untouched', () => {
      expect(URL.ensureTrailingSlash('foo', false)).to.equal('foo');
    });
  });
  describe('.ensureSlashes()', function () {
    it('should add leading slash', function () {
      expect(URL.ensureSlashes('foo', { leading: true })).to.equal('/foo');
    });
    it('should add trailing slash', function () {
      expect(URL.ensureSlashes('foo', { trailing: true })).to.equal('foo/');
    });
    it('should add trailing and leading slashes', function () {
      expect(URL.ensureSlashes('foo', { leading: true, trailing: true })).to.equal('/foo/');
    });
    it('should remove leading slash', function () {
      expect(URL.ensureSlashes('/foo', { leading: false })).to.equal('foo');
    });
    it('should remove trailing slash', function () {
      expect(URL.ensureSlashes('foo/', { trailing: false })).to.equal('foo');
    });
    it('should remove trailing and leading slashes', function () {
      expect(URL.ensureSlashes('/foo/', { leading: false, trailing: false })).to.equal('foo');
    });
  });
});