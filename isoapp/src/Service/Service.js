import React, {useState, useEffect} from "react";
import {  Link, useLocation } from "react-router-dom";
import './Service.css';

const Service = () => {
    const location = useLocation(); // once ready it returns the 'window.location' object
    const [url, setUrl] = useState(null);
    const [service, setService] = useState({
        title: "",
        minprice: "",
        maxprice: "",
        pricedetail: "",
        location: "",
        bio: "",
        yearsexperience: "",
        contactblurb: ""
    });
    const [idCounter, setIdCounter] = useState(1);
    const [imageUrl, setImageUrl] = useState("");
    useEffect(() => {
        setUrl(location.pathname);
        setIdCounter(location.state?.idCounter || idCounter)
    }, [location]);

    useEffect(() => {
        getCoverImagesByServiceID(idCounter);
        getServiceByID(idCounter);
    }, [idCounter])

    const yesHandler = () => {
        updatePreference(true);
        alert("Added to Favorites");
        setIdCounter(idCounter + 1);
    }

    const noHandler = () => {
        updatePreference(false);
        alert("Discard!");
        setIdCounter(idCounter + 1);
    }

    // DB methods
    function getServiceByID(id) {
        if (id) {
          fetch(`http://localhost:3001/service/${id}`, {
          })
            .then(response => {
              return response.text();
            })
            .then(data => {
              setService({
                title: JSON.stringify(JSON.parse(data)[0]['title']),
                minprice: JSON.stringify(JSON.parse(data)[0]['minprice']),
                maxprice: JSON.stringify(JSON.parse(data)[0]['maxprice']),
                pricedetail: JSON.stringify(JSON.parse(data)[0]['pricedetail']),
                location: JSON.stringify(JSON.parse(data)[0]['location']),
                bio: JSON.stringify(JSON.parse(data)[0]['bio']),
                yearsexperience: JSON.stringify(JSON.parse(data)[0]['yearsexperience']),
                contactblurb: JSON.stringify(JSON.parse(data)[0]['contactblurb'])
              });
            });
        }
      }

    function getCoverImagesByServiceID(id){
        if (id) {
          fetch(`http://localhost:3001/likedserviceimages/${id}`, {
          })
            .then(response => {
              return response.text();
            })
            .then(data => {
                setImageUrl(JSON.stringify(JSON.parse(data)[0]['image']));
            });
        }
    }
    function updatePreference(pref) {
        let serviceid = idCounter;
        let preference = pref;
        let personid = 1;
        fetch('http://localhost:3001/updatePreference', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ serviceid, preference, personid}),
        })
          .then(response => {
            return response.text();
          })
      }



    return(
        <div className="container">
            <img src={imageUrl.replace('"', '').replace('"', '')} width="350" height="485" className="cover-photo mx-1"/>
            <div className="text-top">
                <h2 className="title text-white mb-0 wrap">{service.title.replace('"', '').replace('"', '')}</h2>
                <div className="text-white">{service.location.replace('"', '').replace('"', '')}</div>
            </div>
            <div className="text-bottom text-white">
                <h4 className="price">${service.minprice.replace('"', '').replace('"', '')} - ${service.maxprice.replace('"', '').replace('"', '')}</h4>
            </div>

            {/* buttons */}
            <div onClick={noHandler}>
                <img src="/back.png" width="75" className="no-button"/>
                <img src="/no-cross-icon.png" width="70" className="no-button"/>
            </div>
            <div onClick={yesHandler}>
                <img src="/back.png" width="70" height="100" className="yes-button"/>
                <img src="/yes-checkmark-icon.png" width="70" className="yes-button"/>
            </div>
            <div>
                <Link to="/ServiceDetails" state={{service: service, idCounter: idCounter}} className="details-back blue" style={{textDecoration: 'none'}}>
                    <i>Details</i>
                </Link>
            </div>
        </div>
    );
}

export default Service;