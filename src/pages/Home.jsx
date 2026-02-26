import Feed from "../components/Feed";
import MainLayout from "../layouts/MainLayout";

const Home = ({ feedType = "all" }) => {
    return (
        <MainLayout>
            <div className="mb-6">
                <h2 className="text-3xl font-serif font-bold text-midnight mb-2">
                    {feedType === "following" ? "Sphere" : "Home"}
                </h2>
                <p className="text-gray-500">
                    {feedType === "following" ? "Latest form your circle." : "Discover the world."}
                </p>
            </div>
            <Feed filter={feedType} />
        </MainLayout>
    );
};

export default Home;
