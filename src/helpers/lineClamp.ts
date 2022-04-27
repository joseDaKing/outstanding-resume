export const lineClamp = (str: string, length: number): string => {

    if (length < str.length) {

        return `${str.slice(0, length)}...`;
    }

    return str;
}