import Image from 'next/image';
import Link from 'next/link';
import { RuiPill } from 'ruskelui';
import { Tag } from '../../@types/schema';
import { variant } from '../../@types/tags';
import dayjs from '../../utils/day'

interface Props {
    title: string;
    slug: string,
    date: string,
    description: string,
    tags: Tag[]
}

const LatestPost = (_params: any) => {
    return (
        <div className='p-5 duration-300 border rounded-lg h-fit border-sylver-100 border-opacity-5 backdrop-blur-sm bg-amethyst-400/5 hover:bg-amethyst-400/10 hover:border-opacity-10 w-80'>
            <div className="flex flex-col w-full gap-2">
                <div className="overflow-hidden rounded-lg">
                    <img src={'/metaverse.jpeg'} alt={'blog post cover'}  className="object-cover h-40 w-fit"/>
                </div>
                <Link href={`/blog/${_params.slug}`}><div className="flex items-center gap-2 text-center appearance-none cursor-pointer"><p className='duration-300 text-d-sub1'>Create a feedback API with Notion</p></div></Link>
                <span className='text-d-base'>{dayjs(_params.date).format('LL')}</span>
                {/* <ul className='flex flex-wrap gap-3'>
                    {_params.tags.length > 0 && _params.tags.map((i: Tag) => (
                        <RuiPill key={i.id} color={variant[i.name]}>{i.name}</RuiPill>
                    ))}
                </ul> */}
            </div>
        </div>
    )
};

export const LatestBlogs = () => {
    return (
        <div className='py-12'>
            <h3 className='text-m-h3 md:text-d-h3'>latestBlogs.</h3>
            <div className="grid grid-cols-1 mt-3 sm:grid-cols-3">
                <LatestPost />
            </div>
        </div>
    )
};