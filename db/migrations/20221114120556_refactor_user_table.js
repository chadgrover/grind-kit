/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  return await knex.schema.table("user_table", (table) => {
    table.integer("pld_level", 2).notNullable().unsigned();
    table.integer("war_level", 2).notNullable().unsigned();
    table.integer("drk_level", 2).notNullable().unsigned();
    table.integer("gnb_level", 2).notNullable().unsigned();
    table.integer("whm_level", 2).notNullable().unsigned();
    table.integer("sch_level", 2).notNullable().unsigned();
    table.integer("ast_level", 2).notNullable().unsigned();
    table.integer("sge_level", 2).notNullable().unsigned();
    table.integer("mnk_level", 2).notNullable().unsigned();
    table.integer("drg_level", 2).notNullable().unsigned();
    table.integer("nin_level", 2).notNullable().unsigned();
    table.integer("sam_level", 2).notNullable().unsigned();
    table.integer("rpr_level", 2).notNullable().unsigned();
    table.integer("brd_level", 2).notNullable().unsigned();
    table.integer("mch_level", 2).notNullable().unsigned();
    table.integer("dnc_level", 2).notNullable().unsigned();
    table.integer("blm_level", 2).notNullable().unsigned();
    table.integer("smn_level", 2).notNullable().unsigned();
    table.integer("rdm_level", 2).notNullable().unsigned();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  return await knex.schema.table("user_table", (table) => {
    table.dropColumn("pld_level");
    table.dropColumn("war_level");
    table.dropColumn("drk_level");
    table.dropColumn("gnb_level");
    table.dropColumn("whm_level");
    table.dropColumn("sch_level");
    table.dropColumn("ast_level");
    table.dropColumn("sge_level");
    table.dropColumn("mnk_level");
    table.dropColumn("drg_level");
    table.dropColumn("nin_level");
    table.dropColumn("sam_level");
    table.dropColumn("rpr_level");
    table.dropColumn("brd_level");
    table.dropColumn("mch_level");
    table.dropColumn("dnc_level");
    table.dropColumn("blm_level");
    table.dropColumn("smn_level");
    table.dropColumn("rdm_level");
  });
};
