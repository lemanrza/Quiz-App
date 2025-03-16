import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./Layout/AdminHeader/AdminHeader";
import AdminFooter from "./Layout/AdminFooter/AdminFooter";
const Admin = () => {
    return (
        <>
            <AdminHeader />
            <Outlet />
            <AdminFooter />
        </>
    );
};

export default Admin;