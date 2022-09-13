import { useEffect, useState } from "react";
import { Button } from "../components/Button/Button";

function IntroComponentItem ( props: any ) {
    const { title, info = '', component, code = '' } = props;
    const [ codeOpen, setCodeOpen ] = useState( false );

    useEffect( () => {
        document.querySelectorAll( "pre code" ).forEach( block => {
            try {
                // @ts-ignore
                hljs.highlightBlock( block );
            } catch ( e ) {
                console.log( e );
            }
        } );
    }, [ codeOpen ] );

    const [ codeHeight, setCodeHeight ] = useState( '0px' );

    const switchCodePanel = () => {
        if ( codeHeight === 'max-content' ) {
            setCodeHeight( '0px' );
            setCodeOpen( false );
        } else {
            setCodeOpen( true );
            setCodeHeight( 'max-content' );
        }
    };

    return (
        <article className="wdu-box" style={ { flexGrow: 1 } }>
            <header>
                <h2>{ title }</h2>
            </header>

            <p className="wdu-text-paragraph" style={ { textIndent: '20px', padding: '10px' } }>{ info }</p>

            <section className="intro__main">
                { component }
            </section>

            <section className="intro__code">
                {
                    codeOpen && (
                        <pre style={ { overflowX: 'auto', height: codeHeight, width: '956px' } }>
                            <code style={ { backgroundColor: '#dfefdd' } }>{ code }</code>
                        </pre>
                    )
                }
                <p className="intro__code--title"><Button type="plain" size="small" onClick={ switchCodePanel }>查看代码</Button></p>
            </section>
        </article>
    );
}

export function IntroComponent ( props: any ) {
    const { title, components, position } = props;

    return (
        <article className="intro__container" id={ position }>
            <header>
                <h1>{ title }</h1>
            </header>

            <section className="intro__main">
                { components.map( ( item: any, index: number ) => {
                    return <IntroComponentItem key={ index } { ...item }></IntroComponentItem>;
                } ) }
            </section>
        </article>
    );
}