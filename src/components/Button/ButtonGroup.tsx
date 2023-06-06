import { ReactNode } from 'react';
import { getNamedChild } from '@common/utils';

function ButtonGroup(props: { children: ReactNode }) {
    const buttonNodes = getNamedChild('Button', props.children);
    return <div className='wdu-button-group'>{buttonNodes}</div>;
}

export default ButtonGroup;
