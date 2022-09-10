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
    console.log(block)
    return {
        year: 1,
        title: "",
        tools: [''],
        devLink: "",
        liveLink: "",
    }
}
