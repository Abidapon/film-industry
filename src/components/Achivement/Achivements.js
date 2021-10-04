import React from 'react';

const Achivements = () => {
    return (
        <div>
            <h1 className='my-2'>Our Achivements</h1>
            <div className="card-group col container">

                <div className="card col-md-3 p-3 m-3 rounded-3 shadow-lg border border-light">
                    <img className='card-img-top w-50 mx-auto rounded' src='https://laughing-hodgkin-a9074c.netlify.app/2.jpeg' alt="" />
                    <div className="card-body text-center">
                        <h2>Best Music Course Award 2021</h2>
                        <p>
                            We won best music courses award 2021.
                            About 200 music institute participated in the competetion and we were good enough to win this competetion.
                        </p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 5 mins ago</small>
                    </div>
                </div>
                <div className="card col-md-3 m-3 p-3 rounded-3 shadow-lg border border-light">
                    <img className='card-img-top w-50 mx-auto rounded' src='https://laughing-hodgkin-a9074c.netlify.app/3.jpeg' alt="" />
                    <div className="card-body text-center">
                        <h2>Best Support Award 2020</h2>
                        <p>
                            We won bestsupport award 2021.
                            About 200 music institute participated in the competetion and we were good enough to win this competetion.
                        </p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 1 mins ago</small>
                    </div>
                </div>
                <div className="card col-md-3 m-3 p-3 rounded-3 shadow-lg border border-light">
                    <img className='card-img-top w-50 mx-auto rounded' src='https://laughing-hodgkin-a9074c.netlify.app/5.jpeg' alt="" />
                    <div className="card-body text-center">
                        <h2>Music Club 2021</h2>
                        <p>
                            We won best music club award 2021.
                            About 200 music institute participated in the competetion and we were good enough to win this competetion.
                        </p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 10 mins ago</small>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Achivements;