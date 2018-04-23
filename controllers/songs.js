// controllers/songs.js

const songModel = require('../models/song');

const readAll = (request, response) => {
  const songs = songModel.readAll(request.params.artist_id);
  response.send(songs);
}

const create = (request, response) => {
  const song = songModel.create(request.params.artist_id, request.body);
  response.send(song);
}

const update = (request, response) => {
  const song = songModel.update(request.params.id, request.body);
  response.send(song);
}

const destroy = (request, response) => {
  const song = songModel.destroy(request.params.song_id, request.params.artist_id);
  response.send(song);
}

module.exports = {
  readAll,
  create,
  update,
  destroy
};
