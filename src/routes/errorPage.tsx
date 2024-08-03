import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl p-5">Error occurred...</h1>
            <p>{JSON.stringify(error)}</p>
        </div>
    )
}