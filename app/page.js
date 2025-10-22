'use client';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Education from '../components/Education';
import Skills from '../components/Skills';
import SocialSports from '../components/SocialSports';

export default function Home() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return <About />;
      case 'education':
        return <Education />;
      case 'skills':
        return <Skills />;
      case 'social':
        return <SocialSports />;
      default:
        return <Header />;
    }
  };

  return (
    <div className="container">
      <Navigation activePage={activePage} setActivePage={setActivePage} />
      <div className="page active">
        {renderPage()}
      </div>
    </div>
  );
}