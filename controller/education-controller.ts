import { Client } from '@notionhq/client'
import { SchoolProps } from '../@types/education'

const client = new Client({ auth: process.env.NOTION_ED_KEY })

export const getSchools = async (): Promise<SchoolProps[]> => {
    const databaseId = `${process.env.NOTION_ED_DB}`

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

const blockTransformer = (block: any): SchoolProps => {
    return {
        name: block.properties.Name.title[0]?.plain_text,
        subject: block.properties.Subject.rich_text[0]?.plain_text,
        startMonth: block.properties.startMonth.rich_text[0]?.plain_text,
        startYear: block.properties.startYear.number,
        endMonth: block.properties.endMonth.rich_text[0]?.plain_text,
        endYear: block.properties.endYear.number,
        finalGrade: block.properties.finalGrade.rich_text[0]?.plain_text
    }
}