import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  // Kept at ES2015 deliberately: the support policy is additive, so the emitted
  // syntax level must never rise above what tsc's `target: es6` produced before.
  target: 'es2015',
  dts: true,
  sourcemap: true,
  clean: true,
  outDir: 'dist',
});
