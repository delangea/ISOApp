import React from "react";
import {  Link, useLocation } from "react-router-dom";
import './Service.css';

const ServiceDetails = () => {
    const location = useLocation();
    const service = location.state?.service;
    const idCounter = location.state?.idCounter;

    return(
        <div className="container d-flex flex-column">
            <div className="container bg-details"></div>
            <div className="text-top">
                <h2 className="title mb-0 wrap">{service.title.replace('"', '').replace('"', '')}</h2>
            </div>
            <div className="mx-2 mt-3 d-flex justify-content-between subtitle-details" style={{display: "grid", gridTemplateColumns: ".25fr 1.5fr", gridTemplateRows: "auto", gridColumnGap: ".5rem", gridRowGap: ".5rem"}}>
                <div>{service.location.replace('"', '').replace('"', '')}</div>
                <div>{service.yearsexperience.replace('"', '').replace('"', '')} year(s)</div>
            </div>
            <div className="on-image about-box">
                <h4 className="details-header">About</h4>
                <div className="details-text">{service.bio.replace('"', '').replace('"', '')}</div>
            </div>
            <div className="on-image pricing-box">
                <h4 className="details-header">Pricing   ${service.minprice.replace('"', '').replace('"', '')} - ${service.maxprice.replace('"', '').replace('"', '')}</h4>
                <div className="details-text">{service.pricedetail.replace('"', '').replace('"', '')}</div>
            </div>
            <div className="on-image contact-box">
                <h4 className="details-header">Contact</h4>
                <div className="details-text">{service.contactblurb.replace('"', '').replace('"', '')}</div>
            </div>


            {/* buttons */}
            <div>
                <Link to="/" className="details-back blue" state={{idCounter: idCounter}} style={{textDecoration: 'none'}}>
                    <i>Back</i>
                </Link>
            </div>
        </div>
    );
}

export default ServiceDetails;