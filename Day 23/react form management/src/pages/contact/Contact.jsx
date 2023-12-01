import "./Constact.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useState } from "react";

const Contact = () => {
  // get form data

  const [input, setInput] = useState({
    fName: "",
    lName: "",
    phone: "",
    email: "",
    services: "",
    subject: "",
    message: "",
    service_policy: "",
  });

  const inputStateChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <PageHeader
        pageName="Contact"
        pageDis={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias commodi facere quia libero temporibus quos.`}
      />

      {/* contact us section start */}
      <section className="contact-us-section">
        <div className="container">
          <div className="contact-us-left">
            <form action="#">
              <h2>Contact us</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, voluptate iusto? Id architecto at, nobis illo doloremque mollitia culpa
                eum.
              </p>

              <div className="form-group">
                <input type="text" placeholder="First Name" name="fName" value={input.fName} onChange={inputStateChange} />
                <input type="text" placeholder="Last Name" name="lName" value={input.lName} onChange={inputStateChange} />
              </div>

              <div className="form-group">
                <input type="number" placeholder="Phone Number" name="phone" value={input.phone} onChange={inputStateChange} />
                <input type="email" placeholder="Email" name="email" value={input.email} onChange={inputStateChange} />
              </div>

              <select name="services" value={input.services} onChange={inputStateChange}>
                <option value="Select Services">Select Services</option>
                <option value="Web Design">Web Design</option>
                <option value="SEO">SEO</option>
                <option value="Digital Markegin">Digital Marketing</option>
              </select>

              <input type="text" placeholder="Subject" name="subject" value={input.subject} onChange={inputStateChange} />
              <textarea name="message" id="" cols="30" rows="10" placeholder="Message" value={input.message} onChange={inputStateChange}></textarea>
              <div className="service-policy">
                <p>Lorem ipsum dolor sit amet.</p>
                <div className="radio-group">
                  <label>
                    <input type="radio" name="service_policy" value="Yes" onChange={inputStateChange} /> Yes
                  </label>
                  <label>
                    <input type="radio" name="service_policy" value="No" onChange={inputStateChange} /> No
                  </label>
                </div>
              </div>

              <div className="form-group">
                <input type="submit" value="Send Message" />
                <input type="reset" value="Reset" style={{ width: "200px", background: "red", color: "white" }} />
              </div>
            </form>
          </div>
          <div className="contact-us-right">
            <div className="contact-right-inner" >
              <img src="https://wacecomm.com/wp-content/uploads/2022/03/istockphoto-1311934969-170667a.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* contact us section end */}
    </>
  );
};

export default Contact;
