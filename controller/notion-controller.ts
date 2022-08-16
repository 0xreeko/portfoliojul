import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { PostPage, ReekoPost } from "../@types/schema";

export default class NotionController {
  client: Client;
  n2m: NotionToMarkdown;
  database: string

  constructor() {
    this.client = new Client({ auth: process.env.NOTION_KEY });
    this.n2m = new NotionToMarkdown({ notionClient: this.client });
    this.database = process.env.NOTION_DATABASE ?? "";
  }
  async getPublishedPosts(): Promise<ReekoPost[]> {
    const response = await this.client.databases.query({
      database_id: this.database,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "Created",
          direction: "descending",
        },
      ],
    });
    return response.results.map((res) => {
      return NotionController.pageToReekoPostTransformer(res);
    });
  }
  
    async getSingleReekoPost(_slug: string): Promise<PostPage> {
      let post, markdown
      const response = await this.client.databases.query({
        database_id: this.database,
        filter: {
          property: 'Slug',
          text: {
            equals: _slug
          }
        }
      })
      console.log(response.results[0].id)

      if (!response.results[0]) {
        throw 'No post found!'
      }
      const page = response.results[0]
      
      const mdBlocks = await this.n2m.pageToMarkdown(page?.id)
      markdown = this.n2m.toMarkdownString(mdBlocks)
      post = NotionController.pageToReekoPostTransformer(page)

      return {
        post,
        markdown
      }
    }

  private static pageToReekoPostTransformer(page: any): ReekoPost {
    return {
      id: page.id,
      title: page.properties.Name.title[0].plain_text,
      description: page.properties.Description.rich_text[0]?.text.content ?? null,
      date: page.properties.Created.created_time,
      slug: page.properties.Slug.rich_text[0]?.text.content ?? null,
      author: page.properties.Author.created_by.name,
      tags: page.properties.Tags.multi_select,
      published: page.properties.Published.checkbox,
      updated: page.properties.Updated.last_edited_time,
    };
  }
}
