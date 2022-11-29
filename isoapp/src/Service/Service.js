import React from "react";
import './Service.css';

const Service = () => {
    const yesHandler = () => {
        alert("Added to Favorites");
    }

    const noHandler = () => {
        alert("Discard!");
    }



    return(
        <div className="container">
            <img src="/photographer.jpg" width="360" height="500" className="cover-photo mx-1"/>
            <div className="text-top">
                <h2 className="title text-white mb-0 wrap">Anna Delange Photography</h2>
                <div className="text-white">Provo, UT</div>
            </div>
            <div className="text-bottom text-white">
                <h4 className="price">$30-$50</h4>
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
        </div>
    );
}

export default Service;