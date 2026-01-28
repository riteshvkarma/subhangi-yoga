import Image from "next/image";
import YogaTypes from "../components/YogaTypes";

export default function AboutPage() {
  return (
    <>
      {/* Page Title */}
      <section className="page-title text-start">
        <div className="container">
          <div className="page-title-row align-items-center">
            <div className="page-title-content mw-sm pe-4 text-start">
              <div className="fancy-title title-border mb-3">
                <h5 className="fw-normal color font-body text-uppercase ls-1">
                  Our Story | आमची वाटचाल
                </h5>
              </div>
              <h2 className="text-transform-none display-4 fw-semibold">
                About Us | आमच्याबद्दल
              </h2>
              <span>
                A journey of wellness, balance, and mindful living. <br />
                आरोग्य, समतोल आणि सजग जीवनशैलीकडे नेणारी आमची योगयात्रा.
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
        <div className="content-wrap pb-0">
          <div className="container py-5">
            <div className="row justify-content-between">
              <div className="col-md-5">
                <h2 className="fw-normal display-4">
                  More than <span>10 Years</span> of Experience <br />
                  १०+ वर्षांचा योग प्रशिक्षणाचा अनुभव
                </h2>
                <p className="text-black-50">
                  We believe yoga is more than exercise — it is a way of life
                  that nurtures body, mind, and soul. <br />
                  योग म्हणजे केवळ व्यायाम नाही, तर शरीर, मन आणि आत्म्याचा समतोल
                  साधणारी जीवनशैली आहे.
                </p>
                <p className="text-black-50">
                  Our sessions focus on strength, flexibility, inner peace, and
                  holistic well-being for all age groups. <br />
                  आमचे योग सत्र सर्व वयोगटांसाठी शारीरिक ताकद, लवचिकता, मानसिक
                  शांती आणि संपूर्ण आरोग्यावर लक्ष केंद्रित करतात.
                </p>
                <a
                  href="#"
                  className="btn rounded bg-color text-white shadow text-uppercase fw-semibold ls-1 py-3 px-4"
                >
                  Know More | अधिक जाणून घ्या
                </a>
              </div>
              <div className="col-md-6">
                {/* Grid row */}
                <div className="row gutter-10" data-lightbox="gallery">
                  <div className="col-4">
                    <a
                      href="/yoga/shubhangi_yoga_4.webp"
                      data-lightbox="gallery-item"
                    >
                      <Image
                        src="/yoga/shubhangi_yoga_4.webp"
                        alt="Gallery"
                        width={400}
                        height={300}
                        className="img-fluid h-op-09 op-ts mb-2"
                      />
                    </a>
                    <a
                      href="/yoga/shubhangi_yoga_5.webp"
                      data-lightbox="gallery-item"
                    >
                      <Image
                        src="/yoga/shubhangi_yoga_5.webp"
                        alt="Gallery"
                        width={400}
                        height={300}
                        className="img-fluid h-op-09 op-ts"
                      />
                    </a>
                  </div>
                  <div className="col-8">
                    <a
                      href="/yoga/shubhangi_yoga_8.webp"
                      data-lightbox="gallery-item"
                    >
                      <Image
                        src="/yoga/shubhangi_yoga_8.webp"
                        alt="Gallery"
                        width={800}
                        height={600}
                        className="img-fluid h-op-09 op-ts"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Yoga Types Section */}
          <YogaTypes />
        </div>
      </section>
    </>
  );
}
