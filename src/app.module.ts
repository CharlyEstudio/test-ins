import { Module } from '@nestjs/common';

// DB
import { DbModule } from './db/db.module';

// Services
import { UsersService } from './core/services/users/users.service';

// Controllers
import { UsersController } from './controllers/users/users.controller';

@Module({
  imports: [DbModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
