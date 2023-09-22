// import React from 'react';

import { useEffect, useState } from "react";
import FeatureJob from "./FeatureJob";

const Features = () => {

        const [jobs, setJobs] = useState([]);

        const [dataLength, setDataLength] = useState(4);

        useEffect(() => {
                fetch('data/jobs.json')
                        .then(res => res.json())
                        .then(data => setJobs(data))
        }, [])
        return (
                <div className="container mx-auto">
                        <div className="">
                                <h2 className="text-5xl font-extrabold text-center text-black">Featured Jobs</h2>
                                <p className="text-[rgb(117,117,117)] text-center font-medium mt-2">Explore thousands of job opportunities with all the information you need. Its your future</p>

                        </div>
                        <div className="grid grid-cols-2 gap-10 mt-10 ">
                                {/* <h2>s: {jobs.length}</h2> */}
                                {
                                        jobs.slice(0, dataLength).map(job => <FeatureJob job={job} key={jobs.id}></FeatureJob>)
                                }

                        </div>
                        <div className="text-center my-5">
                        <div className={dataLength === jobs.length && 'hidden'}>
                                <button className="btn btn-primary"
                                        onClick={() => setDataLength(jobs.length)}>
                                        Show All</button>
                        </div>
                        </div>

                </div>
        );
};

export default Features;