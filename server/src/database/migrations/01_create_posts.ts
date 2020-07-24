import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("posts", (table) => {
    table.increments("id").primary();
    table.integer("user_id").notNullable().references("id").inTable("users");
    table.string("image").notNullable();
    table.string("description").notNullable();
    table.decimal("likes").notNullable().defaultTo(0);
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("posts");
}
