import { spawnSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import assert from 'node:assert/strict'

// Match the teaching sequence, then inspect test count, artifact and actual output.
const steps = ['node --version', 'pnpm install --frozen-lockfile', 'pnpm test', 'pnpm build']
for (const command of steps) {
  console.log(`\n$ ${command}`)
  const result = spawnSync(command, { encoding: 'utf8', shell: true, timeout: 30000 })
  process.stdout.write(result.stdout || '')
  process.stderr.write(result.stderr || '')
  if (result.status !== 0) process.exit(result.status ?? 1)
  if (command === 'pnpm test') {
    const count = result.stdout.match(/^# tests (\d+)$/m)
    assert.ok(count && Number(count[1]) >= 4, 'Expected a nonempty test suite')
    assert.match(result.stdout, /^# fail 0$/m)
  }
}
assert.ok(existsSync('dist/example.mjs'), 'Build artifact missing')
assert.equal(readFileSync('dist/example.mjs', 'utf8'), readFileSync('src/example.mjs', 'utf8'))
const output = spawnSync(process.execPath, ['dist/example.mjs'], { encoding: 'utf8', timeout: 5000 })
assert.equal(output.status, 0)
assert.deepEqual(JSON.parse(output.stdout), { ok: false })
console.log('VERIFY_OK: test count, build artifact and output checked')
