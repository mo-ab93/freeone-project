module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'freeone'),
      user: env('DATABASE_USERNAME', 'mohammedabbas'),
      password: env('DATABASE_PASSWORD', '123'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
