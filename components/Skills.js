'use client';
import { useEffect, useState } from 'react';

export default function Skills() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  const skills = [
    { name: 'HTML', percentage: 90, icon: 'fab fa-html5' },
    { name: 'CSS', percentage: 80, icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', percentage: 40, icon: 'fab fa-js-square' },
    { name: 'Web Development', percentage: 75, icon: 'fas fa-laptop-code' },
    { name: 'Problem Solving', percentage: 50, icon: 'fas fa-puzzle-piece' },
    { name: 'Responsive Design', percentage: 68, icon: 'fas fa-mobile-alt' }
  ];

  return (
    <div className="page-content">
      <h2 className="page-header">Skills</h2>
      <div className="content">
        <div className="main-info">
          <div className="info-section skills-section">
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <div className="skill-name">
                      <div className="skill-icon"><i className={skill.icon}></i></div>
                      <span>{skill.name}</span>
                    </div>
                    <div className="skill-percentage">{skill.percentage}%</div>
                  </div>
                  <div className="skill-progress-container">
                    <div 
                      className="skill-progress-bar" 
                      style={{ 
                        width: animated ? `${skill.percentage}%` : '0%',
                        transition: `width 1s ease-in-out ${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}