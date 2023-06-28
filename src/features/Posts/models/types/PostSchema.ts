export type Post = {
    post_id: string,
    text: string,
    img: string,
    date: string,
}

export type PostSchema = {
    posts: Post[]
}
