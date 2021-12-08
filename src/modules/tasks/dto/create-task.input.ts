import { InputType, Field } from '@nestjs/graphql';
import { TaskStatus } from '../entities/task.entity';

@InputType()
export class CreateTaskInput {
  
  @Field()
  name: string;
  
  @Field()
  expectedDeliveryDate: Date;

  @Field()
  deliveryDate: Date;

  @Field(() => TaskStatus ,{ nullable: true  })
  taskStatus?: TaskStatus;

  @Field()
  collaboratorId?: string;
  
}