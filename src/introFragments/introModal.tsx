import { IntroComponent } from "../base/introComponent";
import Modal from "../components/Modal/Modal";
import { Button } from "../components/Button/Button";
import { useState } from "react";

const src = 'https://cdn.pixabay.com/photo/2022/08/15/05/23/sun-rays-7387131_1280.jpg';

const link = 'https://pixabay.com/zh/photos/sun-rays-forest-koyasan-temple-fog-7387131/';

export default function () {
    const [ visible, setVisible ] = useState( {
        m1: false,
        m2: false,
        m3: false,
    } );

    const props = {
        title: 'Modal 模态框',
        position: 'modal',
        components: [
            {
                component: (
                    <Button onClick={ () => {
                        setVisible( { ...visible, m1: true } );
                    } }>
                        默认模态框
                        <Modal
                            title="这是模态框的标题"
                            visible={ visible.m1 }
                            onClose={ () => setVisible( { ...visible, m1: false } ) }
                        >这是一段文字内容 </Modal>
                    </Button>
                ),
            },
            {
                component: (
                    <Button onClick={ () => {
                        setVisible( { ...visible, m2: true } );
                    } }>
                        背景遮罩
                        <Modal
                            title="这是模态框的标题"
                            visible={ visible.m2 }
                            onClose={ () => setVisible( { ...visible, m2: false } ) }
                            mask
                        >这是一段文字内容 </Modal>
                    </Button>
                ),
            },
            {
                component: (
                    <Button onClick={ () => {
                        setVisible( { ...visible, m3: true } );
                    } }>
                        全屏模态框
                        <Modal
                            title="这是模态框的标题"
                            visible={ visible.m3 }
                            fullscreen
                            onClose={ () => setVisible( { ...visible, m3: false } ) }
                        >这是一段文字内容 </Modal>
                    </Button>
                ),
            },
        ],
        code: `
        
        `
    };

    return <IntroComponent { ...props } />;
};