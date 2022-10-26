import { render, fireEvent } from '@testing-library/react';
import { type } from 'os';
import { describe, test, expect, vi } from 'vitest';

import Button from "./Button";
import { propsButton } from './type';

describe( 'Button', () => {
    test( 'button click event', () => {
        const handleCallback = vi.fn();
        const button = render( <Button onClick={ handleCallback }></Button> );
        const element = button.getByRole( 'button' );
        fireEvent.click( element );
        expect( handleCallback ).toHaveBeenCalled();
    } );

    test( 'disable the button', () => {
        const handleClick = vi.fn();
        const button = render( <Button onClick={ handleClick } disabled></Button> );
        const element = button.getByRole( 'button' );
        fireEvent.click( element );
        expect( handleClick ).not.toHaveBeenCalled();
    } );

    test( 'the loading button', () => {
        const button = render( <Button loading></Button> );
        const buttonHTML = button.container.firstElementChild;
        expect( buttonHTML?.firstElementChild?.outerHTML ).toBe( '<i class="wdu-icon-loading"></i>' );
    } );
} );

const defineTypes = [
    { type: 'plain', expected: 'wdu-button-plain' },
    { type: 'important', expected: 'wdu-button-important' },
    { type: 'danger', expected: 'wdu-button-danger' },
    { type: 'success', expected: 'wdu-button-success' },
    { type: 'border', expected: 'wdu-button-border' },
    { type: 'warn', expected: 'wdu-button-warn' },
    { type: 'line', expected: 'wdu-button-line' }
];
describe.each( defineTypes )( 'test the type of button', ( { type, expected } ) => {
    test( `returns ${ expected }`, () => {
        const button = render( <Button type={ ( type as propsButton[ 'type' ] ) }></Button> );
        const element = button.getByRole( 'button' );
        expect( element.classList.contains( expected ) ).toBeTruthy();
    } );
} );

const defineSize = [
    { size: 'small', expected: 'wdu-button-small' },
    { size: 'normal', expected: 'wdu-button-normal' },
    { size: 'large', expected: 'wdu-button-large' },
];
describe.each( defineSize )( 'test the size of button', ( { size, expected } ) => {
    test( `${ size } size button`, () => {
        const button = render( <Button size={ ( size as propsButton[ 'size' ] ) }></Button> );
        const element = button.getByRole( 'button' );
        expect( element.classList.contains( expected ) ).toBeTruthy();
    } );
} );