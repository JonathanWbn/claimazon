export function formatPrice(amount: number, currency: string): string {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount)
}
