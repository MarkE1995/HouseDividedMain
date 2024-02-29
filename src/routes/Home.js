import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
import TierListContentStyles from '../components/TierListContent';
import TopicsContent from '../components/TopicsContent';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg />
      <TopicsContent/>
      <Footer />
    </div>
  )
}

export default Home