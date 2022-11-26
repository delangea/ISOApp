import {  Link, useLocation } from "react-router-dom";

function Profile() {
    var isProvider = false;
    return(
        <div>
        {isProvider ? (
            <div className="d-flex flex-column align-items-center">
                <h2 className="mb-1 pb-0">Person Name</h2>
                <span>EmailMe@email.com</span>
                <span className="text-secondary mb-3 mt-1">Joined December 11, 2022</span>
                <Link to="/EditProfile" className="btn btn-primary bg-blue mx-auto">Edit Profile</Link>
            </div>
        ):
        <div>
            <div class="d-flex flex-column align-items-center">
                <h2 class="mb-1 pb-0">Person Name</h2>
                <span>EmailMe@email.com</span>
                <span className="text-secondary mb-3 mt-1">Joined December 11, 2022</span>
                <Link to="/EditProfile" className="btn btn-primary bg-blue mx-auto">Edit Profile</Link>
            </div>
            <div className="d-flex flex-column mt-5">
                <h3 className="text-center">Services</h3>
                <div class="d-flex w-100 align-items-start mt-3">
                    <img src="/photographer.jpg" width="100" className="mx-3"/>
                    <div className="d-flex flex-column align-items-start">
                    <span><b className="me-2">Bio:</b><span>My name is ___ and I have done photography for this long...</span></span>
                        <span><b className="me-2">Experience:</b> <span>1.5 years</span></span>
                        <span><b className="me-2">Price Range:</b><span>$35 - $100</span></span>
                        <span><b className="me-2">Price Description:</b> <span>$35 for single sessions, $100 for family per hour</span></span>
                        <span><b className="me-2">Contact Info:</b><span>For booking, see my website: anna.delange.com</span></span>
                    </div>
                </div>
            </div>
        </div>
        }
        </div>
    )
}

export default Profile;