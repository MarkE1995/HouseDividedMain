import './FormStyle.css';

import React from 'react'

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const name = formData.get('name');
    const subject = formData.get('subject');
    const message = formData.get('message');

    localStorage.setItem('name', name);
    localStorage.setItem('subject', subject);
    localStorage.setItem('message', message);

    alert('Form data saved successfully!');

  }
  return (
    <div className='form'>
        <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input type='text'></input>
            <label>Subject</label>
            <input type='text'></input>
            <label>Message</label>
            <textarea rows='6' placeholder='Type your message here' />
            <button className='btn'>Submit</button>

        </form>
    </div>
  )
}

export default Form