import React, { JSXElementConstructor, ReactElement } from "react";
/**
 * @param rawValue css property width or height which from props, the type maybe number or string
 * @returns legal css value
 */
function addUnitPx(rawValue: string | number | undefined) {
  if (!rawValue) return;

  if (typeof rawValue === "number") {
    return `${rawValue}px`;
  } else if (typeof rawValue === "string") {
    return rawValue;
  } else {
    const error = new Error(`the data type of props must be string or number`);
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
  reactChildren: any
) {
  const children = React.Children.toArray(reactChildren);

  const result = children.map((item: any) => {
    if (typeof childrenNodeName === "string") {
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

function bindImplicitProps(
  elements: Array<ReactElement>,
  hintProps: { [propsName: string]: any }
): Array<any> {
  const result = elements.map((element) => {
    return React.cloneElement(element, { ...hintProps });
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

  return uuid.toString().split(",").join("");
}

export {
  addUnitPx,
  getNamedChild,
  debounce,
  throttle,
  rqData,
  bindImplicitProps,
  uuid,
};
