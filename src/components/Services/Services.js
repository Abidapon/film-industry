import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cards from '../Card/Cards';

const Services = () => {

    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('./allInstruments.JSON')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className='p-5 bg-light container'>
            <h2 className='text-center mt-2'>Our Services</h2>
            <div className='row row-cols-md-3 col-md-12 g-4 mt-2'>
                {
                    product.map(pd => <Cards key={pd.key} pd={pd}></Cards>)
                }
            </div>

        </div>

    );

};

export default Services;