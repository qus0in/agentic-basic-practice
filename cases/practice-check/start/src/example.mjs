import { pathToFileURL } from 'node:url'
export function calculateTotal(items) {
  return items.reduce((sum, { unitPrice, quantity }) => {
    if (!Number.isInteger(unitPrice) || unitPrice < 0 || !Number.isInteger(quantity) || quantity < 0) {
      throw new Error('Price and quantity must be nonnegative integers')
    }
    return sum + unitPrice * quantity
  }, 0)
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const items = [{ unitPrice: 1200, quantity: 2 }, { unitPrice: 1200, quantity: 1 }]
  console.log(JSON.stringify({ total: calculateTotal(items), items: 3 }))
}
