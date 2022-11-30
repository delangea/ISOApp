import {  Link, useLocation } from "react-router-dom";
function Gallery() {
    return(
        <div className="d-flex flex-column align-items-center">
            <Link to="/GalleryBoard" className="btn btn-primary bg-blue  w-75 p-3 mx-auto" >View Saved</Link>
        </div>
    )
}

export default Gallery;