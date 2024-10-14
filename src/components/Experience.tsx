import React from 'react';
import '../styles/Experience.css';

interface Job {
  title: string;
  company: string;
  duration: string;
  description: string;
}

const jobs: Job[] = [
  {
    title: 'Junior Backend Developer',
    company: 'Syngenta Digital',
    duration: 'Jun 2022 - Present',
    description: 'Developed various web applications using React and Node.js. Worked on scaling services and improving performance.'
  },
  {
    title: 'Fullstack Developer',
    company: 'Stars Poker Club',
    duration: 'May 2021 - Jun 2022',
    description: 'Built responsive UIs using React and TypeScript. Implemented user-friendly designs and optimized frontend performance.'
  },
  {
    title: 'Trainee Software Developer',
    company: 'Teknisa',
    duration: 'Sep 2020 - May 2021',
    description: 'Worked with HTML, CSS, and JavaScript to build client websites. Gained experience in full-stack development using Node.js.'
  },
  {
    title: 'Software Development Intern',
    company: 'Teknisa',
    duration: 'Feb 2019 - Mar 2020',
    description: 'Worked with HTML, CSS, and JavaScript to build client websites. Gained experience in full-stack development using Node.js.'
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="timeline">
        {jobs.map((job, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <div className="timeline-content">
              <h3>{job.title}</h3>
              <h4>{job.company}</h4>
              <p className="duration">{job.duration}</p>
              <p>{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
