
exports.up = function (knex) {
    return knex.schema.createTable('series', function (table) {
        table.increments();
        table.string('title').notNullable();
        table.string('image').notNullable();
        table.string('description').notNullable();
        table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
        table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('series');
};
