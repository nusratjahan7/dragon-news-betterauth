import Navbar from "@/components/shared/Navbar";

const AuthLayout = ({ children }) => {
    return (
        <>
           <div className="bg-(--dark7)">
             <Navbar />
            { children }
           </div>
        </>
    );
};

export default AuthLayout;