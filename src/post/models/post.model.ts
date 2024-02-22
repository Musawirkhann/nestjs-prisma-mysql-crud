import { Prisma } from "@prisma/client";

export class Post implements Prisma.PostCreateInput {
    id: number;
    title: string;
    description: string;
    tags: string;
}