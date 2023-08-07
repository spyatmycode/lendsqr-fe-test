import React, { useContext, useState } from 'react'
import Styles from './Table.module.scss'
import filter from '../../../assets/table/filter-results-button.svg'
import { inactive, active, blacklisted, pending, more_icon, blacklistuser, activateuser, viewuser } from './Assets'
import { DataContext } from '../../../contexts/DataProvider'
import { Response } from '../../../types/context'
import Filter from '../FilterCard/Filter'
import Actions from '../ActionsCard/Actions'

const Table: React.FC = () => {
    const { data } = useContext(DataContext)
    const [selectedFilter, setSelectedFilter] = useState<string>("")
    const [showFilter, setShowFilter] = useState<boolean>(false)
    console.log(selectedFilter);


    const [selectedAction, setSelectedAction] = useState<string>("")
    const [showAction, setShowAction] = useState<boolean>(false)



    return (
        <div className={Styles.table__container}>
            <table className={Styles.table}>
                <thead className={Styles.table__header}>
                    <tr>

                        {["Organization", "Username", "Email", "Phone number", "Date joined", "Status"].map((heads, key) => {


                            return (
                                <th scope="col" className={Styles.table__header_cell} id={`${heads}_table_header`}>

                                    <div>

                                        <span>{heads}</span>
                                        <img src={filter} alt="" onClick={() => { setSelectedFilter(heads); setShowFilter(!showFilter) }} />

                                    </div>

                                    {<Filter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} setShowFilter={setShowFilter} showFilter={showFilter} key={key} filterName={heads} />}



                                </th>
                            )




                        })}

                    </tr>
                </thead>
                <tbody className={Styles.table__body}>
                    {/* <tr className={Styles.table__row} key={123}>
                        <td className={Styles.table__cell}>
                            organization
                        </td>
                        <td className={Styles.table__cell}>
                            username
                        </td>
                        <td className={Styles.table__cell}>
                            email
                        </td>
                        <td className={Styles.table__cell}>
                            phone_number
                        </td>
                        <td className={Styles.table__cell}>
                            datejoined
                        </td>
                        <td className={Styles.table__cell}>
                            <span className={Styles.actions}>
                                <img src={active} alt="" width={"70px"} height={"30px"} />
                                <img src={more_icon} alt="" />
                                <Actions actionName={""} selectedAction={selectedAction} id='' showAction={showAction} setShowAction={setShowAction} setSelectedAction={setSelectedFilter} />
                            </span>


                        </td>

                    </tr> */}


                    {
                        data?.slice(0, 10).map((each: Response) => {

                            const { id, username, organization, email, phone_number, datejoined, status } = each

                            let src = active
                            if (status === "Active") {
                                src = active
                            } else if (status === "Blacklisted") {
                                src = blacklisted
                            }
                            else if (status === "Inactive") {
                                src = inactive
                            }
                            else {
                                src = pending
                            }


                            return (


                                <tr className={Styles.table__row} key={id} >
                                    <td className={Styles.table__cell}>
                                        {organization}
                                    </td>
                                    <td className={Styles.table__cell}>
                                        {username}
                                    </td>
                                    <td className={Styles.table__cell}>
                                        {email}
                                    </td>
                                    <td className={Styles.table__cell}>
                                        {phone_number}
                                    </td>
                                    <td className={Styles.table__cell}>
                                        {datejoined}
                                    </td>
                                    <td className={Styles.table__cell}>
                                        <span className={Styles.actions}>
                                            <img src={src} alt="" width={"70px"} height={"30px"} />
                                            <img src={more_icon} alt="" onClick={()=>{setSelectedAction(id); setShowAction(true)}}/>
                                            <Actions actionName={""} selectedAction={selectedAction} id={id} showAction={showAction} setShowAction={setShowAction} setSelectedAction={setSelectedFilter}
                                            
                                             />
                                        </span>


                                    </td>

                                    

                                    

                                </tr>

                            )

                        })
                    }



                </tbody>
            </table>

        </div>

    )
}

export default Table
