const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test_db',
  password: 'admin',
  port: 5432,
});

const getPersonList = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM person ORDER BY personid ASC', (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      })
    });
  };
  const getPersonByID = (id) => {
    var newId = parseInt(id);
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM person WHERE person.personid = $1', [newId], (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      })
    });
  };
  const createPerson = (body) => {
    return new Promise(function(resolve, reject) {
      const { firstname, lastname, email, date_account_created} = body

      pool.query('INSERT INTO person (firstname, lastname, email, date_account_created) VALUES ($1, $2, $3, $4) RETURNING *', [firstname, lastname, email, date_account_created], (error, results) => {
        if (error) {
          reject(error);
        }
        resolve('A new person has been added: ${results.rows[0]}');
      });
    });
  };
  const updatePerson = (body) => {
    return new Promise(function(resolve, reject) {
      const { personid, firstname, lastname, email} = body

      pool.query('UPDATE person SET firstname = $1, lastname = $2, email = $3 WHERE personid = $4 RETURNING *', [firstname, lastname, email, personid], (error, results) => {
        if (error) {
          reject(error);
        }
        resolve('This person has been updated: ${results.rows[0]}');
      });
    });
  };
  const deletePerson = (id) => {
    return new Promise(function(resolve, reject) {
      var newId = parseInt(id);
      pool.query('DELETE FROM person WHERE person.personid = $1', [newId], (error, results) => {
        if (error) {
          reject(error);
        }
        resolve('Person deleted with ID: ${id}');
      });
    });
  };
  
  module.exports = {
    getPersonList,
    getPersonByID,
    createPerson,
    updatePerson,
    deletePerson,
  }