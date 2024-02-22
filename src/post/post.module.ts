import { Module } from "@nestjs/common";
import { PostService } from "./post.service";
import { PostController } from "./post.controller";
import { PrismaClientModule } from "src/prisma-client/prisma-client.module";


@Module({
    imports: [PrismaClientModule],
    providers: [PostService],
    controllers: [PostController]
})
export class PostModule {}