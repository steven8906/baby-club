import moment from "moment/moment";
import 'moment/locale/es';
import dateTimeFormats from "../constants/date-time-formats";

export default {
    currency(amount: number | string): string {
        return new Intl.NumberFormat('es-CO', {
            style                 : 'currency',
            currency              : 'COP',
            maximumFractionDigits : 2,
            minimumFractionDigits : 0,
        }).format(amount as number);
    },
    dateTimeToLocaleString: (dateTime: Date):string=> moment(dateTime).locale('es-CO').format(dateTimeFormats.dateTimeLocal)
}