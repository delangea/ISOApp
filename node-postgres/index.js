const express = require('express')
const app = express()
const port = 3001

const person_model = require('./person_model')
const preference_model = require('./preference_model')
const service_model = require('./service_model')
const image_model = require('./image_model')

//--- APP METHODS ----//
app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

//------------ PERSON METHODS -------- //
app.get('/personList', (req, res) => {
  person_model.getPersonList()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})
app.get('/person/:id', (req, res) => {
  person_model.getPersonByID(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.post('/person', (req, res) => {
  person_model.createPerson(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.delete('/person/:id', (req, res) => {
  person_model.deletePerson(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

//------------ PREFERENCE METHODS -------- //
app.get('/unseenpref/:id', (req, res) => {
  preference_model.getUnseenPreferenceList()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})
app.get('/savepref/:id', (req, res) => {
  preference_model.getSavedPreferenceListByID(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.post('/preference', (req, res) => {
  preference_model.createPreference(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

//------------ SERVICE METHODS -------- //
app.get('/serviceList', (req, res) => {
  service_model.getServiceList()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})
app.get('/service/:id', (req, res) => {
  service_model.getServiceByID(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.post('/service', (req, res) => {
  service_model.createService(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.delete('/service/:id', (req, res) => {
  service_model.deleteService(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

//------------ IMAGE METHODS -------- //
app.get('/images/:serviceid', (req, res) => {
  image_model.getImagesByServiceID(req.params.serviceid)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.post('/image', (req, res) => {
  image_model.createImage(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.delete('/image/:id', (req, res) => {
  image_model.deleteImage(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})




