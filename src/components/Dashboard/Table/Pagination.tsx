import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Styles from './Pagination.module.scss'

const Pagination = () => {
  return (
    <section className={Styles.pagination__container}>
        <div className={Styles.pagination__select_div}>
            <span>Showing</span> 
            <select name="" id="">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
            <span>Out of 100</span>
        </div>


        <div className={Styles.pagination__buttons}>

            <span>
                <button><FaChevronLeft /></button>
                <button><FaChevronRight/></button>
            </span>

        </div>
    </section>
  )
}

export default Pagination
