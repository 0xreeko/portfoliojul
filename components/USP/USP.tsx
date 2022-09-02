import styles from './USP.module.css'

interface Props {
    title: string
}

const USPCard = ({ title }: Props) => (
    <div className="flex flex-col justify-between p-4 duration-300 border cursor-default select-none h-fit w-fit rounded-2xl backdrop-blur-sm bg-amethyst-400/5 hover:bg-amethyst-400/10 border-sylver-100 border-opacity-5 hover:border-opacity-10" >
        <h6 className='text-m-sub2 md:text-d-sub2'>{title}</h6>
    </div >
)

let _data: Props[] = [
    { title: 'UI Development' },
    { title: 'State Management' },
    { title: 'API & Server Development' },
    { title: 'Auth2 & Encryption' },
    { title: 'Web3/Blockchain Development' },
    { title: 'Testing' },
    { title: 'Databases' },
]

export const USP = () => {
    return (
        <div className="py-16">
            <div className="flex items-end gap-4">
                <span className='font-mono text-m-sub1 md:text-d-sub1 text-amethyst-400'>01.</span>
                <h3 className="underline underline-offset-4 text-m-h3 md:text-d-h3 decoration-amethyst-400">What I Can Do</h3>
                <span className='h-[1px] w-full my-auto max-w-xs bg-sylver-800 opacity-40'></span>
            </div>
            <div className="flex flex-wrap items-center justify-center max-w-4xl gap-4 mx-auto mt-4">
                {
                    _data.map((item, idx) => (
                        <USPCard title={item.title} key={idx} />
                    ))
                }
            </div>
        </div>
    )
};