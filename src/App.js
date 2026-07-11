import React from 'react'
import Hero from './components/Hero';
import Services from './components/Services';
import WorkDone from './components/Workdone';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
   <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <WorkDone />
      <Footer />
      {/* <FloatingButtons /> */}
    </div>
  )
}

export default App