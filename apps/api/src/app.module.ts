import { Module } from '@nestjs/common';
import { HelloResolver } from './hello/hello.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [
    PrismaModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true, //prodでfalseにする
      autoSchemaFile: join(process.cwd(), '../../graphql/schema.gql'),
      sortSchema: true,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [HelloResolver],
})
export class AppModule {}
