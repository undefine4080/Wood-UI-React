import { IntroComponent } from "../base/introComponent";
import Divider from "../components/Divider/Divider";

function IntroDivider() {
  const props = {
    title: "Divider 分割线",
    position: "divider",
    components: [
      {
        title: "水平分割线",
        component: (
          <div>
            <p>
              Anim tempor enim laboris est minim id. Dolor ut deserunt voluptate
              amet duis non non anim aliqua exercitation labore dolor ex ea.
              Labore id anim deserunt fugiat dolore proident ipsum.
            </p>

            <Divider />

            <p>
              Anim tempor enim laboris est minim id. Dolor ut deserunt voluptate
              amet duis non non anim aliqua exercitation labore dolor ex ea.
              Labore id anim deserunt fugiat dolore proident ipsum.
            </p>
          </div>
        ),
        info: "默认为水平分割",
        code: `
<div>
  <p>Anim tempor enim laboris est minim id. Dolor ut deserunt voluptate 
    amet duis non non anim aliqua exercitation labore dolor ex ea. Labore id 
    anim deserunt fugiat dolore proident ipsum.</p>

  <Divider />

  <p>Anim tempor enim laboris est minim id. Dolor ut deserunt voluptate 
    amet duis non non anim aliqua exercitation labore dolor ex ea. Labore id 
    anim deserunt fugiat dolore proident ipsum.</p>
</div>`,
      },
      {
        title: "垂直分割线",
        component: (
          <div>
            <p style={{ flexBasis: "auto" }}>
              Anim tempor enim laboris est minim id. Dolor ut deserunt voluptate
              amet duis non non anim aliqua exercitation labore dolor ex ea.
              Labore id anim deserunt fugiat dolore proident ipsum.
            </p>

            <Divider direction={"vertical"} />

            <p style={{ flexBasis: "auto" }}>
              Anim tempor enim laboris est minim id. Dolor ut deserunt voluptate
              amet duis non non anim aliqua exercitation labore dolor ex ea.
              Labore id anim deserunt fugiat dolore proident ipsum.
            </p>

            <Divider direction={"vertical"} />

            <p style={{ flexBasis: "auto" }}>
              Anim tempor enim laboris est minim id. Dolor ut deserunt voluptate
              amet duis non non anim aliqua exercitation labore dolor ex ea.
              Labore id anim deserunt fugiat dolore proident ipsum.
            </p>
          </div>
        ),
        info: 'direction = "vertical"',
        code: `
<div>
  <p style={ { flexBasis: 'auto' } }>Anim tempor enim laboris est minim id. 
    Dolor ut deserunt voluptate amet duis non non anim aliqua exercitation 
    labore dolor ex ea. Labore id anim deserunt fugiat dolore proident ipsum.
  </p>

  <Divider direction={ 'vertical' } />

  <p style={ { flexBasis: 'auto' } }>Anim tempor enim laboris est minim id. 
    Dolor ut deserunt voluptate amet duis non non anim aliqua exercitation 
    labore dolor ex ea. Labore id anim deserunt fugiat dolore proident ipsum.
  </p>

  <Divider direction={ 'vertical' } />

  <p style={ { flexBasis: 'auto' } }>Anim tempor enim laboris est minim id. 
    Dolor ut deserunt voluptate amet duis non non anim aliqua exercitation 
    labore dolor ex ea. Labore id anim deserunt fugiat dolore proident ipsum.
  </p>
</div>`,
      },
      {
        title: "带文字说明的分割线",
        component: (
          <div style={{ flexGrow: 1 }}>
            <Divider text="点分割线" />

            <Divider text="实线分割线" />
          </div>
        ),
        info: "",
        code: `
<div style={{ flexGrow: 1 }}>
  <Divider type="dot" text="点分割线" />
  <Divider type="solid" text="实线分割线" />
</div>`,
      },
    ],
  };

  return <IntroComponent {...props} />;
}

export default IntroDivider;
