import React from "react";
import {  Link } from "react-router-dom";
import './Service.css';

const ServiceDetails = () => {

    return(
        <div className="container d-flex flex-column">
            <div className="container bg-details"></div>
            <div className="text-top">
                <h2 className="title mb-0 wrap">Anna Delange Photography</h2>
            </div>
            <div className="mx-2 mt-3 d-flex justify-content-between subtitle-details" style={{display: "grid", gridTemplateColumns: ".25fr 1.5fr", gridTemplateRows: "auto", gridColumnGap: ".5rem", gridRowGap: ".5rem"}}>
                <div>Provo, UT</div>
                <div>5 years</div>
            </div>
            <div className="on-image about-box">
                <h4 className="details-header">About</h4>
                <div className="details-text">yas</div>
            </div>
            <div className="on-image pricing-box">
                <h4 className="details-header">Pricing</h4>
                <div className="details-text">yas</div>
            </div>
            <div className="on-image contact-box">
                <h4 className="details-header">Contact</h4>
                <div className="details-text">yas</div>
            </div>


            {/* buttons */}
            <div>
                <Link to="/" className="details-back blue" style={{textDecoration: 'none'}}>
                    <i>Back</i>
                </Link>
            </div>
        </div>
    );
}

export default ServiceDetails;