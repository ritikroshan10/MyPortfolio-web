import { Link } from 'react-router-dom';
import { FaArrowRight, FaGithub, FaReact, FaJsSquare, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';
import profile from '../assets/my-profile.jpg';

const Home = () => {
    return (
        <section className="px-4 py-10">
            {/* =================image+about ================= */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">

                <div className="text-center md:text-left space-y-6">

                    <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-800 dark:text-white">
                        Hi, I'm <span className="text-[#1ED1BF]">Ritik Roshan Singh</span>
                    </h1>

                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                        A React Frontend Developer focused on building clean and user-friendly interfaces.
                    </p>

                    <p className="text-gray-600 dark:text-gray-300 text-base">
                        I always dig deep when working on something — I research beyond just the first answer and try to improve things through better understanding.
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
                        src={profile}
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
                    I build responsive UIs using React and focus on clean design, performance, and reusability. I also have basic backend knowledge, including working with Express and MongoDB, and know how to connect frontend apps to REST APIs.
                </p>

            </div>

            {/* ================Tech Stack============== */}
            <div className="max-w-4xl mx-auto mt-14 grid grid-cols-3 sm:grid-cols-6 gap-6 text-center">

                <div className="text-5xl text-[#7952B3]"><FaBootstrap title="Bootstrap" /></div>
                <div className="text-5xl text-[#f7df1e]"><FaJsSquare title="JavaScript" /></div>
                <div className="text-5xl text-[#06b6d4]"><SiTailwindcss title="Tailwind CSS" /></div>
                <div className="text-5xl text-[#1ED1BF]"><FaReact title="React" /></div>
                <div className="text-5xl text-[#4DB33D]"><SiMongodb title="MongoDB" /></div>
                <div className="text-5xl text-[#303030] dark:text-gray-200">
                    <SiExpress title="Express.js" />
                </div>

            </div>

            {/*=================== Contact==================*/}
            <div className="text-center mt-20">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Want to know more?</h3>
                <Link
                    to="/contact"
                    className="border border-[#1ED1BF] text-[#1ED1BF] hover:bg-[#1ED1BF] hover:text-white font-semibold px-6 py-3 rounded-md transition shadow-md"
                >
                    Contact Me
                </Link>
            </div>

        </section>
    );
};

export default Home;
