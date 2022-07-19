import { IntroComponent } from "../base/introComponent";
import { Pagination } from "../components/Pagination/Pagination";

export default function () {
    const props = {
        title: 'Pagination 分页',
        position: 'pagination',
        components: [
            {
                component: <Pagination total={ 1300 } maxPageCount={ 5 } />,
            }
        ],
        code: `
        
        `
    };

    return <IntroComponent { ...props } />;
};