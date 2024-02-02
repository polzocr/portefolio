import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom'

import Layout from '../pages/Layout/index'
import Home from '../pages/Home/index'
import Cv from '../pages/Cv/index'
import ErrorPage from '../pages/ErrorPage/index'

const router = 
createBrowserRouter(
    
    createRoutesFromElements(
        <>
            <Route path='/' element={<Layout />} errorElement={<ErrorPage />} >
                <Route index element={<Home />} />
                <Route path='/cv' element={<Cv />} />
            </Route>
            <Route path='*' element={<ErrorPage />} />
        </>
    )               
)

export default function Router(){
    return (
        <RouterProvider router={router} />
    )
}