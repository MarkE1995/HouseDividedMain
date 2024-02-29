import './HeroImgStyles.css';

import React from 'react'
 
import IntroImg from '../assets/undraw_houses_re_uaq7.svg'

import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={IntroImg} alt='IntroImg '/>
        </div>
        <div className='content'>
            <p> Hello There.</p>
            <h1> WELCOME TO OUR HOUSE</h1>
            <div>
                <Link to='/project' className='btn' >Topics</Link>
                <Link to='/discussions' className='btn btn-light' >Discussions</Link>
            </div>

        </div>
    </div>
  )
}

export default HeroImg