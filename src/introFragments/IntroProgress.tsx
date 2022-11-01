import { IntroComponent } from "@base/introComponent";
import Button from "@component/Button/Button";
import Progress from "@component/Progress/Progress";
import { useState } from "react";

export default function () {
  const [value, setValue] = useState(0);

  const add = () => {
    if (value < 100) {
      setValue(value + 10);
    }
  };

  const sub = () => {
    if (value > 0) {
      setValue(value - 10);
    }
  };

  const props = {
    title: "Progress 进度条",
    position: "progress",
    style: { display: "block" },
    components: [
      {
        title: "",
        component: (
          <>
            <Progress max={100} value={20} size="small"></Progress>
            <Progress max={100} value={50} size="normal"></Progress>
            <Progress max={100} value={80} size="large"></Progress>
            <Progress max={100} value={100}></Progress>
          </>
        ),
        info: "",
        code: ``,
      },
      {
        title: "",
        component: (
          <>
            <Progress max={100} value={value}></Progress>

            <Button onClick={sub} disabled={value <= 0}>
              -10
            </Button>

            <Button onClick={add} disabled={value >= 100}>
              +10
            </Button>
          </>
        ),
        info: "",
        code: ``,
      },
    ],
  };

  return <IntroComponent {...props} />;
}
