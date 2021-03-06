import { EntityRepository, Repository } from 'typeorm';

// Entity
import { UsersEntity } from '../entity/users.entity';

@EntityRepository(UsersEntity)
export class UsersRepository extends Repository<UsersEntity> {}
