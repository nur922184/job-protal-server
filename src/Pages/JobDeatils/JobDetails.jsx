import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const job = useLoaderData();
  console.log(job)
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-200">
      <div className="flex items-center mb-6">
        <img
          src={job.company_logo}
          alt={`${job.company} Logo`}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">{job.company}</h2>
          <p className="text-sm text-gray-500">{job.location}</p>
        </div>
      </div>

      <h3 className="text-3xl font-bold text-gray-800 mb-4">{job.title}</h3>
      <div className="flex items-center text-gray-500 mb-6">
        <span className="text-sm capitalize mr-4">{job.jobType}</span>
        <span className="text-sm">{job.location}</span>
      </div>

      <p className="text-gray-600 mb-6">{job.description}</p>

      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Requirements:</h4>
        <ul className="list-disc pl-5 text-gray-600">
          {job.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Responsibilities:</h4>
        <ul className="list-disc pl-5 text-gray-600">
          {job.responsibilities.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </div>

      <div className="text-center">
        <Link to={`${job._id}`}>
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;