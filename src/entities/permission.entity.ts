import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "../modules/users/user.entity";

@Entity({
    name: 'permissions'
})
export class PermissionEntity {
    @PrimaryGeneratedColumn()
    @JoinColumn()
    @ManyToOne(() => UserEntity, user => user.permissions)
    id: number;

    @Column()
    name: string;
}