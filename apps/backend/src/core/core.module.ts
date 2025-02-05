import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { PrismaModule } from './prisma/prisma.module';
import { IS_DEV_ENV } from 'src/shared/utils/is-dev.util';
import { getGraphQLConfig } from './config/graphql.config';
import { CategoryModule } from 'src/modules/categories/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: !IS_DEV_ENV,
      isGlobal: true,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule],
      useFactory: getGraphQLConfig,
      inject: [ConfigService],
    }),
    PrismaModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class CoreModule { }
