import { CreateCollaboratorInput } from './create-collaborator.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCollaboratorInput extends PartialType(CreateCollaboratorInput) {
  @Field(() => ID, {nullable: true})
  id?: string;
}