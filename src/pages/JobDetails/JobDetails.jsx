import { useLoaderData, useParams } from "react-router-dom";
import Banner2 from "../../components/shared/Banner2/Banner2";
import { useState } from "react";
import { addToLS } from "../../utilities/localStorage";
import { FaCalendarDays } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const JobDetails = () => {
    const details = useLoaderData();
    const [cart, setCart] = useState([])
    const {id} = useParams();
    

    const data = details.filter(info => info.id == id)
    
    
    const handleAddToCart = data => {
        const newCart = [...cart, data];
        setCart(newCart);
        addToLS(data[0].id);
        toast.success("Job Application successful!!!");
    }
    return (
        <div >
            <ToastContainer></ToastContainer>
           <Banner2 title="Job Details"></Banner2> 

           <div className="grid md:grid-cols-4 gap-4 my-24 md:px-14">
            <div className="md:col-span-3 flex justify-end">
               <div className="w-11/12 space-y-4">
                    <p><span className="text-black font-bold">Job Description:</span>{data[0].job_description}</p>

                    <p><span className="text-black font-bold">Job Responsibility:</span>{data[0].job_responsibility}</p>

                    <p><span className="text-black font-bold">Educational Requirements:</span><br/>{data[0].educational_requirements}</p>

                    <p><span className="text-black font-bold">Experiences:</span><br/>{data[0].experiences}</p>
               </div>
                
            </div>
            <div>
                <div className="px-7 py-8  bg-slate-100 rounded-md">
                    <h2 className="font-bold my-2">Job Details</h2>
                    <hr />
                    <ul className="my-5 space-y-2">
                        <li className="flex space-x-2 items-center"><FaDollarSign/> <span className="text-black font-semibold">Salary: </span> {data[0].salary}</li>
                        
                        <li className="flex space-x-2 items-center w-full "><FaCalendarDays/> <span className=" text-black font-semibold"> Job Title:</span> {data[0].job_title}</li>
                    </ul>

                    <h2 className="font-bold my-2">Contact Information</h2>
                    <hr />
                    <ul className="mt-2 space-y-2">
                        <li className="flex space-x-2 items-center"><FaPhone/><span className="text-black font-semibold">Phone:</span> {data[0].contact_information.phone}</li>
                        <li className="flex space-x-2 items-center"><FaEnvelope/> <span className="text-black font-semibold">Email:</span> {data[0].contact_information.email}</li>
                        <li className="flex space-x-2"><FaLocationDot className="mt-1"/><span><span className="text-black font-semibold">Address:</span> {data[0].contact_information.address}</span></li>
                    </ul>
                   
                </div>
                <button onClick={() => handleAddToCart(data)} className="btn w-full mt-4 text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Apply Now</button>
            </div>
           </div>
        </div>
    );
};

export default JobDetails;