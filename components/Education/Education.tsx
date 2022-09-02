import styles from './Education.module.css'
 
export const Education = () => {
    return (
        <section id='education' className='py-16'>
            <div className="flex items-end gap-4">
                <span className='font-mono text-m-sub1 md:text-d-sub1 text-amethyst-400'>03.</span>
                <h3 className="underline underline-offset-4 text-m-h3 md:text-d-h3 decoration-amethyst-400">Education</h3>
                <span className='h-[1px] w-full my-auto max-w-xs bg-sylver-800 opacity-40'></span>
            </div>
            <div className='flex flex-wrap justify-between gap-8 mt-8'>
            <div>
                <h3 className='font-bold text-d-sub2 text-amethyst-400'>The University Of Northampton</h3>
                <p className='italic'>2017 - 2020</p>
                <p>BSc Computing (Graphics & Visualisation)</p>
                <p>Final Grade: Second Class Upper (2:1) </p>
            </div>
            <div>
                <h3 className='font-bold text-d-sub2 text-amethyst-400'>Saint Francis Xavier College</h3>
                <p className='italic'>2015 - 2017</p>
                <p>BTEC Level 3 IT Extended Diploma</p>
                <p>Final Grade: DMM </p>
            </div>
            <div>
                <h3 className='font-bold text-d-sub2 text-amethyst-400'>St Mary&apos;s RC High School</h3>
                <p className='italic'>2010 - 2015</p>
                <p>GCSE</p>
                <p>Final Grade: 11 GCSEs (A* - C)</p>
            </div>
        </div>
        </section>
    )
};