import { RuiPill } from 'ruskelui';
import { variant } from '../../@types/tags';
import styles from './TagsGroup.module.css'

export const TagsGroup = () => {

    const _tags = ['Databases', 'Security', 'Reactjs', 'Robotics', 'Testing', 'Python', 'Web3', 'GraphQL', 'TailwindCSS3', 'Nextjs', 'APIs', 'Typescript', 'GSAP']
    return (
        <>
            {_tags.sort((a, b) => a.localeCompare(b)).map((item: string) => (
                <a href={`/tags/${item}`}><RuiPill color={variant[item]}>{item}</RuiPill></a>
            ))}
        </>
    )
};