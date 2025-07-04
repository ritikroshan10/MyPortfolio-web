import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {

    return (
        <div className="px-4 py-10">
            <div className="max-w-4xl mx-auto text-center">

                <h2 className="text-4xl font-bold mb-6">
                    Let’s <span className="text-[#1ED1BF]">Connect</span>
                </h2>

                <p className="text-lg mb-10 text-gray-600 dark:text-gray-300">
                    I’m always open to new opportunities, collaborations, or just a friendly tech chat!
                    Feel free to reach out through any of the methods below.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                    {/* ---------Phone---------- */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <FaPhoneAlt className="text-3xl mb-2 text-blue-500 mx-auto" />
                        <h4 className="text-xl font-semibold">Phone</h4>
                        <a
                            href="tel:+918288867417"
                            className="mt-1 inline-block text-inherit no-underline"
                        >
                            +91 8288867417
                        </a>
                    </div>

                    {/*------------ Email------------- */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <FaEnvelope className="text-3xl mb-2 text-green-500 mx-auto" />
                        <h4 className="text-xl font-semibold">Email</h4>
                        <a
                            href="mailto:ritikroshansingh1021@gmail.com"
                            className="mt-1 inline-block text-inherit no-underline"
                        >
                            ritikroshansingh1021@gmail.com
                        </a>
                    </div>

                    {/*-------------- LinkedIn--------- */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <FaLinkedin className="text-3xl mb-2 text-blue-700 mx-auto" />
                        <h4 className="text-xl font-semibold">LinkedIn</h4>
                        <a
                            href="https://www.linkedin.com/in/ritik-roshan-singh-b9ab33362/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 inline-block text-inherit no-underline"
                        >
                            Visit Profile
                        </a>
                    </div>

                    {/* ----------Location--------- */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <FaMapMarkerAlt className="text-3xl mb-2 text-red-500 mx-auto" />
                        <h4 className="text-xl font-semibold">Location</h4>
                        <p className="mt-1">India</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Contact;
