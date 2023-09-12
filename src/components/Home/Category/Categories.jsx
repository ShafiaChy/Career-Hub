import useGetData from "../../../hooks/useGetData";
import Title from "../../shared/Title/Title";
import Category from "./Category";


const Categories = () => {
    const [info] = useGetData('categories.json')

    const details = {
        title: 'Job Category List',
        description:'Explore thousands of job opportunities with all the information you need. Its your future'
    }
    return (
       <div className="h-96 bg-white md:px-24">
        <div className="px-5 md:px-0 text-center my-20">
            <Title details={details} ></Title>
        </div>
            <div className="grid md:grid-cols-4 gap-2 place-items-center">
                    {
                        info.length && info.map(details=><Category details={details} key={details.id}></Category>)
                    }
            </div>
        </div>
    );
};

export default Categories;