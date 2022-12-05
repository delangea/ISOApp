import React, { useEffect, useState } from 'react';
import {  Link, useLocation } from "react-router-dom";
function NavBar(){
    const location = useLocation(); // once ready it returns the 'window.location' object
    const [url, setUrl] = useState(null);
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);
    return(
        <div className="p-4 d-flex justify-content-around align-items-center">
            <div>
                <Link to="/" className="text-dark d-flex flex-column align-items-between" style={{textDecoration: 'none'}}>
                    <div className={`${url === "/" ? "bg-blue px-4 py-1" : ""}${url === "/ServiceDetails" ? "bg-blue px-4 py-1" : ""}`}></div>
                    <h2 className="pt-3">ISO</h2>
                </Link>
            </div>
            <div>
                <Link to="/Gallery" className="d-flex flex-column align-items-between">
                    <div className={url === "/Gallery" ? "bg-blue px-4 py-1" : ""}></div>
                    <img src="/layers.png" width="45" className="pt-3"/>
                </Link>
            </div>
            <div> 
                <Link to="/Profile" className="d-flex flex-column align-items-between">
                    <div className={url === "/Profile" || url === "/EditProfile" ? "bg-blue px-4 py-1" : ""}></div>
                    <img src="/profile.png" width="45" className="pt-3"/>
                </Link>
            </div>
        </div>
    )
}

export default NavBar;