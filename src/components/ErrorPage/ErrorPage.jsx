import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error=useRouteError()
    return (
        <div>
            <h2>Ooops!</h2>
        </div>
    );
};

export default ErrorPage;