import Navbar from "@/components/shared/Navbar";

const AuthLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            { children }
        </>
    );
};

export default AuthLayout;