import { useState } from "react";
import useGetData from "../../../hooks/useGetData";
import Button from "../../shared/Button/Button";
import Title from "../../shared/Title/Title";
import FeaturedJob from "./FeaturedJob";

const FeaturedJobs = () => {

    const [info] = useGetData('jobs.json')
    const [length, setLength] = useState(4);
    const [hide, setHide] = useState('block');
    const details = {
        title: 'Featured Jobs',
        description:'Explore thousands of job opportunities with all the information you need. Its your future'
    }
   
    const handleButton = () =>{
        setLength(info.length);
        setHide('hidden')
    }
    return (
        <div className="md:px-24">
            <div className="px-5 md:px-0 text-center my-20">
                <Title details={details} ></Title>
            </div>
            <div className="grid md:grid-cols-2 gap-x-2 gap-y-5 place-items-center">
                    {
                        info.length && info.slice(0,length).map(details=><FeaturedJob details={details} key={details.id}></FeaturedJob>)
                    }
            </div>
           <div className="flex justify-center my-12">
                <div className={`${hide}`} onClick={handleButton} ><Button title="See All Jobs"></Button></div>
           </div>
        </div>
    );
};

export default FeaturedJobs;