import { IntroComponent } from "../base/introComponent";
import { Collapse, CollapseItem, CollapseNav } from "../components/Collapse/Collapse";
export default function ()
{
    const props = {
        title: 'Button 按钮',
        components: [
            {
                component: (
                    <Collapse>
                        <CollapseItem label="选项1">
                            Cillum ut est ea eu. Culpa in commodo cupidatat adipisicing ut fugiat ad nostrud sit veniam. Lorem eiusmod in do aliqua nostrud est ex irure exercitation incididunt sunt cillum voluptate pariatur. Cupidatat exercitation labore officia labore ex Lorem amet duis voluptate non id cupidatat. Officia incididunt incididunt tempor officia laborum laboris adipisicing minim proident ad tempor commodo deserunt.
                        </CollapseItem>

                        <CollapseItem label="选项二">
                            <CollapseNav label="Apple官网" url="www.apple.com" newTab={ false } />
                            <CollapseNav label="Google官网" url="www.google.com" />
                        </CollapseItem>

                    </Collapse>
                ),
                info: '主要按钮'
            }
        ],
        code: ''
    };

    return <IntroComponent { ...props } />;
}