export default {
    currency(amount: number | string): string {
        return new Intl.NumberFormat('es-CO', {
            style                 : 'currency',
            currency              : 'COP',
            maximumFractionDigits : 2,
            minimumFractionDigits : 0,
        }).format(amount as number);
    }
}