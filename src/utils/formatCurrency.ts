

const convert = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export default function formatCurrency(value: number) {
    return convert.format(value)
}

