import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

// Icons
import { FaUserAstronaut, FaBars, FaTimes, FaLaptopCode } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { RiContactsFill } from 'react-icons/ri';
import { HiMiniRectangleStack } from 'react-icons/hi2';
import { LuSun, LuMoon } from 'react-icons/lu';

const Navbar = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { to: '/', icon: <AiFillHome />, label: 'Home' },
        { to: '/about', icon: <FaUserAstronaut />, label: 'About' },
        { to: '/projects', icon: <HiMiniRectangleStack />, label: 'Projects' },
        { to: '/contact', icon: <RiContactsFill />, label: 'Contact' },
    ];

    return (
        <nav className="bg-gradient-to-tr from-[#e0fdfa] via-white to-[#ccf4f0] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-b border-gray-300 dark:border-gray-700 sticky top-0 z-50 shadow-md transition-all duration-500">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="text-xl font-semibold flex items-center gap-2 tracking-wide text-[#1ED1BF] dark:text-[#1ED1BF]">
                    <FaLaptopCode />
                    <NavLink to="/" className="hover:underline">Ritik.dev</NavLink>
                </div>

                {/* Hamburger Icon */}
                <button
                    className={`lg:hidden text-2xl ${darkMode ? 'text-[#1ED1BF]' : 'text-[#1ED1BF]'}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center space-x-6 text-base font-medium">
                    {navLinks.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.to}
                            className={({ isActive }) =>
                                `flex items-center gap-2 transition font-medium ${isActive
                                    ? 'text-[#1ED1BF] underline underline-offset-4 dark:text-[#1ED1BF]'
                                    : 'hover:text-[#16baa9] dark:hover:text-[#1bd8c4]'
                                }`
                            }
                        >
                            {link.icon}
                            {link.label}
                        </NavLink>
                    ))}

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-md border border-[#1ED1BF] dark:border-[#1ED1BF] hover:bg-[#ccf4f0] transition text-[#1ED1BF] dark:text-[#1ED1BF]"
                        title="Toggle Theme"
                    >
                        {darkMode ? <LuSun /> : <LuMoon />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen ? (
                <div className="lg:hidden px-4 pt-3 pb-5 space-y-3 text-base font-medium bg-white dark:bg-gray-900 shadow-md">
                    {navLinks.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.to}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center gap-2 p-2 rounded-md ${isActive
                                    ? 'bg-[#1ED1BF] text-white dark:bg-[#1ED1BF] dark:text-gray-900'
                                    : `hover:bg-[#ccf4f0] dark:hover:bg-[#1bd8c4] ${darkMode ? 'text-white' : 'text-gray-800'
                                    }`
                                }`
                            }
                        >
                            {link.icon}
                            {link.label}
                        </NavLink>
                    ))}

                    {/* Theme Toggle (Mobile) */}
                    <button
                        onClick={() => {
                            toggleTheme();
                            setMenuOpen(false);
                        }}
                        className="w-full flex items-center justify-center gap-2 p-2 rounded-md border mt-2
                       border-[#1ED1BF] dark:border-[#1ED1BF] hover:bg-[#ccf4f0] dark:hover:bg-[#1bd8c4]
                       text-[#1ED1BF] dark:text-[#1ED1BF]"
                    >
                        {darkMode ? <LuSun /> : <LuMoon />}
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
            ) : null}
        </nav>
    );
};

export default Navbar;
