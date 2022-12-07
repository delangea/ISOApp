import React, {useState, useEffect} from 'react';

function TestDB(){
  //----- Person Variables -------//
  const [singlePerson, setSinglePerson] = useState(false);
    useEffect(() => {
      getPersonByID();
    }, []);
    const [personList, setPersonList] = useState(false);
    useEffect(() => {
      getPersonList();
    }, []);
    //---- Service Variables ---- //
    const [service, setService] = useState(false);
    useEffect(() => {
      getServiceByID();
    }, []);
    const [serviceList, setServiceList] = useState(false);
    useEffect(() => {
      getServiceList();
    }, []);
    //----- Preference Variables --------//
    const [unseenPref, setUPref] = useState(false);
    useEffect(() => {
      getUnseenPrefByID();
    }, []);
    const [savedPref, setSPref] = useState(false);
    useEffect(() => {
      getSavedPrefByID();
    }, []);
    //----- Image Variables --------//
    const [serviceImages, setsImg] = useState(false);
    useEffect(() => {
      getImagesByServiceID();
    }, []);
    const [savedImages, setSavedImg] = useState(false);
    useEffect(() => {
      getCoverImagesByServiceID();
    }, []);
    // ------- Person Functions  ------- // 
    function getPersonList() {
      fetch('http://localhost:3001/personList')
        .then(response => {
          return response.text();
        })
        .then(data => {
          setPersonList(JSON.parse(data));
        });
    }
    function getPersonByID() {
      let id = prompt('Enter person id');
      if (id) {
        fetch(`http://localhost:3001/person/${id}`, {
        })
          .then(response => {
            return response.text();
          })
          .then(data => {
            alert(data);
            setSinglePerson(JSON.parse(data));
          });
      }
    }
    function createPerson() {
      let firstname = prompt('Enter person firstname');
      let lastname = prompt('Enter person lastname');
      let email = prompt('Enter person email');
      let date_account_created = new Date(Date.now()).toISOString().replace('T',' ').replace('Z','');
      fetch('http://localhost:3001/person', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({firstname, lastname, email, date_account_created}),
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          alert(data);
          getPersonList();
        });
    }
    function updatePerson() {
      let personid = prompt('Enter person id');
      let firstname = prompt('Enter person firstname');
      let lastname = prompt('Enter person lastname');
      let email = prompt('Enter person email');
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
          getPersonList();
        });
    }
    function deletePerson() {
      let id = prompt('Enter person id');
      fetch(`http://localhost:3001/person/${id}`, {
        method: 'DELETE',
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          alert(data);
          getPersonList();
        });
    }
    //----- service functions -----//
    function getServiceList() {
      fetch('http://localhost:3001/serviceList')
        .then(response => {
          return response.text();
        })
        .then(data => {
          setServiceList(JSON.parse(data));
        });
    }
    function getServiceByID() {
      let id = prompt('Enter service id');
      if (id) {
        fetch(`http://localhost:3001/service/${id}`, {
        })
          .then(response => {
            return response.text();
          })
          .then(data => {
            alert(data);
            setService(JSON.parse(data));
          });
      }
    }
    function createService() {
      let title = prompt('Enter title');
      let minprice = prompt('Enter minprice');
      let maxprice = prompt('Enter maxprice');
      let pricedetail = prompt('Enter price detail');
      let bio = prompt('Enter bio');
      let location = prompt('Enter location');
      let yearsexperience = prompt('Enter experience');
      let contactblurb = prompt('Enter contact blurb');
      let personid = prompt('Enter personid');

      fetch('http://localhost:3001/service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({title, minprice, maxprice, pricedetail, bio, location, yearsexperience, contactblurb, personid}),
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          alert(data);
          getServiceList();
        });
    }
    function updateService() {
      let serviceid = prompt('Enter serviceid')
      let title = prompt('Enter title');
      let minprice = prompt('Enter minprice');
      let maxprice = prompt('Enter maxprice');
      let pricedetail = prompt('Enter price detail');
      let bio = prompt('Enter bio');
      let location = prompt('Enter location');
      let yearsexperience = prompt('Enter experience');
      let contactblurb = prompt('Enter contact blurb');
      let personid = prompt('Enter personid');

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
          alert(data);
          getServiceList();
        });
    }
    function deleteService() {
      let id = prompt('Enter service id');
      fetch(`http://localhost:3001/service/${id}`, {
        method: 'DELETE',
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          alert(data);
          getServiceList();
        });
    }

    //----- Preference Functions ------//
    function getUnseenPrefByID() {
      let id = prompt('Enter person id');
      if (id) {
        fetch(`http://localhost:3001/unseenpref/${id}`, {
        })
          .then(response => {
            return response.text();
          })
          .then(data => {
            alert(data);
            setUPref(JSON.parse(data));
          });
      }
    }
    function getSavedPrefByID() {
      let id = prompt('Enter person id');
      if (id) {
        fetch(`http://localhost:3001/savedpref/${id}`, {
        })
          .then(response => {
            return response.text();
          })
          .then(data => {
            alert(data);
            setSPref(JSON.parse(data));
          });
      }
    }
    function createPreference() {
      let serviceid = prompt('Enter serviceid');
      let preference = prompt('Enter preference');
      let personid = prompt('Enter personid');
      fetch('http://localhost:3001/preference', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({serviceid, preference, personid}),
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          alert(data);
        });
    }
    function updatePreference() {
      let preferenceid = prompt('Enter preferenceid')
      let serviceid = prompt('Enter serviceid');
      let preference = prompt('Enter preference');
      let personid = prompt('Enter personid');
      fetch('http://localhost:3001/updatePreference', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({preferenceid, serviceid, preference, personid}),
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          alert(data);
        });
    }
    //---- Image Functions------//

    function createImage() {
      let serviceid = prompt('Enter serviceid');
      let coverphoto = prompt('is this a coverphoto');
      let image = "https://images.unsplash.com/photo-1648205213494-b8352cb3db1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60";
      fetch('http://localhost:3001/image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({serviceid, image, coverphoto}),
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          alert(data);
        });
    }
    function getImagesByServiceID() {
      let id = prompt('Enter service id');
      if (id) {
        fetch(`http://localhost:3001/images/${id}`, {
        })
          .then(response => {
            return response.text();
          })
          .then(data => {
            alert(data);
            setsImg(JSON.parse(data));
          });
      }
    }
    function getCoverImagesByServiceID(){
      let id = prompt('Enter person id');
      if (id) {
        fetch(`http://localhost:3001/likedserviceimages/${id}`, {
        })
          .then(response => {
            return response.text();
          })
          .then(data => {
            alert(data);
            setSavedImg(JSON.parse(data));
          });
      }
    }
    function markImageAsCover(){
      let imageid = prompt('Enter image id')
      let coverphoto = prompt('is it a cover photo');
      fetch('http://localhost:3001/imageCover', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({imageid, coverphoto}),
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          alert(data);
        });
    }
    function deleteImage() {
      let id = prompt('Enter image id');
      fetch(`http://localhost:3001/image/${id}`, {
        method: 'DELETE',
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          alert(data);
        });
    }
    return(
      <div>
        <h5>Person Methods</h5>
        {personList ? JSON.stringify(personList) : 'There is no person data available'}
        <br />
        <button onClick={createPerson}>Add Person</button>
        <br />
        <button onClick={updatePerson}>Update Person</button>
        <br/>
        <button onClick={deletePerson}>Delete Person</button>
        <br/>
        <button onClick={getPersonByID}>Get Person</button>
        {singlePerson ? JSON.stringify(singlePerson) : 'You havent searched a person yet'}
        <br/>


        <h5>Service Methods</h5>
        {serviceList ? JSON.stringify(serviceList) : 'There is no service data available'}
        <br />
        <button onClick={createService}>Add Service</button>
        <br />
        <button onClick={updateService}>Update Service</button>
        <br/>
        <button onClick={deleteService}>Delete Service</button>
        <br/>
        <button onClick={getServiceByID}>Get Service</button>
        {service ? JSON.stringify(service) : 'You havent searched a service yet'}
        <br/>
        
        <h5>Preference Methods</h5>
        <button onClick={createPreference}>Add Preference</button>
        <br />
        <button onClick={updatePreference}>Update Preference</button>
        <br/>
        <br/>
        <button onClick={getUnseenPrefByID}>Get Unseen Pref</button>
        {unseenPref ? JSON.stringify(unseenPref) : 'You havent searched for unseen preferences yet'}
        <br/>
        <button onClick={getSavedPrefByID}>Get Saved Pref</button>
        {savedPref ? JSON.stringify(savedPref) : 'You havent searched for saved preferences yet'}
        <br/>

        <h5>Image Methods</h5>
        <button onClick={createImage}>Add Image</button>
        <br/>
        <button onClick={markImageAsCover}>Mark as Cover</button>
        <br/>
        <button onClick={deleteImage}>Delete Image</button>
        <br/>
        <button onClick={getImagesByServiceID}>Get Images by Service ID</button>
        {serviceImages? serviceImages.map(img => (
          <img src={JSON.stringify(img['image']).replace('"', "")} width="50"/>
        )) : "Nothing to show"}
        <br/>
        <button onClick={getCoverImagesByServiceID}>Get Saved Images by PersonID</button>
        {savedImages? savedImages.map(img => (
          <img src={JSON.stringify(img['image']).replace('"', "")} width="50"/>
        )) : "Nothing to show"}





      </div>
    )
}
export default TestDB;