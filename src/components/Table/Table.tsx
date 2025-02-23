"use client"
import { DragEvent, useEffect, useState } from "react";
import Column from "./Column/Column";
import s from './Table.module.css'
import Pagination from "../common/Pagination";
import { mockData } from "../utils/data";
import { swapColumn } from "../utils/swapColumn";
import { showDataPagination } from "../utils/showDataPafination";

export default function Table() {

    const [data, setData] = useState<string[][]>([])
    const countShowData: number = 10
    const [loading, setLoading] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [dataPerPage] = useState<number>(countShowData)
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
    // Эмитация запроса к апи
    useEffect(() => {
      const getData = () => {
        setLoading(true)
        const res = setData(mockData)
        setLoading(false)
      }

      getData()
    }, [])

    const lastDataIndex: number = currentPage * dataPerPage
    const firstDataIndex: number = lastDataIndex - dataPerPage
    const currentData: string[][] = showDataPagination(data, firstDataIndex, lastDataIndex)

    const [currentColIndex, setCurrentColIndex] = useState<number>(0);

    function dragStartHandler(e: DragEvent<HTMLDivElement>, colIndex: number) {
      setCurrentColIndex(colIndex);
      e.currentTarget.style.background = 'lightgrey'
    }
    function dragOverHandler(e: DragEvent<HTMLDivElement>) {
      e.preventDefault()
    }
    function dragDropHandler(e: DragEvent<HTMLDivElement>, i: number) {
      e.preventDefault()
      setData(swapColumn(currentColIndex, i, data))
      e.currentTarget.style.background = 'lightgrey'
    }
    function dragEndHandler(e: DragEvent<HTMLDivElement>) {
      e.currentTarget.style.background = ''
    }
    function dragLeaveHandler(e: DragEvent<HTMLDivElement>) {
      e.currentTarget.style.background = ''
    }

    if (loading || !data[0]) {
      return <h1>Loading...</h1>
    }

    return (
      <div className={s.container}>
        <h1>Тестовое задание</h1>
        <div className={s.table__container}>
          
          {
            currentData.map((col, i) => {
              return (
                <div 
                  className={s.column}
                  draggable={true} 
                  key={i}
                  onDragStart={e => dragStartHandler(e, i)}
                  onDragOver={e => dragOverHandler(e)}
                  onDrop={e => dragDropHandler(e, i)}
                  onDragEnd={e => dragEndHandler(e)}
                  onDragLeave={dragLeaveHandler}
                >

                  <Column data={col} loading={loading} />

                </div>
              )
            })
          }
        </div>
        <div>
          <Pagination 
            dataPerPage={dataPerPage}
            totalData={data[0].length}
            paginate={paginate}
          />
        </div>
      </div>
    );
  }
  