const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mydb',
  password: 'admin',
  port: 5432,
});

const getSavedPreferenceListByPersonID = (id) => {
    var newId = parseInt(id);
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM preference WHERE person_personID = $1 AND preference = true', [newId], (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      })
    });
  };
  const getUnseenPreferenceListByPersonID = (id) => {
    var newId = parseInt(id);
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM preference WHERE person_personID = $1 AND preference IS NULL', [newId], (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      })
    });
  };
  const createPreference = (body) => {
    return new Promise(function(resolve, reject) {
      const { serviceid, preference, personid } = body
      pool.query('INSERT INTO preference (service_serviceid, preference, person_personid) VALUES ($1, $2, $3) RETURNING *', [serviceid, preference, personid], (error, results) => {
        if (error) {
          reject(error);
        }
        resolve('A new preference has been added: ${results.rows[0]}');
      });
    });
  };
  const updatePreference = (body) => {
    return new Promise(function(resolve, reject) {
      const {serviceid, personid, preference} = body
      pool.query('UPDATE preference SET preference = $1 WHERE service_serviceid = $2 AND person_personid = $3 RETURNING *', [preference, serviceid, personid], (error, results) => {
        if (error) {
          reject(error);
        }
        resolve('A preference has been updated: ${results.rows[0]}');
      });
    });
  };

  
  module.exports = {
    getUnseenPreferenceListByPersonID,
    getSavedPreferenceListByPersonID,
    createPreference,
    updatePreference
  }