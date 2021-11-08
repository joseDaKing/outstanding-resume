export const removeDuplicates = <T>(items: T[]): T[] => {

    const set = new Set();

    for (const item of items) {

        set.add(item);
    }

    return [...(set)] as T[];
}