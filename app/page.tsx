import Image from "next/image";
import YogaSlider from "./components/YogaSlider";
import YogaTypes from "./components/YogaTypes";
import ScheduleSection from "./components/ScheduleSection";
import GallerySection from "./components/GallerySection";
import Reveal from "./components/Reveal";
import YogaAwards from "./components/YogaAwards";

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
                      Soham Yoga Classes offers specialized yoga programs for
                      children, women, and all age groups focusing on holistic
                      physical and mental wellness.
                      <br />
                      <span className="block mt-2 text-base text-gray-500">
                        सोहम योगा क्लासेस मध्ये बालसंस्कार वर्ग, गर्भसंस्कार,
                        वेट लॉस, फेस योगा, पॉवर योगा तसेच थायरॉईड, बी.पी., शुगर
                        यांसाठी विशेष योग प्रशिक्षण दिले जाते.
                      </span>
                    </p>

                    <div className="feature-box fbox-plain mb-4 transition-transform duration-300 hover:-translate-y-1">
                      <div className="fbox-icon">
                        <i className="bi-check-circle-fill text-primary"></i>
                      </div>
                      <div className="fbox-content">
                        <h3 className="fw-normal text-transform-none">
                          Bal Sanskar & Kids Yoga
                          <span className="text-sm text-gray-500">
                            (बाल संस्कार वर्ग)
                          </span>
                        </h3>
                        <p>
                          Improving concentration, discipline, confidence, and
                          healthy development in children through yoga and
                          values.
                          <br />
                          <span className="text-gray-500">
                            लहान मुलांमध्ये एकाग्रता, आत्मविश्वास, शिस्त आणि
                            चांगले संस्कार विकसित करण्यासाठी विशेष योग वर्ग.
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
                          Garbh Sanskar & Women Wellness
                          <span className="text-sm text-gray-500">
                            (गर्भ संस्कार वर्ग)
                          </span>
                        </h3>
                        <p>
                          Supporting mothers with healthy pregnancy practices
                          and safe guided yoga sessions.
                          <br />
                          <span className="text-gray-500">
                            गर्भावस्थेत आई व बाळाच्या आरोग्यासाठी सुरक्षित व
                            मार्गदर्शित योग सत्रे.
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
                          Weight Loss, Face & Power Yoga
                          <span className="text-sm text-gray-500">
                            (वेट लॉस • फेस योगा • पॉवर योगा)
                          </span>
                        </h3>
                        <p>
                          Specialized programs for weight management, glowing
                          skin, strength building, and lifestyle disorders.
                          <br />
                          <span className="text-gray-500">
                            वजन कमी करणे, चेहऱ्यावरील तेज वाढवणे, पॉवर योगा तसेच
                            थायरॉईड, बी.पी., शुगर यांसाठी योग प्रशिक्षण.
                          </span>
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-lg font-medium text-gray-700">
                      Join Soham Yoga Classes in Pune and experience guided,
                      personalized yoga training.
                      <br />
                      <span className="text-base text-gray-500">
                        पत्ता: खांडे नगर, पुणे | संपर्क: 9130687655 / 9226103538
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
                  "radial-gradient(ellipse at center, rgba(255,221,148,.7),rgba(255,221,148,1)), url('/yoga/shubhangi_yoga_21.webp') no-repeat center center / cover",
              }}
            >
              <Image
                className="section-img-sm shadow-lg rounded-xl"
                src="/yoga/shubhangi_yoga.webp"
                alt="Section Img"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
      {/* awards Section */}

      <Reveal>
        <YogaAwards />
      </Reveal>

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
