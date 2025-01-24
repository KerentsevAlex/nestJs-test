import {Module} from "@nestjs/common";
import {UsersService} from "./users.service";
import {UserEntity} from "./user.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersController} from "./users.controller";
import {PermissionEntity} from "../../entities/permission.entity";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, PermissionEntity])],
    providers: [UsersService],
    controllers: [UsersController],
    exports: [TypeOrmModule]
})
export class UsersModule {}