import React from "react";
import {useRouteError} from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>ối giời ôi</h1>
            <p>xin lỗi , app đã bị lỗi </p>
            <p>
                <i>{error.StatusText || error.message}</i>
            </p>
        </div>
    )
}