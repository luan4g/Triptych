import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("users", (table) => {
    table.string("id").primary();
    table.string("user_name").notNullable();
    table.string("password").notNullable();
    table.string("email").defaultTo(null);
    table.decimal("following").notNullable().defaultTo(0);
    table.decimal("followers").notNullable().defaultTo(0);
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("users");
}
