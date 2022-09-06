import { SchoolProps } from '../../@types/education';

interface Props {
    props: SchoolProps[]
}

const EduCard = (_props: SchoolProps) => (
    <div>
        <h3 className='font-bold text-d-sub2 text-amethyst-400'>{_props.name}</h3>
        <p className='italic'>{_props.startYear} - {_props.endYear}</p>
        <p>{_props.subject}</p>
        <p>Final Grade: {_props.finalGrade} </p>
    </div>
)

export const Education = ({ props }: Props) => {
    return (
        <section id='education' className='py-16'>
            <div className="flex items-end gap-4">
                <span className='font-mono text-m-sub1 md:text-d-sub1 text-amethyst-400'>4.0</span>
                <h3 className="underline underline-offset-4 text-m-h3 md:text-d-h3 decoration-amethyst-400">Education</h3>
                <span className='h-[1px] w-full my-auto max-w-xs bg-sylver-800 opacity-40'></span>
            </div>
            <div className='flex flex-wrap justify-between gap-8 mt-8'>
                {
                    props.map((item, idx) => (
                        <EduCard name={item.name} subject={item.subject} startMonth={item.startMonth} startYear={item.startYear} endMonth={item.endMonth} endYear={item.endYear} finalGrade={item.finalGrade} key={idx} />
                    ))
                }
            </div>
            <div className="mt-16">
                <div className="flex items-end gap-4">
                    <span className='font-mono text-m-sub2 md:text-d-sub2 text-amethyst-400'>4.1</span>
                    <h4 className="underline underline-offset-4 text-m-h4 md:text-d-h4 decoration-amethyst-400">Interests</h4>
                    <span className='h-[1px] w-full my-auto max-w-xs bg-sylver-800 opacity-40'></span>
                </div>
                <div className="mt-8">
                    <p>
                        My current interests are
                        {" "}<span className='px-1.5 py-1 rounded-lg bg-amethyst-400/20 text-amethyst-400 text-d-copy'>Machine Learning & AI</span>,
                        {" "}<span className='px-1.5 py-1 rounded-lg bg-azure-400/20 text-azure-400 text-d-copy'>Robotics</span>,
                        {" "}<span className='px-1.5 py-1 text-teal-400 rounded-lg text-d-copy bg-teal-400/20'>Internet of Things</span> and the
                        {" "}<span className='px-1.5 py-1 rounded-lg bg-ruby-400/20 text-ruby-400 text-d-copy'>Mixed Reality</span>{" "}
                        umbrella. As we transition into the ongoing digital industrial revolution, I believe they will become key
                        elements in our daily lives, advancing many established and emerging sectors that leverage this modern technology.
                        By building a strong Web3 foundation, I intend to dive deeper into these interests and build initiatives that leverage these technologies.
                    </p>
                </div>
            </div>
        </section>
    )
};