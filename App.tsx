import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './components/Home';
import ServicePageWrapper from './components/ServicePageWrapper';
import LocationPage from './components/LocationPage';
import NotFound from './components/NotFound';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:id" element={<ServicePageWrapper />} />
          {/* SEO Routes Programmatiques */}
          <Route path="/:serviceSlug/:citySlug" element={<LocationPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;