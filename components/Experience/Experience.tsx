import styles from './Experience.module.css'

interface Props {
    title: string
    company: string
    startMonth: string
    startYear: string
    endMonth: string
    endYear: string
}

const _data: Props[] = [
    
]

const ExpCard = () => (
    <div className="p-4 duration-300 border rounded-lg backdrop-blur-sm bg-amethyst-400/5 hover:bg-amethyst-400/10 border-sylver-100 border-opacity-5 hover:border-opacity-10">
        <h4 className='text-m-sub1 md:text-d-sub1'><span className='text-sylver-100'>role </span><span className='text-amethyst-400'>@ company</span></h4>
        <p className='font-mono text-d-copy'>July - December 2021</p>
        <p className='text-d-base'>ABSC</p>
    </div>
)
 
export const Experience = () => {
    return (
        <section id="experience" className='py-12'>
            <div className="flex items-end gap-4">
                <span className='font-mono text-m-sub1 md:text-d-sub1 text-amethyst-400'>03.</span>
                <h3 className='underline underline-offset-4 text-m-h3 md:text-d-h3 decoration-amethyst-400'>Experience</h3>
                <span className='h-[1px] w-full my-auto max-w-xs bg-sylver-800 opacity-40'></span>
            </div>
            <div className="flex flex-col w-full gap-6 mt-8">
                <ExpCard/>
                <ExpCard/>
                <ExpCard/>
                <ExpCard/>
                <ExpCard/>
                <ExpCard/>
            </div>
        </section>
    )
};