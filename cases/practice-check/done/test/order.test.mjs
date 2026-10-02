import { test } from 'node:test'
import assert from 'node:assert/strict'
import { calculateTotal } from '../src/example.mjs'
test('order total includes every item quantity', () => {
  assert.equal(calculateTotal([{ unitPrice: 1200, quantity: 2 }, { unitPrice: 1200, quantity: 1 }]), 3600)
})
test('empty order costs zero', () => assert.equal(calculateTotal([]), 0))
test('invalid price is rejected', () => assert.throws(() => calculateTotal([{ unitPrice: -1, quantity: 1 }])))
test('zero quantity does not add cost', () => assert.equal(calculateTotal([{ unitPrice: 1200, quantity: 0 }]), 0))
