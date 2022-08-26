import { githubIcon, globeIcon } from '../Icons';
import styles from './FeaturedProjects.module.css'

interface Props {
    title: string,
    description: string,
    image: string
    isLive: boolean
}

const FeaturedCard = (props: Props) => (
    <div className="flex w-full gap-4 p-5 border rounded-lg h-fit group">
        <div className="overflow-hidden rounded-lg w-72 h-44">
            <img src={props.image} alt="cover" className='object-cover w-full h-full duration-700 group-hover:scale-105' />
        </div>
        <div className="">
            <div className="flex items-center gap-3">
                <h5 className='text-d-sub1'>{props.title}</h5>
                <div className="flex gap-2">
                    <span className='duration-300 hover:text-blue-400'>{githubIcon}</span>
                    {props.isLive === true ? <span className='duration-300 hover:text-amethyst-400'>{globeIcon}</span> : null}
                </div>
            </div>
            {/* <p className='mt-3'>{ }</p> */}
            <p className='mt-3'>{props.description}</p>
        </div>
    </div>
)

const data: Props[] = [
    {
        title: "RuskelUI",
        description: "An Reactjs UI component library for rapid Web3 development.",
        image: "/ruskelUI--cover.png",
        isLive: true
    },
    {
        title: 'Web3Source',
        description: 'A gateway for top Web3 jobs & talent. Pending a complete revamp of the platform and branding.',
        image: "/web3source--cover.png",
        isLive: true
    },
    {
        title: "Tweetify",
        description: "A social media platform built with React, GraphQL",
        image: "",
        isLive: false
    },

]

export const FeaturedProjects = () => {
    return (
        <div className="w-full py-12 mx-auto portfolio">
            <h3 className="underline underline-offset-4 text-m-h3 md:text-d-h3 decoration-amethyst-400">featuredBuilds.</h3>
            <div className="grid grid-cols-1 gap-12 mt-3 sm:grid-cols-2 md:grid-cols-3">
                {
                    data.map((item) => (
                        <FeaturedCard title={item.title} description={item.description} image={item.image} isLive={item.isLive} />
                    ))
                }
            </div>
        </div>
    )
};