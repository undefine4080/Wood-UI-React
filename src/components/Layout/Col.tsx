interface ColOptions{
    span?: number,
}

const PREFIX = 'wdu-col'

export function Col(props:object){
    const defaultOptions: ColOptions = {
        span: 12
    };
    const options: ColOptions = Object.assign( defaultOptions, props );
    const {span,children} = options;
    let classList = `${PREFIX}-${span}`
    return(
        <div className={classList}>{children}</div>
    )
} 