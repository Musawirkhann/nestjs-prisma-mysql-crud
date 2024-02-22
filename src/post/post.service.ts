import { Injectable } from "@nestjs/common";
import { PrismaClientService } from "src/prisma-client/prisma-client.service";
import { Post } from "./models/post.model";


@Injectable()
export class PostService {
    constructor(private prismaService: PrismaClientService){}

    async getAll(): Promise<Post[]> {
        return this.prismaService.post.findMany()
    }

    async getPost(postId: number): Promise<Post | {}> {
        return this.prismaService.post.findUnique({where: {id: +postId}})
    }

    async createPost(post: Post): Promise<Post> {
        return this.prismaService.post.create({data: post})
    }

    async editPost(postId: number, post: Post): Promise<any> {
        const found_post = await this.getPost(+postId)
        if (!found_post) {
            return new Promise((resolve, reject) => {
                resolve({message: 'not found'})
            })
        }
        return this.prismaService.post.update({
            where: {id: +postId},
            data: {title: post?.title, description: post?.title, tags: post?.tags}
        })
    }

    async deletePost(postId: number): Promise<any> {
        const found_post = await this.getPost(+postId)
        if (!found_post) {
            return new Promise((resolve, reject) => {
                resolve({message: 'not found'})
            })
        }
        return this.prismaService.post.delete({
            where : {id: +postId}
        })
    }
}