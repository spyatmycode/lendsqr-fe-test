import React, { useContext, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Styles from './Pagination.module.scss';
import { DataContext } from '../../../contexts/DataProvider';
import { Response } from '../../../types/context';

interface Props {
    passedData: Response[];
    setPassedData: React.Dispatch<React.SetStateAction<Response[]>>;
}

const Pagination: React.FC<Props> = ({ passedData, setPassedData }) => {
    const { data } = useContext(DataContext);

   


    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState<number>(itemsPerPage);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState<number>(0);


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const pageNumbers: number[] = [];

    for (let i = 1; i <= Math.ceil(data?.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }





    useEffect(()=>{
        setPassedData(data?.slice(indexOfFirstItem, indexOfLastItem))
    },[data])

    useEffect(() => {
        setPassedData(data?.slice(indexOfFirstItem, indexOfLastItem))
    }, [itemsPerPage, currentPage, indexOfFirstItem, indexOfLastItem]);



    const handleNext = () => {
        setCurrentPage((current) => currentPage < pageNumbers.length ? current + 1 : 1)


        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + itemsPerPage)
            setMinPageNumberLimit(minPageNumberLimit + itemsPerPage)
        }

    }

    const handlePrev = () => {

        setCurrentPage((current) => currentPage > 2 ? current - 1 : 1)
        if ((currentPage + 1) % itemsPerPage === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - itemsPerPage)
            setMinPageNumberLimit(minPageNumberLimit - itemsPerPage)
        }

    }

    let pageIncrementBtn = null;
    if (pageNumbers.length > maxPageNumberLimit) {
        pageIncrementBtn = <p onClick={handleNext}> &hellip; </p>;
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <p onClick={handlePrev}> &hellip; </p>;
    }


    return (
        <section className={Styles.pagination__container}>
            <div className={Styles.pagination__select_div}>
                <span>Showing</span>
                <select
                    name=""
                    id=""
                    onChange={(e) => setItemsPerPage(Number(e.currentTarget.value))}
                >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
                <span>Out of 100</span>
            </div>

            <div className={Styles.pagination__buttons}>
                <span>
                    <button className={Styles.chevron} onClick={() => handlePrev()}><FaChevronLeft /></button>

                    {pageDecrementBtn}
                    {pageNumbers.map((number) => {

                        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
                            return (<button
                                key={number}


                                onClick={() => { setCurrentPage(number); setPassedData(data?.slice(indexOfFirstItem, indexOfLastItem)) }}
                                className={currentPage === number ? Styles.active : Styles.list__button}
                            >
                                {number}
                            </button>)
                        }
                        else {
                            return null
                        }



                    })}
                    {pageIncrementBtn}

                    <button className={Styles.chevron} onClick={() => handleNext()}><FaChevronRight /></button>
                </span>
            </div>
        </section>
    );
};

export default Pagination;