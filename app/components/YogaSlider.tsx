"use client";

import { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // ✅ valid cubic-bezier (easeOut)
    },
  },
};

export default function YogaSlider() {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initSwiper = async () => {
      const swiperModule = await import("swiper");
      const SwiperClass = swiperModule.default;

      // Import modules explicitly to avoid hook-like static calls
      const { Navigation, Pagination, EffectFade, Autoplay } =
        await import("swiper/modules");

      // Defer initialization to ensure DOM is fully mounted
      setTimeout(() => {
        if (swiperRef.current && swiperRef.current instanceof HTMLElement) {
          new SwiperClass(swiperRef.current, {
            modules: [Navigation, Pagination, EffectFade, Autoplay],
            effect: "fade",
            loop: true,
            autoplay: {
              delay: 5000,
              disableOnInteraction: false,
            },
            navigation: {
              nextEl: ".slider-arrow-right",
              prevEl: ".slider-arrow-left",
            },
            pagination: {
              el: ".slide-number",
              type: "custom",
              renderCustom: (
                _swiper: unknown,
                current: number,
                total: number,
              ) => {
                const currentEl = document.querySelector(
                  ".slide-number-current",
                );
                const totalEl = document.querySelector(".slide-number-total");
                if (currentEl)
                  currentEl.textContent = String(current).padStart(2, "0");
                if (totalEl)
                  totalEl.textContent = String(total).padStart(2, "0");
                return "";
              },
            },
          });
        }
      }, 0);
    };

    initSwiper();
  }, []);

  return (
    <section
      id="slider"
      className="slider-element swiper_wrapper min-vh-100"
      data-effect="fade"
    >
      <div className="slider-inner">
        <div className="swiper swiper-parent" ref={swiperRef}>
          <div className="swiper-wrapper">
            {/* Slide 1 */}
            <div
              className="swiper-slide hero-diagonal dark bg-color"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0, 0.1)), url('/yoga/shubhangi_yoga_21.webp') no-repeat center right / auto 100%",
              }}
            >
              <motion.div
                className="container"
                style={{ zIndex: 2 }}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="row h-100 align-items-center py-5">
                  <div className="col-md-6">
                    <div className="heading-block border-bottom-0 mb-4">
                      <motion.h5
                        variants={itemVariants}
                        className="fw-light mb-2 text-white-150"
                      >
                        योग म्हणजे स्वतःला ओळखण्याची एक सुंदर संधी आहे.
                      </motion.h5>
                      <motion.h2
                        variants={itemVariants}
                        className="fw-bold text-transform-none ls-0"
                      >
                        Yoga is the perfect opportunity to be curious about who
                        you are.
                        <br />
                      </motion.h2>
                    </div>
                    <motion.p
                      variants={itemVariants}
                      className="mb-5 fw-normal lead"
                      style={{ lineHeight: "1.6" }}
                    >
                      <span className="text-white-150 fs-6">
                        संतुलन, शांती आणि आरोग्यासाठी मार्गदर्शित योगाभ्यासाचा
                        अनुभव घ्या.
                      </span>
                      <br />
                      Discover strength, flexibility, and inner calm through
                      guided yoga practices designed for balance and well-being.
                    </motion.p>
                    <motion.a
                      variants={itemVariants}
                      href="#section-yogas"
                      className="btn rounded bg-white color text-uppercase fw-semibold ls-1 py-3 px-4"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Started <i className="bi-arrow-right"></i>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Slide 2 */}
            <div
              className="swiper-slide hero-diagonal dark bg-color"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0, 0.1)), url('/yoga/shubhangi_yoga_22.webp') no-repeat bottom right / auto 100%",
              }}
            >
              <motion.div
                className="container"
                style={{ zIndex: 2 }}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="row h-100 align-items-center py-5">
                  <div className="col-md-6">
                    <div className="heading-block border-bottom-0 mb-4">
                      <motion.h5
                        variants={itemVariants}
                        className="text-uppercase fw-light mb-2 text-white-150"
                      >
                        ध्यानाच्या माध्यमातून अंतःशांती आणि संतुलन अनुभवा.
                      </motion.h5>
                      <motion.h2
                        variants={itemVariants}
                        className="fw-bold text-transform-none ls-0"
                      >
                        Find peace and balance within yourself through
                        meditation.
                      </motion.h2>
                    </div>
                    <motion.p
                      variants={itemVariants}
                      className="mb-5 fw-normal lead"
                    >
                      <span className="text-white-150 fs-6">
                        ध्यानाच्या सरावातून मन शांत करा आणि स्वतःशी पुन्हा जोडले
                        जा.
                      </span>
                      <br />
                      Slow down, breathe deeply, and reconnect with your inner
                      self through mindful meditation practices.
                    </motion.p>
                    <motion.a
                      variants={itemVariants}
                      href="#section-yogas"
                      className="btn rounded bg-white color text-uppercase fw-semibold ls-1 py-3 px-4"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Started <i className="bi-arrow-right"></i>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="slider-arrow-left">
            <i className="uil uil-angle-left-b"></i>
          </div>
          <div className="slider-arrow-right">
            <i className="uil uil-angle-right-b"></i>
          </div>
          <div className="slide-number">
            <div className="slide-number-current">01</div>
            <span>/</span>
            <div className="slide-number-total">02</div>
          </div>
        </div>
      </div>
    </section>
  );
}
