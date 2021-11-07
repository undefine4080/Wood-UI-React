export function getComponentByName(childOfComponent?:Array<object> | object, name:string):Array<object> {
    if(!childOfComponent){
        return []
    }
    
    if(Array.isArray(childOfComponent)){
        return childOfComponent.filter(item => item.type.name === name);
       
    }else{
        if(childOfComponent.type.name === name){
            return new Array(childOfComponent)
        }
    }
}