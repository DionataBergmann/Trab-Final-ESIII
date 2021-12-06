import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppService } from './app.service';
import { CollaboratorsModule } from './modules/collaborators/collaborators.module';
import { ServicesModule } from './modules/services/services.module';
import { TasksModule } from './modules/tasks/tasks.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    sortSchema: true,
}), 
TypeOrmModule.forRoot(),
CollaboratorsModule, ServicesModule, TasksModule,],
  providers: [AppService],
  
})
export class AppModule {}
