import Link from 'next/link';
import { RuiPill } from 'ruskelui';
import { Tag } from '../../@types/schema';
import { variant } from '../../@types/tags';
import dayjs from '../../utils/day'
import { linkIcon } from '../Icons';
import styles from './HoriCard.module.css'

interface Props {
    title: string;
    slug: string,
    date: string,
    description: string,
    tags: Tag[]
}

export const HoriCard = (_params: Props) => {
    return (
        <li className="flex w-full p-5 duration-300 border rounded-lg border-sylver-100 border-opacity-5 backdrop-blur-sm bg-amethyst-400/5 hover:bg-amethyst-400/10 hover:border-opacity-10">
            <div className="flex flex-col w-full gap-2">
                <div className="flex flex-col justify-between sm:items-center sm:flex-row">
                    <Link href={`/blog/${_params.slug}`}><div className="flex items-center gap-2 appearance-none cursor-pointer"><p className='duration-300 text-d-sub1'>{_params.title}</p><span>{linkIcon}</span></div></Link>
                    <span className='text-d-base'>{dayjs(_params.date).format('LL')}</span>
                </div>
                <span className='text-m-base sm:text-d-base'>{_params.description ?? ""}</span>
                <ul className='flex flex-wrap gap-3'>
                    {_params.tags.length > 0 && _params.tags.map((i: Tag) => (
                        <RuiPill key={i.id} color={variant[i.name]}>{i.name}</RuiPill>
                    ))}
                </ul>
            </div>
        </li>
    )
};