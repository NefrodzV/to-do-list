import { format, parseISO } from "date-fns"
export default function Formatter() {
    const formatDate = (date) => {
        return format(parseISO(date), 'ccc d, MMM, yyyy')
    }
    return {
        formatDate
    }
}