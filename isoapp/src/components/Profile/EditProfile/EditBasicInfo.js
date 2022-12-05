// import {  Link, useLocation } from "react-router-dom";
function EditBasicInfo() {
    return(
        <div className="d-flex flex-column align-items-center">
            <h2 className="mb-1 pb-0">Person Name</h2>
            <div class="d-flex justify-content-center">
                <input type="text" className="form-control w-auto me-2" value="EmailMe@Email.com"/>
                <button className="btn btn-primary bg-blue me-3">Save</button>
            </div>
            <span className="text-secondary mb-3 mt-1">Joined December 11, 2022</span>
        </div>
    )
}

export default EditBasicInfo;

