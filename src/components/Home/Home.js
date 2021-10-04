import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Instruments from './Instruments';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./istruments.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='p-5 bg-light'>
            <h2 className='mb-3'>Learn <span className='text-info'>Music</span> With Expert</h2>
            <div className='col-md-9 mx-auto'>
                <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./1.jpg" className="d-block align-items-center w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="2.jpg" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="3.jpg" className="d-block w-100" alt="..."></img>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div >
                <h1 className='text-center mt-5'>Our <span className='text-info'>Courses</span> </h1>
                <div className='row row-cols-md-4 col-md-12 g-4 mt-2'>
                    {
                        products.map(product => <Instruments key={product.key} product={product}></Instruments>)
                    }
                </div>
            </div>
            <div className='mt-3'>
                <button className='btn btn-primary'>More Services</button>
            </div>

        </div>

    );
};

export default Home;