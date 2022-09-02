import { ReekoPost } from "../../@types/schema";
import { HoriCard } from "../HoriCard/HoriCard";

interface Props {
    props: ReekoPost[]
}

export const LatestBlogs = ({ props }: Props) => {
    return (
        <div className="py-16">
            <h3 className='underline underline-offset-4 text-m-h3 md:text-d-h3 decoration-amethyst-400'>latestBlogs.</h3>
            <ol className='relative flex flex-col w-full gap-4 mt-12'>
                {
                    props.map((item, idx) => (
                        <HoriCard key={idx} title={item.title} slug={item.slug} date={item.date} description={item.description} tags={item.tags} />
                    )).slice(0, 2)
                }
            </ol>
        </div>
    )
};