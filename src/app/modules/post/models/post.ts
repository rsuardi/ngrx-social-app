import { User } from "../../user/models/user";
import { PostBody } from "./post-body";

export class Post {
    id: number;
    title: string;
    body?: PostBody;
    user?: User;
}