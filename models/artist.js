// models/artist.js
const knex = require('../database');
const uuid = require('uuid/v1');
const fs = require('fs');
const path = require('path');
const artistsPath = path.join(__dirname, '..', 'data', 'artists.json');

const readAll = () => {
  return knex('artists')
  .then( rows => rows)
  .catch( error => { console.error( error ); });
}

const readIndividual = artist_id => {
  return knex('artists').where('id', artist_id)
    .then( rows => rows[0] )
    .catch( error => { console.error(error); })
}

const create = ({name, country}) => {
  return knex('artists')
    .returning('*')
    .insert({ name, country })
    .then( row => row[0] )
    .catch( error => { console.error(error); });
}

const update = (artist_id, updates) => {
  return knex('artists')
    .returning('*')
    .update({...updates, updated_at: new Date( Date.now()).toISOString() })
    .where('id', artist_id)
    .then( row => row[0] )
    .catch( error => { console.error( error ); });
}

const destroy = artist_id => {
  return knex('artists')
    .returning('*')
    .del()
    .where('id', artist_id)
    .then( row => row[0] )
    .catch( error => { console.error( error ); })
}

module.exports = {
  readAll,
  readIndividual,
  create,
  update,
  destroy
}
