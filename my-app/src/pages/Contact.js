import "./Contact.css";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="contact bg-dark">
      <div className="title text">
        <h1>Contact Info</h1>
      </div>
      <div className="body text">
        <div className="email">
          <div className="header">Please feel free to reach me at: </div>
          <div>
            Email:{" "}
            <a href="mailto: csmartinez22@outlook.com">
              csmartinez22@outlook.com
            </a>
          </div>
          <div>Phone Number: 617-961-2158</div>
        </div>
        <div className="header">
          Or follow me here!
          <div className="icons">
            <a href="https://www.linkedin.com/in/joseph-a-martinez/">
              <AiFillLinkedin className="icon" size={32} />
            </a>
            <a href="https://github.com/csmartinez22">
              <AiFillGithub className="icon" size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
