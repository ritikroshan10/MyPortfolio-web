import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowRight, FaGithub } from "react-icons/fa";

// All Icons in one place
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";
import * as TbIcons from "react-icons/tb";

const allIcons = { ...FaIcons, ...SiIcons, ...MdIcons, ...TbIcons };

const Home = () => {
  const [profileImage, setProfileImage] = useState("");
  const [content, setContent] = useState({ intro: "", deepWork: "", summary: "" });
  const [homeSkills, setHomeSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const imgRes = await axios.get("http://localhost:5000/api/profileimg");
        if (imgRes.data?.profileImage) {
          setProfileImage(`http://localhost:5000/uploads/${imgRes.data.profileImage}`);
        }

        const contentRes = await axios.get("http://localhost:5000/api/homecontent");
        setContent({
          intro: contentRes.data?.line1 || "",
          deepWork: contentRes.data?.line2 || "",
          summary: contentRes.data?.line3 || ""
        });

        const skillRes = await axios.get("http://localhost:5000/api/homeskills");
        setHomeSkills(skillRes.data || []);
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

        <div className="flex justify-center">
          <img
            src={profileImage || "/default-profile.jpg"}
            alt="Ritik Profile"
            className="w-72 h-72 object-cover rounded-full border-4 border-[#1ED1BF] shadow-lg hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
      </div>

      {/*============ What I Do ===========*/}
      <div className="max-w-5xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
          What I Do
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed max-w-3xl mx-auto">
          {content.summary}
        </p>
      </div>

      {/* ================ Dynamic Tech Stack =============== */}
      <div className="max-w-4xl mx-auto mt-14 grid grid-cols-3 sm:grid-cols-6 gap-6 text-center text-5xl">
        {homeSkills.length === 0 ? (
          <p className="col-span-full text-gray-500">No skills found</p>
        ) : (
          homeSkills.map((skill) => {
            const Icon = allIcons[skill.icon];
            return (
              <div key={skill._id} title={skill.name} className="group relative flex justify-center items-center">
                {Icon ? (
                  <Icon
                    className="transition-transform transform group-hover:scale-110"
                    style={{ color: skill.color || "#1ED1BF" }}
                  />
                ) : (
                  <span className="text-red-400 text-xl">❓</span>
                )}
                <span className="absolute bottom-[-1.75rem] left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            );
          })
        )}
        
      </div>
    </section>
  );
};

export default Home;
