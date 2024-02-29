import './TopicsContentStyles.css';
import WorkCardTwo from './WorkCardTwo';
import WorkCardDataTwo from './WorkCardDataTwo'


import React from 'react'


const TopicsContent = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Topics</h1>
        <div className='project-container'>
           {WorkCardDataTwo.map((val, ind) => {
            return(
                <WorkCardTwo 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                />
            )
           })}
        </div>
    </div>
  )
}

export default TopicsContent;