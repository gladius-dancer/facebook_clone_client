export type Post = {
    _id: string,
    text: string,
    file: string,
    date: string,
    likes: string[],
    type: string,
    idFile: string,
    pathToFile: string,
    user: {
        _id: number,
        firstName: string
    }
    comments: string[],
}

export type PostSchema = {
    posts: Post[];
}

export type AddPostSchema = {
    text: string;
    file: FileList;
}
