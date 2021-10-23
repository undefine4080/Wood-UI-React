import Button from "../components/Button/Button";
export function IntroButton ()
{
    return (
        <article className="intro__container">
            <header>
                <h2>Button 按钮</h2>
            </header>

            <section className="intro__main">
                <div className="intro__main--items">
                    <div className="intro__cpnt">
                        <Button type="primary">点我点我</Button>
                    </div>
                    <div className="intro__info">主要按钮</div>
                </div>

                <div className="intro__main--items">
                    <div className="intro__cpnt">
                        <Button type="danger">点我点我</Button>
                    </div>
                    <div className="intro__info">危险按钮</div>
                </div>

                <div className="intro__main--items">
                    <div className="intro__cpnt">
                        <Button type="plain">点我点我</Button>
                    </div>
                    <div className="intro__info">空白按钮</div>
                </div>

                <div className="intro__main--items">
                    <div className="intro__cpnt">
                        <Button type="line">点我点我</Button>
                    </div>
                    <div className="intro__info">描边按钮</div>
                </div>

                <div className="intro__main--items">
                    <div className="intro__cpnt">
                        <Button type="primary" disabled={ true }>点不了的</Button>
                    </div>
                    <div className="intro__info">禁用按钮</div>
                </div>

                <div className="intro__main--items">
                    <div className="intro__cpnt">
                        <Button type="primary" size="small">点我点我</Button>
                    </div>
                    <div className="intro__info">小</div>
                </div>

                <div className="intro__main--items">
                    <div className="intro__cpnt">
                        <Button type="primary" size="normal">点我点我</Button>
                    </div>
                    <div className="intro__info">常规</div>
                </div>

                <div className="intro__main--items">
                    <div className="intro__cpnt">
                        <Button type="primary" size="large">点我点我</Button>
                    </div>
                    <div className="intro__info">大</div>
                </div>
            </section>

            <section className="intro__code">
                <pre>
                    
                </pre>

                <p className="intro__code--title"><Button type="line" size="small">查看代码</Button></p>
            </section>
        </article>
    );
}