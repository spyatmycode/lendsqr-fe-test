import React from 'react'
import Logo from '../../assets/global/logo.svg'
import Bell from '../../assets/header/np_notification_2425223_000000 1.png'
import Avatar from '../../assets/header/avatar.svg'
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa'
import Styles from './Header.module.scss'


interface Props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Props> = ({ isOpen, setIsOpen }) => {


    return (
        <header className={Styles.main__div}>
            <div className={Styles.left}>
                <span className={Styles.toggle__parent}>
                    <span className={Styles.toggle} onClick={() => setIsOpen(!isOpen)}>
                        {isOpen === true ? <FaTimes /> : <FaBars />}

                    </span>

                    <img className={Styles.logo} src={Logo} alt="logo" />
                </span>

                <form className={Styles.search__form} onSubmit={(e: any) => e.preventDefault()}>
                    <span>
                        <input type="text" />
                        <button><FaSearch /></button>
                    </span>
                </form>
            </div>

            <div className={Styles.right}>
                <p>
                    Docs
                </p>

                <span>
                    <img src={Bell} alt='notification' color='white' />
                </span>

                <div className={Styles.profile__div}>
                    <img src={Avatar} alt="profile_image" />
                    <select name="Account" id="account">
                        <option value="Adedeji">Adedeji</option>
                    </select>
                </div>


            </div>


        </header>
    )
}

export default Header
