import { FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiJquery, SiExpress, SiMongodb } from 'react-icons/si';


const About = () => {

  return (
    <section className="px-4 py-10">

      <div className="max-w-6xl mx-auto space-y-14">

        {/*=============Bio Section================= */}
        <div className="text-center max-w-4xl mx-auto space-y-4">

          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            About <span className="text-[#1ED1BF]">Me</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            A quick overview of my education, skills, and training experience.
          </p>

        </div>

        {/*================Education details==================*/}
        <div>

          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-10 flex justify-center items-center gap-3">
            🎓
            My <span className="text-[#1ED1BF]">Education</span> Background
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

            {/* ---------B.Tech----------- */}
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md">

              <div className="flex items-center gap-2 mb-2 text-lg font-semibold text-[#1ED1BF]">
                🏛️ B.Tech in Computer Science and Engineering
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                DAV Institute of Engineering and Technology, Jalandhar, Punjab <br />
                <strong>Duration:</strong> 2021 – 2025 • <strong>CGPA:</strong> 8.34 <br />
                📍 <em>PIN: 144008</em>
              </p>

            </div>

            {/* ---------------12th-------------- */}
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md">

              <div className="flex items-center gap-2 mb-2 text-lg font-semibold text-[#1ED1BF]">
                🏫 12th (Punjab School Education Board)
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Govt. Sr. Secondary School (Boys), Phagwara, Punjab <br />
                <strong>Duration:</strong> 2019 – 2020 • <strong>Marks:</strong> 88% <br />
                📍 <em>PIN: 144401</em>
              </p>

            </div>

            {/* -------------10th------------ */}
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md">

              <div className="flex items-center gap-2 mb-2 text-lg font-semibold text-[#1ED1BF]">
                🏫 10th (Punjab School Education Board)
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                T.W.E.I. Sr. Secondary School, Phagwara, Punjab <br />
                <strong>Duration:</strong> 2017 – 2018 • <strong>Marks:</strong> 75% <br />
                📍 <em>PIN: 144401</em>
              </p>
            </div>

          </div>

        </div>

        {/*=================Skills Section==============*/}
        <div>
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">🛠 Skills</h2>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-center text-4xl">

            <FaHtml5 className="text-[#E34F26]" title="HTML5" />
            <FaCss3Alt className="text-[#1572B6]" title="CSS3" />
            <FaBootstrap className="text-[#7952B3]" title="Bootstrap" />
            <SiTailwindcss className="text-[#06B6D4]" title="Tailwind CSS" />
            <FaJsSquare className="text-[#F7DF1E]" title="JavaScript" />
            <SiJquery className="text-[#0769AD]" title="jQuery" />
            <FaReact className="text-[#61DAFB]" title="React.js" />
            <FaNodeJs className="text-[#339933]" title="Node.js" />
            <SiExpress className="text-black dark:text-white" title="Express.js" />
            <SiMongodb className="text-[#47A248]" title="MongoDB" />

          </div>

        </div>

        {/*===========Training Section==============*/}
        <div className="mt-16">

          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-10">📚 Training</h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md">
              <h3 className="text-xl font-semibold text-[#1ED1BF] mb-2">MERN Stack Training</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                TFour Tech Pvt. Ltd., Jodhpur, Rajasthan <br />
                <strong>Duration:</strong> Jan 2025 – Jun 2025
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md">
              <h3 className="text-xl font-semibold text-[#1ED1BF] mb-2">React.js Training</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Solitaire Infosys Pvt. Ltd., Mohali <br />
                <strong>Duration:</strong> 04 Jul 2023 – 18 Aug 2023
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;
