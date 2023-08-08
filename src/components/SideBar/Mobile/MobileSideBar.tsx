import React from 'react'
import Styles from './MobileSideBar.module.scss'
import { briefcase, badgepercent, handholding, handshake, galaxy, piggybank, clipboard, usertimes, userfriends, usercheck, users, usersetting, sliders, scroll, sack, npbank, home, coins, phone, barchart,logout } from '../Assets'
import { FaSearch } from 'react-icons/fa'
import {  NavLink } from 'react-router-dom'


interface Props{
    isOpen:boolean;
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar: React.FC<Props> = ({isOpen}) => {
    return (
        <>


            <div className={`${Styles.main__content} ${isOpen?Styles.isOpen:""}`}>

                <div>
                    <form className={Styles.search__form} onSubmit={(e:any)=>e.preventDefault()}>
                        <span>
                            <input type="text" />
                            <button><FaSearch size={"10px"}/></button>
                        </span>
                    </form>

                </div>


                <span className={Styles.span}>
                    <img src={briefcase} alt="" width={"16px"} />
                    <select>

                        <option value="Switch Organization<">Switch Organization</option>
                    </select>
                </span>

                <span className={Styles.span}> <img src={home} width={"16px"} alt="" /><p>Dashboard</p></span>


                <section>
                    <h5>Customers</h5>
                    <ul>
                        <NavLink to={"/dashboard"} className={(props) => props.isActive ? Styles.active__link : ""}><li><img src={userfriends} alt="" width={"16px"} /><p>Users</p></li></NavLink>
                        <li><img src={users} alt="" width={"16px"} /><p>Guarantors</p></li>
                        <li><img src={sack} alt="" width={"16px"} /><p>Loans</p></li>
                        <li><img src={handshake} alt="" width={"16px"} /><p>Decision Models</p></li>
                        <li><img src={piggybank} alt="" width={"16px"} /><p>Savings</p></li>
                        <li><img src={sack} alt="" width={"16px"} /><p>Loan Requests</p></li>
                        <li><img src={usercheck} alt="" width={"16px"} /><p>Whitelist</p></li>
                        <li><img src={usertimes} alt="" width={"16px"} /><p>Karma</p></li>


                    </ul>


                </section>

                <section>
                    <h5>
                        Businesses
                    </h5>
                    <ul>
                        <li><img src={briefcase} alt="" width={"16px"} /><p>Organizations</p></li>
                        <li><img src={handholding} alt="" width={"16px"} /><p>Loan Products</p></li>
                        <li><img src={npbank} alt="" width={"16px"} /><p>Savings Products</p></li>
                        <li><img src={coins} alt="" width={"16px"} /><p>Fees and Charges</p></li>
                        <li><img src={phone} alt="" width={"16px"} /><p>Transactions</p></li>
                        <li><img src={galaxy} alt="" width={"16px"} /><p>Services</p></li>
                        <li><img src={usersetting} alt="" width={"16px"} /><p>Service Account</p></li>
                        <li><img src={scroll} alt="" width={"16px"} /><p>Settlement</p></li>
                        <li><img src={barchart} alt="" width={"16px"} /><p>Report</p></li>

                    </ul>
                </section>

                <section>
                    <h5>Settings</h5>
                    <ul>
                        <li><img src={sliders} alt="" width={"16px"} /><p>Preferences</p></li>
                        <li><img src={badgepercent} alt="" width={"16px"} /><p>Fees and Pricing</p></li>
                        <li><img src={clipboard} alt="" width={"16px"} /><p>Audit Logs</p></li>


                    </ul>
                </section>
                <section>
                    
                    <ul>
                       <NavLink to={"/"}><li><img src={logout} alt="Log out"/><p>Log Out</p></li></NavLink>
                        <li>v1.2.0</li>
                        


                    </ul>
                </section>
            </div>





        </>
    )
}

export default SideBar
