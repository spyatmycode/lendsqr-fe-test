import React from 'react'
import Styles from './Button.module.scss'


interface ButtonProps{
    content:string;
    color:string
}

const Button:React.FC<ButtonProps> = ({content,color}) => {
  return (
    <button className={color ==="red" ? Styles.red: Styles.green}>

        {content}

    </button>
  )
}

export default Button
