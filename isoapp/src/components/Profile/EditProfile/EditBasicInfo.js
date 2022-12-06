import React, {useState, useEffect} from 'react';

function EditBasicInfo() {
    const [singlePerson, setSinglePerson] = useState({
        firstname : "",
        lastname : "",
        email : "",
        date : "",
        personid : 1
    });
    useEffect(() => {
      getPersonByID(1);
    }, []);
    const changeHandler = e => {
        setSinglePerson({...singlePerson, [e.target.name]: e.target.value})
     }
    function getPersonByID(id) {
        fetch(`http://localhost:3001/person/${id}`, {
        })
        .then(response => {
            return response.text();
        })
        .then(data => {
            setSinglePerson(
                {
                    firstname : JSON.stringify(JSON.parse(data)[0]['firstname']).replaceAll('"',''), 
                    lastname : JSON.stringify(JSON.parse(data)[0]['lastname']).replaceAll('"',''),
                    email : JSON.stringify(JSON.parse(data)[0]['email']).replaceAll('"',''),
                    date : JSON.stringify(JSON.parse(data)[0]['date_account_created']).replaceAll('"',''),
                    personid : JSON.stringify(JSON.parse(data)[0]['personid']).replaceAll('"','')
                }
            );
        });
      }
      function updatePerson() {
        let personid = 1;
        let firstname = singlePerson.firstname;
        let lastname = singlePerson.lastname;
        let email = singlePerson.email;
        alert(singlePerson.email);
        fetch('http://localhost:3001/updatePerson', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({firstname, lastname, email, personid}),
        })
          .then(response => {
            return response.text();
          })
          .then(data => {
            alert(data);
            getPersonByID(1);
          });
      }
    return(
        <div className="d-flex flex-column align-items-center">
            <h2 className="mb-1 pb-0">{singlePerson ? singlePerson.firstname + " " + singlePerson.lastname: "Nothing to Show"}</h2>
            <div className="d-flex justify-content-center">
                <input type="text" className="form-control w-auto me-2" name="email" defaultValue={singlePerson.email} onChange={changeHandler}/>
                <button className="btn btn-primary bg-blue me-3" onClick={updatePerson}>Save</button>
            </div>
            <span className="text-secondary mb-3 mt-1">Joined {(new Date(singlePerson.date).getMonth().toString()) + "/" + (new Date(singlePerson.date).getDate().toString()) + "/" + (new Date(singlePerson.date).getFullYear().toString())} </span>
        </div>
    )
}

export default EditBasicInfo;

