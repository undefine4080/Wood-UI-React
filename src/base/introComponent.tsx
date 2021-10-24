import Button from "../components/Button/Button";

export function IntroComponent ( props )
{
    const { title, components, code } = props;
    return (
        <article className="intro__container">
            <header>
                <h2>{ title }</h2>
            </header>

            <section className="intro__main">
                { components.map( ( item, index ) =>
                {
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
                    { code }
                </pre>

                <p className="intro__code--title"><Button type="plain" size="small">查看代码</Button></p>
            </section>
        </article>
    );
}