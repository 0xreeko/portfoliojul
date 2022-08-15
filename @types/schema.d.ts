export type Tag = {
    color: string,
    id: string,
    name: string
}

export type ReekoPost = {
    id: string,
    title: string,
    slug: string,
    tags: Tag[],
    description: string,
    published: boolean,
    updated: string,
    date: string
    author: string,
}