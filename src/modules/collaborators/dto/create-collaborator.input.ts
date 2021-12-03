import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCollaboratorInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
