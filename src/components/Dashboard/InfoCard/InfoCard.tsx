import React from 'react'
import Styles from "./InfoCard.module.scss"
import test from '../../../assets/dashboard/iconactiveusers.svg'

interface Props{

  icon: string;
  title:string;
  value: string | number;

} 

const InfoCard:React.FC<Props> = ({icon, title,value}) => {
  return (
    <div className={Styles.card}>
        <span><img src={icon || test} alt="Icon" /></span>
        <span>{title || "Users"}</span>
        <span>{  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "2,345"}</span>
      
    </div>
  )
}

export default InfoCard
