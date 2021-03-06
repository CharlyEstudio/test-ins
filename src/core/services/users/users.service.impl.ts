import { Injectable } from '@nestjs/common';

// DAO
import { UsersDao } from './dao/users.dao';

// Entities
import { UsersEntity } from './entity/users.entity';

// Models
import { UserModel } from './model/user.model';

// Services
import { UsersService } from './users.service';

@Injectable()
export class UsersServiceImpl extends UsersService {
    constructor(
        private usersDao: UsersDao
    ) {
        super();
    }

    async getUsers(): Promise<any> {
        return await this.usersDao.getUsers();
    }

    async getUser(id: number): Promise<any> {
        return await this.usersDao.getUser(id);
    }

    async saveUser(user: UserModel): Promise<any> {
        return await this.usersDao.saveUser(user);
    }

    async updateUser(user: UsersEntity): Promise<any> {
        return await this.usersDao.updateUser(user);
    }

    async deleteUser(id: number): Promise<any> {
        return await this.usersDao.deleteUser(id);
    }
}
