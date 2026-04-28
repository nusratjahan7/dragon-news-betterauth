export const metadata = {
  title: "Career | Dragon News",
};

const Career = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-(--dark2)">Join The Dragon News Team</h1>
        <p className="text-md text-(--dark3) mt-4">
          We’re looking for passionate individuals to help us deliver high-quality news to our growing audience.
        </p>
      </div>

      {/* Career Description */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-md text-(--dark3) mb-6">
          At The Dragon News, we believe in the power of storytelling to inspire change and create an informed society. We are a dynamic team of journalists, writers, designers, and developers dedicated to providing top-notch news coverage across various categories.
        </p>
        <p className="text-md text-(--dark3) mb-6">
          Whether you're an experienced journalist or a fresh talent eager to learn, we welcome applications from passionate individuals who want to make a difference in the world of journalism.
        </p>
      </div>

      {/* Current Job Openings */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-xl font-semibold text-(--dark2) text-center mb-6">Current Job Openings</h2>
        <div className="space-y-8">
          {/* Job 1 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-(--dark2)">Senior Reporter</h3>
            <p className="text-gray-600 mt-4">Location: Remote | Full-time</p>
            <p className="text-(--dark3) mt-4">
              We are looking for an experienced Senior Reporter who can produce compelling stories across various topics, from politics to entertainment. The ideal candidate should have a strong writing portfolio, a knack for investigative journalism, and a deep understanding of news coverage.
            </p>
            <button className="mt-4 text-white bg-(--dark3) hover:bg-(--dark2) py-2 px-4 rounded-md">
              Apply Now
            </button>
          </div>

          {/* Job 2 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-(--dark2)">Content Writer</h3>
            <p className="text-gray-600 mt-4">Location: Remote | Full-time</p>
            <p className="text-(--dark3) mt-4">
              We are looking for a creative Content Writer who can craft well-researched and engaging articles. You should have excellent writing skills and a strong ability to turn complex topics into clear, concise, and engaging content.
            </p>
            <button className="mt-4 text-white bg-(--dark3) hover:bg-(--dark2) py-2 px-4 rounded-md">
              Apply Now
            </button>
          </div>

          {/* Job 3 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-(--dark2)">Social Media Manager</h3>
            <p className="text-gray-600 mt-4">Location: Remote | Full-time</p>
            <p className="text-(--dark3) mt-4">
              We are looking for a creative Social Media Manager who can manage and grow our social media channels. You should have experience in social media strategy, content creation, and engagement analytics.
            </p>
            <button className="mt-4 text-white bg-(--dark3) hover:bg-(--dark2) py-2 px-4 rounded-md">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Application Form Section */}
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold text-(--dark2) text-center mb-6">Apply for a Job</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-(--dark2) font-semibold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-(--dark2) font-semibold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-(--dark2) font-semibold mb-2" htmlFor="resume">
              Upload Resume
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-(--dark3) text-white rounded-md hover:bg-(--dark2) transition duration-200"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Career;