import { BaseEntity } from 'src/modules/base/entities/base.entity';
import { Task } from 'src/modules/tasks/entities/task.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Collaborator extends BaseEntity {

  @Column()
  name: string;
  
  @Column()
  CPF: string;

  @OneToMany(() => Task, (tasks) => tasks.collaborator)
  tasks: Task[];
}