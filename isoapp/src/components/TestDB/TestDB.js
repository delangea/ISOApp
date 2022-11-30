import React, {useState, useEffect} from 'react';
function TestDB(){
    const [personList, setPersonList] = useState(false);
    useEffect(() => {
      getPersonList();
    }, []);
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
      fetch(`http://localhost:3001/person/${id}`, {
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          alert(data);
          getPersonList();
        });
    }
    function createPerson() {
      let firstname = prompt('Enter person firstname');
      let lastname = prompt('Enter person lastname');
      let email = prompt('Enter person email');
      let date_account_created = new Date(Date.now()).toISOString().replace('T',' ').replace('Z','');;
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
    return(
        <div>
        {personList ? personList : 'There is no person data available'}
        <br />
        <button onClick={createPerson}>Add Person</button>
        <br />
        <button onClick={deletePerson}>Delete Person</button>
      </div>
    )
}
export default TestDB;