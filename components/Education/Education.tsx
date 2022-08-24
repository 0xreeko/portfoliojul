import styles from './Education.module.css'
 
export const Education = () => {
    return (
        <div className='py-12'>
            <h3 className="underline underline-offset-4 text-m-h3 md:text-d-h3 decoration-amethyst-400">education.</h3>
            <div className='flex flex-wrap justify-between gap-8 mt-3'>
            <div>
                <h3 className='font-bold text-d-sub2 text-amethyst-400'>The University Of Northampton</h3>
                <p className='italic'>2017 - 2020</p>
                <p>BSc Computing (Graphics & Visualisation)</p>
                <p>Final Grade: Second Class Upper (2:1) </p>
            </div>
            <div>
                <h3 className='font-bold text-d-sub2 text-amethyst-400'>Saint Francis Xavier</h3>
                <p className='italic'>2015 - 2017</p>
                <p>BTEC Level 3 Extended Diploma</p>
                <p>Final Grade: DMM </p>
            </div>
            <div>
                <h3 className='font-bold text-d-sub2 text-amethyst-400'>St Mary's RC High School</h3>
                <p className='italic'>2010 - 2015</p>
                <p>GCSE</p>
                <p>Final Grade: 11 GCSEs (A* - C)</p>
            </div>
        </div>
        </div>
    )
};