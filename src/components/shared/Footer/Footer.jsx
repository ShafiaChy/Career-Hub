import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

//https://daisyui.com/components/footer/
//Two footer
const Footer = () => {
    return (

        <div>
           <footer className="footer py-12 px-12 md:px-24 place-items-center bg-black ">
                <nav>
                    <header className="text-2xl font-bold text-white">CareerHub</header> 
                    <p className="md:w-64 text-gray-400">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <div className="flex justify-between w-5/12 text-2xl text-white"><FaFacebook/><FaTwitter/><FaSquareInstagram/></div>
                </nav> 
                <nav>
                    <header className="text-white">Company</header> 
                    <a className="link link-hover text-gray-400">About us</a> 
                    <a className="link link-hover text-gray-400">Work</a> 
                    <a className="link link-hover text-gray-400">Latest News</a> 
                    <a className="link link-hover text-gray-400">Careers</a>
                </nav> 
                <nav>
                    <header className="text-white">Product</header> 
                    <a className="link link-hover text-gray-400">Prototype</a> 
                    <a className="link link-hover text-gray-400">Plans & Pricing</a> 
                    <a className="link link-hover text-gray-400">Customers</a> 
                    <a className="link link-hover text-gray-400">Integrations</a>
                </nav> 
                <nav>
                    <header className="text-white">Support</header> 
                    <a className="link link-hover text-gray-400">Help Desk</a> 
                    <a className="link link-hover text-gray-400">Sales</a> 
                    <a className="link link-hover text-gray-400">Become a Partner</a> 
                    <a className="link link-hover text-gray-400">Developers</a>
                </nav> 
                <nav >
                    <header className="text-white">Contact</header> 
                    <a className="link link-hover text-gray-400">524 Broadway , NYC </a> 
                    <a className="link link-hover text-gray-400">+1 777 - 978 - 5570</a> 
                    
                </nav>
                </footer> 
                
                <footer className="bg-black footer px-10 py-4 border-t text-base-content border-base-300">
                   
                <aside className="items-center md:px-28 grid-flow-col">
                
                    <small className="text-gray-400">@2023 CareerHub. All Rights Reserved</small>
                </aside> 
                <nav className="md:place-self-center md:justify-self-end md:px-24">
                    <div className="grid grid-flow-col gap-4">
                    <small className="text-gray-400">Powered by CareerHub</small>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;