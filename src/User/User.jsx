import React from 'react'
import Header from './Layout/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Layout/Footer/Footer'

const User = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default User;