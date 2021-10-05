import React from 'react';

const AboutUs = () => {
    return (
        <div className='container my-5'>
            <div className='d-flex my-5 '>
                <div className='col-md-8'>
                    <h1>What <span className="text-info">We</span> teach?</h1>
                    <p className="para">
                    The Importance of Learning English. ... As the third most widely spoken language in the world, English is widely spoken and taught in over 118 countries and is commonly used around the world as a trade language or diplomatic language. It is the language of science, aviation, computers, diplomacy and tourism.
                    </p>
                </div>
                <div className='col-md-4'>
                    <img className="w-75 rounded" src="https://i.ibb.co/X4cPsDz/images-1.jpg" alt="healthy food"></img>
                </div>
            </div>
            <div className='d-flex my-5'>
                <div className='col-md-4'>
                    <img className="w-75 rounded" src="https://i.ibb.co/zbnDQWb/download.jpg" alt="healthy food"></img>
                </div>
                <div className='col-md-8'>
                    <h1>How <span className="text-info">We</span> teach?</h1>
                    <p className="para">
                    What is the process of learning?
                    English is a language that started in Anglo-Saxon England. It is originally from Anglo-Frisian and Old Saxon dialects. English is now used as a global language. There are about 375 million native speakers (people who use it as their first language) in the world. Frisian is the language closest to English.
                     </p>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;