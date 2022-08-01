import styles from './Alert.module.css'
 
export const Alert = () => {
    return (
        <div className='flex justify-center px-8 py-2 mx-auto font-medium text-center  bg-stratos-900/20 backdrop-blur-sm sm:px-16 md:px-24 text-sylver-100'>
            <p>Say hello to <span className="underline text-kunzite-400 underline-offset-2">RuskelUI</span>, a set of UI components for rapid Web3 development! Track progress via <a href="https://0xreeko.github.io/ruskelui" target={`_blank`} className='inline-flex items-center gap-1 text-pink-400 duration-300 hover:text-pink-400/70'><span className='italic'>Storybook</span><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a></p>
        </div>
    )
};