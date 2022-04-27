export const mergeText = (joinChar: string, ...strArr: Array<string|undefined|null>): string => {

    return strArr.filter(item => !!item).map(str => str?.trim()).join(joinChar).trim();
}