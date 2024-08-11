import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    // could not find type
    const error: any = useRouteError();
    console.error(error);
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl p-5">Looks like something went wrong...</h1>
            <h2 className="text-2xl">{`${error.status} ${error.statusText}`}</h2>
        </div>
    )
}