import React, { useContext } from 'react'
import Styles from './UserDetails.module.scss'
import Button from '../../../components/Dashboard/UserDetails/ActionButtons/Button'
import backicon from '../../../assets/dashboard/np_back_3007750_000000 1.svg'
import Overview from '../../../components/Dashboard/UserDetails/Overview/Overview'
import { NavLink, useParams } from 'react-router-dom'
import Details from '../../../components/Dashboard/UserDetails/Details/Details'
import { activate, blacklist } from '../../../utils/actions'
import { DataContext } from '../../../contexts/DataProvider'

const UserDetails = () => {
    const { data } = useContext(DataContext)
    const { id } = useParams()
    return (
        <div className={Styles.parent}>
            <div className={Styles.main__container}>

                <div className={Styles.backtousers}>
                    <NavLink to={'/dashboard'}>
                        <img src={backicon} alt="" />
                        <span>Back to Users</span>
                    </NavLink>

                </div>
                <div className={Styles.header}>
                    <span>
                        User Details
                    </span>
                    <span className={Styles.buttons}>

                        <span onClick={() => blacklist(id ? id : "", data, null)}>
                            <Button color='red' content='Blacklist User' />
                        </span>

                        <span onClick={() => activate(id ? id : "", data, null)}>
                            <Button color='green' content='Activate User' />
                        </span>

                    </span>
                </div>

                <Overview />


                <Details />


            </div>
        </div>
    )
}

export default UserDetails
