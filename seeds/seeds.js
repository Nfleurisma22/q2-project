
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('artists').del()
    .then(function () {
      // Inserts seed entries
      return knex('artists').insert([
        {name: "Nas",country:"USA"},
        {name:"The Roots",country:"USA"},
        {name: "Rakim",country:"USA"}
      ]);
    });
};
