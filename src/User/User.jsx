import React from 'react'
import Header from './Layout/Header/Header'
import { Outlet } from 'react-router-dom'

const User = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default User;