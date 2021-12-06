import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Collaborator {

@PrimaryGeneratedColumn('uuid')
id:number;

@Column()
name: string;

@Column()
CPF: string;

}
