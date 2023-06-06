import { SetStateAction } from 'react';
import commonProps from "types/commonInterface";

interface propsTab extends commonProps {
    activate?: string,
}
interface childEleInstance {
    props: {
        name: string,
        [ prop: string ]: any;
    };
}

interface propsTabPane extends commonProps {
    name?: string;
}

interface propsTabHead {
    name: string,
    activate: SetStateAction<any>;
}

export type {
    propsTab,
    childEleInstance,
    propsTabPane,
    propsTabHead,
};