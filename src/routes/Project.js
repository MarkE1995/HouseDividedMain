import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import TopicsContent from '../components/TopicsContent';



const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading='TOPICS.' text='Our favorite things to talk about'/>
      <TopicsContent/>

      <Footer />
    </div>
  )
}

export default Project