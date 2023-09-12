import Man from '../../../assets/others/Man.png'
import Button from '../../shared/Button/Button';

const Banner = () => {
    return (
        <div className='bg-slate-50 md:px-24'>
            <div className="grid md:grid-cols-2 gap-2 pt-5 ">
               <div className='flex justify-center items-center'>
                <div className='w-9/12 space-y-5 h-72'>
                    <h1 className='text-5xl font-bold'>
                        One Step<br/> Closer To Your<br/><span className='text-[#7E90FE]'>Dream Job</span>
                    </h1>
                    <p className='text-justify'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <Button  title='Get Started'></Button>
                </div>
               </div>
                <div><img src={Man} alt="" /></div>
            </div>
        </div>
    );
};

export default Banner;