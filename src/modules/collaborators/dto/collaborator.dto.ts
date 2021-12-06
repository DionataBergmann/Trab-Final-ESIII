import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Collaborator')
export class CollaboratorDTO {

@Field()
id:number;

@FilterableField()
name: string;

@FilterableField()
CPF: string;

}