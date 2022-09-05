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
    console.log(block)
    return {
        name: "",
        subject: "",
        startMonth: "",
        startYear: 1,
        endMonth:"",
        endYear: 2,
        finalGrade: ""
    }
}