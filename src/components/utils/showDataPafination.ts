export function showDataPagination(data: string[][], firstDataIndex: number, lastDataIndex: number) {
    const currentData: string[][] = []
    data.map(el => {
      currentData.push(el.slice(firstDataIndex, lastDataIndex))
    })

    return currentData
}