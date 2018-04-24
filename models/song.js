const knex = require('../database');
const uuid = require('uuid/v1');
const fs = require('fs');
const path = require('path');
const songsPath = path.join(__dirname, '..', 'data', 'songs.json');
const artistsPath = path.join(__dirname, '..', 'data', 'artists.json');
const artistsJSON = fs.readFileSync(artistsPath, 'utf8');
const artists = JSON.parse(artistsJSON);
const songsJSON = fs.readFileSync(songsPath, 'utf8');
const songs = JSON.parse(songsJSON);

const readAll = (artist_id) => {
  const filteredArtists = artists.filter( artist => artist.id === artist_id);
  const artist = filteredArtists[0];
  const artistSongs = songs.filter( song => artist.song_ids.includes(song.id));
  return artistSongs;
}

const create = (artist_id, song) => {
  const artistIndex = artists.map( artist => artist.id).indexOf(artist_id);
  song.id = uuid();
  songs.push(song);
  artists[artistIndex].song_ids.push(song.id);
  fs.writeFileSync(artistsPath, JSON.stringify(artists));
  fs.writeFileSync(songsPath, JSON.stringify(songs
  ));
  return song;
}

const update = () => {}
const destroy = () => {}

module.exports = {
  readAll,
  create,
  update,
  destroy
};
