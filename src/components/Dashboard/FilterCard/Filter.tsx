import React, { useContext, useState } from 'react'
import Styles from './Filter.module.scss'
import { FilterProps } from '../../../types/filter'
import { DataContext } from '../../../contexts/DataProvider'
import { formatDate } from '../../../utils/formatDate'

const Filter: React.FC<FilterProps> = ({ selectedFilter, setSelectedFilter, setShowFilter,passedData,setPassedData ,showFilter, filterName }) => {

    

    const { uniqueOrganizations, data } = useContext(DataContext)


    const [filterObject, setFilterObject] = useState({
        organization:"",
        username:"",
        email:"",
        date:"",
        phone_number:"",
        status:""
        
    })

    const handleFilterChange =(e:any)=>{
        const {value, name} = e.target

        setFilterObject({...filterObject,[name]:value})
    }



    const resetFilter = ()=>{


        setFilterObject(
            
                {
                    organization:"",
                    username:"",
                    email:"",
                    date:"",
                    phone_number:"",
                    status:""
                    
                }
            
        )

        setShowFilter(false)

        setPassedData(data)


        setSelectedFilter("")

        



    }

    const handleFilter=(e:any)=>{

        e.preventDefault();



        const filteredData = passedData.filter((each)=>{

            const {username, phonenumber, datejoined, email, status,organization}= each

            return (username.toString().toLowerCase().includes(filterObject.username.toString().toLowerCase()) &&
            organization.toString().toLowerCase().includes(filterObject.organization.toString().toLowerCase()) && 
            email.toString().toLowerCase().includes(filterObject.email.toString().toLowerCase()) && 
            status.toString().toLowerCase().includes(filterObject.status.toString().toLowerCase()) && 
            formatDate(datejoined).toString().toLowerCase().includes(formatDate(filterObject.date).toString().toLowerCase())
            && phonenumber.toString().includes(filterObject.phone_number.toString())
            )
        })


        setPassedData(filteredData)

        setShowFilter(false)

        

    }

  





   
    return (
        <form className={`${Styles.main__container}`} style={showFilter && selectedFilter === filterName ? { display: "flex" } : { display: "none" }} onSubmit={handleFilter}>
            <span>
                <p>Organization</p>
                <select name="organization" id="" required onChange={handleFilterChange} value={filterObject.organization}>
                <option value=''>Select Organization</option>

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
                <input type="text" required  name='username'  onChange={handleFilterChange} value={filterObject.username} />
            </span>
            <span>
                <p>Email</p>
                <input type="email" name='email' required  onChange={handleFilterChange} value={filterObject.email}/>
            </span>
            <span>
                <p>Date</p>
                <input type="date" placeholder='Date'  name='date'   onChange={handleFilterChange} value={filterObject.date}  />
            </span>
            <span>
                <p>Phone Number</p>
                <input type="text"   name='phone_number'  onChange={handleFilterChange} value={filterObject.phone_number} />


            </span>
            <span>
                <p>Status</p>
                <select name="status" onChange={handleFilterChange} id="" required value={filterObject.status}>



                    <option value="Active">Select Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Blaclisted">Blacklisted</option>


                </select>
            </span>
            <span className={Styles.buttons}>
                <button onClick={resetFilter}>Reset</button>
                <button>Filter</button>
            </span>
        </form>
    )
}

export default Filter
