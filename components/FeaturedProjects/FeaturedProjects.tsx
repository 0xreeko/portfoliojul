import { githubIcon, globeIcon } from '../Icons';
import styles from './FeaturedProjects.module.css'
import Image from 'next/image';
import { FPProps } from '../../@types/fpType';

interface Props {
    props: FPProps[]
}

const FeaturedCard = (props: FPProps) => {
    return (
        <div className="flex flex-col w-full h-full gap-4 p-5 duration-300 border rounded-lg group backdrop-blur-sm bg-amethyst-400/5 hover:bg-amethyst-400/10 border-sylver-100 border-opacity-5 hover:border-opacity-10">
            <div className="w-full overflow-hidden border rounded-lg h-44">
                <Image src={props.image !== "" ? '/ruskelUI.png' : '/punk4596.png'} alt="cover" layout='responsive' objectFit='cover' width={'100%'} height={'100%'} className='w-full h-full duration-700 group-hover:scale-105' />
            </div>
            <div className="">
                <div className="flex flex-wrap items-center justify-between">
                    <h5 className='text-d-sub1'>{props.title}</h5>
                    <div className="flex gap-2">
                        {props.isDev === true && props.devLink !== "" ? <a href={props.devLink} target={'_blank'} rel={'noreferrer'}><span className='duration-300 hover:text-blue-400'>{githubIcon}</span></a> : null}
                        {props.isLive === true && props.liveLink !== "" ? <a href={props.liveLink} target={'_blank'} rel={'noreferrer'}><span className='duration-300 hover:text-amethyst-400'>{globeIcon}</span></a> : null}
                    </div>
                </div>
                <p className='mt-3'>{props.description}</p>
            </div>
        </div>
    )
}

export const FeaturedProjects = ({props}: Props) => {
    return (
        <section id="portfolio" className="w-full py-16 mx-auto ">
            <div className="flex items-end gap-4">
                <span className='font-mono text-m-sub1 md:text-d-sub1 text-amethyst-400'>5.0</span>
                <h3 className="underline underline-offset-4 text-m-h3 md:text-d-h3 decoration-amethyst-400 whitespace-nowrap">Featured Projects</h3>
                <span className='h-[1px] w-full my-auto max-w-xs bg-sylver-800 opacity-40'></span>
            </div>
            <div className="grid items-center grid-cols-1 gap-12 mt-8 sm:grid-cols-2 xl:grid-cols-3">
                {
                    props.map((item, idx) => (
                        <FeaturedCard key={idx} title={item.title} description={item.description} image={item.image} isLive={item.isLive} isDev={item.isDev} liveLink={item.liveLink} devLink={item.devLink} />
                    ))
                }
            </div>
        </section>
    )
};