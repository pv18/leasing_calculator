export const getMonthPay = (price: number, initialPaymentPercent: number, rate: number, months: number) => {
    return Math.round((price - (initialPaymentPercent * price / 100)) *
        ((rate * Math.pow((1 + rate), months)) / (Math.pow((1 + rate), months) - 1)))
}