export function getComponentByName ( childOfComponent: any, name: string ): any {
    if ( !childOfComponent ) {
        return [];
    }

    if ( Array.isArray( childOfComponent ) ) {
        const result = childOfComponent.filter( item => item.type.name === name );

        if ( result.length ) {
            return result;
        } else {
            return [];
        }
    } else {
        if ( childOfComponent.type.name === name ) {
            return childOfComponent;
        }
    }
}