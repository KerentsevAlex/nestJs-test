import {Controller, Get, Post} from "@nestjs/common";
import {UsersService} from "./users.service";
import {UserEntity} from "./user.entity";

@Controller('users')

export class UsersController {
    constructor(private userService: UsersService) {
    }

    @Get()
    async getIndex() {
        return await this.userService.findAll();
    }

    @Post()
    async addUser(user: UserEntity) {
        return await this.userService.addUser(user);
    }
}