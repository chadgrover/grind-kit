/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return await knex.schema.createTable('instancecontent_table', (table) => {
    table.integer('id').primary();
    table.string('name', 255);
    table.string('url', 255).notNullable();
    table.integer('required_level', 2);
    table.integer('clear_exp');
    table.integer('clear_gil');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.dropTable('instancecontent_table');
};
