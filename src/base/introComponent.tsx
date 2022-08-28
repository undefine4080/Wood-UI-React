import { useEffect, useState } from "react";
import { Button } from "../components/Button/Button";

function IntroComponentItem ( props: any ) {
    const { title, info = '', component, code = '' } = props;

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
        <article className="wdu-box" style={ { flexGrow: 1 } }>
            <header>
                <h2>{ title }</h2>
            </header>

            <p className="wdu-text-paragraph" style={ { textIndent: '20px', padding: '10px' } }>{ info }</p>

            <section className="intro__main">
                { component }
            </section>

            <section className="intro__code">
                <pre style={ { overflowX: 'auto', height: codeHeight, maxWidth: '800px' } }>
                    <code style={ { backgroundColor: '#dfefdd' } }>{ code }</code>
                </pre>
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
                { components.map( ( item: any ) => {
                    return <IntroComponentItem key={ item.title } { ...item }></IntroComponentItem>;
                } ) }
            </section>
        </article>
    );
}