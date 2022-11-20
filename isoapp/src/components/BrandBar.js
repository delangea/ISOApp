import {  Link } from "react-router-dom";
function BrandBar(){
    return(
        <div className="p-4 d-flex justify-content-between align-items-center">
            <Link to="/" className="text-dark" style={{textDecoration: 'none'}}>
                <h1>ISO</h1>
            </Link>
            <div></div>
        </div>
    )
}

export default BrandBar;