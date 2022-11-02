import { IntroComponent } from "@base/introComponent";
import Button from "@component/Button/Button";
import Tooltip from "@component/Tooltip/Tooltip";

export default function () {
  const props = {
    title: "Tooltip 文字提示",
    position: "tooltip",
    components: [
      {
        title: "",
        component: (
          <>
            <Tooltip text="文字提示">
              <Button>上</Button>
            </Tooltip>

            <Tooltip text="文字提示" position="bottom">
              <Button>下</Button>
            </Tooltip>

            <Tooltip text="文字提示" position="left">
              <Button>左</Button>
            </Tooltip>

            <Tooltip text="文字提示" position="right">
              <Button>右</Button>
            </Tooltip>
          </>
        ),
        info: "",
        code: ``,
      },
      {
        title: "",
        component: (
          <>
            <Tooltip text="Laborum voluptate Lorem duis sit qui. Enim ut ea cupidatat amet adipisicing nostrud dolor mollit sint cupidatat qui">
              <Button>文字提示</Button>
            </Tooltip>
          </>
        ),
        info: "",
        code: ``,
      },
    ],
  };

  return <IntroComponent {...props} />;
}
