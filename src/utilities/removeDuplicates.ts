export const removeDuplicates = <T>(items: T[]): T[] => {

    return [...(new Set(...items as any[]))] as T[];
}