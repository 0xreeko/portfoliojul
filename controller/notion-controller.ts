import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

export default class NotionController {
    client: Client
    n2m: NotionToMarkdown

    constructor() {
        this.client = new Client({auth: process.env.NOTION_ACCESS_TOKEN})
        this.n2m = new NotionToMarkdown({notionClient: this.client})
    }
}