interface AsideOptions
{
    width?: string,
    height?: string,
    side?: string,
    style?: object,
    children?: any,
    className?: string;
}
const PREFIX = 'wdu-aside';
export default function Aside ( props: object )
{
    const defaultOptions: AsideOptions = {
        side: 'left',
    };

    const options: AsideOptions = Object.assign( defaultOptions, props );

    const { className, width, height, side, children, style } = options;

    const componentStyle: object = {};

    if ( width ) componentStyle.width = width;
    if ( height ) componentStyle.height = height;
    if ( style ) Object.assign( componentStyle, style );

    return (
        <div style={ componentStyle } className={ `${ PREFIX }-${ side } ${ className }` }>{ children }</div>
    );
}