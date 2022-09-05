import { ExpProps } from '../../@types/experience';

const _data: ExpProps[] = [
    { title: "Fullstack Web3 Developer", company: '0xreeko', startMonth: "Oct", startYear: 2020, endMonth: "cur", endYear: 2022 },
    { title: "Web3 Contractor", company: 'CWJ Capital', startMonth: "Mar", startYear: 2022, endMonth: "Jul", endYear: 2022 },
    { title: "SDR/BDR Hybrid", company: 'European Gateway', startMonth: "Jun", startYear: 2021, endMonth: "Dec", endYear: 2022 },
    { title: "Videography", company: 'RSB', startMonth: "May", startYear: 2018, endMonth: "May", endYear: 2019 },
    { title: "Video Editor", company: 'RSB', startMonth: "May", startYear: 2018, endMonth: "May", endYear: 2019 },
    { title: "Motion GFX", company: 'RSB', startMonth: "Mar", startYear: 2018, endMonth: "May", endYear: 2019 },
    { title: "UI/UX Designer", company: 'RSB', startMonth: "Mar", startYear: 2016, endMonth: "May", endYear: 2019 },
    { title: "Web Developer", company: 'RSB', startMonth: "Mar", startYear: 2016, endMonth: "cur", endYear: 2019 },
    { title: "GFX Designer", company: 'RSB', startMonth: "Mar", startYear: 2016, endMonth: "May", endYear: 2019 },
    { title: "DJ", company: 'DJ Reekz', startMonth: "Aug", startYear: 2014, endMonth: "May", endYear: 2019 },
]

const ExpCard = ({ title, company, startMonth, startYear, endMonth, endYear }: ExpProps) => (
    <div className="w-full p-4 duration-300 border rounded-lg cursor-default select-none backdrop-blur-sm bg-amethyst-400/5 hover:bg-amethyst-400/10 border-sylver-100 border-opacity-5 hover:border-opacity-10">
        <h4 className='text-m-sub1 md:text-d-sub1'><span className='text-sylver-100'>{title} </span><span className='text-amethyst-400'>@ {company}</span></h4>
        <p className='font-mono text-d-copy'>{startMonth} {startYear !== endYear ? startYear : '' } - {endMonth === 'cur' ? 'Current' : endMonth} {endMonth === 'cur' ? undefined : endYear}</p>
        <p className='text-d-base'>ABSC</p>
    </div>
)

export const Experience = () => {
    return (
        <section id="experience" className='py-16'>
            <div className="flex items-end gap-4">
                <span className='font-mono text-m-sub1 md:text-d-sub1 text-amethyst-400'>03.</span>
                <h3 className='underline underline-offset-4 text-m-h3 md:text-d-h3 decoration-amethyst-400'>Experience</h3>
                <span className='h-[1px] w-full my-auto max-w-xs bg-sylver-800 opacity-40'></span>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-8">
                {
                    _data.map(({ title, company, startMonth, startYear, endMonth, endYear }, idx) => (
                        <ExpCard key={idx} title={title} company={company} startMonth={startMonth} startYear={startYear} endMonth={endMonth} endYear={endYear} />
                    ))
                }
            </div>
        </section>
    )
};