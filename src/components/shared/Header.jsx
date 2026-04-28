import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from "date-fns";

const Header = () => {
    const formattedDate = format(new Date(), "EEEE, LLLL dd, yyyy");
    const [day, monthDay, year] = formattedDate.split(", ");

    return (
        <div className='text-center flex flex-col items-center justify-center py-8 space-y-4'>
            <Image src={logo} height={300} width={300} alt='logo' />
            <p className='text-[#706F6F]'>Journalism Without Fear or Favour</p>
            {/* <p>{format(new Date(), "EEEE, LLLL dd, yyyy")}</p> */}
            <p className='text-[#706F6F]'>
                <span className="font-medium text-[#403F3F]">{day}</span>, {monthDay}, {year}
            </p>
        </div>
    );
};

export default Header;