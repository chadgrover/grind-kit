/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function(knex) {
    return await knex.schema.createTable('class_table', (table) => {
      table.increments('id').primary();
      table.integer('pld_level', 2).notNullable();
      table.integer('war_level', 2).notNullable();
      table.integer('drk_level', 2).notNullable();
      table.integer('gnb_level', 2).notNullable();
      table.integer('whm_level', 2).notNullable();
      table.integer('sch_level', 2).notNullable();
      table.integer('ast_level', 2).notNullable();
      table.integer('sge_level', 2).notNullable();
      table.integer('mnk_level', 2).notNullable();
      table.integer('drg_level', 2).notNullable();
      table.integer('nin_level', 2).notNullable();
      table.integer('sam_level', 2).notNullable();
      table.integer('rpr_level', 2).notNullable();
      table.integer('brd_level', 2).notNullable();
      table.integer('mch_level', 2).notNullable();
      table.integer('dnc_level', 2).notNullable();
      table.integer('blm_level', 2).notNullable();
      table.integer('smn_level', 2).notNullable();
      table.integer('rdm_level', 2).notNullable();
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = async function(knex) {
    return await knex.schema.dropTable('class_table');
  };
  