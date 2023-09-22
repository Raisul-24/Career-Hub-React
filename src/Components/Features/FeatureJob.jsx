// import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const FeatureJob = ({job}) => {
        
        const {logo,job_title,company_name,remote_or_onsite,job_type} = job;
        return (
                <div className=" border-2 border-[#E8E8E8] p-10">
                        <img src={logo} alt="" />
                        <h2 className='mt-6 text-lg font-extrabold text-black'>{job_title}</h2>
                        <p className='text-[#757575] font-semibold text-sm'>{company_name}</p>
                        <div className="flex gap-4 my-5">
                        <button className="btn btn-outline btn-primary">{remote_or_onsite}</button>
                        <button className="btn btn-outline btn-primary">{job_type}</button>
                        </div>
                        <div className="">
                        <div className="">
                                
                        </div>
                        </div>
                        
                        <button><NavLink className={"btn-linear text-sm "}>View Details</NavLink></button>
                </div>
        );
};
FeatureJob.propTypes ={
        job: PropTypes.element.any
}

export default FeatureJob;