import React, {useState, useEffect} from 'react';
function TestDB(){
  //----- Person Variables -------//
  const [singlePerson, setSinglePerson] = useState(true);
    useEffect(() => {
      getPersonByID();
    }, []);
    const [personList, setPersonList] = useState(true);
    useEffect(() => {
      getPersonList();
    }, []);
    //---- Service Variables ---- //
    const [service, setService] = useState(true);
    useEffect(() => {
      getServiceByID();
    }, []);
    const [serviceList, setServiceList] = useState(true);
    useEffect(() => {
      getServiceList();
    }, []);
    //----- Preference Variables --------//
    const [unseenPref, setUPref] = useState(true);
    useEffect(() => {
      getUnseenPrefByID();
    }, []);
    const [savedPref, setSPref] = useState(true);
    useEffect(() => {
      getSavedPrefByID();
    }, []);
    //----- Preference Variables --------//
    const [serviceImages, setsImg] = useState(true);
    useEffect(() => {
      getImageByServiceID();
    }, []);
    // ------- Person Functions  ------- // 
    function getPersonList() {
      fetch('http://localhost:3001/personList')
        .then(response => {
          return response.text();
        })
        .then(data => {
          setPersonList(data);
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
            setSinglePerson(data);
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
          setServiceList(data);
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
            setService(data);
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
            setUPref(data);
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
            setSPref(data);
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
    function getImageByServiceID() {
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
    return(
      <div>
        <h5>Person Methods</h5>
        {personList ? personList : 'There is no person data available'}
        <br />
        <button onClick={createPerson}>Add Person</button>
        <br />
        <button onClick={updatePerson}>Update Person</button>
        <br/>
        <button onClick={deletePerson}>Delete Person</button>
        <br/>
        <button onClick={getPersonByID}>Get Person</button>
        {singlePerson ? singlePerson : 'You havent searched a person yet'}
        <br/>


        <h5>Service Methods</h5>
        {serviceList ? serviceList : 'There is no service data available'}
        <br />
        <button onClick={createService}>Add Service</button>
        <br />
        <button onClick={updateService}>Update Service</button>
        <br/>
        <button onClick={deleteService}>Delete Service</button>
        <br/>
        <button onClick={getServiceByID}>Get Service</button>
        {service ? service : 'You havent searched a service yet'}
        <br/>
        
        <h5>Preference Methods</h5>
        <button onClick={createPreference}>Add Preference</button>
        <br />
        <button onClick={updatePreference}>Update Preference</button>
        <br/>
        <br/>
        <button onClick={getUnseenPrefByID}>Get Unseen Pref</button>
        {unseenPref ? unseenPref : 'You havent searched for unseen preferences yet'}
        <br/>
        <button onClick={getSavedPrefByID}>Get Saved Pref</button>
        {savedPref ? savedPref : 'You havent searched for saved preferences yet'}
        <br/>

        <h5>Image Methods</h5>
        <img src="/photographer.jpg" width="50" className="mx-3" id="testImage"/>
        <button onClick={createImage}>Add Image</button>
        <button onClick={getImageByServiceID}>Get Images by Service ID</button>
        {serviceImages ? JSON.stringify(serviceImages[0]['image']) : "Nothing"}
        <img src={JSON.stringify(serviceImages[0]['image']).replace('"', " ")} width="50"/>


      </div>
    )
}
export default TestDB;