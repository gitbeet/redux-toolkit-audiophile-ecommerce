const CURRENCY_FORMATTER = new Intl.NumberFormat('en-IN', {
    currency: "USD",
    style: "currency",
  })
  
  export function formatCurrency(number) {
    return CURRENCY_FORMATTER.format(number)
  }