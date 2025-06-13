export enum DATABASE {
  DB_TYPE = 'DB_TYPE',
  DB_HOST = 'DB_HOST',
  DB_PORT = 'DB_PORT',
  DB_NAME = 'DB_NAME',
  DB_USERNAME = 'DB_USERNAME',
  DB_PASSWORD = 'DB_PASSWORD',
}

export enum ENVIRONMENT {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
  DEFAULT = 'default',
}

export const environmentMap = {
  [ENVIRONMENT.DEVELOPMENT]: '.env.development',
  [ENVIRONMENT.PRODUCTION]: '.env.production',
  [ENVIRONMENT.DEFAULT]: '.env',
};
