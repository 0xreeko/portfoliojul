import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { PostPage, ReekoPost } from "../@types/schema";

  const notion = new Client({ auth: process.env.NOTION_KEY });
  const n2m = new NotionToMarkdown({ notionClient: notion });
    
export const getPublishedPosts = async (): Promise<ReekoPost[]> => {
    const databaseId = `${process.env.NOTION_DATABASE}`
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        and: [
          {
            property: "Published",
            checkbox: {
              equals: true,
            },
          },
          {
            property: "Slug",
            rich_text: {
              is_not_empty: true
            }
          }
        ]
      },
      sorts: [
        {
          property: "Created",
          direction: "descending",
        },
      ],
    });
    return response.results.map((res) => {
      return pageToReekoPostTransformer(res);
    });
  }
  
  export const getSingleReekoPost = async(_slug: string): Promise<PostPage> => {
    let post, markdown
    const databaseId = `${process.env.NOTION_DATABASE}`  
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Slug',
        rich_text: {
          equals: _slug
        }
      }
    })
    
    if (!response.results[0]) {
      throw 'No post found!'
    }
    const page = response.results[0]
    
    const mdBlocks = await n2m.pageToMarkdown(page?.id)
    markdown = n2m.toMarkdownString(mdBlocks)
    post = pageToReekoPostTransformer(page)
    
    return {
      post,
      markdown
    }
  }
  
  export const getTagPosts = async(_slug: string): Promise<ReekoPost[]> => {
    const databaseId = `${process.env.NOTION_DATABASE}` 
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        and: [
          {
            property: "Published",
            checkbox: {
              equals: true,
            },
          },
          {
            property: "Slug",
            rich_text: {
              is_not_empty: true
            }
          },
          {
            property: "Tags",
            multi_select: {
              contains: _slug
            }
          }
        ]
      },
      sorts: [
        {
          property: "Created",
          direction: "descending",
        },
      ],
    })
    return response.results.map((res) => {
      return pageToReekoPostTransformer(res)
    })
  }

const pageToReekoPostTransformer = (page: any): ReekoPost => {
    return {
      id: page.id,
      title: page.properties.Name.title[0].plain_text,
      description: page.properties.Description.rich_text[0]?.text.content,
      date: page.properties.Created.created_time,
      slug: page.properties.Slug.rich_text[0]?.text.content,
      author: page.properties.Author.created_by.name,
      tags: page.properties.Tags.multi_select,
      published: page.properties.Published.checkbox,
      updated: page.properties.Updated.last_edited_time,
    };
  }