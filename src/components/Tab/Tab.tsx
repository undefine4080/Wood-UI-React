import React, { SetStateAction } from "react";
import { useContext, useEffect, useState } from "react";
import commonProps from "../../base/types/commonInterface";
import './tab.less';

const CurTabName = React.createContext( '' );

interface propsTabHead {
    name: string,
    activate: SetStateAction<any>;
}
const TabHead: React.FC<propsTabHead> = props => {
    const { name, activate } = props;
    const curTabName = useContext( CurTabName );
    const classMap = {
        activate: "wdu-tab-title wdu-tab-checked",
        base: "wdu-tab-title"
    };
    const [ titleClassList, setTitleClassList ] = useState( classMap.base );

    useEffect( () => {
        if ( curTabName === name ) {
            setTitleClassList( classMap.activate );
        } else {
            setTitleClassList( classMap.base );
        }
    }, [ curTabName ] );

    return <div className={ titleClassList } onClick={ () => activate( name ) } >{ name }</div>;
};

interface propsTabPane extends commonProps {
    name?: string;
}
const TabPane: React.FC<propsTabPane> = props => {
    const { name, children } = props;
    const curTabName = useContext( CurTabName );
    const classMap = {
        activate: "wdu-tab-pane wdu-tab-active",
        base: "wdu-tab-pane"
    };

    const [ classList, setClassList ] = useState( classMap.base );

    useEffect( () => {
        if ( curTabName === name ) {
            setClassList( classMap.activate );
        } else {
            setClassList( classMap.base );
        }
    }, [ curTabName ] );

    return (
        <div className={ classList }>{ children }</div>
    );
};




interface propsTab extends commonProps {
    activate?: string,
}
interface childEleInstance {
    props: {
        name: string,
        [ prop: string ]: any;
    };
}
const Tab: React.FC<propsTab> = props => {
    const PREFIX = 'wdu-tab';
    const { children } = props;
    const [ tabHeads, setTabHeads ] = useState( [] );
    const [ activateName, setActivateName ] = useState( '' );

    useEffect( () => {
        const tabNames = children.map( ( item: childEleInstance ) => item.props.name );
        setTabHeads( tabNames );
        setActivateName( tabNames[ 0 ] );
    }, [] );

    return (
        <div className={ PREFIX }>
            <div className={ `${ PREFIX }-head` }>
                { tabHeads.map( ( name, index ) => {
                    // return <div className={ titleClassList } key={ index } onClick={ () => setActivateName( name ) } >{ name }</div>;
                    return <CurTabName.Provider value={ activateName } key={ index }>
                        <TabHead name={ name } key={ index } activate={ setActivateName }></TabHead>
                    </CurTabName.Provider>;
                } ) }
            </div>

            <div className={ `${ PREFIX }-container` }>
                <CurTabName.Provider value={ activateName }>
                    { children }
                </CurTabName.Provider>
            </div>
        </div>
    );
};

export { Tab, TabPane };