import { comments } from "./comments.models";
import { photos } from "./photos.models";
import { users } from "./users.models";

export interface posts {
    userId: string,
    id: string,
    title: string,
    body: string,
    photo: photos,
    comments: comments[],
    user: users
}