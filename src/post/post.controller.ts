import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PostService } from "./post.service";
import { Post as PostModel } from "./models/post.model";


@Controller('api/v1/post')
export class PostController {

    constructor(private readonly postService: PostService){}

    @Get('all')
    async getAllPosts(): Promise<PostModel[]> {
        return this.postService.getAll();
    }

    @Post('create')
    async createPost(@Body() postData: PostModel): Promise<PostModel> {
        return this.postService.createPost(postData)
    }

    @Get(':id')
    async getPost(@Param('id') id: number): Promise<PostModel | {}> {
        return this.postService.getPost(+id)
    }

    @Put('edit/:id')
    async editPost(@Param('id') id: number, @Body() postData: PostModel):Promise<PostModel>{
        return this.postService.editPost(+id, postData)
    }

    @Delete('delete/:id')
    async deletePost(@Param('id') id: number): Promise<PostModel> {
        return this.postService.deletePost(+id)
    }

}