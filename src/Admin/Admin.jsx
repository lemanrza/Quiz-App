import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./Layout/AdminHeader/AdminHeader";
const Admin = () => {
    return (
        <>
            <AdminHeader />
            <Outlet />
        </>
    );
};

export default Admin;