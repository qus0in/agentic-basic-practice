import assert from 'node:assert/strict'
import { readFileSync, readlinkSync, mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { spawnSync } from 'node:child_process'
export function check() {
  const skill = readFileSync('start/.agents/skills/commit/SKILL.md', 'utf8')
  assert.match(skill, /^---\nname: commit\ndescription: .+\n---/)
  assert.match(skill, /작업 단위의 파일만 stage/)
  assert.equal(readlinkSync('done/.claude/skills'), '../.agents/skills')
  assert.equal(readFileSync('done/.claude/skills/commit/SKILL.md', 'utf8'), skill)
  const dir = mkdtempSync(join(tmpdir(), 'practice-skills-'))
  try {
    mkdirSync(join(dir, '.agents/skills/commit'), { recursive: true })
    mkdirSync(join(dir, '.claude'))
    writeFileSync(join(dir, '.agents/skills/commit/SKILL.md'), skill)
    assert.equal(spawnSync('ln', ['-s', '../.agents/skills', '.claude/skills'], { cwd: dir }).status, 0)
    assert.equal(readFileSync(join(dir, '.claude/skills/commit/SKILL.md'), 'utf8'), skill)
  } finally { rmSync(dir, { recursive: true, force: true }) }
}
export function nonempty(text) { assert.ok(text.trim().length > 0) }
