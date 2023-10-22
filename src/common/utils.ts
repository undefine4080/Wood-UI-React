import { ReactNode } from 'react';
import React, { ReactElement } from 'react';
import { Size } from './types';

/**
 * @param rawValue css property width or height which from props, the type maybe number or string
 * @returns legal css value
 */
function addUnitPx(rawValue: string | number | undefined) {
    if (!rawValue) return;

    if (typeof rawValue === 'number') {
        return `${rawValue}px`;
    } else if (typeof rawValue === 'string') {
        return rawValue;
    } else {
        const error = new Error(
            `the data type of props must be string or number`,
        );
        console.trace(error);
        throw error;
    }
}

/**
 * filter children node by the displayName of the component
 * @param childrenNodeName
 * @param reactChildren
 * @returns childNodeList
 */
function getNamedChild(
    childrenNodeName: string | Array<string>,
    reactChildren: ReactNode,
) {
    if (!reactChildren) {
        throw new TypeError('reactChildren is undefined');
    }

    const children = React.Children.toArray(reactChildren);

    const result = children.map((item: any) => {
        if (typeof childrenNodeName === 'string') {
            if (item.type.displayName === childrenNodeName) {
                return item;
            }
        } else if (Array.isArray(childrenNodeName)) {
            if (childrenNodeName.includes(item.type.displayName)) {
                return item;
            }
        }
    });
    return result;
}

/**
 * bind implicit property to the component
 * @param nodes
 * @param hintProps
 * @returns
 */
function bindImplicitProps(
    nodes: Array<any>,
    hintProps: { [propsName: string]: any },
): Array<any> {
    const result = nodes.map((node) => {
        if (node.type === 'div') {
            return node;
        } else {
            return React.cloneElement(node, { ...hintProps });
        }
    });
    return result;
}

function debounce(callback: any, delay: number) {
    let timer: any;

    return (...args: any) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    };
}

function throttle(callback: any, delay: number) {
    let prevTime = Date.now();

    return (...args: any) => {
        const nowTime: number = Date.now();

        if (nowTime - prevTime > delay) {
            callback.apply(this, args);

            prevTime = nowTime;
        }
    };
}

function rqData(data: any) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 1000);
    });
}

function uuid(length: number) {
    const uuid = window.crypto.getRandomValues(new Uint8Array(length));

    return uuid.toString().split(',').join('');
}

function getImageSize(src: string): Promise<Size> {
    return new Promise((resolve, reject) => {
        const img = new Image();

        img.onload = function () {
            const imageSize = {
                width: img.width,
                height: img.height,
            };
            resolve(imageSize);
        };

        img.onerror = function () {
            reject(new Error('Failed to load image'));
        };

        img.src = src;
    });
}

export {
    addUnitPx,
    getNamedChild,
    debounce,
    throttle,
    rqData,
    bindImplicitProps,
    uuid,
    getImageSize,
};
