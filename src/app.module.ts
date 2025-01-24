import {Module, OnApplicationBootstrap, OnModuleInit} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsersController} from "./modules/users/users.controller";
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {DataSource} from "typeorm";
import {UserEntity} from "./modules/users/user.entity";
import {UsersModule} from "./modules/users/users.module";
import {UsersService} from "./modules/users/users.service";
import {PermissionEntity} from "./entities/permission.entity";

@Module({
  imports: [
      ConfigModule.forRoot({
        envFilePath: './environment/environment.dev.env',
        isGlobal: true
      }),
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: '0.0.0.0',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'nestDB',
        autoLoadEntities: true,
        keepConnectionAlive: false,
        entities: [UserEntity, PermissionEntity]
      }),
      UsersModule
  ],
  controllers: [AppController],
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
