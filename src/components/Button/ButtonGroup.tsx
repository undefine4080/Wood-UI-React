import { getNamedChild } from '@base/utils';
import { ReactNode } from 'react';

function ButtonGroup(props: { children: ReactNode }) {
    const buttonNodes = getNamedChild('Button', props.children);
    return <div className='wdu-button-group'>{buttonNodes}</div>;
}

export default ButtonGroup;
