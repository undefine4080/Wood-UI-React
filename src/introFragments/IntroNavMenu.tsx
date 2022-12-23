import { IntroComponent } from "@base/components/IntroComponent";
import { NavMenu, NavMenuItem, SubNavMenu } from "@component/NavMenu/NavMenu";

export default function () {
  const props = {
    title: "NavMenu 导航菜单",
    position: "navMenu",
    components: [
      {
        title: "",
        component: (
          <NavMenu>
            <NavMenuItem label="菜单 1" icon={""}/>
            <SubNavMenu label={"菜单-2"}>
              <NavMenuItem label="菜单 2-1" icon={""} />
            </SubNavMenu>
            <SubNavMenu label={"菜单-3"}>
              <NavMenuItem label="菜单 3-1" icon={""} />
            </SubNavMenu>
          </NavMenu>
        ),
        info: "",
        code: ``,
      },
    ],
  };

  return <IntroComponent {...props} />;
}
