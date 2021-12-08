import { InputType, Field } from '@nestjs/graphql';
import { UpdateTaskInput } from 'src/modules/tasks/dto/update-task.input';

@InputType()
export class CreateServiceInput {
  
  @Field()
  name: string;

  @Field()
  expectedDeliveryDate: Date;

  @Field(() => [UpdateTaskInput])
  tasks?:UpdateTaskInput;

}