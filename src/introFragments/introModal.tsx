import { useState } from "react";
import { IntroComponent } from "@base/introComponent";
import Modal from "@component/Modal/Modal";
import Button from "@component/Button/Button";
import { Row } from "@component/Layout/Layout";

const src =
  "https://cdn.pixabay.com/photo/2022/08/15/05/23/sun-rays-7387131_1280.jpg";

const link =
  "https://pixabay.com/zh/photos/sun-rays-forest-koyasan-temple-fog-7387131/";

export default function () {
  const [visible, setVisible] = useState({
    m1: false,
    m2: false,
    m3: false,
  });

  const props = {
    title: "Modal 模态框",
    position: "modal",
    components: [
      {
        title: "默认模态框",
        component: (
          <Button
            type="important"
            onClick={() => {
              setVisible({ ...visible, m1: true });
            }}
          >
            打开 Modal1
            <Modal
              title="这是模态框的标题"
              visible={visible.m1}
              onClose={() => setVisible({ ...visible, m1: false })}
            >
              这是一段文字内容{" "}
            </Modal>
          </Button>
        ),
        code: `
<Modal
    title="这是模态框的标题"
    visible={ visible.m1 }
    onClose={ () => setVisible( { ...visible, m1: false } ) }
>这是一段文字内容 </Modal>`,
      },
      {
        title: "使用背景遮罩",
        component: (
          <Button
            type="important"
            onClick={() => {
              setVisible({ ...visible, m2: true });
            }}
          >
            打开 Modal2
            <Modal
              title="这是模态框的标题"
              visible={visible.m2}
              width="600px"
              onClose={() => setVisible({ ...visible, m2: false })}
              mask
            >
              这是一段文字内容{" "}
              <Row justify="end">
                <Button onClick={() => setVisible({ ...visible, m2: false })}>
                  取消
                </Button>
                <Button
                  type="important"
                  onClick={() => setVisible({ ...visible, m2: false })}
                >
                  确认
                </Button>
              </Row>
            </Modal>
          </Button>
        ),
        code: `
<Modal
    title="这是模态框的标题"
    visible={ visible.m2 }
    onClose={ () => setVisible( { ...visible, m2: false } ) }
    mask
>这是一段文字内容 </Modal>`,
      },
      {
        title: "启用全屏模态框",
        component: (
          <Button
            type="important"
            onClick={() => {
              setVisible({ ...visible, m3: true });
            }}
          >
            打开 Modal3
            <Modal
              title="这是模态框的标题"
              visible={visible.m3}
              fullscreen
              onClose={() => setVisible({ ...visible, m3: false })}
            >
              这是一段文字内容{" "}
            </Modal>
          </Button>
        ),
        code: `
<Modal
    title="这是模态框的标题"
    visible={ visible.m3 }
    fullscreen
    onClose={ () => setVisible( { ...visible, m3: false } ) }
>这是一段文字内容 </Modal>`,
      },
    ],
  };

  return <IntroComponent {...props} />;
}
