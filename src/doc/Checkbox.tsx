import { IntroComponent } from './IntroComponent';
import { Checkbox } from '../components/Checkbox/Checkbox';

export default function () {
    const props = {
        title: 'Checkbox 复选按钮',
        position: 'checkbox',
        components: [
            {
                component: (
                    <div className='wdu-row'>
                        <Checkbox
                            label='选项一'
                            name='checkbox-option'
                            id='c1'
                        />

                        <Checkbox
                            label='选项二'
                            name='checkbox-option'
                            id='c2'
                        />

                        <Checkbox
                            label='选项三'
                            name='checkbox-option'
                            id='c3'
                        />

                        <Checkbox
                            label='选项四'
                            name='checkbox-option'
                            id='c4'
                        />
                    </div>
                ),
                code: `
<Checkbox label="选项一" name="checkbox-option" id='c1'/>

<Checkbox label="选项二" name="checkbox-option" id='c2'/>

<Checkbox label="选项三" name="checkbox-option" id='c3'/>
 
<Checkbox label="选项四" name="checkbox-option" id='c4'/>`,
            },
        ],
    };

    return <IntroComponent {...props} />;
}
