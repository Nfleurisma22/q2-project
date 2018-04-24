
exports.up = function(knex, Promise) {

};

exports.down = function(knex, Promise) {

};
exports.up = function(knex, Promise) {
  return knex.schema.createTable('artists', table => {
    table.increments();
    table.string('name');
    table.string('country');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('artists');
};
