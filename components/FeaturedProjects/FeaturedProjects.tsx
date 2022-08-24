import { LastestCard } from '../LastestCard/LatestCard';
import styles from './FeaturedProjects.module.css'

export const FeaturedProjects = () => {
    return (
        <>
            <div className="w-full py-12 mx-auto portfolio">
                <h3 className="underline underline-offset-4 text-m-h3 md:text-d-h3 decoration-amethyst-400">featured builds.</h3>
                <LastestCard />
            </div>
            <div className="w-full py-12 mx-auto portfolio">
                <h2 className="text-d-h2">Portfolio</h2>
                <div className="grid grid-cols-3 mx-auto justify-items-center">
                    <p>hey</p>
                    <p>hey</p>
                    <p>hey</p>
                </div>
            </div>
        </>
    )
};