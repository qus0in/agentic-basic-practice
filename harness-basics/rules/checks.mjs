import assert from 'node:assert/strict'
import { readFileSync, readlinkSync, mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { spawnSync } from 'node:child_process'
export function check() {
  assert.equal(readlinkSync('done/CLAUDE.md'), 'AGENTS.md')
  assert.equal(readFileSync('done/CLAUDE.md', 'utf8'), readFileSync('done/AGENTS.md', 'utf8'))
  assert.match(readFileSync('start/AGENTS.md', 'utf8'), /pnpm test/)
  const dir = mkdtempSync(join(tmpdir(), 'practice-rules-'))
  try {
    writeFileSync(join(dir, 'AGENTS.md'), readFileSync('start/AGENTS.md'))
    const result = spawnSync('ln', ['-s', 'AGENTS.md', 'CLAUDE.md'], { cwd: dir })
    assert.equal(result.status, 0)
    assert.equal(readlinkSync(join(dir, 'CLAUDE.md')), 'AGENTS.md')
    assert.equal(spawnSync('ln', ['-s', 'AGENTS.md', 'CLAUDE.md'], { cwd: dir }).status, 1)
  } finally { rmSync(dir, { recursive: true, force: true }) }
}
export function nonempty(text) { assert.ok(text.trim().length > 0) }
