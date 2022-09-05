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
        </section>
    )
};