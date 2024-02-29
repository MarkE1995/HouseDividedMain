import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Form from '../components/Form'
import HeroImg2 from '../components/HeroImg2';

const Discussions = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading='DISCUSSIONS.' text='Join the conversation!' />
      <Form />
    <Footer />
    </div>
  )
}

export default Discussions