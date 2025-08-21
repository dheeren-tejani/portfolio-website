import React from 'react';
import './Skills.css';

import { FaReact, FaDocker, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiHtml5, SiCss3, SiVercel, SiOpencv, SiPandas, SiFastapi, SiTailwindcss, SiStreamlit, SiPytorch, SiHuggingface, } from 'react-icons/si';
import { Skill } from '../types';

const iconMap: { [key: string]: JSX.Element } = {
  FaPython: <FaPython />,
  SiPytorch: <SiPytorch />,
  SiOpencv: <SiOpencv />,
  SiFastapi: <SiFastapi />,
  SiPandas: <SiPandas />,
  SiMatplotlib: <FaPython />,
  SiHuggingface: <SiHuggingface />,
  FaReact: <FaReact />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss3 />,
  SiTailwindcss: <SiTailwindcss />,
  SiTypescript: <SiTypescript />,
  FaDocker: <FaDocker />,
  SiVercel: <SiVercel />,
  SiStreamlit: <SiStreamlit />,
  FaGitAlt: <FaGitAlt />,
};

const skillsData: Skill[] = [
  // Machine Learning & Data Science
  { name: 'Python', category: 'Programming Languages', icon: 'FaPython', description: 'Versatile programming language for backend development and data science' },
  { name: 'PyTorch', category: 'Machine Learning', icon: 'SiPytorch', description: 'Deep learning framework for building neural networks' },
  { name: 'OpenCV', category: 'Machine Learning', icon: 'SiOpencv', description: 'Computer vision library for image and video processing' },
  { name: 'Hugging Face', category: 'Machine Learning', icon: 'SiHuggingface', description: 'Platform for pre-trained models and transformers' },
  { name: 'FastAPI', category: 'Backend Frameworks', icon: 'SiFastapi', description: 'Modern, fast web framework for building APIs with Python' },
  { name: 'Pandas', category: 'Data Science', icon: 'SiPandas', description: 'Data manipulation and analysis library for Python' },
  { name: 'Matplotlib', category: 'Data Science', icon: 'SiMatplotlib', description: 'Plotting library for creating static and interactive visualizations' },
  
  // Frontend Development
  { name: 'React', category: 'Frontend Frameworks', icon: 'FaReact', description: 'JavaScript library for building user interfaces' },
  { name: 'HTML', category: 'Web Technologies', icon: 'SiHtml5', description: 'Standard markup language for creating web pages' },
  { name: 'CSS', category: 'Web Technologies', icon: 'SiCss3', description: 'Stylesheet language for describing presentation of web pages' },
  { name: 'Tailwind CSS', category: 'Web Technologies', icon: 'SiTailwindcss', description: 'Utility-first CSS framework for rapid UI development' },
  { name: 'TypeScript', category: 'Programming Languages', icon: 'SiTypescript', description: 'Typed superset of JavaScript for better development experience' },
  
  // AI Tools & Deployment
  { name: 'Streamlit', category: 'AI Tools', icon: 'SiStreamlit', description: 'Framework for building and sharing data science web applications' },
  
  // DevOps & Deployment
  { name: 'Docker', category: 'DevOps', icon: 'FaDocker', description: 'Containerization platform for packaging applications' },
  { name: 'Vercel', category: 'Deployment', icon: 'SiVercel', description: 'Cloud platform for static sites and frontend frameworks' },
  { name: 'Git', category: 'Version Control', icon: 'FaGitAlt', description: 'Distributed version control system for tracking code changes' },
];

const Skills: React.FC = () => {
  const skillsByCategory = skillsData.reduce((acc: any, skill: Skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: Skill, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter: string, i: number) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;