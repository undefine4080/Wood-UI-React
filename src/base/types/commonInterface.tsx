export default interface commonOptions
{
    className?: string,
    width?: string;
    children?: any;
    height?: string;
    style?: object;
    [ attr: string ]: any;
}

export type commonStyle =
    {
        width?: string,
        height?: string;
    };