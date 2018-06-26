// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "Cluckr"
    },
    migrations: {
      tableName: "knew_migrations",
      directory: "./db/migrations"
    }
    }
  };