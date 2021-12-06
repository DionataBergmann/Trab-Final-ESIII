import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCollaboratorInput {
    
@Field()
 name: string;

 @Field()
 CPF: string;

}
