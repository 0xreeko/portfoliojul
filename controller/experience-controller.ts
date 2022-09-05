import { Client } from '@notionhq/client'
import { ExpProps } from '../@types/experience';

const notion = new Client({ auth: process.env.NOTION_EXP_KEY });

export const getExperiences = async (): Promise<ExpProps[]> => {
    const databaseId = `${process.env.NOTION_EXP_DB}`
    const response = await notion.databases.query({
        database_id: databaseId,
        sorts: [{
            property: "Id",
            direction: 'descending'
        }]
         
    })

    return response.results.map((res) => {
        return experienceTranformer(res)
    })
}

const experienceTranformer = (block: any): ExpProps => {
    console.log(block)
    return {
        title: block.properties.Title.title[0].plain_text,
        company: block.properties.Company.rich_text[0]?.plain_text,
        startMonth: block.properties.StartMonth.rich_text[0]?.plain_text,
        startYear: block.properties.StartYear.number,
        endMonth: block.properties.EndMonth.rich_text[0]?.plain_text,
        endYear: block.properties.EndYear.number 
    }
}