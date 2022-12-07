import {  Link } from "react-router-dom";
function BasicInfo() {
    return(
        <div className="d-flex flex-column align-items-center">
            <h2 className="mb-1 pb-0">Person Name</h2>
            <span>EmailMe@email.com</span>
            <span className="text-secondary mb-3 mt-1">Joined December 11, 2022</span>
            <Link to="/EditProfile" className="btn btn-primary bg-blue mx-auto">Edit Profile</Link>
        </div>
    )
}

export default BasicInfo;

