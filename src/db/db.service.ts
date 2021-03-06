// TyeORM
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';

export const dbService = [
    TypeOrmModule.forRootAsync({
        async useFactory(config: any) {
            return {
                timezone: 'Z',
                ssl: false,
                type: 'mysql',
                host: 'database-1.cfxexxozw76b.us-west-1.rds.amazonaws.com',
                port: 3306,
                username: 'admin',
                password: 'Passw0rd',
                database: 'test',
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                migrations: [__dirname + '/migrations/*{.ts,.js}'],
                sinchronize: false
            } as ConnectionOptions;
        }
    })
];
