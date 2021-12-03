import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppService } from './app.service';
import { StudentsModule } from './modules/students/students.module';
import { CollaboratorsModule } from './modules/collaborators/collaborators.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { ServicesModule } from './modules/services/services.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { CollaboratorsModule } from './modules/collaborators/collaborators.module';

@Module({
  imports: [GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    sortSchema: true,
}), StudentsModule, CollaboratorsModule, ServicesModule, TasksModule,],
  providers: [AppService],
  
})
export class AppModule {}
