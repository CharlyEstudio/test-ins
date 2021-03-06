import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('user')
export class UsersEntity {
    @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
    id: number;

    @Column({ name: 'code', type: 'char', length: 12 })
    code: string;

    @Column({ name: 'name', type: 'char', length: 200 })
    name: string;

    @Column({ name: 'address', type: 'char', length: 200 })
    address: string;

    @Column({ name: 'poblation', type: 'char', length: 100 })
    poblation: string;

    @Column({ name: 'postal_code', type: 'char', length: 50 })
    postalCode: string;

    @Column({ name: 'city', type: 'char', length: 100 })
    city: string;

    @Column({ name: 'telephone', type: 'int' })
    telephone: number;

    @Column({ name: 'email', type: 'char', length: 100 })
    email: string;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', nullable: true })
    createdAt: Date;

    @CreateDateColumn({ name: 'updated_at', type: 'timestamp', nullable: true })
    updatedAt: Date;
}
