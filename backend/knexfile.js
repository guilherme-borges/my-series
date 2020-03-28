// Update with your config settings.

module.exports = {

    development: {
      client: 'mysql',
      connection: {
        host: '127.0.0.1',
        database: 'gseries',
        user:     'root',
        password: ''
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: './src/database/migrations'
      }
    },
  
    staging: {
      client: 'mysql',
      connection: {
        host: '127.0.0.1',
        database: 'gseries',
        user:     'root',
        password: ''
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: './src/database/migrations'
      }
    },
  
    production: {
      client: 'mysql',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  
  };
  