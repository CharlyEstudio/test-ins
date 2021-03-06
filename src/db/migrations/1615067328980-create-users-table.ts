import {MigrationInterface, QueryRunner} from "typeorm";

export class createUsersTable1615067328980 implements MigrationInterface {
    name = 'createUsersTable1615067328980'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` int UNSIGNED NOT NULL AUTO_INCREMENT, `code` char(12) NOT NULL, `name` char(200) NOT NULL, `address` char(200) NOT NULL, `poblation` char(100) NOT NULL, `postal_code` char(50) NOT NULL, `city` char(100) NOT NULL, `telephone` int NOT NULL, `email` char(100) NOT NULL, `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `user`");
    }

}
