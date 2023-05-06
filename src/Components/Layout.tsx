import { Outlet } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import Foot from "./Footer";

const Layout = () => {
    return(
		<>
            <NavBar />
        <div className="relative px-28 pt-5 pb-5">
            <Outlet />
        </div>
            <Foot />
        </>
    );
};
export default Layout;