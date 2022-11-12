require('dotenv').config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.host,
      user: process.env.user,
      database: process.env.database,
    },
    searchPath: "public",
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds",
    },
  },
  production: {
    client: "pg",
    connection: process.env.DB_URL_PROD,
    searchPath: "public",
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds",
    },
  },
};
