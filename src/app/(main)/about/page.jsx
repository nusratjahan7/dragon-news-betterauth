import Image from 'next/image';
import team1 from '@/assets/team/team1.jpg';
import team2 from '@/assets/team/team2.jpg';
import team3 from '@/assets/team/team3.jpg';
import Link from 'next/link';

export const metadata = {
  title: "About | Dragon News",
};


const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-(--dark2)">About The Dragon News</h1>
        <p className="text-lg text-(--dark3) mt-4">
          Discover who we are, what we do, and our commitment to delivering reliable, up-to-date news.
        </p>
      </div>

      {/* Mission and Vision */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl font-semibold text-(--dark2) mb-6">Our Mission</h2>
        <p className="text-lg text-(--dark3) mb-6">
          At The Dragon News, our mission is to provide our readers with accurate, fair, and timely news across all aspects of society, from politics to entertainment, sports, and more. We are dedicated to delivering news that matters and stories that inspire.
        </p>
        <h2 className="text-2xl font-semibold text-(--dark2) mb-6">Our Vision</h2>
        <p className="text-lg text-(--dark3) mb-6">
          Our vision is to be the leading voice in digital journalism, known for our unbiased coverage and commitment to social responsibility. We strive to create a more informed world by empowering our readers with the truth.
        </p>
      </div>

      {/* Core Values */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl font-semibold text-(--dark2) mb-6">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-(--dark2)">Integrity</h3>
            <p className="text-(--dark3) mt-4">
              We uphold the highest standards of integrity in our journalism, ensuring that we provide accurate and honest reporting at all times.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-(--dark2)">Innovation</h3>
            <p className="text-(--dark3) mt-4">
              We continuously evolve and innovate, embracing new technologies and approaches to deliver news in ways that are engaging and accessible.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-(--dark2)">Accountability</h3>
            <p className="text-(--dark3) mt-4">
              We take responsibility for our reporting and strive to create a platform where our readers can trust the information we provide.
            </p>
          </div>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl font-semibold text-(--dark2) mb-6">Meet the Team</h2>
        <p className="text-lg text-(--dark3) mb-6">
          Behind every story at The Dragon News is a passionate team of professionals dedicated to bringing you the truth. Our team includes talented journalists, editors, and tech experts who work tirelessly to ensure the best content is delivered to our readers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <Image
              src={team1} 
              alt="Team Member 1"
              className="rounded-full mx-auto mb-4 h-30 w-30 object-cover"
              width={100}  
              height={100} 
            />
            <h3 className="text-xl font-semibold text-(--dark2)">John Doe</h3>
            <p className="text-(--dark3)">Editor-in-Chief</p>
          </div>
          {/* Team Member 2 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <Image
              src={team2}
              alt="Team Member 2"
              className="rounded-full mx-auto mb-4  h-30 w-30 object-cover"
              width={100}  
              height={100} 
            />
            <h3 className="text-xl font-semibold text-(--dark2)">Jane Smith</h3>
            <p className="text-(--dark3)">Senior Reporter</p>
          </div>
          {/* Team Member 3 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <Image
              src={team3} 
              alt="Team Member 3"
              className="rounded-full mx-auto mb-4  h-30 w-30 object-cover"
              width={100}  
              height={100} 
            />
            <h3 className="text-xl font-semibold text-(--dark2)">Alex Johnson</h3>
            <p className="text-(--dark3)">Content Strategist</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl font-semibold text-(--dark2) mb-6">Get in Touch</h2>
        <p className="text-lg text-(--dark3) mb-6">
          Have questions or want to connect with us? Feel free to reach out through our contact page or follow us on social media.
        </p>
        <Link
          href="/"
          className="text-white bg-(--dark3) hover:bg-(--dark2) py-2 px-6 rounded-md"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default About;