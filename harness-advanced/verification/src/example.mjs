import { pathToFileURL } from 'node:url'
export function validateName(name) {
  if (typeof name !== 'string' || name.trim().length === 0) return { ok: false }
  return { ok: true }
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  console.log(JSON.stringify(validateName('')))
}
