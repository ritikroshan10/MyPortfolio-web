import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { FaArrowRight, FaGithub, FaReact, FaJsSquare, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

const Home = () => {
  const [profileImage, setProfileImage] = useState("");
  const [content, setContent] = useState({
    intro: "",
    deepWork: "",
    summary: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get image
        const imgRes = await axios.get("http://localhost:5000/api/profileimg");
        if (imgRes.data?.profileImage) {
          setProfileImage(`http://localhost:5000/uploads/${imgRes.data.profileImage}`);
        }

        // Get dynamic paragraphs
        const textRes = await axios.get("http://localhost:5000/api/homecontent");
        setContent({
          intro: textRes.data?.line1 || "",
          deepWork: textRes.data?.line2 || "",
          summary: textRes.data?.line3 || ""
        });

      } catch (err) {
        console.error("Error loading content:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="px-4 py-10">
      {/* =================image+about ================= */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-800 dark:text-white">
            Hi, I'm <span className="text-[#1ED1BF]">Ritik Roshan Singh</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-lg">
            {content.intro}
          </p>

          <p className="text-gray-600 dark:text-gray-300 text-base">
            {content.deepWork}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-start justify-center items-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-[#1ED1BF] hover:bg-[#16baa9] text-white font-semibold px-5 py-3 rounded-md transition duration-300 shadow-md"
            >
              View My Work <FaArrowRight />
            </Link>
            <a
              href="https://github.com/ritikroshan10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#1ED1BF] text-[#1ED1BF] hover:bg-[#1ED1BF] hover:text-white font-semibold px-5 py-3 rounded-md transition duration-300 shadow-md"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>

        {/* ==============Profile Image============== */}
        <div className="flex justify-center">
          <img
            src={profileImage || "/default-profile.jpg"}
            alt="Ritik Profile"
            className="w-72 h-72 object-cover rounded-full border-4 border-[#1ED1BF] shadow-lg hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
      </div>

      {/*============ What I Do=========== */}
      <div className="max-w-5xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
          What I Do
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed max-w-3xl mx-auto">
          {content.summary}
        </p>
      </div>

      {/* ================Tech Stack============== */}
      <div className="max-w-4xl mx-auto mt-14 grid grid-cols-3 sm:grid-cols-6 gap-6 text-center">
        <div className="text-5xl text-[#7952B3]"><FaBootstrap title="Bootstrap" /></div>
        <div className="text-5xl text-[#f7df1e]"><FaJsSquare title="JavaScript" /></div>
        <div className="text-5xl text-[#06b6d4]"><SiTailwindcss title="Tailwind CSS" /></div>
        <div className="text-5xl text-[#1ED1BF]"><FaReact title="React" /></div>
        <div className="text-5xl text-[#4DB33D]"><SiMongodb title="MongoDB" /></div>
        <div className="text-5xl text-[#303030] dark:text-gray-200"><SiExpress title="Express.js" /></div>
      </div>
    </section>
  );
};

export default Home;
