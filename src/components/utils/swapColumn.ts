export function swapColumn(colIndexOne: number, colIndexTwo: number, data: string[][]) {
    const newData = [...data];
    // Меняем местами столбцы
    [newData[colIndexOne], newData[colIndexTwo]] = [newData[colIndexTwo], newData[colIndexOne]]
    return newData;
}