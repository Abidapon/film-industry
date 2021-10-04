import React from 'react';

const AboutUs = () => {
    return (
        <div className='container my-5'>
            <div className='d-flex my-5 '>
                <div className='col-md-8'>
                    <h1>What <span className="text-info">We</span> teach?</h1>
                    <p className="para">
                    The winner at Japan's Good Design Award this year is a newly-invented instrument by Yamaha. The Venova is a cross between a saxophone and a recorder. The name is a portmanteau of the Latin words “ventus” for wind, and “nova” for new. Music education is a field of practice in which educators are trained for careers as elementary or secondary music teachers, school or music conservatory ensemble directors. Music education is also a research area in which scholars do original research on ways of teaching and learning music.
                    of vocabulary in a short amount of time.
                    </p>
                </div>
                <div className='col-md-4'>
                    <img className="w-75 rounded" src="https://laughing-hodgkin-a9074c.netlify.app/5.jpeg" alt="healthy food"></img>
                </div>
            </div>
            <div className='d-flex my-5'>
                <div className='col-md-4'>
                    <img className="w-75 rounded" src="https://laughing-hodgkin-a9074c.netlify.app/3.jpeg" alt="healthy food"></img>
                </div>
                <div className='col-md-8'>
                    <h1>How <span className="text-info">We</span> teach?</h1>
                    <p className="para">
                    What is the process of learning?
                    There are six interactive components of the learning process: attention, memory, language, processing and organizing, graphomotor (writing) and higher order thinking. These processes interact not only with each other, but also with emotions, classroom climate, behavior, social skills, teachers and family.
                     </p>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;