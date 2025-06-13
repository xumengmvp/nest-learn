import * as joi from 'joi';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { DATABASE, ENVIRONMENT, environmentMap } from './enum/enum.const';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

import { User } from './user/user.entity';
import { Profile } from './user/profile.entity';
import { Log } from './user/log.entity';
import { Role } from './user/roles.entity';

const envFilePath = process.env.NODE_ENV
  ? environmentMap[process.env.NODE_ENV as ENVIRONMENT]
  : environmentMap[ENVIRONMENT.DEVELOPMENT];

const syncDataBase =
  process.env.NODE_ENV === environmentMap[ENVIRONMENT.DEVELOPMENT];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [environmentMap[ENVIRONMENT.DEFAULT], envFilePath],
      validationSchema: joi.object({
        [DATABASE.DB_TYPE]: joi.string(),
        [DATABASE.DB_HOST]: joi.string(),
        [DATABASE.DB_PORT]: joi.number(),
        [DATABASE.DB_USERNAME]: joi.string(),
        [DATABASE.DB_PASSWORD]: joi.string(),
      }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        ({
          type: configService.get<'mysql' | 'mariadb'>(DATABASE.DB_TYPE),
          host: configService.get<string>(DATABASE.DB_HOST),
          port: configService.get<string>(DATABASE.DB_PORT),
          database: configService.get<string>(DATABASE.DB_NAME),
          username: configService.get<string>(DATABASE.DB_USERNAME),
          password: configService.get<string>(DATABASE.DB_PASSWORD),
          entities: [User, Profile, Log, Role],
          synchronize: syncDataBase,
        }) as TypeOrmModuleAsyncOptions,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
