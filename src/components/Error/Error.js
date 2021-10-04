import React from 'react';

const Error = () => {
    return (
        <div className='col d-flex container align-items-center justify-content-center'>
            <h1 className='p-5 col-md-6 text-center'>
                <span className='text-danger'>Oops!</span> You're lost.
                The page you are looking for was not found.
            </h1>
        </div>
    );
};

export default Error;