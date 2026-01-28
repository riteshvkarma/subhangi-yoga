"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      {/* Page Title */}
      <section className="page-title text-start">
        <div className="container">
          <div className="page-title-row align-items-center">
            <div className="page-title-content mw-sm pe-4 text-start">
              <div className="fancy-title title-border mb-3">
                <h5 className="fw-normal color font-body text-uppercase ls-1">
                  Get In Touch | संपर्क करा
                </h5>
              </div>
              <h2 className="text-transform-none display-4 fw-semibold">
                Contact Us | संपर्क
              </h2>
              <span>
                We’re here to support your yoga journey. Reach out anytime.{" "}
                <br />
                तुमच्या योगप्रवासासाठी आम्ही सदैव सोबत आहोत — आजच संपर्क साधा.
              </span>
            </div>
            <Image
              src="/demos/yoga/images/yoga-img.svg"
              alt="Yoga Image"
              width={300}
              height={300}
              className="d-none d-sm-flex"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section id="content">
        <div className="content-wrap">
          <div className="container">
            <div className="row gutter-40">
              {/* Contact Information */}
              <div className="col-md-6">
                <div className="heading-block border-bottom-0 mb-4">
                  <div className="fancy-title title-border mb-3">
                    <h5 className="fw-normal color font-body">
                      Contact Info | संपर्क माहिती
                    </h5>
                  </div>
                  <h3
                    className="fw-bold text-transform-none"
                    style={{ fontSize: "32px" }}
                  >
                    Get in touch with us today <br />
                    आजच आमच्याशी संपर्क साधा
                  </h3>
                </div>
                <p className="text-black-50">
                  Have a question or want to join our yoga sessions? We’d love
                  to hear from you. <br />
                  योग वर्गांबद्दल माहिती हवी आहे का? आम्हाला नक्की कळवा.
                </p>

                <div className="feature-box fbox-plain mb-4">
                  <div className="fbox-icon">
                    <i className="bi-geo-alt-fill text-primary"></i>
                  </div>
                  <div className="fbox-content">
                    <h3 className="fw-normal text-transform-none">
                      Address | पत्ता
                    </h3>
                    <p>
                      Sai Ganesh Park, 122/13, Krushnai Bungalow, Lane-2,
                      Khandve Nagar, Pune - 411047
                    </p>
                  </div>
                </div>

                <div className="feature-box fbox-plain mb-4">
                  <div className="fbox-icon">
                    <i className="bi-telephone-fill text-warning"></i>
                  </div>
                  <div className="fbox-content">
                    <h3 className="fw-normal text-transform-none">
                      Phone | फोन
                    </h3>
                    <p>+91 9130687655</p>
                    <p>+91 9226103538</p>
                  </div>
                </div>

                <div className="feature-box fbox-plain">
                  <div className="fbox-icon">
                    <i className="bi-envelope-fill text-info"></i>
                  </div>
                  <div className="fbox-content">
                    <h3 className="fw-normal text-transform-none">
                      Email | ई-मेल
                    </h3>
                    <p>malishubhangi487@gmail.com</p>
                  </div>
                </div>

                <div className="social-icons mt-4">
                  <a
                    href="https://www.facebook.com/semicolonweb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon h-bg-facebook si-small bg-light mb-0"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/semicolonweb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon h-bg-instagram si-small bg-light mb-0"
                  >
                    <i className="bi-instagram"></i>
                  </a>
                  <a
                    href="https://twitter.com/__SemiColon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon h-bg-twitter si-small bg-light mb-0"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="col-md-6">
                <div className="heading-block border-bottom-0 mb-4">
                  <h3
                    className="fw-bold text-transform-none"
                    style={{ fontSize: "32px" }}
                  >
                    Send us a Message <br />
                    आम्हाला संदेश पाठवा
                  </h3>
                </div>

                {submitted && (
                  <div className="alert alert-success" role="alert">
                    Message sent successfully! We’ll be in touch soon. <br />
                    संदेश यशस्वीरीत्या पाठवला आहे. लवकरच संपर्क करू.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label">
                      Your Name | तुमचे नाव *
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="email" className="form-label">
                      Your Email | तुमचा ई-मेल *
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="subject" className="form-label">
                      Subject | विषय *
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="form-group mb-4">
                    <label htmlFor="message" className="form-label">
                      Message | संदेश *
                    </label>
                    <textarea
                      className="form-control form-control-lg"
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn rounded bg-color text-white text-uppercase fw-semibold ls-1 py-3 px-4"
                  >
                    Send Message | संदेश पाठवा
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
