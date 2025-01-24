import {Injectable} from "@nestjs/common";
import {UserEntity} from "./user.entity";
import {FindOneOptions, Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
    ) {}
    findAll(): Promise<UserEntity[]> {
        return this.usersRepository.find({
            relations: {
                permissions: true
            }
        });
    }
    findOne(id: number): Promise<UserEntity> {
        return this.usersRepository.findOne({
            where: { id }
        });
    }
    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }

    async addUser(user: UserEntity): Promise<void> {
        await this.usersRepository.create();
    }
}