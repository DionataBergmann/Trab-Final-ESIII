import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Collaborator {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
