import React, {useState, useEffect} from 'react';
function EditPhoto() {
    const [imagedata, setImage] = useState({
        imageid: "",
        image : ""
    });
    useEffect(() => {
        getCoverImagesByServiceID();
    }, [])
    function getCoverImagesByServiceID(){
        let id = 1;
        if (id) {
          fetch(`http://localhost:3001/likedserviceimages/${id}`, {
          })
            .then(response => {
              return response.text();
            })
            .then(data => {
                setImage({
                    imageid : JSON.stringify(JSON.parse(data)[0]['imageid']).replaceAll('"', ''),
                    image : JSON.stringify(JSON.parse(data)[0]['image']).replaceAll('"', '')
                });
            });
        }
    }
    function updateImage(){
        let imageid = imagedata.imageid;
        let image = imagedata.image;
        fetch('http://localhost:3001/updateImage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({imageid, image}),
        })
          .then(response => {
            return response.text();
          })
          .then(data => {
            alert("Image saved!");
          });
      }
    const changeHandler = e => {
        setImage({...imagedata, [e.target.name]: e.target.value})
     }
    return(
        <div className="d-flex align-items-center justify-content-center mb-2">
            <input type="text" className="form-control w-50 mx-2" name="image" defaultValue={imagedata.image} onChange={changeHandler}/>
            <button type="button" className="btn btn-primary bg-blue me-2" onClick={updateImage} >Save</button>
        </div>
    )
}
export default EditPhoto;

