import { existsSync } from 'node:fs'
export const projects = ['cases/practice-check/start', 'cases/practice-check/done', 'harness-advanced/verification', 'harness-basics/rules']
  .filter((path) => existsSync(new URL(`../${path}/package.json`, import.meta.url)))
