import React, { useContext } from 'react'
import Styles from './Overview.module.scss'
import empty_star from '../../../../assets/dashboard/np_star_1171151_000000 1.svg'
import star from '../../../../assets/dashboard/np_star_1208084_000000 1.svg'
import { NavLink, useParams } from 'react-router-dom'
import { DataContext } from '../../../../contexts/DataProvider'
import { Response } from '../../../../types/context'

const Overview = () => {

    const {id} = useParams()

    const {data} = useContext(DataContext)

    const user:Response = data?.find((thisUser:Response)=> thisUser.id === id)


    
    return (
        <div className={Styles.parent}>
            <div className={Styles.main__container}>
                <div className={Styles.details}>

                    <div className={Styles.identity}>
                        <div className={Styles.image__div}>
                            <img src="https://xsgames.co/randomusers/assets/avatars/male/51.jpg" alt="" />
                        </div>
                        <div className={Styles.name}>
                            <span>

                                {
                                    user?.username
                                }

                            </span>
                            <span>

                                {id}

                            </span>
                        </div>
                    </div>

                    <div className={Styles.divider}>

                        <span>User's Tier</span>
                        <span><img src={star} width={"16px"} alt="" />
                        <img src={star} alt="" />
                        <img src={empty_star} alt="" /></span>

                    </div>

                    <div className={Styles.account__details}>
                        <span className={Styles.account__balance}>
                        ₦{user?.balance_formatted}
                        </span>

                        <div className={Styles.bank__details}>
                            <span>
                                1234567890
                            </span>
                            <span>/</span>
                            <span>
                                UBA
                            </span>
                        </div>

                    </div>



                </div>

                <div className={Styles.navigation}>

                    <ul>
                        <NavLink to={`/dashboard/${id}`} className={(props)=>props.isActive ? Styles.active__link : ""}>
                        <li>General Details</li>
                        </NavLink>
                        <NavLink to={`/`} className={(props)=>props.isActive ? Styles.active__link : ""}>
                        <li>Documents</li>
                        </NavLink>
                        <NavLink to={`/`} className={(props)=>props.isActive ? Styles.active__link : ""}>
                        <li>Bank Details</li>
                        </NavLink>
                        <NavLink to={`/`} className={(props)=>props.isActive ? Styles.active__link : ""}>
                        <li>Loans</li>
                        </NavLink>
                        <NavLink to={`/`} className={(props)=>props.isActive ? Styles.active__link : ""}>
                        <li>Savings</li>
                        </NavLink>
                        <NavLink to={`/`} className={(props)=>props.isActive ? Styles.active__link : ""}>
                        <li>App and System</li>
                        </NavLink>
                        
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default Overview
