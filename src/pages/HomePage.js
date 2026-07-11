import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WorkDone from '../components/Workdone';
import ConsultationForm from '../components/ConsultationForm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WorkDone />
      <ConsultationForm />
    </>
  );
}
