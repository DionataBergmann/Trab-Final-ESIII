import { FilterableField, FilterableRelation } from '@nestjs-query/query-graphql';
import { ObjectType, registerEnumType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/base/dto/base.dto';
import { CollaboratorDTO } from 'src/modules/collaborators/dto/collaborator.dto';
import { ServiceDTO } from 'src/modules/services/dto/service.dto';
import { TaskStatus } from '../entities/task.entity';

registerEnumType(TaskStatus, {
  name: "taskStatus",
});

@ObjectType('Task')
@FilterableRelation('collaborator', () => CollaboratorDTO, { nullable: true })
@FilterableRelation('service', () => ServiceDTO, { nullable: true })
export class TaskDTO extends BaseDTO {

  @FilterableField()
  name: string;
  
  @FilterableField()
  expectedDeliveryDate: Date;

  @FilterableField()
  deliveryDate: Date;

  @FilterableField(() => TaskStatus ,{ nullable: true  })
  taskStatus?: TaskStatus;
  
}