import React from 'react'
import Style from './404.module.scss'
const NotFound = () => {
  return (
    <div className={Style.parent}>

        <h1>
            Oops !
        </h1>
        <p>
            The page you're looking for does not exist
        </p>

        <a href='/dashboard'>
            Back to Dashboard
        </a>
      
    </div>
  )
}

export default NotFound
