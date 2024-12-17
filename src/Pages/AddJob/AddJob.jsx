import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const AddJob = () => {
    const {user} = useAuth();
    const handleAddJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target)
        // console.log(formData.entries());
        const initialData = Object.fromEntries(formData.entries());
        // console.log(initialData)
        const { min, max, currency, ...newJob } = initialData
        newJob.salaryRange = {
            min, max, currency
        }
        newJob.Requirements = newJob.Requirements.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')
        console.log(newJob)

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your jobs  has been added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/my-post-job')
                }
            })
    }

    return (
        <div>
            <h2 className="3xl">post new job</h2>

            <form onSubmit={handleAddJob} className="card-body">
                {/* job title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name='title' placeholder="job title" className="input input-bordered" required />
                </div>
                {/* job location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">job Location</span>
                    </label>
                    <input type="text" placeholder="job Location" name='location' className="input input-bordered" required />
                </div>
                {/* job type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">job type</span>
                    </label>
                    <select defaultValue='Pick job type' className="select select-ghost w-full">
                    <option disabled>Pick  job type</option>
                    <option>full-time</option>
                    <option>Intern</option>
                    <option>Part-time</option>
                </select>
        </div>
                {/* job category type */ }
    <div className="form-control">
        <label className="label">
            <span className="label-text">job category</span>
        </label>
        <select defaultValue='Pick  job category type' className="select select-ghost w-full">
            <option disabled>Pick  job category type</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Teaching</option>
        </select>
    </div>
    {/* salary range  */ }
                <p>salary ranges</p>
                <div className='grid grid-col-1 ,md:grid-cols-3 lg:grid-cols-3  gap-4'>
                    <div className="form-control">
                        <input type="number" placeholder="Max" name='max' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="number" placeholder="Min" name='min' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <select defaultValue='Currency' name='currency' className="select select-ghost w-full">
                            <option disabled>Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>
                        </select>
                    </div>
                </div>
    {/* job description */ }
    <div className="form-control">
        <label className="label">
            <span className="label-text">Job description</span>
        </label>
        <textarea className="textarea" name='description' placeholder="Job description" required></textarea>
    </div>
    {/* Company Name */ }
    <div className="form-control">
        <label className="label">
            <span className="label-text">Company Name</span>
        </label>
        <input type="text" name='company' placeholder="Company Name" className="input input-bordered" required />
    </div>
    {/* Requirements */ }
    <div className="form-control">
        <label className="label">
            <span className="label-text">Job Requirements</span>
        </label>
        <textarea className="textarea" name='Requirements' placeholder="put each Requirements in a new line" required></textarea>
    </div>
    {/* responsibilities*/ }
    <div className="form-control">
        <label className="label">
            <span className="label-text">Job responsibilities</span>
        </label>
        <textarea className="textarea" name='responsibilities' placeholder="Write each responsibilities in a new line" required></textarea>
    </div>
    {/*HR Name */ }
    <div className="form-control">
        <label className="label">
            <span className="label-text">HR Name</span>
        </label>
        <input type="text" name='hr_name' placeholder="HR Name" className="input input-bordered" required />
    </div>
    {/*HR Email */ }
    <div className="form-control">
        <label className="label">
            <span className="label-text">HR Email</span>
        </label>
        <input type="email" defaultValue={user?.email} name='hr_email' placeholder="HR Email" className="input input-bordered" required />
    </div>
    {/*applicationDeadline */ }
    <div className="form-control">
        <label className="label">
            <span className="label-text">Date Line</span>
        </label>
        <input type="date"  name='applicationDeadline' placeholder="Date Line" className="input input-bordered" required />
    </div>
    {/*Company logo url */ }
    <div className="form-control">
        <label className="label">
            <span className="label-text">Company logo url</span>
        </label>
        <input type="text" name='company_logo' placeholder="Company logo url" className="input input-bordered" required />
    </div>
    {/* submit button */ }
    <div className="form-control mt-6">
        <button className="btn btn-primary">Add Job</button>
    </div>
            </form >
        </div >
    );
};

export default AddJob;