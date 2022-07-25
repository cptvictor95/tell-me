import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Compliment } from './compliments/compliment.entity';
import { ComplimentsModule } from './compliments/compliments.module';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { InsultsModule } from './insults/insults.module';
import { Insult } from './insults/insults.entity';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.dev.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, Compliment, Insult],
      synchronize: true,
    }),
    UsersModule,
    ComplimentsModule,
    InsultsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
