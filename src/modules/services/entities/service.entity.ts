import { BaseEntity } from 'src/modules/base/entities/base.entity';
import { Task } from 'src/modules/tasks/entities/task.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Service extends BaseEntity{

  @Column()
  name: string;

  @Column()
  expectedDeliveryDate: Date;

  @OneToMany(() => Task, (tasks) => tasks.service,{ nullable: true })
  tasks?: Task[];
  
}