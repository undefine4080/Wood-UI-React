const PREFIX = 'wdu-header';
export default function Header ( props: object )
{
    const { className, children, style } = props;

    const componentStyle: object = {};

    if ( style ) Object.assign( componentStyle, style );

    return (
        <div style={ componentStyle } className={ `${ PREFIX } ${ className }` }>{ children }</div>
    );
}