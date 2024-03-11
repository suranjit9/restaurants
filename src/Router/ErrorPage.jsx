import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="w-1/2 mx-auto text-center mt-[15%]" >
      <h1 className="text-5xl font-semibold mb-3 text-red-500">Oops!</h1>
      <p className="text-xl font-semibold">Sorry, an unexpected error has occurred.</p>
      <p className="text-xl font-semibold">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
    );
};

export default ErrorPage;