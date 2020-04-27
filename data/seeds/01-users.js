
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, username: 'test1', password: 'test123' },
        {id: 2, username: 'test2', password: 'test123' },
        {id: 3, username: 'test3', password: 'test123' }
      ]);
    });
};
