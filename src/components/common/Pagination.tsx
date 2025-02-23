import { useState } from 'react';
import s from './Pagination.module.css'

type PaginationProps = {
    dataPerPage: number;
    totalData: number;
    paginate: (pageNumber: number) => void;
  };
  

const Pagination: React.FC<PaginationProps> = ({ dataPerPage, totalData, paginate }) => {

    const [currentNum, setCurrentNum] = useState<number>(1)
    const DataNumbers = []
    for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
        DataNumbers.push(i)
    }

    function clickOnNum(id: number) {
        paginate(id)
        setCurrentNum(id)
    }

    return (
        <div className={s.container}>
            {
                DataNumbers.map(num => {
                    return (
                        <div className={num == currentNum ? s.pagNumCurrent : s.pagNumDefault} key={num}>
                            <a href="#" onClick={() => clickOnNum(num)}>{num}</a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Pagination
