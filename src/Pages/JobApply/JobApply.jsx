import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate()
    console.log(id, user)

    const SubmiteJobApply = e => {
        e.preventDefault();
        const form = e.target;
        const LinkedIn = form.LinkedIn.value;
        const Github = form.Github.value;
        const Resume = form.Resume.value;
        // console.log(LinkedIn, Github, Resume)

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            LinkedIn, Github, Resume
        }

        fetch('http://localhost:5000/job-application',{
            method: 'POST', 
            headers:{
              'content-type': 'application/json' 
            }, 
            body: JSON.stringify(jobApplication)

        })
            .then(res => res.json())
            .then(data => {
              if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate('/myApplication')
              }
            })

    }

    return (

        <div className="card bg-base-100 w-full shadow-2xl">
            <h1 className="text-5xl font-bold text-center">Apply now!</h1>
            <form onSubmit={SubmiteJobApply} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">LinkedIn Url</span>
                    </label>
                    <input type="url" name='LinkedIn' placeholder="LinkedIn Url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Github Url</span>
                    </label>
                    <input type="url" name='Github' placeholder="Github Url" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume Url</span>
                    </label>
                    <input type="url" name='Resume' placeholder="Resume Url" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Apply</button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;