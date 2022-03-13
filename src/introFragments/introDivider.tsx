import { IntroComponent } from "../base/introComponent";
import { Divider } from "../components/Divider/Divider";

function IntroDivider () {
    const props = {
        title: 'Divider 分割线',
        position: 'divider',
        components: [
            {
                component: (
                    <div>
                        <p>Anim tempor enim laboris est minim id. Dolor ut deserunt voluptate amet duis non non anim aliqua exercitation labore dolor ex ea. Labore id anim deserunt fugiat dolore proident ipsum.</p>

                        <Divider />

                        <p>Anim tempor enim laboris est minim id. Dolor ut deserunt voluptate amet duis non non anim aliqua exercitation labore dolor ex ea. Labore id anim deserunt fugiat dolore proident ipsum.</p>
                    </div> ),
                info: '水平分割线（默认）'
            },
            {
                component: (
                    <div style={ { display: 'flex' } }>
                        <p style={ { flexBasis: 'auto' } }>Anim tempor enim laboris est minim id. Dolor ut deserunt voluptate amet duis non non anim aliqua exercitation labore dolor ex ea. Labore id anim deserunt fugiat dolore proident ipsum.</p>

                        <Divider direction={ 'vertical' } />

                        <p style={ { flexBasis: 'auto' } }>Anim tempor enim laboris est minim id. Dolor ut deserunt voluptate amet duis non non anim aliqua exercitation labore dolor ex ea. Labore id anim deserunt fugiat dolore proident ipsum.</p>

                        <Divider direction={ 'vertical' } />

                        <p style={ { flexBasis: 'auto' } }>Anim tempor enim laboris est minim id. Dolor ut deserunt voluptate amet duis non non anim aliqua exercitation labore dolor ex ea. Labore id anim deserunt fugiat dolore proident ipsum.</p>
                    </div> ),
                info: '垂直分割线'
            },
        ],
        code: ''
    };

    return <IntroComponent { ...props } />;
}

export { IntroDivider };