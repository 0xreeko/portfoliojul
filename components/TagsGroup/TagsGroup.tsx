import { Fragment } from 'react';
import { RuiPill } from 'ruskelui';
import { tagsType, variant } from '../../@types/tags';

export const TagsGroup = () => {
    return (
        <Fragment>
            {tagsType.sort((a, b) => a.localeCompare(b)).map((item, id) => (
                <a href={`/tags/${item}`} key={`${id}t`}><RuiPill color={variant[item]}>{item}</RuiPill></a>
            ))}
        </Fragment>
    )
};