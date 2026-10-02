import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'
const source = readFileSync('slides.md', 'utf8')
assert.equal([...source.matchAll(/^# /gm)].length, 3)
const html = readFileSync('dist/index.html', 'utf8')
assert.match(html, /<html/)
assert.match(html, /assets\//)
console.log('VERIFY_OK: three-slide source and built HTML checked; exported files require separate review')
