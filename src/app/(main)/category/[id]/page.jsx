import LeftSideBard from '@/components/homepage/news/LeftSideBard';
import NewsCard from '@/components/homepage/news/NewsCard';
import RightSideBar from '@/components/homepage/news/RightSideBar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import Link from 'next/link';


const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;
    const categories = await getCategories();
    const news = await getNewsByCategoryId(id);

    return (
        <div className="container mx-auto px-3 grid grid-cols-12 gap-4 mb-4">

            <LeftSideBard categories={categories} activeId={id} />

            <div className="col-span-6">
                <h2 className="font-bold mb-4">Dragon News Home</h2>
                <div className="space-y-4">
                    {news.length > 0 ?
                        news.map(n => <NewsCard key={n._id} news={n} />        
                        ) : <div className=" py-7 flex flex-col justify-center bg-gray-50  px-6">
                            <div className="text-center ">
                                <h1 className="text-3xl font-bold text-gray-800 mb-4">404</h1>
                                <h2 className="text-xl text-gray-600 mb-4">Oops! No News Found</h2>
                                <p className=" text-gray-500 mb-6">
                                    It looks like the news article you're looking for doesn't exist or has been moved.
                                </p>
                                <Link href="/">
                                    <button className="text-white btn bg-(--dark2) px-3 py-3 rounded-md font-semibold transition-all duration-300">
                                        Go Back to Home
                                    </button>
                                </Link>
                            </div>

                        
                        </div>
                    }
                </div>
            </div>

            <RightSideBar />

        </div>
    );
};

export default NewsCategoryPage;