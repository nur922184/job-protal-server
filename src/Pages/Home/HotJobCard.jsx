import React from 'react';
import { FaDollarSign, FaMapMarkerAlt } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';
import { Link } from 'react-router-dom';

const HotJobCard = ({ job }) => {

    const { title,
        location,
        _id,
        salaryRange,
        company,
        description,
        applicationDeadline,
        company_logo } = job;

    return (
        <div>
            <div className="max-w-sm p-4 bg-white shadow-md rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                    <img
                        src={company_logo}
                        alt={`${company} Logo`}
                        className="w-12 h-12 rounded-full mr-3"
                    />
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">{company}</h2>
                        <p className="text-sm text-gray-500 flex gap-2 items-center"><FaMapMarkerAlt></FaMapMarkerAlt> {location}</p>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
                <div className="flex items-center text-gray-500 mb-3">
                    <MdAccessTime className="mr-1" />
                    <span className="text-sm capitalize">{applicationDeadline}</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{description}</p>
                {/* <div className="mb-3">
                    <h4 className="text-sm font-medium text-gray-800 mb-1">Requirements:</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                        {requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                        ))}
                    </ul>
                </div> */}
                <div className="flex items-center text-blue-600 font-bold text-lg mb-3">
                    <FaDollarSign className="mr-1" />
                    <span>
                        {salaryRange.min} - {salaryRange.max} {salaryRange.currency}/Month
                    </span>
                </div>
                <Link to={`jobs/${_id}`}>
                <button className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                    Apply Now
                </button>
                </Link>
            </div>
        </div>
    );
};

export default HotJobCard;