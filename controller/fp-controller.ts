import { Client } from '@notionhq/client'
import { FPProps } from '../@types/fpType'


const client = new Client({auth: process.env.NOTION_FP_KEY})

export const getFeaturedProjects = async (): Promise<FPProps[]> => {
    const databaseId = `${process.env.NOTION_FP_DB}`

    const response = await client.databases.query({
        database_id: databaseId,
        sorts: [
            {
                property: "Created",
                direction: "ascending"
            }
        ]
    })

    return response.results.map((res) => {
        return blockTransformer(res)
    })
}

const blockTransformer = (block: any): FPProps => {
    console.log(block)
    return {
        title: "",
        description: "",
        image: "",
        isDev: true,
        isLive: true,
        devLink: "",
        liveLink:""
    }
}
