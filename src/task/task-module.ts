/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TaskController } from './task-controller';
import { TaskService } from './task-service';
import { TaskStoreService } from './task-store.service';

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [TaskService,TaskStoreService],
  exports:[TaskService]
})
export class TaskModule implements NestModule{
  configure(consumer:MiddlewareConsumer){
    consumer

  }
}
