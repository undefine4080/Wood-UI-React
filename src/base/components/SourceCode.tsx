import { useEffect, useRef, useState } from "react";
import * as monaco from 'monaco-editor';

// fix the 'worker error from monaco editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
self.MonacoEnvironment = {
    getWorker(_, label) {
        if (label === 'json') {
            return new jsonWorker();
        }
        if (label === 'css' || label === 'scss' || label === 'less') {
            return new cssWorker();
        }
        if (label === 'html' || label === 'handlebars' || label === 'razor') {
            return new htmlWorker();
        }
        if (label === 'typescript' || label === 'javascript') {
            return new tsWorker();
        }
        return new editorWorker();
    }
};

interface propsSourceCode {
    code: string;
    show: boolean;
}

function SourceCode(props: propsSourceCode) {
    const { code, show } = props;

    const refCode = useRef<any>();
    const [editorIns, setEditorIns] = useState<any>();
    const [containerHeight, setContainerHeight] = useState<string | number>(0);

    const [style, setStyle] = useState<any>({
        overflow: 'hidden',
        height: 0,
        transition: 'all 0.1s ease'
    });

    const editorConfig = {
        language: 'html',
        value: code,
        theme: 'vs-dark',
        minimap: {
            enabled: false
        },
        scrollBeyondLastLine: false,
        readOnly: true,
    };

    useEffect(() => {
        if (show) {
            const instance = monaco.editor.create(refCode.current, editorConfig)
            setEditorIns(instance);
        } else {
            editorIns && editorIns.dispose();
            setEditorIns(null);
            setContainerHeight(0);
        }
    }, [show]);

    useEffect(() => {
        if (editorIns) {
            const lineCount = editorIns.getModel().getLineCount();
            const lineHeight = editorIns.getOption(monaco.editor.EditorOption.lineHeight);
            setContainerHeight(lineCount * lineHeight + 'px');
        }
    }, [editorIns]);

    useEffect(() => {
        if (containerHeight) {
            setStyle((prev: any) => ({ ...prev, height: containerHeight }));
        } else {
            setStyle((prev: any) => ({ ...prev, height: 0 }));
        }
    }, [containerHeight]);

    useEffect(() => {
        if (show && editorIns) {
            setTimeout(() => {editorIns.layout()}, 120)
        }
    }, [style]);

    return <div ref={refCode} style={style}></div>;
}

export default SourceCode;