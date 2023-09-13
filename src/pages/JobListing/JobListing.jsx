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
    
    
    //filter by remote or onsite
    const handleJobPositions = jobPositionType =>{
     
        const jobLocationData = details.filter(job => job.remote_or_onsite == jobPositionType && storedCart.includes(job.id))
       
        setJobs(jobLocationData)
    }

    //load applied jobs from local storage
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
        <div className="overflow-x-hidden">
            <Banner2 title='Job Listing'></Banner2>

            {/* component for filtering */}

            <JobFilterSystem handleJobPositions={handleJobPositions}></JobFilterSystem>

            <div className="mb-44 grid grid-cols-1 gap-y-4 md:gap-10 place-items-center">
                {
                    jobs.map(details=><Jobs details={details} key={details.id}></Jobs>)
                }
            </div>
        </div>
    );
};

export default JobListing;