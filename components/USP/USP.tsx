import styles from './USP.module.css'

export const USP = () => {
    return (
        <div className="">
            <h3 className="underline underline-offset-4 text-m-h3 md:text-d-h3 decoration-amethyst-400">services.</h3>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                <div className="flex flex-col justify-between h-40 p-4 w-80 rounded-2xl bg-russian-400/20">
                    <h3>Web Development</h3>
                    <p className='mt-2'>I use modern web tooling, like NextJs and Tailwind, to develop visually compelling fullstack applications.</p>
                </div>
                <div className="h-40 p-4 w-80 bg-russian-400/20 rounded-2xl">asdas</div>
                <div className="h-40 p-4 w-80 bg-russian-400/20 rounded-2xl">asdas</div>
            </div>
        </div>
    )
};