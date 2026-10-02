import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
export function inspect(a, b) {
  const outputs = [a, b].map(text => text.trim())
  const format = outputs.map(text => /^fix\([a-z][a-z0-9-]*\): [^\r\n]+$/.test(text) && /[가-힣]/.test(text))
  const forbidden = outputs.map(text => ['완벽', '무조건', '항상'].filter(word => text.includes(word)))
  return {
    '형식 준수': format,
    '금지 항목 없음': forbidden.map(words => words.length === 0),
    '길이': outputs.map(text => Array.from(text).length),
    '두 번 돌려 같은가': outputs[0] === outputs[1],
  }
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const [one, two] = process.argv.slice(2)
  if (!one || !two) { console.error('Usage: pnpm compare <run-1.txt> <run-2.txt>'); process.exitCode = 1 }
  else console.log(JSON.stringify(inspect(readFileSync(one, 'utf8'), readFileSync(two, 'utf8')), null, 2))
}
