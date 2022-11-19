import { useEffect, useRef, useState } from "react";
interface cssClass {
  base: string;
  [key: string]: string;
}

/**
 * 
 * @param cssClassMap key-value map ex:
 * {
    base: 'wdu-modal',
    mask: 'wdu-modal__mask',
    visible: 'wdu-modal__visible',
    hidden: 'wdu-modal__hidden'
  };
 * @returns 
 */
function useCssClassManager(cssClassMap: cssClass) {
  const [classMap, setClassMap] = useState<cssClass>({
    base: cssClassMap.base,
  });
  const [classList, setClassList] = useState("");

  const removeClassName = (classKey: string) => {
    setClassMap((prev) => {
      const template = { ...prev };
      delete template[classKey];
      return template;
    });
  };

  const addClassName = (classKey: string) => {
    setClassMap((prev) => ({ ...prev, [classKey]: cssClassMap[classKey] }));
  };

  useEffect(() => {
    setClassList(Object.values(classMap).join(" "));
  }, [classMap]);

  return {
    removeClassName,
    addClassName,
    classList,
  };
}

/**
 *
 * @param target target element which are observed
 * @param callback anything to do after loaded
 * @param isLazy flag for lazy loading
 */
function useLazyLoad(target: any, callback: () => void, isLazy: boolean) {
  const threshold = 0.3;
  const loaded = useRef(false);

  useEffect(() => {
    if (!target.current || !isLazy) {
      callback();
      return;
    }

    const options = {
      root: null,
      rootMargin: "0px",
      threshold,
    };

    const observer = new IntersectionObserver((entries) => {
      const currentView = entries[0].intersectionRatio;
      if (currentView >= threshold && !loaded.current) {
        callback();
        loaded.current = true;
      }
    }, options);

    observer.observe(target.current);

    return () => {
      observer.disconnect();
    };
  }, []);
}

/**
 * toggle the callback execution if the target is display in the viewport
 * @param target
 * @param visible callback while outside the viewport
 * @param hidden callback while inside the viewport
 */
function useElementDisplay(target: any, visible: Function, hidden: Function) {
  useEffect(() => {
    if (!target.current) return;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      const currentView = entries[0].intersectionRatio;
      if (currentView >= options.threshold) {
        visible();
      } else {
        hidden();
      }
    }, options);

    observer.observe(target.current);

    return () => {
      observer.disconnect();
    };
  }, []);
}

export { useCssClassManager, useLazyLoad, useElementDisplay };
