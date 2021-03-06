// Models
import { UserModel } from '../model/user.model';

// Entities
import { UsersEntity } from '../entity/users.entity';

export abstract class UsersDao {
    abstract getUsers(): Promise<any>;
    abstract getUser(id: number): Promise<any>;
    abstract saveUser(user: UserModel): Promise<any>;
    abstract updateUser(user: UsersEntity): Promise<any>;
    abstract deleteUser(id: number): Promise<any>;
}
