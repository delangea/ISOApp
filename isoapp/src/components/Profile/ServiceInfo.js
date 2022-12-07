import React, {useState, useEffect} from 'react';
    function ServiceInfo(){
        const [serviceList, setServiceList] = useState({
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
          getServiceList();
        }, []);
        function getServiceList() {
            fetch('http://localhost:3001/serviceList')
              .then(response => {
                return response.text();
              })
              .then(data => {
                setServiceList({
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

        const [savedImages, setSavedImg] = useState(false);
        useEffect(() => {
            getCoverImagesByServiceID();
        }, []);

        useEffect(() => {
            getCoverImagesByServiceID();
        }, []);

        function getCoverImagesByServiceID(){
            var id = 1;
            if (id) {
                fetch(`http://localhost:3001/likedserviceimages/${id}`, {
                })
                .then(response => {
                    return response.text();
                })
                .then(data => {
                    setSavedImg(JSON.stringify(JSON.parse(data)[0]['image']));
                });
            }
        }
    
    return(
        //would be cool to loop through if they person has multiple services
        <div className="d-flex flex-column mt-5">
            <h3 className="text-center">Services</h3>
            <div class="d-flex w-100 align-items-start mt-3">
                {/* Need help with the image here... im close, but not getting it somehow */}
                {/* <img href={savedImages.replace('"', '').replace('"', '')} width="100" className="mx-3"/> */}
                <div className="d-flex flex-column align-items-start">
                    <span><b className="me-2">Title:</b><span>{serviceList.title}</span></span>
                    <span><b className="me-2">Location:</b><span>{serviceList.location}</span></span>
                    <span><b className="me-2">Bio:</b><span>{serviceList.bio}</span></span>
                    <span><b className="me-2">Experience:</b> <span>{serviceList.yearsexperience} year(s)</span></span>
                    <span><b className="me-2">Price Range:</b><span>{serviceList.minprice} - {serviceList.maxprice}</span></span>
                    <span><b className="me-2">Price Description:</b> <span>{serviceList.pricedetail}</span></span>
                    <span><b className="me-2">Contact Info:</b><span>{serviceList.contactblurb}</span></span>
                </div>
            </div>
        </div>
    )
}
export default ServiceInfo;