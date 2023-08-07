import React,{createContext,ReactNode, useEffect, useState} from 'react'
import { Response } from '../types/context';
import { fetchData } from '../utils/api';
import { getUniqueOrganizations } from '../utils/organizations';


export const DataContext = createContext<any>(null)

interface DataContextProps {
    children: ReactNode;
  }

const DataProvider: React.FC<DataContextProps> = ({ children }) => {

  const storedData = localStorage.getItem('lendsqr_test_data_akeju');
  const parsedData = storedData ? JSON.parse(storedData) : null;
  

    const [data,setData] = useState<null | string[] | Response[] | any>(parsedData? parsedData: null)
    const [uniqueOrganizations, setUniqueOrganizations] =useState<null | string[]>([])
    useEffect(()=>{
        fetchData().then((data)=>{

          

          const storedData = localStorage.getItem('lendsqr_test_data_akeju');
          const parsedData = storedData ? JSON.parse(storedData) : null;
          
          if (parsedData !== null) {
            setData(parsedData);
          }
            


        }).catch((err)=>console.log(err)
        )
    },[data])

   

    console.log(uniqueOrganizations);
    

    
    
    return (
      <DataContext.Provider value={{data,setData, uniqueOrganizations}}>
        {children}
      </DataContext.Provider>
    );
  };
  
  export default DataProvider;