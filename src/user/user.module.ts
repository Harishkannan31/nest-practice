/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { LoggerMiddleware } from './middleware';



@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService]
})
export class UserModule implements NestModule{
  configure(consumer:MiddlewareConsumer){
    consumer
    .apply(LoggerMiddleware)
    .forRoutes(UserController)
  }
}
