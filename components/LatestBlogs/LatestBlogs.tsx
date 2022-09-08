import { ReekoPost } from "../../@types/schema";
import { HoriCard } from "../HoriCard/HoriCard";

interface Props {
    props: ReekoPost[]
}

export const LatestBlogs = ({ props }: Props) => {
    return (
        <div className="py-16">
            <div className="flex items-end gap-4">
                <span className='font-mono text-m-sub1 md:text-d-sub1 text-amethyst-400'>6.0</span>
                <h3 className="underline underline-offset-4 text-m-h3 md:text-d-h3 decoration-amethyst-400 whitespace-nowrap">Latest Blogs</h3>
                <span className='h-[1px] w-full my-auto max-w-xs bg-sylver-800 opacity-40'></span>
            </div>
            {
                props.length > 0 ?
                    <ol className='relative flex flex-col w-full gap-4 mt-12'>
                        {
                            props.map((item, idx) => (
                                <HoriCard key={idx} title={item.title} slug={item.slug} date={item.date} description={item.description} tags={item.tags} />
                            )).slice(0, 2)
                        }
                    </ol> : (<p className='text-center text-sylver-700 text-d-base'>No blog posts available :/ Check back another time, or follow me on <a href="https://twitter.com/intent/follow?screen_name=0xreeko" target={`_blank`}><span className='underline text-azure-500 underline-offset-2'>Twitter</span></a> for announcements.</p>)
            }
        </div>
    )
};