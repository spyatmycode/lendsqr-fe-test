import { useContext, useState } from 'react'
import Styles from './Dashboard.module.scss'
import InfoCard from '../../components/Dashboard/InfoCard/InfoCard'
import userloan from '../../assets/dashboard/iconusers_loan.svg'
import usersaving from '../../assets/dashboard/iconuser_savings.svg'
import useractive from '../../assets/dashboard/iconactiveusers.svg'
import users from '../../assets/dashboard/iconusers.svg'
import Table from '../../components/Dashboard/Table/Table'
import Pagination from '../../components/Dashboard/Table/Pagination'
import { DataContext } from '../../contexts/DataProvider'

const Dashboard = () => {

  const {data} = useContext(DataContext)

  const [passedData, setPassedData] = useState(data?[...data]:[])


  return (
   <div className={Styles.parent}>
     <div className={Styles.main__content}>
        <header className={Styles.header}>
         <h2>Users</h2>
        </header>


        <section className={Styles.infocard__container}>

        <InfoCard icon={users}  title={"Users"} value={2453}/>
        <InfoCard icon={useractive}  title={"Active users"} value={2452}/>
        <InfoCard icon={userloan}  title={"Users with loans"} value={12453}/>
        <InfoCard icon={usersaving}  title={"Users with savings"} value={102453}/>

        </section>

        <section className={Styles.main__content_table}>

          <Table passedData={passedData} setPassedData={setPassedData}/>
          <Pagination passedData={passedData} setPassedData={setPassedData}/>
          

        </section>
        
        
        
      
    </div>
   </div>
  )
}

export default Dashboard
