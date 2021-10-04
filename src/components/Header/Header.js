import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='bg-primary p-3'>
            <div className="d-flex row justify-content-center align-items-center container p-3">
                <h1 className='text-white col-md-6  fw-bold'>Welcome To <span className='text-warning'>Music</span> Zone...!</h1>
            </div>
            <nav className=' p-2 g-3 '>

                <Link className='text-decoration-none text-warning me-2 fw-bold p-2 fs-5' to="/">Home</Link>
                <Link className='text-decoration-none text-warning me-2 fw-bold p-2 fs-5' to="/about">About</Link>

                <Link className='text-decoration-none text-warning me-2 fw-bold p-2 fs-5' to="/services">Services</Link>

                <Link className='text-decoration-none text-warning me-2 fw-bold p-2 fs-5' to="/achivements">Achivements</Link>

            </nav>
        </div>
    );
};

export default Header;