import axios from "axios";
import "./Contact.css";

const Contact = () => {
  const form = document.getElementById('formEmail')
  
  return (
    <section className="bg-white" id="contact">
      <div className="container py-5 contact--">
        <div>
          <h3>Contact me</h3>
        </div>
        <form id="formEmail" action="submit" onSubmit={e=>{
          e.preventDefault()
          alert('Your message was sent successfully')
          let email = (e.target.email.value),
              message = (e.target.message.value)
          axios.post('http://localhost:4000/contact',{
            email,
            message
          })
          .catch(error=>console.log(error))
          form.reset()
        }}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Write your Email:
            </label>
            <input id="email" name="email" type="email" className="form-control"/>
          </div>
          <div>
            <label htmlFor="message" className="form-label">
              Write your message here:
            </label>
            <textarea name="message" id="message" className="form-control" rows="7"></textarea>
          </div>
          <button type="submit" className="btn btn-outline-secondary">
            Send
          </button>
          <button type="reset" className="btn btn-outline-secondary m-3">
            Clear
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
