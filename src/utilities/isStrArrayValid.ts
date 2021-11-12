export function isStrArrayValid(array: string[]) {

    let isValid = true;

    for (const item of array) {

        isValid = isValid && !!item;

        if (!isValid) {

            break;
        }
    }

    return isValid;
}