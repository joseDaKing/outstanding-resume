export const gorupArrayInto = <T>(array: T[], groupSize: number): T[][] =>  {

    let j = 0;

    let k = 0;

    const groupedArray: T[][] = [];

    for (let i = 0; i < array.length; i++) {

        const item = array[i];

        if (!groupedArray[k]) {

            groupedArray[k] = [];
        }

        groupedArray[k][j] = item;

        j++;

        if (groupSize < j+1) {

            k++;

            j = 0;
        }
    }

    return groupedArray;
}