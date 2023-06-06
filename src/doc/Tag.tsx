import { IntroComponent } from "@doc/IntroComponent";
import Tag from "@component/Tag/Tag";

export default function () {
  const props = {
    title: "Tag 标签",
    position: "tag",
    components: [
      {
        title: "",
        component: (
          <>
            <Tag value="标签1" type="important" />
            <Tag value="标签2" type="warn" />
            <Tag value="标签3" type="danger" />
            <Tag value="标签4" type="success" />
            <Tag value="标签5" type="plain" />
          </>
        ),
        info: "",
        code: ``,
      },
    ],
  };

  return <IntroComponent {...props} />;
}
