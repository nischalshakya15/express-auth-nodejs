import dotenv from 'dotenv';

dotenv.config();

export const config = {
  app: {
    name: process.env.NAME || 'Server',
    port: process.env.PORT || 8080,
    host: process.env.HOST || '0.0.0.0',
    basePath: process.env.BASE_PATH || '/api'
  },
  jwt: {
    refreshToken: {
      expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN || '30m',
      secret: process.env.JWT_REFRESH_TOKEN_SECRET || 'refresh-token-secret'
    },
    accessToken: {
      expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN || '15m',
      secret: process.env.JWT_ACCESS_TOKEN_SECRET || 'access-token-secret'
    }
  },
  pagination: {
    size: 10,
    page: 0
  },
  database: getActiveDatabase(process.env.ACTIVE_DB || 'mysql2')
};

function getActiveDatabase(db: string) {
  if (db === 'mysql2') {
    return {
      client: db,
      connection: {
        user: process.env.DB_MYSQL_USER,
        password: process.env.DB_MYSQL_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST || '127.0.0.1'
      }
    };
  }
}
