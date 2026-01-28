import Image from "next/image";
import YogaSlider from "./components/YogaSlider";
import YogaTypes from "./components/YogaTypes";
import ScheduleSection from "./components/ScheduleSection";
import GallerySection from "./components/GallerySection";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <>
      {/* Slider Section */}
      <YogaSlider />

      {/* About Section */}
      <section id="content" className="bg-white ">
        <div className="content-wrap pt-0" style={{ overflow: "visible" }}>
          <div className="position-relative">
            <div className="container">
              <div className="row py-0 py-lg-5">
                <div className="col-lg-5 py-5">
                  <Reveal>
                    <div
                      id="section-about"
                      className="heading-block border-bottom-0 mb-4"
                    >
                      <div className="fancy-title title-border mb-3">
                        <h5 className="fw-normal text-primary uppercase tracking-widest font-body">
                          About Us
                        </h5>
                      </div>
                      <h3 className="fw-bold text-transform-none leading-tight">
                        Who is <span>shubhangi</span> Mali?
                      </h3>
                    </div>
                    <p className="mb-4 text-lg leading-relaxed text-gray-600">
                      shubhangi Mali is an experienced yoga instructor helping
                      people build strength, calm the mind, and find inner
                      balance through mindful practice.
                      <br />
                      <span className="block mt-2 text-base text-gray-500">
                        सुभांगी माळी या अनुभवी योग प्रशिक्षिका असून योगाच्या
                        माध्यमातून शारीरिक बळकटी, मानसिक शांती आणि संतुलन
                        साधण्यासाठी मार्गदर्शन करतात.
                      </span>
                    </p>

                    <div className="feature-box fbox-plain mb-4 transition-transform duration-300 hover:-translate-y-1">
                      <div className="fbox-icon">
                        <i className="bi-check-circle-fill text-primary"></i>
                      </div>
                      <div className="fbox-content">
                        <h3 className="fw-normal text-transform-none">
                          Weekly Guided Yoga Classes{" "}
                          <span className="text-sm text-gray-500">
                            (साप्ताहिक योग वर्ग)
                          </span>
                        </h3>
                        <p>
                          Guided yoga sessions focused on flexibility, strength,
                          stress relief, and mindful living.
                          <br />
                          <span className="text-gray-500">
                            लवचिकता, ताकद, तणावमुक्ती आणि सजग जीवनशैलीसाठी
                            मार्गदर्शित योग सत्रे.
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="feature-box fbox-plain mb-4 transition-transform duration-300 hover:-translate-y-1">
                      <div className="fbox-icon">
                        <i className="bi-check-circle-fill text-warning"></i>
                      </div>
                      <div className="fbox-content">
                        <h3 className="fw-normal text-transform-none">
                          10+ Years of Teaching Experience{" "}
                          <span className="text-sm text-gray-500">
                            (१०+ वर्षांचा अनुभव)
                          </span>
                        </h3>
                        <p>
                          Over a decade of experience offering patient,
                          personalized yoga guidance.
                          <br />
                          <span className="text-gray-500">
                            दहा वर्षांहून अधिक अनुभवासह वैयक्तिक आणि संयमी
                            मार्गदर्शन.
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="feature-box fbox-plain mb-4 transition-transform duration-300 hover:-translate-y-1">
                      <div className="fbox-icon">
                        <i className="bi-check-circle-fill text-info"></i>
                      </div>
                      <div className="fbox-content">
                        <h3 className="fw-normal text-transform-none">
                          A Community of 2100+ Practitioners{" "}
                          <span className="text-sm text-gray-500">
                            (२१००+ योग साधक)
                          </span>
                        </h3>
                        <p>
                          Be part of a supportive community growing together
                          through yoga.
                          <br />
                          <span className="text-gray-500">
                            योगाच्या माध्यमातून एकत्र वाढणाऱ्या साधक समुदायाचा
                            भाग बना.
                          </span>
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-lg font-medium text-gray-700">
                      Yoga is not just practice — it’s a way of life.
                      <br />
                      <span className="text-base text-gray-500">
                        योग हा केवळ व्यायाम नसून जीवनशैली आहे.
                      </span>
                    </p>
                  </Reveal>
                </div>
              </div>
            </div>
            <div
              className="section-img shadow-xl rounded-l-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(255,221,148,.7),rgba(255,221,148,1)), url('/yoga/shubhangi_yoga_25.webp') no-repeat center center / cover",
              }}
            >
              <Image
                className="section-img-sm shadow-lg rounded-xl"
                src="/yoga/shubhangi_yoga_2.webp"
                alt="Section Img"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Yoga Types Section */}
      <Reveal>
        <YogaTypes />
      </Reveal>

      {/* Schedule Section */}

      <ScheduleSection />

      {/* Gallery Section */}
      <GallerySection />
    </>
  );
}
