import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]); 

    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res => res.json() )
        .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <h1>jobs</h1>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-col-2 lg:grid-cols-3'>
                {
                    jobs.map(job => <HotJobCard key={job._id} job = {job}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;