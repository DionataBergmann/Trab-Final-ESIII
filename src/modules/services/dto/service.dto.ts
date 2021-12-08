import { FilterableField, FilterableOffsetConnection } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/base/dto/base.dto';
import { TaskDTO } from 'src/modules/tasks/dto/task.dto';

@ObjectType('Service')
@FilterableOffsetConnection('tasks', () => TaskDTO, { nullable: true })
export class ServiceDTO extends BaseDTO{

  @FilterableField()
  name: string;

  @FilterableField()
  expectedDeliveryDate: Date;
  
}