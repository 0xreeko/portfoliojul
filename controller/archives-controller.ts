import { Client } from '@notionhq/client'
import { ArchivesType } from '../@types/archives'

const client = new Client({auth: process.env.NOTION_AR_KEY})

export const getArchives = async (): Promise<ArchivesType[]> => {
    const databaseId = `${process.env.NOTION_AR_DB}`

    const response = await client.databases.query({
        database_id: databaseId,
        sorts: [
            {
                property: "Created",
                direction: 'descending'
            }
        ]
    })
    return response.results.map((res) => {
        return blockTransformer(res)
    })
}

const blockTransformer = (block: any): ArchivesType => {
    return {
        year: block.properties.Year.number,
        title: block.properties.Title.title[0]?.plain_text,
        tools: block.properties.Tools.multi_select,
        devLink: block.properties.devLink.rich_text[0]?.plain_text ?? "",
        liveLink: block.properties.liveLink.rich_text[0]?.plain_text ?? "",
    }
}
