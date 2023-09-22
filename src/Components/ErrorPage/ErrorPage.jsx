// import React from 'react';

import { Link } from "react-router-dom";

const ErrorPage = () => {
        return (
                <div>
                        <h1>Oops!!!</h1>
                        <Link to="/">Go to back Home</Link>
                </div>
        );
};

export default ErrorPage;