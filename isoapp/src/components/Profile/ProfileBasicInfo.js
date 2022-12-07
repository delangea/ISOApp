import {  Link } from "react-router-dom";
import React, {useState, useEffect} from 'react';

function BasicInfo() {
    const [singlePerson, setSinglePerson] = useState({
        personid : "",
        firstname : "",
        lastname : "",
        email : "",
        date_account_created : "",
    });
    useEffect(()=> {
        getPersonByID();
    }, []);
    function getPersonByID() {
        let id = 1;
        if (id) {
          fetch(`http://localhost:3001/person/${id}`, {
          })
            .then(response => {
              return response.text();
            })
            .then(data => {
              setSinglePerson({
                personid : 1,
                firstname : JSON.stringify(JSON.parse(data)[0]["firstname"]).replaceAll('"',''),
                lastname : JSON.stringify(JSON.parse(data)[0]["lastname"]).replaceAll('"',''),
                email : JSON.stringify(JSON.parse(data)[0]["email"]).replaceAll('"',''),
                date_account_created : JSON.stringify(JSON.parse(data)[0]["date_account_created"]).replaceAll('"',''),
              });
            });
        }
      }
    return(
        <div className="d-flex flex-column align-items-center">
            <h2 className="mb-1 pb-0">{singlePerson.firstname}{singlePerson.lastname}</h2>
            <span>{singlePerson.email}</span>
            <span className="text-secondary mb-3 mt-1">Joined {singlePerson.date_account_created}</span>
            <Link to="/EditProfile" className="btn btn-primary bg-blue mx-auto">Edit Profile</Link>
        </div>
    )
}

export default BasicInfo;

