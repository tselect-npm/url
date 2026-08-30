import { describe, expect, it } from 'vitest';
import * as URL from '../src';

describe('URL', () => {
  describe('.join()', () => {
    it('should remove unnecessary slashes', () => {
      expect(URL.join('/v1', '/', '/users')).toBe('/v1/users');
    });
    it('should preserve protocol', () => {
      expect(URL.join('http://example.com', 'v1', 'users')).toBe('http://example.com/v1/users');
    });
  });
  describe('.ensureHTTPProtocol()', () => {
    it('should add missing protocol - default to http', () => {
      expect(URL.ensureHTTPProtocol('example.com/v1/user')).toBe('http://example.com/v1/user');
    });
    it('should leave the parameter unchanged', () => {
      expect(URL.ensureHTTPProtocol('http://example.com/v1/user')).toBe('http://example.com/v1/user');
    });
    it('should change from http to https', () => {
      expect(URL.ensureHTTPProtocol('http://example.com/v1/user', true)).toBe('https://example.com/v1/user');
    });
    it('should add https', () => {
      expect(URL.ensureHTTPProtocol('example.com/v1/user', true)).toBe('https://example.com/v1/user');
    });
    it('should add http', () => {
      expect(URL.ensureHTTPProtocol('example.com/v1/user', false)).toBe('http://example.com/v1/user');
    });
  });
  describe('.ensureLeadingSlash()', () => {
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
  describe('.ensureTrailingSlash()', () => {
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
    it('should handle an empty string', () => {
      expect(URL.ensureTrailingSlash('')).toBe('/');
    });
    it('should dedup long runs of trailing slashes', () => {
      expect(URL.ensureTrailingSlash(`foo${'/'.repeat(10_000)}`)).toBe('foo/');
    });
    it('should stay linear on inputs of repeated slashes (ReDoS regression)', () => {
      const input = `${'/'.repeat(50_000)}a`;
      const start = performance.now();
      expect(URL.ensureTrailingSlash(input, false)).toBe(input);
      expect(performance.now() - start).toBeLessThan(250);
    });
  });
  describe('.ensureSlashes()', () => {
    it('should add leading slash', () => {
      expect(URL.ensureSlashes('foo', { leading: true })).toBe('/foo');
    });
    it('should add trailing slash', () => {
      expect(URL.ensureSlashes('foo', { trailing: true })).toBe('foo/');
    });
    it('should add trailing and leading slashes', () => {
      expect(URL.ensureSlashes('foo', { leading: true, trailing: true })).toBe('/foo/');
    });
    it('should remove leading slash', () => {
      expect(URL.ensureSlashes('/foo', { leading: false })).toBe('foo');
    });
    it('should remove trailing slash', () => {
      expect(URL.ensureSlashes('foo/', { trailing: false })).toBe('foo');
    });
    it('should remove trailing and leading slashes', () => {
      expect(URL.ensureSlashes('/foo/', { leading: false, trailing: false })).toBe('foo');
    });
  });
});
