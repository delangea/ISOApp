import {  Link } from "react-router-dom";
import React, {useState, useEffect} from 'react';
function EditServiceBasic(){
    const [service, setService] = useState({
        serviceid : "",
        title: "",
        minprice : "",
        maxprice : "",
        personid : 1,
        pricedetail : "",
        location : "",
        bio : "",
        yearsexperience: "",
        contactblurb: ""
    });
    useEffect(() => {
      getServiceByID();
    }, []);
    function getServiceByID() {
        let id = 1;
        if (id) {
          fetch(`http://localhost:3001/service/${id}`, {
          })
            .then(response => {
              return response.text();
            })
            .then(data => {
              setService({
                serviceid : JSON.stringify(JSON.parse(data)[0]["serviceid"]).replaceAll('"', ''),
                title: JSON.stringify(JSON.parse(data)[0]["title"]).replaceAll('"', ''),
                minprice : JSON.stringify(JSON.parse(data)[0]["minprice"]).replaceAll('"', ''),
                maxprice : JSON.stringify(JSON.parse(data)[0]["maxprice"]).replaceAll('"', ''),
                personid : 1,
                pricedetail : JSON.stringify(JSON.parse(data)[0]["pricedetail"]).replaceAll('"', ''),
                location : JSON.stringify(JSON.parse(data)[0]["location"]).replaceAll('"', ''),
                bio : JSON.stringify(JSON.parse(data)[0]["bio"]).replaceAll('"', ''),
                yearsexperience: JSON.stringify(JSON.parse(data)[0]["yearsexperience"]).replaceAll('"', ''),
                contactblurb: JSON.stringify(JSON.parse(data)[0]["contactblurb"]).replaceAll('"', '')
              });
            });
        }
      }
      function updateService() {
        let serviceid = service.serviceid;
        let title = service.title;
        let minprice = service.minprice;
        let maxprice = service.maxprice;
        let pricedetail = service.pricedetail;
        let bio = service.bio;
        let location = service.location;
        let yearsexperience = service.yearsexperience;
        let contactblurb = service.contactblurb;
        let personid = 1;
        fetch('http://localhost:3001/updateService', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({serviceid, title, minprice, maxprice, pricedetail, bio, location, yearsexperience, contactblurb, personid}),
        })
          .then(response => {
            return response.text();
          })
          .then(data => {
            alert("Your data has been saved!");
            getServiceByID();
          });
      }
      const changeHandler = e => {
        setService({...service, [e.target.name]: e.target.value})
     }
    return(
        <div>
            <div className="mx-2 mt-3" style={{display: "grid", gridTemplateColumns: ".25fr 1.5fr", gridTemplateRows: "auto", gridColumnGap: ".5rem", gridRowGap: ".5rem"}}>
                    <b>Title:</b>
                    <input className="form-control" type="text" name="title" defaultValue={service.title} onChange={changeHandler}/>
                    <b>Location:</b>
                    <input className="form-control" type="text" name="location" defaultValue={service.location} onChange={changeHandler}/>
                    <b>Experience (in years):</b>
                    <input className="form-control" type="number" step="0.1" min="0" name="yearsexperience" defaultValue={service.yearsexperience} onChange={changeHandler}/>
                    <b>Bio:</b>
                    <textarea className="form-control" name="bio" defaultValue={service.bio} onChange={changeHandler}></textarea>
                    <b>Price Range:</b>
                    <div class="d-flex align-items-center">
                        <h3 class="mb-0 mx-1">$</h3>
                        <input className="form-control" type="number" min="0" name="minprice" defaultValue={service.minprice} onChange={changeHandler}/>
                        <h2 class="mb-0 mx-1">-</h2>
                        <h3 class="mb-0 mx-1">$</h3>
                        <input className="form-control" type="number" min="0" name="maxprice" defaultValue={service.maxprice} onChange={changeHandler}/>
                    </div>
                    <b>Price Description:</b>
                    <textarea className="form-control" name="pricedetail" defaultValue={service.pricedetail} onChange={changeHandler}></textarea>
                    <b>Contact Info:</b>
                    <textarea className="form-control" name="contactblurb" defaultValue={service.contactblurb} onChange={changeHandler}></textarea>
            </div>
            <div className="d-flex justify-content-center mt-3">
                <button className="btn btn-primary bg-blue me-3" onClick={updateService}>Save</button>
                <Link to="/Profile" className="btn btn-danger bg-red">Cancel</Link>
            </div>
        </div>
    )
}
export default EditServiceBasic;