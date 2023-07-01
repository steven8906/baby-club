export default {
    arrayDuplicateFilter : <T>(data: T[]) => Array.from(new Set([...data])),
}