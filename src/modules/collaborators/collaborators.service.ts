import { Injectable } from '@nestjs/common';
import { CreateCollaboratorInput } from './dto/create-collaborator.input';
import { UpdateCollaboratorInput } from './dto/update-collaborator.input';

@Injectable()
export class CollaboratorsService {
  create(createCollaboratorInput: CreateCollaboratorInput) {
    return 'This action adds a new collaborator';
  }

  findAll() {
    return `This action returns all collaborators`;
  }

  findOne(id: number) {
    return `This action returns a #${id} collaborator`;
  }

  update(id: number, updateCollaboratorInput: UpdateCollaboratorInput) {
    return `This action updates a #${id} collaborator`;
  }

  remove(id: number) {
    return `This action removes a #${id} collaborator`;
  }
}
