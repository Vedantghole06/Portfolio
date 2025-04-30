import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
// Eager load Navbar as it's always visible
// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Basic Loading Spinner
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
    {/* Or "Loading Portfolio..." text */}
    {/* <p className="text-lg text-primary font-medium">Loading Portfolio...</p> */}
  </div>
);

// Component to handle page transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait"> {/* 'wait' ensures exit animation completes before enter */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Add a 404 Not Found route if needed */}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-16"> {/* Add padding top equal to navbar height */}
        <Suspense fallback={<Loading />}>
          <AnimatedRoutes />
        </Suspense>
      </main>
      {/* Optional Footer could go here */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;