import { useEffect, useState } from "react";
import { Button } from "../components/Button/Button";

export function IntroComponent ( props: any ) {
    const { title, components, code, position } = props;
    useEffect( () => {
        document.querySelectorAll( "pre code" ).forEach( block => {
            try {
                // @ts-ignore
                hljs.highlightBlock( block );
            } catch ( e ) {
                console.log( e );
            }
        } );
    }, [] );

    const [ codeHeight, setCodeHeight ] = useState( '0px' );

    const switchCodePanel = () => {
        if ( codeHeight === 'max-content' ) {
            setCodeHeight( '0px' );
        } else {
            setCodeHeight( 'max-content' );
        }
    };

    return (
        <article className="intro__container" id={ position }>
            <header>
                <h2>{ title }</h2>
            </header>

            <section className="intro__main">
                { components.map( ( item: any, index: number ) => {
                    return (
                        <div className="intro__main--items"
                            key={ index }>
                            <div className="intro__cpnt">
                                { item.component }
                            </div>
                            <div className="intro__info">{ item.info }</div>
                        </div>
                    );
                } ) }
            </section>

            <section className="intro__code" >
                <pre style={ { overflowX: 'auto', height: codeHeight, maxWidth: '800px', transition: 'all 0.3 ease' } }>
                    <code style={ { backgroundColor: '#dfefdd' } }>{ code }</code>
                </pre>
                <p className="intro__code--title"><Button type="plain" size="small" onClick={ switchCodePanel }>查看代码</Button></p>
            </section>
        </article>
    );
}