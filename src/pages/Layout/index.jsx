import {Outlet} from 'react-router-dom'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'



export default function Layout(){
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )

}