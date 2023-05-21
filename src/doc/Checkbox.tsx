import { IntroComponent } from "../base/components/IntroComponent";
import Checkbox from '../components/Checkbox/Checkbox';

export default function () {
    const props = {
        title: 'Checkbox 复选按钮',
        position: 'checkbox',
        components: [
            {
                component: (
                    <>
                        <Checkbox label="选项一" name="checkbox-option" id='c1' value="1" />

                        <Checkbox label="选项二" name="checkbox-option" id='c2' value="2" />

                        <Checkbox label="选项三" name="checkbox-option" id='c3' value="3" />

                        <Checkbox label="选项四" name="checkbox-option" id='c4' value="4" />
                    </>
                ),
                code: `
<Checkbox label="选项一" name="checkbox-option" id='c1' value="1" />

<Checkbox label="选项二" name="checkbox-option" id='c2' value="2" />

<Checkbox label="选项三" name="checkbox-option" id='c3' value="3" />
 
<Checkbox label="选项四" name="checkbox-option" id='c4' value="4" />`
            },
        ],
    };

    return <IntroComponent {...props} />;
};