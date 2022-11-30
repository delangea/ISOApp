const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test_db',
  password: 'admin',
  port: 5432,
});

const getServiceList = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM service', (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      })
    });
  };
  const getServiceByID = (id) => {
    var newId = parseInt(id);
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM service WHERE service.serviceid = $1', [newId], (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      })
    });
  };
  const createService = (body) => {
    return new Promise(function(resolve, reject) {
      const {title, minprice, maxprice, pricedetail, bio, location, yearsexperience, contactblurb, personid } = body
      pool.query('INSERT INTO service (title, minprice, maxprice, pricedetail, bio, location, yearsexperience, contactblurb, personid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [title, minprice, maxprice, pricedetail, bio, location, yearsexperience, contactblurb, personid], (error, results) => {
        if (error) {
          reject(error);
        }
        resolve('A new service has been added: ${results.rows[0]}');
      });
    });
  };
  const deleteService = (id) => {
    return new Promise(function(resolve, reject) {
      var newId = parseInt(id);
      pool.query('DELETE FROM service WHERE service.serviceid = $1', [newId], (error, results) => {
        if (error) {
          reject(error);
        }
        resolve('Service deleted with ID: ${id}');
      });
    });
  };
  
  module.exports = {
    getServiceList,
    getServiceByID,
    createService,
    deleteService,
  }