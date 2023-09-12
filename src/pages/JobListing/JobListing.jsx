import { useLoaderData } from "react-router-dom";
import Banner2 from "../../components/shared/Banner2/Banner2";
import { useEffect, useState } from "react";
import { getStoredCart } from "../../utilities/localStorage";
import Jobs from "./Jobs";
import JobFilterSystem from "./JobFilterSystem";


const JobListing = () => {
    const details = useLoaderData();
   
    const storedCart = getStoredCart();
    const [jobs, setJobs] = useState(details);
    
    
    const handleJobPositions = jobPositionType =>{
        console.log(jobPositionType)
        const jobLocationData = details.filter(job => job.remote_or_onsite == jobPositionType && storedCart.includes(job.id))
        console.log(jobLocationData)
        setJobs(jobLocationData)
    }

    useEffect(() => {
        
        if (jobs.length) {
          
          
            const savedCart = [];
            for(const id of storedCart){
                console.log(id);
                const appliedJob = jobs.find(job => job.id === id);
                if(appliedJob){
                    savedCart.push(appliedJob)
                }
            }

            console.log('saved cart', savedCart)
            setJobs(savedCart);

        }
    }, [details])

    return (
        <div>
            <Banner2 title='Job Listing'></Banner2>
            <JobFilterSystem handleJobPositions={handleJobPositions}></JobFilterSystem>
            <div className="mb-44 grid grid-cols-1 md:gap-10 place-items-center">
                {
                    jobs.map(details=><Jobs details={details} key={details.id}></Jobs>)
                }
            </div>
        </div>
    );
};

export default JobListing;