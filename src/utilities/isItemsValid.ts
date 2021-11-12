export function isItemsValid(items: Record<string, Record<string, string>>): boolean {
    
    return !!Object.values(items).map(item => Object.values(item)).flat().join()
}