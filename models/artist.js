// models/artist.js

const uuid = require('uuid/v1');
const fs = require('fs');
const path = require('path');
const artistsPath = path.join(__dirname, '..', 'data', 'artists.json');

const readAll = () => {
  const artistsJSON = fs.readFileSync(artistsPath, 'utf8');
  const artists = JSON.parse(artistsJSON);
  return artists;
}

const readIndividual = (id) => {
  const artistsJSON = fs.readFileSync(artistsPath, 'utf8');
  const artists = JSON.parse(artistsJSON);
  const filteredArtists = artists.filter( artist => artist.id === id);
  const artist = filteredArtists[0];
  return artist;
}

const create = (artist) => {
  const artistsJSON = fs.readFileSync(artistsPath, 'utf8');
  const artists = JSON.parse(artistsJSON);
  artist.id = uuid();
  artist.song_ids = [];
  artists.push(artist);
  fs.writeFileSync(artistsPath, JSON.stringify(artists));
  return artist;
}

const update = (id, updates) => {
  let result;
  const artistsJSON = fs.readFileSync(artistsPath, 'utf8');
  const artists = JSON.parse(artistsJSON);
  const updatedArtists = artists.map( artist => {
    if (artist.id === id) {
      result = { ...artist, ...updates }; // we have a match and we transform artist
      return result;
    } else {
      return artist;
    }
  });
  fs.writeFileSync(artistsPath, JSON.stringify(updatedArtists));
  return result;
}

const destroy = (id) => {
  let result;
  const artistsJSON = fs.readFileSync(artistsPath, 'utf8');
  const artists = JSON.parse(artistsJSON);
  const remainingArtists = artists.filter( artist => {
    if ( artist.id === id ) {
      result = artist;
    }
    return artist.id !== id;
  }) ;
  fs.writeFileSync(artistsPath, JSON.stringify(remainingArtists));
  return result;
}

module.exports = {
  readAll,
  readIndividual,
  create,
  update,
  destroy
};
