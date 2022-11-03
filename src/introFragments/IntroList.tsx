import { IntroComponent } from "@base/introComponent";
import List from "@component/List/List";
import Tag from "@component/Tag/Tag";

export default function () {
  const genListData = (count: number) => {
    const result = [];
    for (let i = 1; i < count; i++) {
      const item = {
        header: <Tag value={`项目-${i}`} type="success" />,
        content: `Incididunt cupidatat duis irure nisi aliqua dolor eu proident consectetur nisi aute. Id voluptate qui ea consectetur commodo minim excepteur eu sunt cupidatat-${i}`,
        footer: `Cupidatat et Lorem adipisicing eiusmod minim commodo nulla-${i}`,
      };
      result.push(item);
    }

    return result;
  };

  const props = {
    title: "List 列表",
    position: "list",
    components: [
      {
        title: "",
        component: (
          <List
            data={genListData(20)}
            height={500}
            headerKey="header"
            contentKey="content"
            footerKey="footer"
          />
        ),
        info: "",
        code: ``,
      },
    ],
  };

  return <IntroComponent {...props} />;
}
