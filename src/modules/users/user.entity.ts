import {Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {PermissionEntity} from "../../entities/permission.entity";

@Entity({
    name: 'users'
})
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    login: string;

    @Column()
    name: string;

    @Column()
    isBlocked: boolean;

    @OneToMany(type => PermissionEntity, permission => permission.id)
    permissions: PermissionEntity[];
}