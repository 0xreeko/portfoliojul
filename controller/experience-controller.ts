import { Client } from '@notionhq/client'
import { ExpProps } from '../@types/experience';

const notion = new Client({ auth: process.env.NOTION_KEY });

export const getExperiences = () => {

}