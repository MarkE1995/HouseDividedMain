import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import TierListContentStyles from '../components/TierListContent';

const TierLists = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading='TIER LIST' text='Our personal ranking of all our favorite things!'/>
      <TierListContentStyles/>
    <Footer />
    </div>
  )
}

export default TierLists