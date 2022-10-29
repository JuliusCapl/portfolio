import React, { useState } from "react";
import "./Contact.css";


const Contact = () => {
  
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  return (
      <section className="bg-white" id="contact">
        <div className="container py-5 contact--">
          <div>
            <h3>Contact me</h3>
          </div>
          <form action="submit" onSubmit={e=>{
            e.preventDefault()
            console.log(setEmail,setMessage)
          }}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Write your Email:</label>
              <input id="email" name="email" value={email} type="email" className="form-control" onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="message" className="form-label">Write your message here:</label>
              <textarea name="message" id="message" value={message} className="form-control" rows="7" onChange={e=>setMessage(e.target.value)}></textarea>
            </div>
            <button type="submit" className="btn btn-outline-secondary">Sent</button>
            <button type="reset" className="btn btn-outline-secondary m-3">Clear</button>
          </form>
        </div>
      </section>
  );
};

export default Contact;
