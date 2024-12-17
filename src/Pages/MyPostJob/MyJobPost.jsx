import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const MyJobPost = () => {

    const [jobs, setJobs] = useState([])
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
        .then(res => res.json())
        .then(data=>setJobs(data))
    }, [user.email])

    return (
        <div>
            <h2 className="3xl">posted jobs: {jobs.length}</h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Job Title</th>
        <th>Date Line</th>
        <th>application</th>
      </tr>
    </thead>
    <tbody>
     {
        jobs.map((job, index)=> <tr>
            <th>{index +1}</th>
            <td>{job.title}</td>
            <td>{job.applicationDeadline}</td>
            <td>
                <Link to={`/view-application/${job._id}`}>
                <button className='btn btn-link'>
                    view
                </button>
                </Link>
            </td>
          </tr>)
     }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyJobPost;