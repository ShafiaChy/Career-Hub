import Banner from "../../components/Home/Banner/Banner";
import Categories from "../../components/Home/Category/Categories";
import FeaturedJobs from "../../components/Home/FeaturedJobs/FeaturedJobs";




const Home = () => {
    return (
        <div className="overflow-x-hidden">
           <Banner></Banner>
           <Categories></Categories>
           <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;