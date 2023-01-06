import { render, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

import Button from "./Button";
import { propsButton } from './type';

describe('Button', () => {
    test('button click event', () => {
        const handleCallback = vi.fn();
        const button = render(<Button onClick={handleCallback}></Button>);
        const element = button.getByRole('button');
        fireEvent.click(element);
        expect(handleCallback).toHaveBeenCalled();
    });

    test('disable the button', () => {
        const handleClick = vi.fn();
        const button = render(<Button onClick={handleClick} disabled></Button>);
        const element = button.getByRole('button');
        fireEvent.click(element);
        expect(handleClick).not.toHaveBeenCalled();
    });

    test('the loading button', () => {
        const { container } = render(<Button loading>loading Button</Button>);
        expect(container).toMatchSnapshot();
    });
});

const defineTypes = [
    { type: 'plain' },
    { type: 'important' },
    { type: 'danger' },
    { type: 'success' },
    { type: 'border' },
    { type: 'warn' },
    { type: 'line' }
];
describe.each(defineTypes)('test the type of button', ({ type }) => {
    test(`${type} type`, () => {
        const { container } = render(<Button type={(type as propsButton['type'])}>{type} Button</Button>);
        expect(container).toMatchSnapshot();
    });
});

const defineSize = [
    { size: 'small' },
    { size: 'normal' },
    { size: 'large' },
];
describe.each(defineSize)('test the size of button', ({ size }) => {
    test(`${size} size`, () => {
        const { container } = render(<Button size={(size as propsButton['size'])}>{size} Button</Button>);
        expect(container).toMatchSnapshot();
    });
});
