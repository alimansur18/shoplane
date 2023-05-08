import React from 'react';
import { MdOutlineErrorOutline } from 'react-icons/md'

const ErrorPage = () => {
    return (
        <div style={{ margin: '5rem' }}>
            <MdOutlineErrorOutline size={'5rem'}/>
            <h1>Oops! Something went wrong.</h1>
            <h2>Cannot find this page.</h2>
        </div>
    );
};

export default ErrorPage;
