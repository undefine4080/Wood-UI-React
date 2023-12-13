import {
    LegacyRef,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';
import { TreeContext } from './Tree';

const T = 'wdu-tree__node';
const CONTAINER = {
    EXPAND: 'auto',
    COLLAPSE: '0',
};
const SIZE = {
    small: 25,
    normal: 30,
    large: 40,
};

function TreeNode(props: propsTreeNode) {
    const { label, children, depth } = props;

    const { size } = useContext(TreeContext);

    const refNodeChild = useRef<HTMLDivElement>(null);
    const lastNodeContainerHeight = useRef('');
    const [expand, setExpand] = useState(false);
    const [nodeContainerHeight, setNodeContainerHeight] = useState(
        CONTAINER.COLLAPSE,
    );

    useEffect(() => {
        if (expand) {
            const childNodeCounts = children.length;
            if (childNodeCounts) {
                setNodeContainerHeight(
                    lastNodeContainerHeight.current ||
                        `${childNodeCounts * SIZE[size!]}px`,
                );
            }
        } else {
            if (refNodeChild.current) {
                const { clientHeight } = refNodeChild.current;
                if (clientHeight) {
                    lastNodeContainerHeight.current =
                        refNodeChild.current.style.height = `${clientHeight}px`;

                    setTimeout(() => {
                        setNodeContainerHeight('0');
                    }, 50);
                }
            }
        }
    }, [expand]);

    return (
        <div className={`${T}`}>
            <div className={`${T}-label`} onClick={() => setExpand(!expand)}>
                <span style={{ marginLeft: `${depth * 20}px` }}>
                    <i
                        className={
                            expand ? 'wdu-icon-expand' : 'wdu-icon-collapse'
                        }
                        style={{
                            visibility: children ? 'visible' : 'hidden',
                        }}></i>

                    {label}
                </span>
            </div>

            {children?.length && (
                <div
                    ref={refNodeChild}
                    className={`${T}-children`}
                    style={{ height: `${nodeContainerHeight}` }}
                    onTransitionEnd={() => {
                        setNodeContainerHeight(
                            expand ? CONTAINER.EXPAND : CONTAINER.COLLAPSE,
                        );
                    }}>
                    {children}
                </div>
            )}
        </div>
    );
}

export default TreeNode;
