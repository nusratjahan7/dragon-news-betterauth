import Marquee from "react-fast-marquee";

const news = [
  { id: 1, title: "Breaking News: Market Hits Record High" },
  { id: 2, title: "Tech Innovations: AI Revolutionizing Healthcare" },
  { id: 3, title: "Global Warming: How We Can Fight Climate Change" },
  { id: 4, title: "Sports Update: Football World Cup Qualifiers" },
  { id: 5, title: "Health Alert: New Guidelines for Nutrition" }
];

const BreakingNews = () => {
    return (
        <div className="flex gap-4 bg-[#F3F3F3] py-3 px-2 w-11/12 mx-auto">
            <button className="bg-[#D72050] text-white px-3 py-2">Latest</button>
            <Marquee pauseOnHover={true}>
                {
                    news.map((n) => 
                      <p key={n.id} className="mr-10 font-medium">{n.title}</p>
                    )
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;