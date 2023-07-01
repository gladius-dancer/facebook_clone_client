export type Post = {
    _id: string,
    text: string,
    file: string,
    date: string,
    likes: number,
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
    posts: Post[]
}
