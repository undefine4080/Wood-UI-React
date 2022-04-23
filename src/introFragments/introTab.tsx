import { IntroComponent } from "../base/introComponent";
import { Tab, TabPane } from "../components/Tab/Tab";
export default function () {
    const props = {
        title: 'Tab 动态面板',
        position: 'tab',
        components: [
            {
                component: (
                    <Tab>
                        <TabPane name="面板一">一一一：：：Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi explicabo dolores animi nobis fugiat temporibus alias et ea provident illo optio, itaque adipisci! Beatae pariatur velit veritatis. Consequuntur, eum minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque odio alias est accusamus possimus itaque repudiandae ipsam. Aspernatur repellat necessitatibus, labore similique, et earum beatae dignissimos dolore hic aut dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam vero architecto sapiente eos molestiae aliquid maiores. Tempora commodi corporis, ducimus unde voluptates non accusamus iusto aspernatur dolor eligendi impedit! Dolore!</TabPane>

                        <TabPane name="面板二">二二二：：：Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae blanditiis ut repudiandae, placeat iure ducimus totam deserunt porro numquam odio provident. Distinctio necessitatibus assumenda culpa itaque, alias ullam cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, consequuntur. Nostrum dolorem nulla natus doloremque ea cumque quia vitae optio pariatur minus. In ipsum ex totam unde tempora eum. Eaque?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio voluptate quas adipisci, tempora obcaecati quod! Ipsam eaque atque quia, quod reiciendis impedit rerum beatae suscipit necessitatibus. Excepturi molestias ea ipsam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel asperiores deleniti, unde aperiam non earum id ratione nostrum, quod, voluptatem iste perferendis rerum autem. Reprehenderit quod ea officia fuga ad!</TabPane>
                    </Tab>
                )
            }
        ],
        code: `
        
        `
    };

    return <IntroComponent { ...props } />;
}