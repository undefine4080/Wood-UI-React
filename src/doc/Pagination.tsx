import { IntroComponent } from "./IntroComponent";
import Pagination from "../components/Pagination/Pagination";
import { propsIntroComponent } from "types/commonInterface";

export default function () {
    const props: propsIntroComponent = {
        title: 'Pagination 分页',
        position: 'pagination',
        components: [
            {
                component: <Pagination total={ 1300 } maxPageCount={ 5 } />,
                info: '',
                code: `
<Pagination total={ 1300 } maxPageCount={ 5 } />`
            }
        ],
    };

    return <IntroComponent { ...props } />;
};