import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer" className="bg-color dark">
      <div className="container">
        {/* Footer Widgets */}
        <div className="footer-widgets-wrap">
          <div className="row">
            <div className="col-lg-4 col-md-3 col-6">
              <Link href="/">
                <Image
                  src="/logo_white@2x.png"
                  alt="Logo Footer"
                  width={200}
                  height={80}
                />
              </Link>
              <p className="text-white-50">
                A space for mindful movement, balance, and inner peace. <br />
                शरीर, मन आणि आत्म्याचा समतोल साधणारे योगसाधनेचे केंद्र.
              </p>
              <div className="widget">
                <div>
                  <address className="font-primary">
                    Sai Ganesh Park, 122/13, Krushnai Bungalow, <br /> Lane-2,
                    Khandve Nagar, Pune - 411047
                  </address>
                  <h5 className="mb-3">
                    <a href="tel:+01273123456" className="text-white">
                      <i className="fa-solid fa-phone me-1 position-relative"></i>
                      +91 9130687655 <br />
                      <i className="fa-solid fa-phone me-1 position-relative"></i>
                      +91 9226103538
                    </a>
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-6">
              <div className="widget">
                <h3 className="ls-0 h5 mb-4">Programs | योग कार्यक्रम</h3>
                <ul className="list-unstyled iconlist ms-0">
                  <li className="mb-2">
                    <Link href="#" className="text-white-50">
                      Yoga Asanas | योगासन
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="#" className="text-white-50">
                      Expert Instructors | तज्ज्ञ प्रशिक्षक
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="#" className="text-white-50">
                      Gallery | गॅलरी
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/pricing" className="text-white-50">
                      Pricing | शुल्क
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="#" className="text-white-50">
                      FAQs | प्रश्नोत्तरे
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <div className="widget">
                <h3 className="ls-0 h5 mb-4">Connect With Us | संपर्क</h3>
                <ul className="list-unstyled iconlist ms-0">
                  <li className="mb-2">
                    <a href="#" className="text-white-50">
                      Facebook
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-white-50">
                      Instagram
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-white-50">
                      Twitter
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-white-50">
                      Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-6">
              <div className="widget">
                <h3 className="ls-0 h5 mb-4">Open Hours | वेळा</h3>
                <ul className="list-unstyled iconlist ms-0">
                  <li className="mb-2">
                    <a href="#" className="text-white-50">
                      Monday – Saturday | सोमवार – शनिवार
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-white-50">
                      6:30 AM – 8:00 PM
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-white-50">
                      Sunday Closed | रविवार बंद
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyrights */}
      <div id="copyrights" className="text-center dark">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="mb-2 text-white-50">
                © 2026 shubhangi Mali. All Rights Reserved| Designed by
                Vishwabharti Project Services . create <br />© २०२४ सुभांगी योग.
                सर्व हक्क राखीव.
              </p>
              <div className="copyright-links text-white-50">
                <Link href="#" className="text-white-50">
                  Terms | अटी
                </Link>{" "}
                /{" "}
                <Link href="#" className="text-white-50">
                  Privacy | गोपनीयता
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
