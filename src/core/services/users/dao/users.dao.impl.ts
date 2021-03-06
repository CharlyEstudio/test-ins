import { Injectable } from '@nestjs/common';

// DAO
import { UsersDao } from './users.dao';

// Entities
import { UsersEntity } from '../entity/users.entity';

// Models
import { UserModel } from '../model/user.model';

// Repositoies
import { UsersRepository } from '../repository/users.repository';

@Injectable()
export class UsersDaoImpl extends UsersDao {
  constructor(
      private usersRepository: UsersRepository
  ) {
    super();
  }

  async getUsers(): Promise<any> {
    return await this.usersRepository.find();
  }

  async getUser(id: number): Promise<any> {
    return await this.usersRepository.findOne(id);
  }

  async saveUser(user: UserModel): Promise<any> {
    return await this.usersRepository.save(user);
  }

  async updateUser(user: UsersEntity): Promise<any> {
    return await this.usersRepository.save(user);
  }

  async deleteUser(id: number): Promise<any> {
    return await this.usersRepository.delete(id);
  }
}
