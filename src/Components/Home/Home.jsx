import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import Features from "../Features/Features";


const Home = () => {
        return (
                <div>
                        
                        <div className="">
                        <Banner></Banner>
                        <CategoryList></CategoryList>
                        </div>
                        <Features></Features>
                        <h2>This is Home</h2>
                </div>
        );
};

export default Home;