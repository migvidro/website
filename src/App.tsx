import React from 'react';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Contact />
    </div>
  );
};

export default App;
