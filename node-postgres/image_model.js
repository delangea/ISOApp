const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test_db',
  password: 'admin',
  port: 5432,
});

  // returns the cover images for all of the "saved" services for a person by personid
  const getCoverImagesByPersonID = (personID) => {
    var newId = parseInt(personID);
    return new Promise(function(resolve, reject) {
      pool.query('SELECT i.image, i.serviceid FROM preference WHERE serviceid = $1 AND coverphoto = true', [newId], (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      })
    });
  };

  const getImagesByServiceID = (id) => {
    var newId = parseInt(id);
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM image WHERE serviceid = $1', [newId], (error, results) => {
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
      pool.query('INSERT INTO image (serviceid, image, coverphoto) VALUES ($1, $2, $3) RETURNING *', [serviceid, image, coverphoto], (error, results) => {
        if (error) {
          reject(error);
        }
        resolve('A new image has been added: ${results.rows[0]}');
      });
    });
  };
  const markImageAsCover = (body) => {
    return new Promise(function(resolve, reject) {
      const {imageid, coverphoto} = body
      pool.query('UPDATE image SET coverphoto = $1 WHERE imageid = $2 RETURNING *', [coverphoto, imageid], (error, results) => {
        if (error) {
          reject(error);
        }
        resolve('This image is now a coverphoto');
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
    getCoverImagesByPersonID,
    getImagesByServiceID,
    markImageAsCover,
    createImage,
    deleteImage,
  }