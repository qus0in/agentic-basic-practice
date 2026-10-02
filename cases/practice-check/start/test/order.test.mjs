import { test } from 'node:test'
import assert from 'node:assert/strict'
import { calculateTotal } from '../src/example.mjs'
test('order total includes every item quantity', () => {
  assert.equal(calculateTotal([{ unitPrice: 1200, quantity: 2 }, { unitPrice: 1200, quantity: 1 }]), 3600)
})
test('empty order costs zero', () => assert.equal(calculateTotal([]), 0))
