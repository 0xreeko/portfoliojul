import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { ReekoPost } from "../@types/schema";

export default class NotionController {
    client: Client
    n2m: NotionToMarkdown

    constructor() {
        this.client = new Client({ auth: process.env.NOTION_KEY});
        this.n2m = new NotionToMarkdown({ notionClient: this.client });
    }
    async getPublishedPosts(): Promise<ReekoPost[]> {
        const database = process.env.NOTION_DATABASE ?? '';

        const response = await this.client.databases.query({
            database_id: database,
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
        return response.results.map(res => {
            return NotionController.pageToReekoPostTransformer(res)
        })
    }
    private static pageToReekoPostTransformer(page: any): ReekoPost {
        return {
            id: page.id,
            title: page.properties.Name.title[0].plain_text,
            description: page.properties.Description.rich_text,
            date: page.properties.Created,
            slug: page.properties.Slug.rich_text,
            author: page.properties.Author.created_by.name,
            tags: page.properties.Tags.multi_select,
            published: page.properties.Published.checkbox,
            updated: page.properties.Updated.last_edited_time

        }
        
    }
}