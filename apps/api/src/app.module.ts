import { Module } from '@nestjs/common';
import { HelloResolver } from './hello/hello.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true, //prodでfalseにする
      autoSchemaFile: join(process.cwd(), '../../graphql/schema.gql'),
      sortSchema: true,
    }),
  ],
  controllers: [],
  providers: [HelloResolver],
})
export class AppModule {}
