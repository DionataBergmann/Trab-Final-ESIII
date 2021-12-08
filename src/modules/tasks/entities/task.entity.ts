import { BaseEntity } from 'src/modules/base/entities/base.entity';
import { Collaborator } from 'src/modules/collaborators/entities/collaborator.entity';
import { Service } from 'src/modules/services/entities/service.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum TaskStatus {
  OPEN = "OPEN",
  IN_PROGRESS = "IN_PROGRESS",
  FINISHED = "FINISHED",
}

@Entity()
export class Task extends BaseEntity {

  @Column()
  name: string;
  
  @Column()
  expectedDeliveryDate: Date;

  @Column()
  deliveryDate: Date;

  @Column({ type: 'enum', enum: TaskStatus , nullable: true  })
  taskStatus?: TaskStatus;

  @ManyToOne(() => Collaborator, (collaborator) => collaborator.tasks)
  collaborator: Collaborator;

  @Column({nullable: true})
  collaboratorId?: string;

  @ManyToOne(() => Service, (service) => service.tasks, {onDelete:'CASCADE'})
  service: Service;
}