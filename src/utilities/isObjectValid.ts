export const isObjectValid = (obj: object): boolean => {

    return Object.values(obj).join() !== ""
}