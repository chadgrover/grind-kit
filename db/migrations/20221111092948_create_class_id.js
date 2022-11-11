/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.table('user_table', (table) => {
    table
    .integer('class_id')
    .references('id')
    .inTable('class_table');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.table('user_table', (table) => {
  table.dropColumn('class_id');
  });
};
