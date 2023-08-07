import React,{ useContext } from "react"
import { Response } from "../types/context"
import { DataContext } from "../contexts/DataProvider"






export const blacklist = (id:string, data:Response[], setShowAction:React.Dispatch<React.SetStateAction<boolean>> | any)=>{
    let replica = [...data]

    const blackListItemIndex = replica?.findIndex((item)=>item.id === id)

    if(replica[blackListItemIndex]){
        replica[blackListItemIndex].status = "Blacklisted"

        localStorage.setItem('lendsqr_test_data_akeju', JSON.stringify(replica))

        setShowAction && setShowAction(false)

    }
}


export const activate = (id:string, data:Response[],setShowAction:React.Dispatch<React.SetStateAction<boolean>> | any)=>{
    let replica = [...data]

    const blackListItemIndex = replica?.findIndex((item)=>item.id === id)

    if(replica[blackListItemIndex]){
        replica[blackListItemIndex].status = "Active"

        localStorage.setItem('lendsqr_test_data_akeju', JSON.stringify(replica))
        setShowAction && setShowAction(false)

    }
}
export const deactivate = (id:string, data:Response[],setShowAction:React.Dispatch<React.SetStateAction<boolean>>)=>{
    let replica = [...data]

    const blackListItemIndex = replica?.findIndex((item)=>item.id === id)

    if(replica[blackListItemIndex]){
        replica[blackListItemIndex].status = "Inactive"

        localStorage.setItem('lendsqr_test_data_akeju', JSON.stringify(replica))
        setShowAction(false)

    }
}