import React from "react";
import "./contact.css";
import theme from "../../src/assets/theme.svg";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";

import { useState } from "react";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "07bb009b-eec6-4af9-ab36-86deb0937184", // Replace with your Web3Forms access key
          ...formData,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" }); // Reset the form
      } else {
        const result = await response.json();
        setError(result.message || "Something went wrong");
      }
    } catch (error) {
      setError("Failed to send message, please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk </h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want to work on. You can
            contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <CiMail /> <p>saibrahim@alhikmah.edu.ng</p>
            </div>
            <div className="contact-detail">
              <CiLocationOn /> <p> Lagos, Nigeria</p>
            </div>
            <div className="contact-detail">
              <IoIosCall /> <p>+2347069460421</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="">Write your message here </label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="contact-submit">
            {isSubmitting ? "Sending..." : "Send"}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && (
            <p style={{ color: "green" }}>Message sent successfully!</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
