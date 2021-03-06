type childOfComponent = {
    type: any;
};

export function getComponentByName ( childOfComponent: childOfComponent, name: string ): any
{
    if ( !childOfComponent )
    {
        return [];
    }

    if ( Array.isArray( childOfComponent ) )
    {
        return childOfComponent.filter( item => item.type.name === name );
    } else
    {
        if ( childOfComponent.type.name === name )
        {
            return new Array( childOfComponent );
        }
    }
}