import React from 'react'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import SideBar from './components/SideBar/SideBar'
import DataProvider from './contexts/DataProvider'
import { createBrowserRouter, Route, RouterProvider, Outlet, createRoutesFromElements } from 'react-router-dom'
import UserDetails from './pages/Dashboard/UserDetails/UserDetails'
import NotFound from './pages/404/404'

const RootLayout: React.FC = () => {
  return (
    <div className='root'>


     <DataProvider>
     <Outlet />
     </DataProvider>

    </div>
  )
}

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />} path='/'>

        <Route path="/login" element={<Login />} index />

        <Route path='*' element={<NotFound />} />

        <Route path={"/" || "/dashboard"} element={<SideBar />}>

          <Route path='/dashboard' element={<Dashboard />} />

          <Route path='/dashboard/:id' element={<UserDetails />} />

          

        </Route>


      </Route>
    )
  )
  return (
    <>
      
        <RouterProvider router={router} />
    
    </>
  )
}

export default App
