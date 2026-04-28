import RightSideBar from "@/components/homepage/news/RightSideBar";
import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";


export const generateMetadata = async ({ params }, parent) => {
    const { id } = await params;
    const news = await getNewsDetailsById(id);

     return {
    title: news.title,
    description: news.details,
  }

}

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const news = await getNewsDetailsById(id);
    return (
        <div className="w-11/12 mx-auto my-6 grid grid-cols-12 gap-4">
            <div className="col-span-9">
                <h2 className="font-bold mb-3">Dragon News</h2>
                <div className=" rounded-md border border-(--dark6) ">
                    <div className="w-11/12 mx-auto text-(--dark2) pt-3 pb-2 space-y-3">
                        <Image src={news.image_url} alt={news.title} width={600} height={600} className="w-full" />
                        <h2 className="font-semibold">{news.title}</h2>
                    </div>

                    <div className="space-y-1 w-11/12 mx-auto">
                        <p className="text-(--dark2)">{news.details}</p>
                        <div>
                            <Link href={`/category/${news.category_id}`}>
                                <button className="flex items-center gap-1.5 bg-(--pink) btn text-white font-light mb-4 mt-2"><BsArrowLeft /> All news in this category </button> </Link>
                        </div>
                    </div>
                </div>
            </div>
            <RightSideBar />
        </div>
    );
};

export default NewsDetailsPage;