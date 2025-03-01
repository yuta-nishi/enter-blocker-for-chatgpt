import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    include: ['tests/**/*.test.{ts,tsx}'],
    globals: true,
    environment: 'happy-dom',
    setupFiles: './vitest.setup.ts',
    coverage: {
      // Note that the path specification method for test.include is different. The following will not work.
      // include: ['./src/**/*.{ts,tsx}'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/components/ui'],
    },
  },
});
