import { mkdirSync, copyFileSync } from 'node:fs'
mkdirSync('dist', { recursive: true })
copyFileSync('src/example.mjs', 'dist/example.mjs')
console.log('BUILD_OK: dist/example.mjs')
