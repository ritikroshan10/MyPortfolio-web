import { useEffect, useState } from 'react';
import axios from 'axios';
// Icon imports
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as MdIcons from 'react-icons/md';
import * as TbIcons from 'react-icons/tb';

// Combine all icon packs
const allIcons = { ...FaIcons, ...SiIcons, ...MdIcons, ...TbIcons };

const About = () => {
  // State variables to hold data
  const [educations, setEducations] = useState([]);
  const [skills, setSkills] = useState([]);
  const [trainings, setTrainings] = useState([]);

  // Fetch data on component mount
  useEffect(() => {
    fetchEducation();
    fetchSkills();
    fetchTrainings();
  }, []);

  // Fetch education, skills, and training data from the API
  const fetchEducation = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/education');
      setEducations(res.data);
    } catch (err) {
      console.error('Error fetching education', err);
    }
  };

  const fetchSkills = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/skills');
      setSkills(res.data);
    } catch (err) {
      console.error('Error fetching skills', err);
    }
  };

  const fetchTrainings = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/training');
      setTrainings(res.data);
    } catch (err) {
      console.error('Error fetching trainings', err);
    }
  };

  // Render the component
  return (
    <section className="px-4 py-10">
      <div className="max-w-6xl mx-auto space-y-14">

        {/* Bio Section */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            About <span className="text-[#1ED1BF]">Me</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            A quick overview of my education, skills, and training experience.
          </p>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-10 flex justify-center items-center gap-3">
            🎓 My Education Background
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {educations.map((edu) => {
              const Icon = allIcons[edu.icon];
              return (
                <div key={edu._id} className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md">
                  <div className="flex items-center gap-2 mb-2 text-lg font-semibold text-[#1ED1BF]">
                    {Icon ? <Icon /> : '🎓'} {edu.degree}
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {edu.institute} <br />
                    <strong>Duration:</strong> {edu.duration} • <strong>{edu.marks.includes('%') ? 'Marks' : 'CGPA'}:</strong> {edu.marks} <br />
                    📍 <em>{edu.location}</em>
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">🛠 Skills</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-center text-5xl">
            {skills.map((skill) => {
              const Icon = allIcons[skill.icon];
              return (
                <div
                  key={skill._id}
                  className="relative group flex items-center justify-center"
                >
                  {Icon ? (
                    <Icon
                      style={{ color: skill.color || '#1ED1BF' }}
                      className="transition-transform duration-200 transform group-hover:scale-110"
                    />
                  ) : (
                    <span className="text-red-500">❓</span>
                  )}
                  {/* Tooltip */}
                  <span className="absolute bottom-[-1.75rem] left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Experience / Training Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-10">💼 Experience</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {trainings.length > 0 ? (
              trainings.map((training) => (
                <div
                  key={training._id}
                  className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md"
                >
                  <h3 className="text-xl font-semibold text-[#1ED1BF] mb-2">{training.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {training.company}, {training.location} <br />
                    <strong>Duration:</strong> {training.duration}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-600 dark:text-gray-400 text-center col-span-full">No training data found.</p>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
