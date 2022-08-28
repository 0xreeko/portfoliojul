import { githubIcon, globeIcon } from '../Icons';
import styles from './FeaturedProjects.module.css'
import imgRuskelUI from '../../public/ruskelUI--cover.png'
import imgWeb3Source from '../../public/web3source--cover.png'
import Image, { StaticImageData } from 'next/image';

interface Props {
    title: string,
    description: string,
    image: StaticImageData | string
    isLive: boolean
    isDev: boolean
    devLink: string
    liveLink: string
}

const FeaturedCard = (props: Props) => (
    <div className="flex flex-col w-full h-full gap-4 p-5 duration-300 border rounded-lg group backdrop-blur-sm bg-amethyst-400/5 hover:bg-amethyst-400/10 border-sylver-100 border-opacity-5 hover:border-opacity-10">
        <div className="w-full overflow-hidden border rounded-lg h-44">
            <Image src={props.image !== "" ? `${props.image}` : '/punk4596.png'} alt="cover" layout='responsive' objectFit='cover' width={'100%'} height={'100%'} className='w-full h-full duration-700 group-hover:scale-105' />
        </div>
        <div className="">
            <div className="flex flex-wrap items-center justify-between">
                <h5 className='text-d-sub1'>{props.title}</h5>
                <div className="flex gap-2">
                    {props.isDev === true && props.devLink !== "" ? <a href={props.devLink} target={'_blank'} rel={'noreferrer'}><span className='duration-300 hover:text-blue-400'>{githubIcon}</span></a> : null}
                    {props.isLive === true && props.liveLink !== "" ? <a href={props.liveLink} target={'_blank'} rel={'noreferrer'}><span className='duration-300 hover:text-amethyst-400'>{globeIcon}</span></a> : null}
                </div>
            </div>
            {/* <p className='mt-3'>{ }</p> */}
            <p className='mt-3'>{props.description}</p>
        </div>
    </div>
)

const data: Props[] = [
    {
        title: "*********",
        description: "Coming Soon. Keep an eye out on my social media accounts 👀",
        image: "",
        isDev: false,
        isLive: false,
        devLink: "",
        liveLink: ""
    },
    {
        title: "RuskelUI",
        description: "An Reactjs UI component library for rapid Web3 development.",
        image: "/ruskelUI--cover.png",
        isDev: true,
        isLive: true,
        devLink: "https://github.com/0xreeko/ruskelui",
        liveLink: "https://0xreeko.github.io/ruskelui/"
    },
    {
        title: 'Web3Source',
        description: 'A gateway for top Web3 jobs & talent. Currently revamping.',
        image: '/web3source--cover.png',
        isDev: true,
        isLive: true,
        devLink: "",
        liveLink: "https://web3source.co"
    },
    {
        title: "Tweetify",
        description: "A social media platform built with React, GraphQL.",
        image: "",
        isDev: true,
        isLive: false,
        devLink: "",
        liveLink: ""
    },
    {
        title: "NexusPesquisa",
        description: "A Web3 browser using the Google Search API.",
        image: "",
        isDev: true,
        isLive: true,
        devLink: "",
        liveLink: ""
    },

]

export const FeaturedProjects = () => {
    return (
        <div className="w-full py-12 mx-auto portfolio">
            <h3 className="underline underline-offset-4 text-m-h3 md:text-d-h3 decoration-amethyst-400">featuredBuilds.</h3>
            <div className="grid items-center grid-cols-1 gap-12 mt-3 sm:grid-cols-2 xl:grid-cols-3">
                {
                    data.map((item, idx) => (
                        <FeaturedCard key={idx} title={item.title} description={item.description} image={item.image} isLive={item.isLive} isDev={item.isDev} liveLink={item.liveLink} devLink={item.devLink} />
                    ))
                }
            </div>
        </div>
    )
};