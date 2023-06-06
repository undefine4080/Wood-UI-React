import { ReactElement } from 'react';
import commonProps from "../../types/commonInterface";

interface propsImage extends commonProps {
    src: string;
    hoverSlot?: ReactElement;
    lazy?: boolean;
    info?: string; // image description
    link?: string;
    preview?: boolean;
    hoverStyle?: boolean; // if show effect while mouse over image
    border?: boolean; // show the border of image container
    shadow?: boolean; // show the shadow of image container
}

export type { propsImage };