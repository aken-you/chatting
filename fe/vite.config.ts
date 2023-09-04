import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  resolve: {
    alias: [
      { find: '@assets', replacement: '/src/assets' },
      { find: '@components', replacement: '/src/components' },
      { find: '@common', replacement: '/src/components/common' },
      { find: '@constants', replacement: '/src/constants' },
      { find: '@contexts', replacement: '/src/contexts' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@utils', replacement: '/src/utils' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '@types', replacement: '/src/types' },
      { find: '@mocks', replacement: '/src/mocks' },
      { find: '@routes', replacement: '/src/routes' },
      { find: '@*', replacement: '/src' },
    ],
  },
});
