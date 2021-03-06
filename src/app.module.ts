import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// DB
import { DbModule } from './db/db.module';

// Repositories
import { UsersRepository } from './core/services/users/repository/users.repository';

// Services, DAO's & Impl
import { UsersService } from './core/services/users/users.service';
import { UsersServiceImpl } from './core/services/users/users.service.impl';

// Controllers
import { UsersController } from './controllers/users/users.controller';
import { UsersDao } from './core/services/users/dao/users.dao';
import { UsersDaoImpl } from './core/services/users/dao/users.dao.impl';

@Module({
  imports: [DbModule, TypeOrmModule.forFeature([UsersRepository])],
  controllers: [UsersController],
  providers: [
    {
      provide: UsersService,
      useClass: UsersServiceImpl,
    },
    {
      provide: UsersDao,
      useClass: UsersDaoImpl,
    },
  ],
})
export class AppModule {}
