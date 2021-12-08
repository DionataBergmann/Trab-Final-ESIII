import { FilterableField, FilterableOffsetConnection } from "@nestjs-query/query-graphql";
import { ObjectType } from "@nestjs/graphql";
import { BaseDTO } from "src/modules/base/dto/base.dto";
import { TaskDTO } from "src/modules/tasks/dto/task.dto";

@ObjectType('Collaborator')
@FilterableOffsetConnection('tasks', () => TaskDTO, { nullable: true })
export class CollaboratorDTO extends BaseDTO{

  @FilterableField()
  name: string;
  
  @FilterableField()
  CPF: string;

}