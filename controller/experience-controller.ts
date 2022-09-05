import { Client } from '@notionhq/client'
const notion = new Client({ auth: process.env.NOTION_KEY });
import { ExpProps } from '../@types/experience';