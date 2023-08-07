import React,{useContext, useReducer} from 'react'
import Styles from './Actions.module.scss'
import { NavLink } from 'react-router-dom'
import { viewuser, activateuser, blacklistuser } from '../Table/Assets'
import { ActionsProps } from '../../../types/actions'
import { DataContext } from '../../../contexts/DataProvider'
import { blacklist,activate,deactivate } from '../../../utils/actions'

const Actions:React.FC<ActionsProps> = ({actionName,id,setSelectedAction,setShowAction,showAction,selectedAction}) => {

    const {data} = useContext(DataContext)

   

    
  return (
   

        <ul className={Styles.main__container} style={showAction && id === selectedAction ? {display:"flex"}: {display:"none"}}>
           <NavLink to={`/dashboard/${id}`}>
           <li>
                <span>
                    <img src={viewuser} alt="" />
                    <p>View Details</p>
                </span>
            </li>
           </NavLink>
           <li>
            <span onClick={()=>blacklist(id, data, setShowAction)}>
                    <img src={blacklistuser} alt="" />
                    <p>Blacklist user</p>
                </span>
            </li>

            <li>
            <span onClick={()=>activate(id,data,setShowAction)}>
                    <img src={activateuser} alt="" />
                    <p>Activate User</p>
                </span>

            </li>
            
        </ul>
      
   
  )
}

export default Actions
