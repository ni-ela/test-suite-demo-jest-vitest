/// <reference types='vitest' />

import { defineConfig, configDefaults } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

export default defineConfig({
    test: {
        environment: 'jsdom',
        include: ["./**/*.test.ts", "./**/*.test.tsx"],
        exclude: [
            '**/node_modules/**',
            '**/tests/**'
        ],
        globals: true,
        setupFiles: ['./setupTests.js'],
        reporters: ['default', 'html'],
        coverage: {
            enabled: true,
            reporter: ['text', 'html', 'lcov'],
            exclude: [
                '.eslintrc.json',
                '.babelrc',
                '.gitignore',
                '.prettierrc.json',
                '.vscode/**',
                'coverage/**',
                'node_modules/**',
                'helm/**',
                'public/**',
                '.next/**',
                '.swc/**',
                '.extra/**',
                'Dockerfile',
                'README.md',
                'vite.config.mts',
                'next.config.js',
                'next-env.d.ts',
                'package.json',
                'package-lock.json',
                'yarn.lock',
                '.editorconfig',
                '.env.*',
                'src/styles/**',
                'src/attrs/**',
                'src/context/**',
                'src/pages/_app.tsx',
                'src/pages/_document.tsx',
                'src/types/**',
                'src/usecases/history/types.ts',
                'html/assets/**',
                // incluir!
                'tests/**',
                'vitests/**',
                'jest.setup.ts'
            ],
        },
    },
    plugins: [tsconfigPaths(), react()],
})

// Para exibir a árvore do DOM no console
// console.debug(prettyDOM())