'use client';
import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const [greeting, setGreeting] = useState('Hello!');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning!');
    else if (hour < 18) setGreeting('Good Afternoon!');
    else setGreeting('Good Evening!');
  }, []);

  return (
    <header>
      <button className="theme-switcher" onClick={toggleTheme} aria-label="Toggle dark mode">
        <i className={isDark ? 'fas fa-sun' : 'fas fa-moon'}></i>
      </button>
      <div className="profile-img">
        <div className="profile-photo">
          <img src="/download (1).jpg" alt="Profile Photo" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10%' }} />
        </div>
      </div>
      <div className="greeting">{greeting}</div>
      <h1>Cj John D. Misola</h1>
      <p className="title">BS Information Technology</p>
    </header>
  );
}