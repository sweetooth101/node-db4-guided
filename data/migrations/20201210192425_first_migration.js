// zoos, animals, species, zoo_animals
exports.up = function (knex) {
  return knex.schema
    .createTable('zoos', table => {
      table.increments('zoo_id')
      table.string('zoo_name', 128).notNullable()
      table.string('address', 128).notNullable()
    })
    .createTable('species', table => {
      table.increments('species_id')
      table.string('species_name', 128).notNullable()
    })
    .animals('animals', table => {
      table.increments('animal_id')
      table.string('animal_name', 128).notNullable()
      table.integer('species_id')
        .unsigned()
        .notNullable()
        .references('species_id')
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('species')
    .dropTableIfExists('zoos')
};
