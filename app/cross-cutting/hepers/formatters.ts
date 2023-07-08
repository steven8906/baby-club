export default {
    currency(amount: number | string): string {
        return new Intl.NumberFormat('es-CO', {
            style                 : 'currency',
            currency              : 'COP',
            maximumFractionDigits : 2,
            minimumFractionDigits : 0,
        }).format(amount as number);
    },
    dateTimeToLocaleString: (dateTime: Date):string=> {
        return new Intl.DateTimeFormat('es-CO', {
            day       : 'numeric',
            hour      : '2-digit',
            hour12    : true,
            minute    : '2-digit',
            second    : '2-digit',
            year      : 'numeric',
            month     : 'long',
            dateStyle : 'long',
            timeStyle: 'short'
        }).format(dateTime)
    }
}