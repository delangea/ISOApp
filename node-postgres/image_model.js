const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test_db',
  password: 'admin',
  port: 5432,
});

  const getImagesByServiceID = (id) => {
    var newId = parseInt(id);
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM image WHERE service.serviceid = $1', [newId], (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      })
    });
  };
  const createImage = (body) => {
    return new Promise(function(resolve, reject) {
      const {serviceid, image, coverphoto} = body
      pool.query('INSERT INTO service (serviceid, image, coverphoto) VALUES ($1, $2, $3) RETURNING *', [serviceid, image, coverphoto], (error, results) => {
        if (error) {
          reject(error);
        }
        resolve('A new image has been added: ${results.rows[0]}');
      });
    });
  };
  const deleteImage = (id) => {
    return new Promise(function(resolve, reject) {
      var newId = parseInt(id);
      pool.query('DELETE FROM image WHERE image.imageid = $1', [newId], (error, results) => {
        if (error) {
          reject(error);
        }
        resolve('Image deleted with ID: ${id}');
      });
    });
  };
  
  module.exports = {
    getImagesByServiceID,
    createImage,
    deleteImage,
  }