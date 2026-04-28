import BreakingNews from "@/components/shared/BreakingNews";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <BreakingNews />
            <Navbar />
            <main>
                {children}
            </main>
        </>
    );
};

export default MainLayout;