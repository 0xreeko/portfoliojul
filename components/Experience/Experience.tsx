import { ExpProps } from '../../@types/experience';

interface Props {
    props: ExpProps[]
}

const ExpCard = ({ title, company, startMonth, startYear, endMonth, endYear }: ExpProps) => (
    <div className="w-full p-4 duration-300 border rounded-lg cursor-default select-none backdrop-blur-sm bg-amethyst-400/5 hover:bg-amethyst-400/10 border-sylver-100 border-opacity-5 hover:border-opacity-10">
        <h4 className='text-m-sub1 md:text-d-sub1'><span className='text-sylver-100'>{title} </span><span className='text-amethyst-400'>@ {company}</span></h4>
        <p className='font-mono text-d-copy'>{startMonth} {startYear !== endYear ? startYear : '' } - {endMonth === 'cur' ? 'Current' : endMonth} {endMonth === 'cur' ? undefined : endYear}</p>
        <p className='text-d-base'>ABSC</p>
    </div>
)

export const Experience = ({props}: Props) => {
    return (
        <section id="experience" className='py-16'>
            <div className="flex items-end gap-4">
                <span className='font-mono text-m-sub1 md:text-d-sub1 text-amethyst-400'>3.0</span>
                <h3 className='underline underline-offset-4 text-m-h3 md:text-d-h3 decoration-amethyst-400'>Experience</h3>
                <span className='h-[1px] w-full my-auto max-w-xs bg-sylver-800 opacity-40'></span>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-8">
                {
                    props.map(({ title, company, startMonth, startYear, endMonth, endYear }, idx) => (
                        <ExpCard key={idx} title={title} company={company} startMonth={startMonth} startYear={startYear} endMonth={endMonth} endYear={endYear} />
                    ))
                }
            </div>
        </section>
    )
};