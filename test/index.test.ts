import { describe, expect, it } from 'vitest';
import * as URL from '../src';

describe('URL', function () {
  describe('.join()', function () {
    it('should remove unnecessary slashes', function () {
      expect(URL.join('/v1', '/', '/users')).toBe('/v1/users');
    });
    it('should preserve protocol', function () {
      expect(URL.join('http://example.com', 'v1', 'users')).toBe('http://example.com/v1/users');
    });
  });
  describe('.ensureHTTPProtocol()', function () {
    it('should add missing protocol - default to http', function () {
      expect(URL.ensureHTTPProtocol('example.com/v1/user')).toBe('http://example.com/v1/user');
    });
    it('should leave the parameter unchanged', function () {
      expect(URL.ensureHTTPProtocol('http://example.com/v1/user')).toBe('http://example.com/v1/user');
    });
    it('should change from http to https', function () {
      expect(URL.ensureHTTPProtocol('http://example.com/v1/user', true)).toBe('https://example.com/v1/user');
    });
    it('should add https', function () {
      expect(URL.ensureHTTPProtocol('example.com/v1/user', true)).toBe('https://example.com/v1/user');
    });
    it('should add http', function () {
      expect(URL.ensureHTTPProtocol('example.com/v1/user', false)).toBe('http://example.com/v1/user');
    });
  });
  describe('.ensureLeadingSlash()', function () {
    it('should add leading slash if non present', () => {
      expect(URL.ensureLeadingSlash('foo')).toBe('/foo');
    });
    it('should preserve leading slash', () => {
      expect(URL.ensureLeadingSlash('/foo')).toBe('/foo');
    });
    it('should dedup leading slashes', () => {
      expect(URL.ensureLeadingSlash('//foo')).toBe('/foo');
    });
    it('should remove leading slash', () => {
      expect(URL.ensureLeadingSlash('/foo', false)).toBe('foo');
    });
    it('should leave url untouched', () => {
      expect(URL.ensureLeadingSlash('foo', false)).toBe('foo');
    });
  });
  describe('.ensureTrailingSlash()', function () {
    it('should add trailing slash if non present', () => {
      expect(URL.ensureTrailingSlash('foo')).toBe('foo/');
    });
    it('should preserve trailing slash', () => {
      expect(URL.ensureTrailingSlash('foo/')).toBe('foo/');
    });
    it('should dedup trailing slashes', () => {
      expect(URL.ensureTrailingSlash('foo//')).toBe('foo/');
    });
    it('should remove trailing slash', () => {
      expect(URL.ensureTrailingSlash('foo/', false)).toBe('foo');
    });
    it('should leave the url untouched', () => {
      expect(URL.ensureTrailingSlash('foo', false)).toBe('foo');
    });
  });
  describe('.ensureSlashes()', function () {
    it('should add leading slash', function () {
      expect(URL.ensureSlashes('foo', { leading: true })).toBe('/foo');
    });
    it('should add trailing slash', function () {
      expect(URL.ensureSlashes('foo', { trailing: true })).toBe('foo/');
    });
    it('should add trailing and leading slashes', function () {
      expect(URL.ensureSlashes('foo', { leading: true, trailing: true })).toBe('/foo/');
    });
    it('should remove leading slash', function () {
      expect(URL.ensureSlashes('/foo', { leading: false })).toBe('foo');
    });
    it('should remove trailing slash', function () {
      expect(URL.ensureSlashes('foo/', { trailing: false })).toBe('foo');
    });
    it('should remove trailing and leading slashes', function () {
      expect(URL.ensureSlashes('/foo/', { leading: false, trailing: false })).toBe('foo');
    });
  });
});