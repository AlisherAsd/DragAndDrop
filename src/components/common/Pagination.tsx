import { useState } from 'react';
import s from './Pagination.module.css'

type PaginationProps = {
    dataPerPage: number;
    totalData: number;
    paginate: (pageNumber: number) => void;
  };
  

const Pagination: React.FC<PaginationProps> = ({ dataPerPage, totalData, paginate }) => {

    let numLocal: number = 1
    const DataNumbers: number[] = []
    for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
        DataNumbers.push(i)
    }

    function clickOnNum(id: number) {
        paginate(id)
        numLocal = id
    }

    return (
        <div className={s.container}>
            {
                DataNumbers.map(num => {
                    return (
                        <div className={num == numLocal ? s.pagNumCurrent : s.pagNumDefault} key={num}>
                            <a href="#" onClick={() => clickOnNum(num)}>{num}</a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Pagination
