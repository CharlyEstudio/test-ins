import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// DB
import { DbModule } from './db/db.module';

// Repositories
import { UsersRepository } from './core/services/users/repository/users.repository';

// Services
import { UsersService } from './core/services/users/users.service';

// Controllers
import { UsersController } from './controllers/users/users.controller';

@Module({
  imports: [DbModule, TypeOrmModule.forFeature([UsersRepository])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
