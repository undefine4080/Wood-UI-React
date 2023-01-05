import { useRouteError } from "react-router-dom";

function NotFound() {
    const error = useRouteError();
    
    return (
        <div>
            组件开发中....
        </div>
    );
}

export default NotFound;