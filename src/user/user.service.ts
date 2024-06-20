/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interface/user';

@Injectable()
export class UserService {
  //to make user object global
  public users: User[];

  constructor() {
    this.users = [];
  }

  
  getUsers(): User[] {
    return this.users;
  }
  async getUser(email: string): Promise<User[]> {
    const filteredData = await this.users.filter((i) => i.email === email);
    if (filteredData && filteredData.length>0 && Array.isArray(filteredData)){
      return filteredData
    }
    throw new NotFoundException('user not found')
  }
  addUser(user: User): Promise<User> {
    this.users.push(user);
    return Promise.resolve(user);
  }
  deleteUser(email: string): User[] {
    const remainingUser = this.users.filter((i) => i.email !== email);
    this.users = remainingUser;
    return this.users;
  }
}
