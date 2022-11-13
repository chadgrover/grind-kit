/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  return await knex.schema.table("class_table", (table) => {
    table
    .integer("user_id")
    .unsigned()
    .notNullable();

    table
    .foreign("user_id")
    .references("id")
    .inTable("user_table");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    return await knex.schema.table("class_table", (table) => {
        table.dropColumn("user_id");
    })
};
