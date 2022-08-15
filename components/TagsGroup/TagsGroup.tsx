import { Fragment } from 'react';
import { RuiPill } from 'ruskelui';
import { variant } from '../../@types/tags';

export const TagsGroup = () => {
    const _tags = ['Databases', 'Security', 'Reactjs', 'Robotics', 'Testing', 'Python', 'Web3', 'GraphQL', 'TailwindCSS3', 'Nextjs', 'APIs', 'Typescript', 'GSAP']
    return (
        <Fragment>
            {_tags.sort((a, b) => a.localeCompare(b)).map((item, id) => (
                <a href={`/tags/${item}`} key={`${id}t`}><RuiPill color={variant[item]}>{item}</RuiPill></a>
            ))}
        </Fragment>
    )
};