import { useLoaderData } from "react-router-dom";
import Banner2 from "../../components/shared/Banner2/Banner2";
import { useEffect, useState } from "react";
import { getStoredCart } from "../../utilities/localStorage";
import Jobs from "./Jobs";
import JobFilterSystem from "./JobFilterSystem";


const AppliedJobs = () => {

    const details = useLoaderData();
    const storedCart = getStoredCart();
    const [jobs, setJobs] = useState(details);
    const [filteredJobs, setFilteredJobs] = useState(details);
   
    
    
    //filter by remote or onsite
    const handleJobPositions = jobPositionType =>{
     
        const jobLocationData = jobs.filter(job => job.remote_or_onsite == jobPositionType)
        console.log(jobLocationData)
        setFilteredJobs(jobLocationData)
    }

    //load applied jobs from local storage
    useEffect(() => {
        
        if (jobs.length) {
            const savedCart = [];
            for(const id of storedCart){
            
                const appliedJob = details.find(job => job.id === id);
                if(appliedJob){
                    savedCart.push(appliedJob)
                }
            }

            setJobs(savedCart);

        }
    }, [details])

    return (
        <div className="overflow-x-hidden">
            <Banner2 title='Applied Jobs'></Banner2>

            {/* component for filtering */}

            <JobFilterSystem handleJobPositions={handleJobPositions}></JobFilterSystem>

            <div className="mb-44 grid grid-cols-1 gap-y-4 md:gap-10 place-items-center">
                {
                    filteredJobs.length? filteredJobs.map((details,idx)=><Jobs details={details} key={idx}></Jobs>):
                    jobs.map((details,idx)=><Jobs details={details} key={idx}></Jobs>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;