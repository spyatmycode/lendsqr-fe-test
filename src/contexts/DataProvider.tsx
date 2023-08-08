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
  
  

    const [data,setData] = useState<null |  Response[] >(parsedData ? parsedData: null)
    const [uniqueOrganizations, setUniqueOrganizations] =useState<null | string[]>([])
    const [error, setError] = useState<boolean>(false)
    useEffect(()=>{
        fetchData(setError).then((data)=>{

          

          const storedData = localStorage.getItem('lendsqr_test_data_akeju');
          const parsedData = storedData ? JSON.parse(storedData) : null;
          parsedData && setError(false)
          
          if (parsedData !== null) {
            setData(data);
            setUniqueOrganizations(getUniqueOrganizations(parsedData))
          }
            


        }).catch((err)=>console.log(err)
        )
    },[])


    
    return (
      <DataContext.Provider value={{data,setData,error, setError ,uniqueOrganizations}}>
        {children}
      </DataContext.Provider>
    );
  };
  
  export default DataProvider;