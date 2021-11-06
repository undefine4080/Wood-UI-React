import { getComponentByName } from '../../utils.ts';
interface ContainerOptions
{
    width?: string;
    className?: string,
    height?: string;
    style?: object,
    children?: any;
}
const PREFIX = 'wdu-container';
export default function Container ( props: object )
{
    const { className, width, height, children, style } = props;

    let componentStyle: object = {};

    if ( width ) componentStyle.width = width;
    if ( height ) componentStyle.height = height;
    if ( style ) Object.assign( componentStyle, style );

    const aside: Array<Object> = getComponentByName( children, 'Aside' );
    const main: Array<Object> = getComponentByName( children, 'Main' );
    const header: Array<Object> = getComponentByName( children, 'Header' );
    const footer: Array<Object> = getComponentByName( children, 'Footer' );

    return (
        <div style={ componentStyle } className={ `${ PREFIX } ${ className }` }>
            <div className="wdu-header">{ header }</div>
            <div className="wdu-main-container">
                { aside }
                { main }
            </div>
            <div className="wdu-footer">{ footer }</div>
        </div>
    );
}