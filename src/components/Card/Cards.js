import React from 'react';

const Cards = (props) => {
    const { srvcName, duration, details, cost, img } = props.pd;
    return (
        <div className="card-group">
            <div className="card p-3 rounded-3 shadow-lg border border-light">
                <img className='card-img-top w-75 mx-auto rounded' src={img} alt="" />
                <div className="card-body text-center">
                    <h3 className="text-muted text-center">{srvcName}</h3>
                    <h6>Duration: <small className='fw-normal'>{duration}</small></h6>
                    <h6> <small className='fw-normal'>{details}</small></h6>
                    <h6 className='fw-normal'>Costs:<span className='text-danger '> $</span><small className='fw-bold' >{cost}</small ></h6>
                    <button className='btn btn-success w-50'>Enroll</button>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>
    );
};

export default Cards;