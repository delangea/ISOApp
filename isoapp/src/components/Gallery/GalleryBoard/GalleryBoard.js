import React, {useState, useEffect} from 'react';

const GalleryBoard = () => {
    const [savedImages, setSavedImg] = useState(false);
    useEffect(() => {
      getCoverImagesByPersonID();
    }, []);

    function getCoverImagesByPersonID(){
        let id = 1;
        if (id) {
          fetch(`http://localhost:3001/likedimages/${id}`, {
          })
            .then(response => {
              return response.text();
            })
            .then(data => {
              setSavedImg(JSON.parse(data));
            });
        }
      }

    
    return(
        <div className="d-flex flex-column align-items-center">
            <h2>Saved Services</h2>
            <div className='d-flex flex-wrap justify-content-center'>{savedImages? savedImages.map(img => (
                <img src={JSON.stringify(img['image']).replace('"', "")} width='130' class='gallery'/>
                )) : "Nothing to show"}
            </div>    
        </div>
        )
}

export default GalleryBoard;