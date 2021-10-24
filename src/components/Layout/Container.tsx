export function Container(props:object){
    const {children:any} = props
    return(
        <div className="wdu-container">{props.children}</div>
    )
} 