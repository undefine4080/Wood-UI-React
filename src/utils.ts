export function getComponentByName(childOfComponent:Array<object>, name:string):Array<object> {
    return childOfComponent.filter(item => item.type.name === name);
}