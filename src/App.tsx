import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './components/Home';
import Layout from './components/Layout';
import ServicePageWrapper from './components/ServicePageWrapper';
import LocationPage from './components/LocationPage';
import ServicesPage from './components/ServicesPage';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import TestimonialsPage from './components/TestimonialsPage';
import FAQPage from './components/FAQPage';
import ContactPage from './components/ContactPage';
import NotFound from './components/NotFound';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projets" element={<ProjectsPage />} />
            <Route path="/apropos" element={<AboutPage />} />
            <Route path="/temoignages" element={<TestimonialsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/service/:id" element={<ServicePageWrapper />} />
            {/* SEO Routes Programmatiques */}
            <Route path="/:serviceSlug/:citySlug" element={<LocationPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;