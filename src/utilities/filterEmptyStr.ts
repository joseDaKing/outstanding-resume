export const filterEmptyStr = (items: Array<string>): Array<string> => {

    return items.filter(item => !!item);
}