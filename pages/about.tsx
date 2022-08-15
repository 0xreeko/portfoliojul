import type { NextPage } from 'next'
import { BaseLayout } from '../Layouts/Base';
import styles from '../styles/About.module.css'

const About: NextPage = () => {
    return (
        <BaseLayout>
            <div className="h-full px-8 text-sylver-100 sm:px-16 md:px-32 lg:px-64">
                <div id={`aboutRico`} className="flex flex-col w-full max-w-2xl py-8 ml-auto gap-y-6">
                    <p>Que lo que mi gente! I&apos;m known as Rico - a Fullstack Web3 Developer with 4+ years of experience
                        solving problems and materialising visions into tangible
                        products. I made the switch to Web3 in Jan 2021, and I have
                        worked as a freelance creative for the past 8 years and counting,
                        covering areas like Djing, GFX, UI/UX & Motion Design, Video Editing,
                        Web development and more. I take pride in delivering quality digital
                        products with true impact.</p>
                    <p>I&apos;ve embarked on my indie hacker journey to leverage my skills and develop products that solve your problems - currently working on RuskelUI to bring forth many out of my 23 biz ideas
                        that tap into 1T USD in TAM combined. Check out the official RuskelUI repo <a href="https://github.com/0xreeko/ruskelui" target={`_blank`}><span className='underline text-amethyst-400 underline-offset-4'>here.</span></a></p>
                    <p>Apart from Web3, my current interests are: Machine Learning & AI,
                        Robotics, Internet of Things and the Mixed Reality umbrella. I&apos;ve already developed in ML & AI before, but my goal is to eventually get deep in my dev bag and learn these themes thoroughly.</p>
                </div>
                <div className="py-12">
                    <h2 className="text-m-h2 sm:text-d-h2"></h2>
                    <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-y-8 justify-items-center">
                        <div className={styles.mainSkillItem}>
                            {/* <SiNextdotjs className='duration-300 w-14 h-14 fill-russian-400' /> */}
                            <span><svg className='duration-300 w-14 h-14 fill-russian-400 hover:fill-russian-400/80' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48"><path d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"></path></svg></span>
                            <p>NextJS</p>
                        </div>
                        <div className={styles.mainSkillItem}>
                            {/* <SiTypescript className='w-14 h-14 duration-300 fill-[#007acc]' /> */}
                            <span><svg className='w-14 h-14 fill-[#007acc] duration-300 hover:fill-[#007acc]/80' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24"><path d="M3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5c0-1.105-0.895-2-2-2H5C3.895,3,3,3.895,3,5z M13.666,12.451h-2.118	V19H9.841v-6.549H7.767V11h5.899V12.451z M13.998,18.626v-1.751c0,0,0.956,0.721,2.104,0.721c1.148,0,1.103-0.75,1.103-0.853	c0-1.089-3.251-1.089-3.251-3.501c0-3.281,4.737-1.986,4.737-1.986l-0.059,1.559c0,0-0.794-0.53-1.692-0.53	c-0.897,0-1.221,0.427-1.221,0.883c0,1.177,3.281,1.059,3.281,3.428C19,20.244,13.998,18.626,13.998,18.626z"></path></svg></span>
                            <p>Typescript</p>
                        </div>
                        <div className={styles.mainSkillItem}>
                            {/* <SiTailwindcss className='w-14 h-14 duration-300 fill-[#00b4b6]' /> */}
                            <span><svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 duration-300 text-[#00b4b6] hover:text-[#00b4b6]/80" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z"></path>
                            </svg></span>
                            <p>Tailwind</p>
                        </div>
                        <div className={styles.mainSkillItem}>
                            {/* <SiNodedotjs className='w-14 h-14 duration-300 fill-[#215732]' /> */}
                            <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="24" height="24"
                                viewBox="0 0 48 48"
                                className='duration-300 w-14 h-14 hover:opacity-80'><path fill="#21a366" d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"></path><path fill="#21a366" d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"></path></svg></span>
                            <p>Node & Express</p>
                        </div>

                        <div className={styles.mainSkillItem}>
                            {/* <SiGraphql className='w-14 h-14 duration-300 fill-[#E10098]' /> */}
                            <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="48" height="48"
                                viewBox="0 0 48 48"
                                className='w-14 h-14 duration-300 fill-[#E10098] hover:fill-[#E10098]/80'
                            ><path d="M24.5,45.161L7,34.82V14.18L24.5,3.839L42,14.18V34.82L24.5,45.161z M9,33.68l15.5,9.159L40,33.68 V15.32L24.5,6.161L9,15.32V33.68z"></path><circle cx="24.5" cy="5.5" r="3.5" fill="#ff4081"></circle><circle cx="24.5" cy="43.5" r="3.5" fill="#ff4081"></circle><circle cx="8.5" cy="33.5" r="3.5" fill="#ff4081"></circle><circle cx="40.5" cy="33.5" r="3.5" fill="#ff4081"></circle><circle cx="8.5" cy="15.5" r="3.5" fill="#ff4081"></circle><circle cx="40.5" cy="15.5" r="3.5" fill="#ff4081"></circle><path fill="#ff4081" d="M42.72,35H6.28L24.5,2.978L42.72,35z M9.72,33H39.28L24.5,7.022L9.72,33z"></path></svg></span>
                            <p>GraphQL</p>
                        </div>
                        <div className={styles.mainSkillItem}>
                            {/* <SiJsonwebtokens className='duration-300 w-14 h-14 fill-scarlet-500' /> */}
                            <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="48" height="48"
                                viewBox="0 0 48 48"
                                className='duration-300 w-14 h-14 hover:opacity-80'><polygon fill="#546e7a" points="21.906,31.772 24.507,29.048 27.107,31.772 27.107,43 21.906,43"></polygon><polygon fill="#f50057" points="17.737,29.058 21.442,28.383 21.945,32.115 15.345,41.199 11.138,38.141"></polygon><polygon fill="#d500f9" points="15.962,24.409 19.355,26.041 17.569,29.356 6.89,32.825 5.283,27.879"></polygon><polygon fill="#29b6f6" points="17.256,19.607 19.042,22.922 15.649,24.554 4.97,21.084 6.577,16.137"></polygon><polygon fill="#00e5ff" points="21.126,16.482 20.623,20.214 16.918,19.539 10.318,10.455 14.526,7.398"></polygon><polygon fill="#546e7a" points="26.094,16.228 23.493,18.952 20.893,16.228 20.893,5 26.094,5"></polygon><polygon fill="#f50057" points="30.262,18.943 26.558,19.618 26.055,15.886 32.654,6.802 36.862,9.859"></polygon><polygon fill="#d500f9" points="32.039,23.59 28.645,21.958 30.431,18.643 41.11,15.174 42.717,20.12"></polygon><polygon fill="#29b6f6" points="30.744,28.393 28.958,25.078 32.351,23.447 43.03,26.916 41.423,31.863"></polygon><polygon fill="#00e5ff" points="26.874,31.518 27.378,27.786 31.082,28.461 37.682,37.545 33.474,40.602"></polygon></svg></span>
                            <p>JWT</p>
                        </div>
                        <div className={`${styles.mainSkillItem} relative`}>
                            {/* <SiJest className='w-14 h-14 duration-300 fill-[#C63D14]' /> */}
                            <span><svg xmlns="http://www.w3.org/2000/svg" className='sticky duration-300 -left-6 w-14 h-14 hover:opacity-80' viewBox="-2.138 -2.29 314.9 359.304" width="2157"><path d="m48.173 155.568c-10.389 4.887-37.886 26.886-43.182 33.404-5.5 6.518-7.129-3.666-1.426-20.572 4.48-13.647 15.888-32.183 35.034-48.07 11.202-9.166 35.849-22.405 50.921-30.146 3.056-1.63 42.571-18.332 77.809-26.683 3.056-.815-3.666 5.092-4.685 8.351-5.296 15.48-111.01 81.882-111.01 81.882zm148.894 186.78c1.833 10.999.204 11.814-11.202 13.24-11.407 1.426-19.758-2.852-22.813-5.703-3.056-2.853-3.666-9.166-.611-14.869 1.834-3.667 3.667-4.889 4.686-9.37 1.018-4.277 1.833-5.296 2.647-6.925.814-1.427 1.019-2.853 1.222-12.833.204-9.98 0-28.72 1.019-36.663 1.019-8.147 36.257 3.666 36.257 3.666s-8.352 20.776-10.592 25.868c-2.241 5.093-2.037 14.869-2.037 16.906s-.814 6.11-1.426 6.314c-.611.203 2.037 5.499.814 8.555-.815 2.852 1.833 10.185 2.036 11.814zm13.444-311.437c-1.223-7.74 0-23.018 1.629-25.461 5.093-6.926 31.979-7.74 37.683.407 2.444 3.666 2.24 12.221 1.833 17.721-.407 5.499-1.833 17.313-2.037 21.184-.203 2.852-29.738 7.332-36.256-.408-1.834-2.036-2.852-13.443-2.852-13.443zm59.884 291.679c12.425 8.963 21.998 10.592 28.312 13.851 6.314 3.26 4.685 9.574-5.907 11.407-8.555 1.629-21.998-1.63-30.96-1.63s-28.924 1.019-34.22-2.647c-6.11-4.277-3.463-12.222-3.463-12.222 1.63-4.48 5.703-14.462 4.481-22.609s-2.852-12.628-5.907-20.165c-3.055-7.536-5.295-26.071-2.443-27.09s2.036 0 5.703.814c3.666.814 7.74 2.037 15.684 2.037s16.702-1.223 19.758-1.833c3.055-.611 5.499-1.223 4.48 5.092-1.018 6.314-4.073 18.128-4.277 27.294-.203 9.166-.203 19.758.408 21.591.61 1.833 5.092 3.87 8.351 6.11z" fill="#010101" /><path d="m226.806 51.28c-22.405 19.351-65.791 24.646-130.155 49.496-16.499 6.314-60.495 25.257-71.087 45.015 35.645-20.572 48.885 7.74 51.736 36.867 2.647 27.294 16.295 41.553 51.329 40.737 36.053-.814 47.052 20.165 57.032 44.812 19.35-94.308 50.311-112.639 70.271-128.73 42.368-34.424-9.776-95.123-29.126-88.197z" fill="#8ac640" /><path d="m226.806 51.28c-53.773 18.739-106.936 23.424-169.467 61.921-14.869 9.166-46.237 29.941-52.348 69.661 22.812-25.258 75.567-57.032 140.136-77.197 32.59-10.185 56.422-16.906 85.345-28.109-2.036-13.037-2.036-18.129-3.666-26.276z" fill="#8ac640" /><path d="m295.448 162.9s-3.87 13.24-11.61 17.518c0 0-5.703 2.037-17.109-4.277-3.259-1.833-5.703-8.147-5.5-10.185.204-4.889 3.259-7.129 3.259-7.129s3.26-5.5 7.129-5.296c3.871.203 10.389.814 12.426-1.019 1.832-2.037 11.813 3.666 11.405 10.388zm-83.104-128.119s-.814 10.389-2.24 16.906c-.204 1.223-6.314 1.833-10.796 3.667 8.555 24.442 60.088 24.238 66.81 12.221-3.259-2.24-9.777-5.703-12.832-6.925-3.056-1.223-2.852-1.019-3.056-6.722-.203-5.704-.611-16.295-1.019-19.147-.407-2.852-31.979-2.852-36.867 0z" fill="#010101" /><path d="m214.381 34.781s0 5.907-.611 11.61c-.203 2.648-.407 4.277-.814 6.314-.204 1.223 6.925 6.11 8.962 16.906 9.777 21.794 32.387 10.999 41.756.611-3.259-2.241-8.555-5.296-14.665-7.74-3.056-1.223-1.63-3.87-1.833-9.573-.204-5.703-1.019-14.055-1.426-17.11-.409-3.055-26.48-3.87-31.369-1.018z" fill="#f0efef" /><g fill="#010101"><path d="m212.344 34.781s-.204 3.667-.814 7.944c2.647 2.647 6.11 6.314 8.759 8.555 1.833 1.63 6.313 1.426 10.388 1.426 3.666 0 6.925.407 8.351-.407 3.26-1.63 7.944-5.703 10.592-8.759-.203-3.666-.407-7.129-.61-8.759-.206-2.852-31.778-2.852-36.666 0z" /><path d="m230.88 50.261c-2.445 0-5.297-.203-7.537-.611-1.019-.203-2.037-.814-2.852-1.222-1.426-1.019-2.852-2.24-4.48-3.463-3.26-2.444-3.463-3.87-3.463-4.48 1.426-12.833-.408-23.628-.408-23.628s-1.426-5.5 6.314-6.926 12.425-1.629 12.425-1.629 4.889 0 12.425 1.629c7.74 1.426 6.314 6.926 6.314 6.926s-1.833 10.795-.407 23.628c0 .61-.203 2.036-3.463 4.48-2.852 2.037-5.092 4.277-7.332 4.685-2.241.408-5.093.611-7.536.611z" /><path d="m230.88 3.006c-13.443 0-16.092 3.666-19.962 7.74-.814 1.018-.204 7.129 1.223 20.165h1.833s-1.223-3.667-1.019-7.944 1.019-4.073.407-5.092c-.814-1.223-2.444-3.26 1.223-5.296 3.666-2.037 9.369 1.629 16.295 1.833 6.925-.204 12.832-3.87 16.498-1.833 3.666 2.036 2.037 4.073 1.223 5.296-.815 1.222.203.814.407 5.092.203 4.277-1.019 7.944-1.019 7.944h1.833c1.222-13.036 2.037-18.739 1.426-19.758-3.463-4.481-6.925-7.944-20.368-8.147zm64.568 160.505s-3.87 12.425-11.406 16.702c-1.63-.814-1.426-2.036-2.852-3.87-.408-.61-1.834-1.019-2.444-1.629-.611-.611-.407-1.63-1.426-2.444-.815-.815-1.426-.204-2.241-.815-.814-.814-1.019-1.833-1.629-2.443-.408-.408-2.037-.611-2.444-1.019-1.019-1.019-9.98-2.852-9.573-4.889.814-3.056 2.444-5.296 2.444-5.296s3.87-5.703 7.739-5.5c3.87.204 7.537 1.019 9.574-.814 2.241-2.038 14.87 5.499 14.258 12.017z" /><path d="m268.969 73.482s12.832-3.056 21.591 5.296c8.759 8.555 8.147 19.146 5.5 25.664 2.24 2.648 6.314 9.98 3.259 18.739 13.443 11.406 7.536 28.924-4.481 40.534 0 0-2.852-10.592-14.258-11.203.407-4.073-10.592-7.333-5.5-17.925-7.74-1.833-7.536-7.129-8.758-13.646-1.019-6.519 2.647-47.459 2.647-47.459z" /></g><path d="m264.284 79.185s14.869-7.536 23.628 1.019c8.758 8.555 6.313 17.924 3.666 24.442 2.24 2.647 7.536 10.185 4.277 19.146-.611 2.037-5.092 2.037-8.352 7.333 8.147-4.686 13.24-3.463 15.073 2.443 2.852 9.166-3.463 20.165-8.962 26.276 0-.204-.204-.408-.204-.611-.814 3.056-1.833 8.962-7.943 15.48-3.056 3.259-5.5 2.852-8.963 2.037-4.073-1.019-5.499-2.853-11.202-5.907-3.259-1.833-1.426-4.074-1.426-5.907 0-.407.407-1.019 1.019-1.833.407-1.019 1.629-2.647 3.462-4.481 0 0 2.648-3.666 6.519-3.463 3.87.204 7.943-.61 8.962-1.629 0-7.129-8.147-7.333-5.296-19.554.204-.611 1.223-1.63 4.481-2.037-4.889-1.019-7.129-1.223-10.592-4.481-2.444-2.24-4.277-5.092-4.889-8.758-1.221-6.314-3.258-39.515-3.258-39.515z" fill="#f0efef" /><path d="m221.306 66.353c-1.222-1.63-7.536-9.777-19.554-13.036-3.463-1.019-5.703 1.833-9.165 3.87-1.019-.611-5.5-2.648-7.944-1.223s-4.073 2.852-6.518 3.87c-1.223-.611-4.481-.611-7.129.407-2.648.815-6.722 2.648-10.592 7.944-2.444 8.759 43.181 2.24 43.181 2.24z" fill="#010101" /><path d="m221.714 66.353c-6.519-2.241-5.5-9.777-19.962-10.999-2.852-.204-4.685 2.036-6.722 3.462 1.019 1.019 2.037 2.648 2.648 4.277-1.833-2.036-5.092-4.685-8.352-5.296-3.055-.61-5.092 1.63-8.351 3.26.61.61 1.222 1.629 2.036 2.852-2.852-1.833-4.888-2.444-8.758-1.019-2.648.814-7.74 3.055-11.61 8.555-2.444 8.759 41.145-1.019 41.145-1.019z" fill="#8ac640" /><path d="m260.007 69.612s0-2.241-.204-4.277c0-.407-1.629-1.426-1.629-1.833l-.407-.408s3.259-1.833 5.703-.814c2.647.814 4.073 4.277 4.073 4.277 4.685-1.629 5.092.204 7.333 2.648 4.889-1.019 5.499.814 8.555 5.296 0 0-3.666-.611-10.795.61-6.926 1.018-12.629-5.703-12.629-5.499z" fill="#010101" /><path d="m259.192 68.593s1.222-1.019.814-1.223c2.24-1.222 5.296-2.647 6.722 1.223 4.685-1.63 5.296.611 7.536 3.056 5.703-2.648 6.11.61 6.518 2.036-1.833 0-4.48.204-8.147.611-6.925 1.019-13.647-5.907-13.443-5.703z" fill="#8ac640" /><path d="m189.939 63.501s11.61 4.073 21.387 3.462c9.777-.814 26.479-1.629 35.441 3.667 0 0 9.166-3.26 17.721-1.019 8.556 2.24 24.239 16.906 19.555 32.386-.408 1.019-3.056 2.648-6.111 3.667 0 0 1.63 6.925-1.222 12.628-2.852 5.5-9.166 16.092-9.37 30.757-.203 2.444-.61 7.536-1.018 9.98-15.888-.61-40.33-6.518-64.365-6.11.203-2.647.407-4.277.611-6.925h.61c-1.222-6.722-1.629-10.185-2.852-15.277-7.74-4.888-15.888-10.591-22.812-21.387-6.722-10.796 12.425-45.829 12.425-45.829zm78.623 109.991s12.629 45.219-2.24 64.162c0 0 2.24 8.758-2.852 18.128-.815 4.073-1.834 7.74-2.444 11.813-2.648 16.906-7.13 24.035-8.352 51.125l-12.222-.203s-1.426-19.554-5.703-29.942c-2.443-5.906-12.018-13.851-11.609-21.794.407-6.111 1.629-11.203 12.018-19.351.814-11.813-11-23.017-9.166-67.013z" fill="#010101" /><path d="m264.896 171.658c3.259 20.776 10.795 51.533-2.852 66.605a30.712 30.712 0 0 1 .203 11.61c-.407 2.444-1.222 5.092-2.24 7.943-2.037 4.889-2.852 12.018-3.463 16.295-2.648 16.906-2.648 17.722-3.87 44.812l-12.222-.204s-1.426-19.554-5.703-29.941c-2.443-5.907-7.536-10.999-7.943-18.943-.407-6.11 3.87-18.331 14.055-17.924-.611-24.646-12.018-19.758-15.073-71.087zm-74.957-108.157s4.481 1.426 9.369 1.833c4.889.407 10.185 0 14.869-.204 9.777-.814 23.628-1.833 32.794 3.463 0 0 5.092-1.63 10.592-1.223 2.444.204 4.889 2.241 7.74 3.056 8.962 2.24 17.517 17.109 13.646 30.553-.407 1.019-3.259 0-6.518 1.019.61 2.852 1.019 9.37-2.241 16.295-3.462 6.926-7.943 15.888-7.129 32.998-21.387-1.019-30.96-2.444-52.144-3.463-1.833-7.537-3.056-15.073-3.259-18.943 2.852-1.426 4.48-2.647 6.722-5.092-6.11 1.019-8.555.611-12.222-1.426-3.666-2.037-10.184-8.555-13.443-12.832-.407-.408-2.647 6.313-7.739 6.518-1.834-2.648 5.906-10.185 4.48-13.036-5.091-10.389 4.483-39.516 4.483-39.516z" fill="#f0efef" /><path d="m266.524 154.752s.407 7.333.407 9.166c0 2.037 1.63 8.147 1.833 10.999-2.24 3.87-12.017 12.629-29.738 15.888-17.517 3.666-40.737-23.831-40.737-23.831.611-2.648 2.648-10.389 4.074-14.462.204-.407.611-1.426.611-1.833 1.834-2.648 63.55 4.073 63.55 4.073z" fill="#010101" /><path d="m262.044 155.364c0 5.092.814 8.759 1.426 12.018 1.018 5.907 2.647 9.777 2.647 13.647 0 11.813-15.48 9.776-28.517 10.184-17.517 3.667-32.386-23.831-32.386-23.831 1.222-4.685 2.037-9.98 3.87-14.462.203-2.444.611-5.499.814-6.925 24.85 0 42.367 1.426 52.552 2.443.408 2.241.001 6.111-.406 6.926z" fill="#f0efef" /><path d="m242.489 181.639s-10.795-24.035-43.182-16.905c-7.739 21.794-18.128 46.848-11.406 73.938-6.722 9.166-14.462 14.259-14.462 31.164 0 16.906.815 19.758.815 19.758l23.831 1.223s7.74-9.98 10.795-20.776c.815-3.056 1.63-8.555 1.019-14.869.814-1.222 4.277-4.073 4.685-9.573 0 0 11.61-6.11 18.332-20.979 6.315-13.446 4.685-25.056 9.573-42.981z" fill="#010101" /><path d="m242.489 181.639c-.61-2.24-8.758-24.238-38.904-17.721-17.72 47.256-11.202 66.81-8.555 75.364-12.018 15.276-17.517 18.535-15.072 49.496h15.888c7.332-11.61 8.962-15.888 9.369-31.164 0-.611-2.24 1.222-3.87 3.259 1.223-6.314 4.685-7.536 7.333-11.406 1.222-1.63 2.24-4.074 2.24-7.333 14.258-9.573 19.554-21.591 22.609-34.016 2.445-8.554 5.296-22.609 8.962-26.479z" fill="#f0efef" /><g fill="#010101"><path d="m192.179 148.846s5.5.203 10.389 1.833c4.685 1.629 4.685 2.647 6.518 4.685s6.314 5.092 5.5 8.147c-.408 1.63-1.426 2.037-2.852 3.463-.611.611-5.093 5.499-6.111 6.11-.611.407-1.426 1.019-2.037 1.426l-3.055 2.037c-2.037 1.019-3.463 1.63-5.703 1.426 0 0-5.092-.204-8.352-3.666 0 0-.407-1.63.408-2.444 0 0-4.278-3.667-5.5-6.111-1.223-2.443-1.223-5.906-.407-7.739.407-1.835 8.35-6.927 11.202-9.167zm5.093 198.187-.611 5.093s-1.833 2.24-15.48 2.037c-13.851-.204-17.517-4.481-18.739-6.722l-.814-5.296s2.648-3.87 3.259-3.87c4.481.407 19.758 6.518 30.35 8.147 1.016 0 1.219.407 2.035.611zm29.534-10.388c0 2.24-.204 2.24-.204 4.481 2.444 1.833 8.556 2.852 20.165 2.647 16.906-.407 32.59 5.093 51.736 1.833l.204-3.666-1.833-.203-67.828-5.5z" /><path d="m241.675 343.774h5.092c11-.407 21.388 2.037 32.59 2.648 5.907-.204 13.24-1.63 12.629-5.907l-57.847-4.889c-3.463 3.87-.816 7.129 7.536 8.148zm-66.402-85.752c1.833 1.222 14.258 8.555 34.423 7.536-.408 3.87-.204 11.407-9.166 24.646-4.481 6.518-8.352 17.925-9.166 32.387.204 3.259 2.037 6.11-.407 10.388.814 2.647 4.073 7.943 5.703 11.202 1.629 3.26 2.444 6.926-8.352 7.13-10.999.203-28.72-1.019-26.275-9.573 1.223-4.481 4.685-9.166 5.093-11 .407-1.833.407-7.332 3.869-10.999 3.056-10.184 2.037-19.961 1.427-29.127-1.019-9.574-1.223-24.85 2.851-32.59zm18.943-166.005c14.462-19.351 2.24-34.83-20.979-30.146-9.37 1.833-18.739 8.352-19.351 20.165-3.055.407-9.98.814-13.443 13.443-2.647 9.777-4.073 11.61-8.759 16.498-3.055 3.463.204 10.592 2.444 15.685 7.537 17.517 30.757 19.146 46.441 32.386 5.296-1.426 10.795-7.332 12.425-11.202-13.24-15.685-10.389-21.795-15.685-29.942 5.704-2.038 18.74-9.981 16.907-26.887z" /></g><path d="m191.364 90.795c.814-1.223 2.24-3.87 2.852-4.889.204-.204 2.444 3.666 2.648 3.463 5.499-8.963 6.925-21.999.61-23.221-1.426-.204-4.073-.814-6.314-1.63-4.073-1.426-7.739-1.426-14.258-.203-8.962 1.629-17.924 8.147-17.924 17.517 0 .611 6.313 2.444 8.147 9.981-3.056-4.278-8.352-8.963-14.666-4.889-6.722 4.277-3.259 14.054-12.221 24.238-3.056 3.463-2.648 7.537.61 15.684 5.296 12.833 30.35 19.758 43.997 31.979 3.259-1.426 5.499-4.685 7.129-7.129-9.166-9.573-12.833-18.536-15.48-25.054-3.259-7.536-6.926-11.813-14.055-17.518 3.667 1.426 6.519 2.852 8.147 4.074 1.833 1.222 4.481 1.426 6.926.611 8.76-3.053 13.445-15.275 13.852-23.014z" fill="#f0efef" /><path d="m279.968 94.054c-.611 7.74-6.314 3.87-9.369 2.444-6.111-2.648-12.222-4.481-19.351-4.481s-16.295.611-24.238 2.648c-10.999 3.055-14.259 2.852-19.147.407-4.888-2.648-13.442-9.166-13.442-9.166s-.204 2.037 1.833 4.685c2.647 3.259 8.555 7.333 16.498 9.98 3.87 1.223 6.926.407 10.389-.407 18.128-4.481 37.274-5.296 53.365 4.481.815.407 3.667-.815 4.889-2.648 1.628-2.647-1.427-7.943-1.427-7.943z" fill="#010101" /><path d="m187.291 171.658c1.629 1.019 3.666 1.63 5.906 3.463 0 0-1.833 0-2.647-.814-1.019-.611-3.056-2.444-3.259-2.649z" fill="#0a1825" /><path d="m246.156 10.135c-.611-1.833-5.093-5.093-15.48-5.093-11.203 0-14.462 3.463-14.665 5.296 0 .611-.815 7.13-1.019 9.777 0 0 0 3.259.203 8.147.204 3.259 1.019 5.092 1.426 9.37.407 4.48 1.63 7.332 3.87 10.999 1.019.61 1.833 1.222 2.852 1.426 4.074.814 11.203 1.018 15.073 0 2.24-.611 5.092-4.481 5.703-7.944.814-4.277 1.629-7.333 1.833-9.98.407-2.647.611-8.555.814-10.185.612-4.48-.407-11.406-.61-11.813z" fill="#f0efef" /><path d="m224.769 261.892s10.796 4.685 37.479.611c0 0-7.536 37.886-4.073 56.828 0 0 3.462 4.889 29.127 14.258 0 0 11.406 2.852 10.999 8.556 0 0 .407 1.222-13.443.814s-26.887-2.852-36.053-2.852-18.943.407-20.572-2.24c-1.833-2.444.407-8.759 3.055-12.426 2.853-3.869 2.037-6.722 1.834-13.646-.613-18.128-14.464-36.867-8.353-49.903z" fill="#010101" /><path d="m222.528 265.355c-1.426 2.037.203 9.776 2.24 17.313 2.037 7.536 6.519 12.018 7.537 24.442 1.018 12.221 1.222 13.851-2.241 20.979s-4.481 13.647 7.536 13.851 18.536-.204 30.757 1.63c12.222 1.833 16.499 2.444 23.221 1.426s8.147-3.26 5.296-5.296c-2.852-2.037-14.666-4.277-19.758-8.352-4.889-3.666-18.739-9.777-18.942-11.406-.611-5.5-.815-25.461.203-31.979 1.019-6.519 2.444-15.888 2.852-18.332s2.444-4.889-1.019-4.074c-3.462.814-16.498 2.648-26.275 2.037-9.777-.61-10.795-2.851-11.407-2.239z" fill="#8ac640" /><path d="m229.454 328.294c3.462 1.629 8.555 2.852 12.425 2.852 0 0-1.427 6.722.814 10.795 2.24 4.074-16.295 1.63-16.295 1.63l-.814-14.462zm53.977 17.517c3.259-1.019 5.5-4.685 2.852-8.147-2.852-3.463-5.296-4.074-1.63-4.277 3.667-.204 17.11 7.943 17.11 7.943l-6.926 6.314zm-61.514-72.513c4.685 1.63 11.814 2.037 17.925 1.833 6.11-.203 15.276-1.019 21.184-3.055 5.906-2.037 3.462 2.24 3.462 2.24l-3.259 3.056s-7.74 3.055-20.368 2.852c-14.869-.204-19.351-1.833-19.351-1.833zm.407 10.185c4.686 1.63 11.814 2.037 17.925 1.833 6.11-.203 14.258-.203 20.165-2.444 2.444-.814 1.019 2.648 1.019 2.648l-1.019 1.833s-7.944 2.852-20.369 2.647c-14.869-.203-17.517-1.426-17.517-1.426z" fill="#010101" opacity=".3" /><path d="m224.769 261.892s17.721 6.314 37.683 2.037c0 0-7.74 36.46-4.277 55.199 0 0 3.462 4.888 29.127 14.258 0 0 11.406 2.852 10.999 8.555 0 0 .407 1.223-13.443.814-13.851-.407-26.887-2.852-36.053-2.852s-18.943.408-20.572-2.24c-1.833-2.444.407-8.759 3.055-12.425 2.853-3.87 2.037-6.722 1.834-13.647-.613-17.924-14.464-36.663-8.353-49.699z" fill="none" /><path d="m224.769 261.892s17.721 6.11 37.683 1.833c0 0-7.74 36.664-4.277 55.403 0 0 3.462 4.888 29.127 14.258 0 0 11.406 2.852 10.999 8.555 0 0 .407 1.223-13.443.814-13.851-.407-27.091-4.277-36.053-2.852-9.573 1.63-18.943 1.019-20.572-2.24-1.426-2.647.407-8.759 3.055-12.425 2.853-3.87 2.037-6.722 1.834-13.647-.613-17.924-14.464-36.663-8.353-49.699z" fill="none" /><path d="m208.881 140.699c0 1.426 15.888 9.369 24.646 10.999 8.759 1.629 27.091 0 29.942-.611l-.408 2.852s-21.794 3.259-38.496-1.222c-16.703-4.481-14.869-5.5-14.869-5.5z" fill="#010101" /><path d="m174.865 314.443c2.444 1.223 11.203 3.463 16.906 2.241.814-.204 0-14.055 2.241-20.369 3.259-8.759 8.555-15.888 10.998-31.367-8.555-.815-18.331-3.056-23.424-4.686-6.517 19.962-4.276 37.071-6.721 54.181zm13.648 12.833c1.426.407 2.444 2.036 2.852 1.019.814-1.834-1.426-5.296-1.63-7.74v-.204c-1.833-1.629-14.258-1.833-13.443-1.019-1.426 2.648-3.666 2.241-4.48 7.537-.407 2.647 2.852.407 5.906.203-5.499 3.666-11.813 8.352-12.832 12.425-1.222 5.703.815 7.333 6.926 10.389 5.296 1.222 11.61 1.426 16.498 1.222 5.5-1.019 6.519-3.666 4.889-7.333-2.446-5.5-4.075-12.629-4.686-16.499z" fill="#f0efef" /><path d="m190.753 62.686c6.722 3.87 16.092 2.852 19.554 2.648.815 0 8.963-1.426 9.37-1.223.814.204.814.815.814.815s-3.055 1.629-9.98 2.036c-6.518.407-14.258 0-18.535-2.036-5.093-2.24-1.223-2.24-1.223-2.24zm69.254 3.87c1.222.814 9.166 3.87 12.629 7.536 3.055 3.26 1.426 3.056.814 2.241-.814-1.019-7.129-5.296-9.573-6.314s-5.5-2.852-5.5-3.259 1.63-.204 1.63-.204z" fill="#010101" /><path d="m189.734 151.086c5.907-.407 12.018 1.019 15.888 5.092 2.037 2.037 5.296 4.277 4.889 6.314 0 .611-1.223 2.241-2.24 3.463-.611.814-2.444 2.647-3.056 3.259-.814.611-3.666 2.852-4.277 3.259-.611.408-1.426 1.427-2.037 1.63-2.036 1.019-4.277.204-6.314-.814-2.036-1.019.408-1.223-1.833-2.852-5.499-3.87-8.555-6.519-6.314-14.055.203-1.426 2.443-3.056 5.294-5.296z" fill="#f0efef" /><path d="m137.795 104.442c-18.332 7.333-64.977 30.554-78.216 37.683 10.999 6.925 16.091 23.627 17.721 40.533.203 1.63.407 3.056.611 4.685.203 1.426.407 2.444.61 3.056 0 .204 0 .611.204.814 12.018-32.793 54.995-67.42 56.625-70.068.814-1.222-1.019-6.518 1.833-11.609 3.667-6.52 10.797-9.372.612-5.094zm43.589 153.784c9.369-18.739 9.573-36.664 9.369-57.644 0-8.759 6.314-21.184 3.056-17.721-12.222 13.646-42.978 39.312-65.18 40.737 31.164-1.018 43.385 14.666 52.755 34.628z" fill="#010101" opacity=".4" /><path d="m41.654 159.437c11.61-8.351 71.698-40.329 86.16-44.811 14.461-4.685 9.98-10.185 9.98-10.185s-58.662 25.257-93.696 47.052" fill="#010101" /><path d="m212.751 100.572c-4.685-1.833-8.351 3.667-7.129 8.963 1.223 5.296 12.222 11.202 11.61 30.553-.407 15.888-3.87 22.405-3.87 22.405l-7.74-9.776s-1.222-21.999-3.87-25.258c-2.647-3.259-10.999-9.166-14.258-12.221-3.259-3.056 3.666-7.129 3.259-12.833-.407-5.499 3.463-16.498 3.463-16.498zm28.313 86.77c-.407 15.276 3.056 37.886 4.481 48.682 1.426 10.795 3.259 11.61 0 16.499-3.259 4.685-7.536 12.425-7.536 12.425l-14.055-1.223s11.203-14.258 11.813-16.906c.611-2.647-5.703-22.812-5.703-22.812zm-27.09-142.58c2.852 6.313 6.314 9.165 11.813 10.999 3.259 1.222 16.091 2.852 21.184-2.852 2.24-2.648.814-9.777.814-9.777l-11.61 9.369-15.684-2.851-1.833-4.685z" fill="#010101" opacity=".4" /><path d="m215.195 58.816c5.296 3.463 18.536 6.722 22.202 7.333 3.666.814 9.573-3.87 12.425-5.092 3.056-1.426 8.352-2.241 14.462 3.259.611.611-1.426 3.259-1.426 3.259-.204-.204-1.426-.204-3.056-1.019-1.629-.814-3.055-1.426-5.499-1.222-10.185 1.222-11.814 4.685-20.776 2.647s-11.203-3.666-19.961-3.259" fill="#8ac640" stroke="#010101" stroke-linejoin="round" strokeMiterlimit="10" stroke-width="1.586" /><path d="m213.362 59.427c6.722 2.852 19.758 5.907 23.424 6.722s9.573-2.852 12.425-4.685c5.093-3.259 11.61-.611 14.666 2.852 2.036 2.24 2.852 3.666 2.852 4.277 0 .814-2.444 0-2.444 0-1.426-.611-3.056-.814-4.277-1.63-1.63-.814-3.26-2.036-5.703-1.833-10.185 1.223-12.222 4.685-20.98 2.648s-10.999-3.87-20.368-3.26" fill="#8ac640" /><path d="m181.791 249.67c-.407-.407.407-.814 0-.814-2.647 0-6.314-2.037-8.352-4.889-8.758-12.628-21.591-20.979-44.811-20.368-34.831.814-48.682-13.443-51.329-40.737-1.426-14.869-5.5-29.331-13.851-37.479l-4.889 3.056c9.369 8.147 12.425 21.387 14.462 39.515 3.259 27.294 25.257 39.923 50.922 40.33 26.683.407 36.256 5.907 46.236 19.351 3.259 4.277 6.926 5.703 9.777 6.314z" fill="#010101" /><path d="m276.302 118.7c.611 3.055 2.24 8.962 5.499 11.813 1.427 1.426 1.63 1.833.408 1.833-1.223 0-10.185-.407-10.185-.407l-2.444-4.277z" fill="#010101" opacity=".4" /></svg></span>
                            <p>GSAP</p>
                        </div>
                        <div className={styles.mainSkillItem}>
                            {/* <SiGithubactions className='duration-300 w-14 h-14 fill-azure-500' /> */}
                            <span><svg xmlns="http://www.w3.org/2000/svg" className='duration-300 w-14 h-14 fill-azure-500 hover:fill-azure-500/80' width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path d="M53.604 0c29.604 0 53.604 23.992 53.604 53.59c0 29.09-23.189 52.75-52.093 53.553c0 2.461.109 7.111 1.501 9.92c1.933 3.893 13.525 11.144 24.892 11.144h4.084c2.567-18.271 18.257-32.332 37.24-32.332c18.906 0 34.55 13.946 37.211 32.11h21.13c2.661-18.164 18.304-32.11 37.21-32.11c20.775 0 37.617 16.837 37.617 37.607s-16.842 37.606-37.617 37.606c-18.906 0-34.55-13.948-37.21-32.11h-21.129c-2.66 18.162-18.305 32.11-37.212 32.11c-18.87 0-34.494-13.893-37.199-32.007l-4.515.135c-7.435-.056-15.29-2.042-21.598-6.328c-1.72-1.169-3.415-2.397-5.182-3.56v2.441c-.01.79-.153 12.657-.164 25.833v2.79c.005 8.641.073 17.545.277 24.04c.446 14.246 12.034 25.745 24.822 28.436c1.663.35 4.52.394 6.321.238c2.571-18.264 18.26-32.32 37.238-32.32c20.774 0 37.616 16.838 37.616 37.607c0 20.77-16.842 37.607-37.616 37.607c-18.769 0-34.323-13.744-37.153-31.714h-3.254c-24.436-1.334-39.628-23.746-39.363-41.923c.334-22.877.082-45.764.079-68.646v-7.565C18.546 101.286 0 79.606 0 53.591C0 23.992 23.999 0 53.604 0Zm69.228 191.78c-14.701 0-26.62 11.915-26.62 26.613c0 14.699 11.919 26.614 26.62 26.614c14.702 0 26.62-11.915 26.62-26.614c0-14.698-11.918-26.614-26.62-26.614Zm0-84.912c-14.701 0-26.62 11.915-26.62 26.614c0 14.697 11.919 26.613 26.62 26.613c14.702 0 26.62-11.916 26.62-26.613c0-14.699-11.918-26.614-26.62-26.614Zm95.551 0c-14.702 0-26.62 11.915-26.62 26.614c0 14.697 11.918 26.613 26.62 26.613c14.703 0 26.621-11.916 26.621-26.613c0-14.699-11.918-26.614-26.62-26.614Zm15.161 15.408a5.496 5.496 0 0 1 .17 7.606l-.16.168l-16.31 16.345a5.499 5.499 0 0 1-7.576.198l-.172-.163l-7.985-7.86a5.496 5.496 0 0 1-.06-7.773a5.499 5.499 0 0 1 7.606-.22l.168.16l4.092 4.027l12.452-12.477a5.498 5.498 0 0 1 7.775-.01Zm-95.99-.08a5.497 5.497 0 0 1 .17 7.606l-.16.168l-16.31 16.344a5.499 5.499 0 0 1-7.576.198l-.172-.163l-7.985-7.86a5.498 5.498 0 0 1 7.546-7.992l.168.16l4.093 4.027l12.451-12.478a5.499 5.499 0 0 1 7.775-.01ZM53.604 10.993c-23.532 0-42.608 19.07-42.608 42.598c0 23.525 19.076 42.597 42.608 42.597c23.532 0 42.608-19.072 42.608-42.597c0-23.527-19.076-42.598-42.608-42.598ZM49.171 28.13A743.51 743.51 0 0 1 75.7 44.841c7.308 4.82 7.29 13.563-.1 18.394a608.475 608.475 0 0 1-27.058 16.712c-7.455 4.34-15.8-.65-16.002-9.344c-.13-5.602-.024-11.21-.032-16.817c-.006-5.454-.113-10.911.019-16.363c.222-9.248 8.736-14.066 16.643-9.293Zm-5.91 8.872v3.868l-.001 5.674l-.001 3.71v5.482c0 4.23.002 8.394.01 12.557c.003 1.96 1.023 1.88 2.343 1.063c7.605-4.714 15.214-9.423 22.827-14.127c1.258-.776 1.294-1.587.06-2.365c-8.154-5.139-16.318-10.26-25.238-15.862Z" /><path d="M133.227 223.88a5.497 5.497 0 1 0 .001-10.996a5.497 5.497 0 0 0 0 10.995m-21.049.001a5.497 5.497 0 1 0 0-10.996a5.497 5.497 0 0 0 0 10.995m106.205 21.128c-14.702 0-26.62-11.915-26.62-26.614c0-14.698 11.918-26.614 26.62-26.614c14.701 0 26.62 11.916 26.62 26.614c0 14.699-11.919 26.614-26.62 26.614m0-64.22c-18.906 0-34.55 13.947-37.211 32.11h-6.153c-2.685 0-4.864 2.461-4.864 5.496c0 3.036 2.179 5.497 4.864 5.497h6.153c2.66 18.163 18.305 32.11 37.21 32.11C239.159 256 256 239.162 256 218.393c0-20.77-16.842-37.607-37.616-37.607" /></svg></span>
                            <p>GitHub Actions</p>
                        </div>
                        <div className={styles.mainSkillItem}>
                            {/* <SiPython className='w-14 h-14 duration-300 fill-[#4B8BBE]' /> */}
                            <span><svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 duration-300 text-[#4B8BBE] hover:text-[#4B8BBE]/80" width={24} height={24} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3"></path>
                                <path d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3"></path>
                                <path d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4"></path>
                                <line x1={11} y1={6} x2={11} y2="6.01"></line>
                                <line x1={13} y1={18} x2={13} y2="18.01"></line>
                            </svg></span>
                            <p>Python</p>
                        </div>
                        <div className={styles.mainSkillItem}>
                            {/* <SiEthereum className='duration-300 w-14 h-14 fill-azure-500' /> */}
                            <p>EthersJS</p>
                        </div>
                        <div className={styles.mainSkillItem}>
                            {/* <FaHardHat className='duration-300 w-14 h-14 fill-jasper-500' /> */}
                            <p>Hardhat</p>
                        </div>
                        <div className={styles.mainSkillItem}>
                            {/* <SiSolidity className='duration-300 w-14 h-14 fill-sylver-800' /> */}
                            <p>Solidity</p>
                        </div>
                        <div className={styles.mainSkillItem}>
                            {/* <SiMongodb className='w-14 h-14 duration-300 fill-[#4DB33D]' /> */}
                            <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="48" height="48"
                                viewBox="0 0 48 48"
                                className='duration-300 hover:opacity-80'><path fill="#5d4037" d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"></path><path fill="#4caf50" d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"></path><path fill="#dcedc8" d="M23 28H25V36H23z"></path><path fill="#4caf50" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"></path><path fill="#81c784" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"></path></svg></span>
                            <p>MongoDB</p>
                        </div>
                        <div className={styles.mainSkillItem}>
                            {/* <SiAdobephotoshop className='w-14 h-14 duration-300 fill-[#40D0FB]' /> */}
                            <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="24" height="24"
                                viewBox="0 0 30 30"
                                className='duration-300 w-14 h-14 fill-[#40D0FB] hover:fill-[#40D0FB]/80 hover:opacity-80'><path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 8 9.9921875 L 11.978516 9.9921875 C 13.947516 9.9921875 15.294922 11.339125 15.294922 13.328125 C 15.294922 15.283125 13.898344 16.623047 11.902344 16.623047 L 9.7636719 16.623047 L 9.7636719 19.857422 L 8 19.857422 L 8 9.9921875 z M 9.7636719 11.46875 L 9.7636719 15.160156 L 11.507812 15.160156 C 12.765813 15.160156 13.503906 14.504125 13.503906 13.328125 C 13.503906 12.119125 12.784672 11.46875 11.513672 11.46875 L 9.7636719 11.46875 z M 19.207031 12.226562 C 20.984031 12.226562 22.099656 13.013047 22.222656 14.373047 L 20.630859 14.373047 C 20.507859 13.847047 20.007844 13.511719 19.214844 13.511719 C 18.442844 13.511719 17.861328 13.881875 17.861328 14.421875 C 17.861328 14.845875 18.21675 15.105391 18.96875 15.275391 L 20.287109 15.576172 C 21.716109 15.897172 22.378906 16.513281 22.378906 17.613281 C 22.378906 19.050281 21.059359 20.007813 19.193359 20.007812 C 17.327359 20.007812 16.151484 19.199844 16.021484 17.839844 L 17.697266 17.839844 C 17.861266 18.393844 18.386375 18.722656 19.234375 18.722656 C 20.088375 18.722656 20.683594 18.346969 20.683594 17.792969 C 20.683594 17.368969 20.363344 17.101359 19.652344 16.943359 L 18.326172 16.636719 C 16.890172 16.308719 16.214844 15.645578 16.214844 14.517578 C 16.214844 13.163578 17.443031 12.226562 19.207031 12.226562 z"></path></svg></span>
                            <p>Photoshop</p>
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
};

export default About