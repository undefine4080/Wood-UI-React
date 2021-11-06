interface MainOptions
{
    className?: string,
    style?: object;
    children?: any;
}
const PREFIX = 'wdu-main';
export default function Main ( props: object )
{
    const { className, children, style } = props;

    const componentStyle: object = {};

    if ( style ) Object.assign( componentStyle, style );

    return (
        <div style={ componentStyle } className={ ` ${ PREFIX } ${ className }` }>{ children }</div>
    );
}