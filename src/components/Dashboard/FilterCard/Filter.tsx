import React, { useContext } from 'react'
import Styles from './Filter.module.scss'
import { FilterProps } from '../../../types/filter'
import { DataContext } from '../../../contexts/DataProvider'

const Filter: React.FC<FilterProps> = ({ selectedFilter, setSelectedFilter, setShowFilter, showFilter, filterName }) => {

    const { uniqueOrganizations } = useContext(DataContext)

  
    




   
    return (
        <div className={`${Styles.main__container}`} style={showFilter && selectedFilter === filterName ? { display: "flex" } : { display: "none" }}>
            <span>
                <p>Organization</p>
                <select name="" id="">

                    {
                        uniqueOrganizations?.map((item:string)=>{
                            return (
                                <option value={item}>{item}</option>
                            )
                        })
                    }



                </select>
            </span>
            <span>
                <p>Username</p>
                <input type="text" />
            </span>
            <span>
                <p>Email</p>
                <input type="email" />
            </span>
            <span>
                <p>Date</p>
                <input type="date" placeholder='Date'  />
            </span>
            <span>
                <p>Phone Number</p>
                <input type="text" />


            </span>
            <span>
                <p>Status</p>
                <select name="" id="">

                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Blaclisted">Blacklisted</option>


                </select>
            </span>
            <span className={Styles.buttons}>
                <button>Reset</button>
                <button>Filter</button>
            </span>
        </div>
    )
}

export default Filter
