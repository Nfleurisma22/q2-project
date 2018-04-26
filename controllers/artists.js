const artistModel = require('../models/artist');

const readAll = (request, response) => {
  artistModel.readAll()
  .then(result => {
             response.json(result);
         })
         .catch(error => {
             console.error(error);
         });
}

const readIndividual = (request, response) => {
    artistModel.readIndividual(request.params.id)
        .then(result => {
            response.json( result );
        })
        .catch(error => {console.error(error);});
}
const create = (request, response) => {
  artistModel.create(request.body)
  .then( result => { response.json( result ); })
        .catch( error => { console.error( error ); })
}

const update = (request, response) => {
  artistModel.update(request.params.id, request.body)
  .then( result => { response.json( result ); })
          .catch(error => { console.error( error ); })

}

const destroy = (request, response) => {
  artistModel.destroy(request.params.id)
  .then( result => {response.send( result);})
  .catch( error => {console.error( error); });
}

module.exports = {
  readAll,
  readIndividual,
  create,
  update,
  destroy
};
