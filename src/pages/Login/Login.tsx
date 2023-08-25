import React, { useState } from 'react'
import MainIllustration from '../../assets/login/pablo-sign-in 1.svg'
import Logo from '../../assets/global/logo.svg'
import Styles from './Login.module.scss'
import { useNavigate } from 'react-router-dom'





const Login:React.FC = () => {
    const [showPwd, setShowPwd] = useState<boolean>(false)
    const navigate = useNavigate()
  return (
    <div className={Styles.login__parent}>

        <section className={Styles.left__child}>

            <span className={Styles.logo}>
                <img src={Logo} alt="company_logo"  />
            </span>

            <span className={Styles.illustration}>
                <img src={MainIllustration} alt="main_illustration" width={"750px"} />
            </span>

        </section>

        <section className={Styles.right__child}>

        <span className={Styles.logo}>
                <img src={Logo} alt="company_logo" className={Styles.mobile__logo}  />
            </span>


            <div className={Styles.welcome__div}>
                <p>Welcome!</p>
                <p>Enter details to login.</p>
            </div>



            <form className={Styles.form} onSubmit={(e)=>{e.preventDefault(); navigate("/dashboard")}}>
                <input type="email" placeholder='Email Address' required/>
                <span className={Styles.password}>
                <input type={`${showPwd ? "text":"password"}`}  placeholder='Password' required/>
                <span onClick={()=>setShowPwd(!showPwd)}>
                    SHOW
                </span>
                </span>
                <p>FORGOT PASSWORD?</p>
                <button type="submit" className={Styles.submit__button}>LOG IN</button>
               
            </form>

        </section>
      
    </div>
  )
}

export default Login
