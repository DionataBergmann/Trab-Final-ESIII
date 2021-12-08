import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Collaborator } from './entities/collaborator.entity';

@Injectable()
export class CollaboratorsService extends TypeOrmQueryService<Collaborator>{
  constructor(
    @InjectRepository(Collaborator)
    public collaboratorRepository: Repository<Collaborator>,
  ) {
    super(collaboratorRepository, { useSoftDelete: true });
  }

}