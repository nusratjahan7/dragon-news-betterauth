import Image from "next/image";
import Link from "next/link";
import { CiBookmark } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

const NewsCard = ({ news }) => {
    return (
        <div className=" rounded-md border border-(--dark6)">
            <div className="flex items-center justify-between text-(--dark2) p-2 bg-(--dark6)">
               <div className="flex gap-4">
                 <Image src={news.author.img} alt="author image" width={50} height={40} className="rounded-full" />
                <div >
                    <h2 className="font-semibold">{news.author.name}</h2>
                    <p className="text-sm">{news.author.published_date}</p>
                </div>
               </div>
                <div className="flex gap-2 ">
                    <CiBookmark className="h-6 w-6" />
                    <IoShareSocialOutline  className="h-6 w-6" />
                </div>
            </div>

           <div className="w-11/12 mx-auto text-(--dark2) pt-3 pb-2 border-b border-b-(--dark6) space-y-3">
             <h2 className="font-semibold">{news.title}</h2>
             <Image src={news.image_url} alt={news.title} height={500} width={600} />
             <div className="space-y-1">
               <p className="line-clamp-4">{news.details}</p>
             <Link href={`/news/${news._id}`} className="text-orange-400 font-medium">Read More</Link>
             </div>
           </div>

           <div className="flex justify-between items-center w-11/12 mx-auto text-(--dark2) my-3">
                <div className="flex items-center gap-1">
                    <div className="text-orange-400 flex gap-0.5"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    <p className="text-sm">{news.rating.number}</p>
                </div>
                <div className="flex items-center gap-1" >
                    <FaEye />
                    <p className="text-sm"> {news.total_view}</p>
                </div>
           </div>
        </div>
    );
};

export default NewsCard;