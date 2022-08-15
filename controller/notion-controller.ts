import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { ReekoPost } from "../@types/schema";

export default class NotionController {
    client: Client
    n2m: NotionToMarkdown

    constructor() {
        this.client = new Client({auth: process.env.NOTION_ACCESS_TOKEN})
        this.n2m = new NotionToMarkdown({notionClient: this.client})
    }
    async getPublishedPosts(): Promise<ReekoPost[]> {
        const db = process.env.NOTION_BLOG_DATABASE_ID ?? ''

        const res = await this.client.databases.query({
            database_id: db,
            filter: {
                property: 'Published',
                checkbox: {
                    equals: true
                }
            },
            sorts: [
                {
                    property: 'Created',
                    direction: 'descending'
                }
            ]
        })
        return res.results.map((item) => {
            return NotionController.pageToReekoPost(item)
        })
    }
    private static pageToReekoPost(page: any): ReekoPost {
        let cover = page.cover;

        switch (cover.type) {
            case 'file':
                cover =  page.cover.file;
                break;
            case 'external':
                cover = page.cover.external.url;
                break;
            default:
                cover = ''
        }
        return {
            id: page.id,
            cover: cover,
            title: page.properties.Name.title[0].plain_text,
            description: page.properties.Description.rich_text[0].plain_text,
            date: page.properties.Created.created_time,
            slug: page.properties.Slug,
            author: '0xreeko',
            tags: page.properties.Tags.multi_select,
            published: page.properties.Published.checkbox

        }
        
    }
}