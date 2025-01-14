import {Module, OnApplicationBootstrap, OnModuleInit} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UserController} from "./controllers/users.controller";
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {DataSource} from "typeorm";

@Module({
  imports: [
      ConfigModule.forRoot({
        envFilePath: './environment/environment.dev.env',
        isGlobal: true
      }),
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'test',
        entities: []
      })
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
  exports: [TypeOrmModule]
})
export class AppModule implements OnModuleInit, OnApplicationBootstrap {

  constructor(private dataSource: DataSource) {
  }
  onApplicationBootstrap(): any {
    console.log('onApplicationBootstrap');
  }

  onModuleInit(): any {
    console.log('onModuleInit');
  }
}
