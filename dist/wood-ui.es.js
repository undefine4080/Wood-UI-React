import require$$0, { useRef, useState, useEffect } from "react";
function getComponentByName(childOfComponent, name) {
  if (!childOfComponent) {
    return [];
  }
  if (Array.isArray(childOfComponent)) {
    return childOfComponent.filter((item) => item.type.name === name);
  } else {
    if (childOfComponent.type.name === name) {
      return new Array(childOfComponent);
    }
  }
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = require$$0, g = 60103;
reactJsxRuntime_production_min.Fragment = 60107;
if (typeof Symbol === "function" && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  reactJsxRuntime_production_min.Fragment = h("react.fragment");
}
var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = Object.prototype.hasOwnProperty, p = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
function q(c, a, k) {
  var b, d = {}, e = null, l = null;
  k !== void 0 && (e = "" + k);
  a.key !== void 0 && (e = "" + a.key);
  a.ref !== void 0 && (l = a.ref);
  for (b in a)
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      d[b] === void 0 && (d[b] = a[b]);
  return {
    $$typeof: g,
    type: c,
    key: e,
    ref: l,
    props: d,
    _owner: m.current
  };
}
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
function Container(props) {
  const PREFIX2 = "wdu-container";
  const {
    className,
    width,
    height,
    children,
    style
  } = props;
  const componentStyle = {};
  componentStyle.width = width != null ? width : "";
  componentStyle.height = height != null ? height : "";
  if (style)
    Object.assign(componentStyle, style);
  const aside = getComponentByName(children, "Aside");
  const main = getComponentByName(children, "Main");
  const header = getComponentByName(children, "Header");
  const footer = getComponentByName(children, "Footer");
  return /* @__PURE__ */ jsxs("div", {
    style: componentStyle,
    className: `${PREFIX2} ${className || ""}`,
    children: [/* @__PURE__ */ jsx("div", {
      className: "wdu-header",
      children: header
    }), /* @__PURE__ */ jsxs("div", {
      className: "wdu-main-container",
      children: [aside, main]
    }), /* @__PURE__ */ jsx("div", {
      className: "wdu-footer",
      children: footer
    })]
  });
}
function Header(props) {
  const PREFIX2 = "wdu-header";
  const {
    className,
    children,
    style
  } = props;
  const componentStyle = {};
  if (style)
    Object.assign(componentStyle, style);
  return /* @__PURE__ */ jsx("div", {
    style: componentStyle,
    className: `${PREFIX2} ${className || ""}`,
    children
  });
}
function Aside(props) {
  const PREFIX2 = "wdu-aside";
  const defaultOptions = {
    side: "left"
  };
  const options = Object.assign(defaultOptions, props);
  const {
    className,
    width,
    height,
    side,
    children,
    style
  } = options;
  const componentStyle = {};
  componentStyle.width = width != null ? width : "";
  componentStyle.height = height != null ? height : "";
  if (style)
    Object.assign(componentStyle, style);
  return /* @__PURE__ */ jsx("div", {
    style: componentStyle,
    className: `${PREFIX2}-${side} ${className || ""}`,
    children
  });
}
function Footer(props) {
  const PREFIX2 = "wdu-footer";
  const {
    className,
    children,
    style
  } = props;
  const componentStyle = {};
  if (style)
    Object.assign(componentStyle, style);
  return /* @__PURE__ */ jsx("div", {
    style: componentStyle,
    className: `${PREFIX2} ${className || ""}`,
    children
  });
}
function Main(props) {
  const PREFIX2 = "wdu-main";
  const {
    className,
    children,
    style
  } = props;
  const componentStyle = {};
  if (style)
    Object.assign(componentStyle, style);
  return /* @__PURE__ */ jsx("div", {
    style: componentStyle,
    className: ` ${PREFIX2} ${className || ""}`,
    children
  });
}
var button = "";
const PREFIX$1 = "wdu-button";
function Button(props) {
  const defaultOptions = {
    type: "primary",
    size: "normal"
  };
  const options = Object.assign(defaultOptions, props);
  const {
    type,
    size,
    children
  } = options;
  let theClass = `${PREFIX$1} ${PREFIX$1}-${type} ${PREFIX$1}-${size}`;
  if (type === "disabled")
    theClass += ` ${PREFIX$1}-disabled`;
  return /* @__PURE__ */ jsx("button", {
    className: theClass,
    children
  });
}
var collapse = "";
function Collapse(props) {
  const PREFIX2 = "wdu-collapse";
  const {
    sticky,
    width,
    children
  } = props;
  const componentStyle = {};
  componentStyle.width = width != null ? width : "";
  let isSticky = sticky ? `${PREFIX2}-sticky` : "";
  const collapseItem = getComponentByName(children, "CollapseItem");
  return /* @__PURE__ */ jsx("div", {
    className: `${PREFIX2}-container ${isSticky}`,
    children: /* @__PURE__ */ jsx("div", {
      className: PREFIX2,
      style: componentStyle,
      children: collapseItem
    })
  });
}
function CollapseItem(props) {
  const PREFIX2 = "wdu-collapse-item";
  const defaultOptions = {
    label: "\u9009\u9879\u4E00",
    expand: false
  };
  const options = Object.assign(defaultOptions, props);
  const {
    expand,
    label,
    children
  } = options;
  const bodyNode = useRef({});
  const [realHeight, setRealHeight] = useState("");
  const [isExpand, setExpand] = useState(expand);
  useEffect(() => {
    setRealHeight(`${bodyNode.current.scrollHeight}px`);
  }, [bodyNode]);
  let expandStyle = isExpand ? {
    height: realHeight
  } : {
    height: "0px"
  };
  let itemIndicator = isExpand ? `${PREFIX2}-expand` : "";
  const handleExpand = () => {
    setExpand(!isExpand);
  };
  return /* @__PURE__ */ jsxs("div", {
    className: `${PREFIX2}`,
    children: [/* @__PURE__ */ jsxs("div", {
      className: `${PREFIX2}-label`,
      onClick: handleExpand,
      children: [" ", /* @__PURE__ */ jsx("i", {
        className: `${PREFIX2}-indicator ${itemIndicator}`
      }), " ", label]
    }), children ? /* @__PURE__ */ jsx("div", {
      ref: bodyNode,
      className: `${PREFIX2}-body`,
      style: expandStyle,
      children
    }) : null]
  });
}
function CollapseNav(props) {
  const PREFIX2 = "wdu-collapse-item";
  const defaultOptions = {
    newTab: true
  };
  const options = Object.assign(defaultOptions, props);
  const {
    label,
    url,
    newTab
  } = options;
  return /* @__PURE__ */ jsx("div", {
    className: `${PREFIX2}-nav`,
    children: /* @__PURE__ */ jsx("a", {
      href: `#${url ? url : ""}`,
      target: newTab ? "_self" : "_blank",
      children: label
    })
  });
}
var mark = "";
var TYPE;
(function(TYPE2) {
  TYPE2["I"] = "important";
  TYPE2["L"] = "light";
  TYPE2["R"] = "remind";
})(TYPE || (TYPE = {}));
const PREFIX = "wdu-mark";
function Mark(props) {
  const defaultOptions = {
    type: TYPE.I
  };
  const options = Object.assign(defaultOptions, props);
  const {
    type,
    link,
    children
  } = options;
  const theClass = `${PREFIX} ${PREFIX}-${type}`;
  return /* @__PURE__ */ jsx("span", {
    className: theClass,
    children: link && link.length > 0 ? /* @__PURE__ */ jsx("a", {
      href: link,
      target: "_blank",
      children
    }) : children
  });
}
export { Aside, Button, Collapse, CollapseItem, CollapseNav, Container, Footer, Header, Main, Mark };
