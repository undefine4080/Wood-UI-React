import { useEffect } from "react";
import { Button } from "../components/Button/Button";

export function IntroComponent ( props: any ) {
    const { title, components, code, position } = props;
    useEffect( () => {
        document.querySelectorAll( "pre code" ).forEach( block => {
            try {
                hljs.highlightBlock( block );
            } catch ( e ) {
                console.log( e );
            }
        } );
    }, [] );

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

            <section className="intro__code">
                <pre>
                    <code>{ code }</code>
                </pre>

                <p className="intro__code--title"><Button type="plain" size="small">查看代码</Button></p>
            </section>
        </article>
    );
}