import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { CreateCollaboratorInput } from './create-collaborator.input';

@InputType()
export class UpdateCollaboratorInput extends PartialType(CreateCollaboratorInput) {
  @Field(() => ID, {nullable: true})
  id?: string;
}
