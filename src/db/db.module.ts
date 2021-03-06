import {Module} from "@nestjs/common";

// DB Service
import {dbService} from "./db.service";

@Module({
    imports: [
        ...dbService
    ],
    exports: [
        ...dbService
    ]
})
export class DbModule {}
