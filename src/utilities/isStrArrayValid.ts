export function isStrArrayValid(array: string[]): boolean {

    let isValid = false;

    for (const item of array) {

        isValid = isValid || !!item;
    }

    return isValid;
}