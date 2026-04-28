import Link from "next/link";


const LeftSideBard = ({ categories, activeId }) => {
    return (

        <div className="font-medium col-span-3 text-center">
            <h2 className="font-semibold mb-2 text-left"> All Categories</h2>
            <ul className="flex flex-col gap-1.5">
                {
                    categories.news_category.map(category => <li
                        key={category.category_id}
                        className={`
                        ${activeId === category.category_id && "bg-(--dark6) text-[#313030]"} text-(--dark3) rounded-lg hover:bg-(--dark6) 
                         `}>

                        <Link href={`/category/${category.category_id}`} className="block p-2 "> {category.category_name}</Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default LeftSideBard;