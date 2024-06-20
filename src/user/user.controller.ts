/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/user';
import { UserDto, userParamDto } from './dto/user.dto';
import { HttpExceptionFilter } from './filter';

@Controller('User')
export class UserController {
  constructor(private readonly userService:UserService) {}

  //http get/User -->To get all users
  @Get()
  getUsers():User[] {
    return this.userService.getUsers()
  }
  //http get/User/xyz@gmail.com --> To get specific users alone
  @HttpCode(200)
  @Get('/:email')
  @UseFilters(new HttpExceptionFilter())
  async getUser(@Param() Param:userParamDto):Promise<User[]> {
    try{
      return await this.userService.getUser(Param.email)
    }
    catch(err){
      throw new BadRequestException("Error with Request")
    }
    
  }
  //http post/User
  @Post()
  @UsePipes(new ValidationPipe())
  async postUser(@Body() user:UserDto): Promise<User> {
    return this.userService.addUser(user);
  }
  //http delete/User/xyz@gmail.com
  @Delete('/:email')
  delUser(@Param() Param:userParamDto): any {
    return this.userService.deleteUser(Param.email);
  }
}
