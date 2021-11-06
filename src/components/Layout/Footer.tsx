const PREFIX = 'wdu-footer';
export default function Footer( props: object )
{
    const {className, children, style } = props;

    const componentStyle: object = {};

    if ( style ) Object.assign( componentStyle, style );

    return (
        <div style={ componentStyle } className={ `${ PREFIX } ${ className }` }>{ children }</div>
    );
}