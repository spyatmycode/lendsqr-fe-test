import React, { useContext } from 'react'
import Styles from './Details.module.scss'
import { Response } from '../../../../types/context'
import { DataContext } from '../../../../contexts/DataProvider'
import { useParams } from 'react-router-dom'


const Details:React.FC = () => {

 
      const {id} = useParams()

    const {data} = useContext(DataContext)

    

    const user:Response = data?.find((thisUser:Response)=> thisUser.id === id)

    
    return (
        <div className={Styles.parent}>

            <div className={Styles.main__container}>

                <div className={Styles.divider}>

                    <header>

                        Personal Information

                    </header>

                    <div className={Styles.information__container}>
                        <span className={Styles.information}>
                            <p className={Styles.information__title}>

                                Full name

                            </p>

                            <p className={Styles.information__content}>

                               {user.username}

                            </p>

                        </span>
                        <span className={Styles.information}>
                            <p className={Styles.information__title}>

                               Phone number

                            </p>

                            <p className={Styles.information__content}>

                               {user.phonenumber}

                            </p>

                        </span>
                        <span className={Styles.information}>
                            <p className={Styles.information__title}>

                                Email Address

                            </p>

                            <p className={Styles.information__content}>

                                {user.email}

                            </p>

                        </span>
                        <span className={Styles.information}>
                            <p className={Styles.information__title}>

                                BVN

                               

                            </p>

                            <p className={Styles.information__content}>

                            {user.BVN}

                            </p>

                        </span>
                        <span className={Styles.information}>
                            <p className={Styles.information__title}>

                                Gender

                            </p>

                            <p className={Styles.information__content}>

                                {user.gender}

                            </p>

                        </span>
                        <span className={Styles.information}>
                            <p className={Styles.information__title}>

                               Marital Status

                            </p>

                            <p className={Styles.information__content}>

                                {user.marital_status}

                            </p>

                        </span>
                        <span className={Styles.information}>
                            <p className={Styles.information__title}>

                                Children

                            </p>

                            <p className={Styles.information__content}>

                                {user.children}

                            </p>

                        </span>
                        <span className={Styles.information}>
                            <p className={Styles.information__title}>

                                Type of Residence

                            </p>

                            <p className={Styles.information__content}>

                               {user.residential_type}

                            </p>

                        </span>

                    </div>

                </div>
                <div className={Styles.divider}>

                    <header>

                        Education and Employment

                    </header>

                    <div className={Styles.information__container}>
                        <span className={Styles.information}>
                            <p className={Styles.information__title}>

                                Level of Education

                            </p>

                            <p className={Styles.information__content}>

                               {user.education.level_of_education}

                            </p>

                        </span>
                        <span className={Styles.information}>
                            <p className={Styles.information__title}>

                              Employment Status

                            </p>

                            <p className={Styles.information__content}>

                            {user.education.employement_status}

                            </p>

                        </span>
                        <span className={Styles.information}>
                            <p className={Styles.information__title}>

                                Sector of Employment


                            </p>

                            <p className={Styles.information__content}>

                            {user.education.sector_of_employment}

                            </p>

                        </span>
                        <span className={Styles.information}>
                            <p className={Styles.information__title}>

                               Duration of Employment

                               

                            </p>

                            <p className={Styles.information__content}>

                            {user.education.duration}

                            </p>

                        </span>
                        <span className={Styles.information}>
                            <p className={Styles.information__title}>

                                Office Email

                            </p>

                            <p className={Styles.information__content}>

                            {user.education.office_email}

                            </p>

                        </span>
                        <span className={Styles.information}>
                            <p className={Styles.information__title}>

                               Monthly Income

                            </p>

                            <p className={Styles.information__content}>

                            {`₦${(user.education.monthly_income/2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00-₦ ${user.education.monthly_income}.00`}

                            

                            </p>

                        </span>
                        <span className={Styles.information}>
                            <p className={Styles.information__title}>

                                Children

                            </p>

                            <p className={Styles.information__content}>

                                {user.children}

                            </p>

                        </span>
                        <span className={Styles.information}>
                            <p className={Styles.information__title}>

                                Type of Residence

                            </p>

                            <p className={Styles.information__content}>

                               {user.residential_type}

                            </p>

                        </span>

                    </div>

                </div>
                <div className={Styles.divider}>

                    <header>

                       Socials

                    </header>

                    <div className={Styles.information__container}>
                        <span className={Styles.information}>
                            <p className={Styles.information__title}>

                                Twitter

                            </p>

                            <p className={Styles.information__content}>

                               @{user.socials.twitter}

                            </p>

                        </span>
                        <span className={Styles.information}>
                            <p className={Styles.information__title}>

                              Facebook

                            </p>

                            <p className={Styles.information__content}>

                            @{user.socials.facebook}

                            </p>

                        </span>
                        <span className={Styles.information}>
                            <p className={Styles.information__title}>

                               Instagram


                            </p>

                            <p className={Styles.information__content}>

                            @{user.socials.instagram}

                            </p>

                        </span>
                    
                       

                    </div>

                </div>
                <div className={Styles.divider}>

                    <header>

                       Gurantor

                    </header>

                    <div className={Styles.information__container}>
                        <span className={Styles.information}>
                            <p className={Styles.information__title}>

                              Full name

                            </p>

                            <p className={Styles.information__content}>

                              {user.guarantor.full_name}

                            </p>

                        </span>
                        <span className={Styles.information}>
                            <p className={Styles.information__title}>

                              Phone number

                            </p>

                            <p className={Styles.information__content}>

                           {user.guarantor.phone_number}

                            </p>

                        </span>
                        <span className={Styles.information}>
                            <p className={Styles.information__title}>

                               Email Address


                            </p>

                            <p className={Styles.information__content}>

                            {user.guarantor.email}

                            </p>

                        </span>
                    
                        <span className={Styles.information}>
                            <p className={Styles.information__title}>

                                Relationship 


                            </p>

                            <p className={Styles.information__content}>

                            Cousin

                            </p>

                        </span>
                    
                       

                    </div>

                </div>





            </div>

        </div>
    )
}

export default Details
