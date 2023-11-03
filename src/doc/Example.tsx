import { Button } from '@component/Button/Button';
import { Input } from '@component/Input/Input';
import { useRef } from 'react';

function Example() {
    const refa = useRef();

    return (
        <div>
            <Input ref={refa}></Input>

            <Button onClick={() => console.log(refa.current)}>获取实例</Button>

            <Button onClick={() => refa.current.clear()}>清除内容</Button>

            <Button onClick={() => refa.current.setValue('asjdfaiusijfsak')}>
                设置内容
            </Button>
        </div>
    );
}

export { Example };
