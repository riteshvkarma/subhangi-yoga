"use client";

import { useEffect, useRef } from "react";

export default function TeachersCarousel() {
  const swiperRef = useRef<HTMLDivElement>(null);

  const teachers = [
    {
      id: 1,
      name: "Ruby Von Rails",
      title: "Professional Trainer",
      image: "/demos/yoga/images/teacher/1.jpg",
      description:
        "Assertively leverage existing integrated communities after turnkey quality vectors. Assertively coordinate sustainable quality.",
      socials: [
        {
          icon: "fa-brands fa-facebook-f",
          url: "https://www.facebook.com/semicolonweb/",
        },
        {
          icon: "bi-instagram",
          url: "https://www.instagram.com/semicolonweb/",
        },
        { icon: "fa-brands fa-youtube", url: "#" },
        { icon: "fa-brands fa-dribbble", url: "#" },
      ],
    },
    {
      id: 2,
      name: "Theodore Handle",
      title: "International Trainer",
      image: "/demos/yoga/images/teacher/2.jpg",
      description:
        "Assertively leverage existing integrated communities after turnkey quality vectors. Assertively coordinate sustainable quality.",
      socials: [
        {
          icon: "fa-brands fa-facebook-f",
          url: "https://www.facebook.com/semicolonweb/",
        },
        {
          icon: "bi-instagram",
          url: "https://www.instagram.com/semicolonweb/",
        },
        { icon: "fa-brands fa-youtube", url: "#" },
      ],
    },
    {
      id: 3,
      name: "Norman Gordon",
      title: "Professional Trainer",
      image: "/demos/yoga/images/teacher/3.jpg",
      description:
        "Assertively leverage existing integrated communities after turnkey quality vectors. Assertively coordinate sustainable quality.",
      socials: [
        {
          icon: "fa-brands fa-facebook-f",
          url: "https://www.facebook.com/semicolonweb/",
        },
        {
          icon: "bi-instagram",
          url: "https://www.instagram.com/semicolonweb/",
        },
        { icon: "fa-brands fa-dribbble", url: "#" },
      ],
    },
    {
      id: 4,
      name: "Jason Response",
      title: "International Trainer",
      image: "/demos/yoga/images/teacher/4.jpg",
      description:
        "Assertively leverage existing integrated communities after turnkey quality vectors. Assertively coordinate sustainable quality.",
      socials: [
        {
          icon: "fa-brands fa-facebook-f",
          url: "https://www.facebook.com/semicolonweb/",
        },
        {
          icon: "bi-instagram",
          url: "https://www.instagram.com/semicolonweb/",
        },
        { icon: "fa-brands fa-dropbox", url: "#" },
      ],
    },
    {
      id: 5,
      name: "Abraham Pigeon",
      title: "Professional Trainer",
      image: "/demos/yoga/images/teacher/5.jpg",
      description:
        "Assertively leverage existing integrated communities after turnkey quality vectors. Assertively coordinate sustainable quality.",
      socials: [
        {
          icon: "fa-brands fa-facebook-f",
          url: "https://www.facebook.com/semicolonweb/",
        },
        {
          icon: "bi-instagram",
          url: "https://www.instagram.com/semicolonweb/",
        },
        { icon: "fa-solid fa-envelope", url: "#" },
      ],
    },
  ];

  useEffect(() => {
    const initSwiper = async () => {
      const swiperModule = await import("swiper");
      const SwiperClass = swiperModule.default;

      const { Navigation, Pagination } = await import("swiper/modules");

      // Defer initialization to ensure DOM is fully mounted
      setTimeout(() => {
        if (swiperRef.current && swiperRef.current instanceof HTMLElement) {
          new SwiperClass(swiperRef.current, {
            modules: [Navigation, Pagination],
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        }
      }, 0);
    };

    initSwiper();
  }, []);

  return (
    <section className="section bg-transparent my-0 pb-1">
      <div className="container">
        <div className="heading-block" style={{ maxWidth: "500px" }}>
          <h3
            className="fw-bold text-transform-none mb-4"
            style={{ fontSize: "42px", letterSpacing: "-1px" }}
          >
            Certified Yoga <span>Teachers</span>.
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
            nesciunt tenetur iste odit animi mollitia amet autem alias ea dicta!
          </p>
        </div>
      </div>
      <div className="swiper" ref={swiperRef}>
        <div className="swiper-wrapper">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="swiper-slide">
              <div
                className="jumbotron m-0 dark p-5 d-flex justify-content-center align-items-md-end flex-column"
                style={{
                  background: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0, 0.8)), url('${teacher.image}') no-repeat center center / cover`,
                  minHeight: "500px",
                }}
              >
                <div className="jumbotron-text mt-0 mt-md-auto row align-items-center">
                  <div className="col-md-8">
                    <h2 className="mb-1 fw-bold">{teacher.name}</h2>
                    <div className="ls-1 mb-4 text-light fw-normal text-uppercase ls-1">
                      - {teacher.title}
                    </div>
                    <div className="testi-content">
                      <p>{teacher.description}</p>
                    </div>
                    <div className="social-icons mt-4">
                      {teacher.socials.map((social, idx) => (
                        <a
                          key={idx}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-icon h-bg-facebook si-small bg-white bg-opacity-25"
                        >
                          <i className={social.icon}></i>
                          <i className={social.icon}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-4 d-flex justify-content-md-center mt-3 mt-md-0">
                    <a
                      href="https://www.youtube.com/watch?v=P3Huse9K6Xs"
                      className="play-icon"
                    >
                      <i className="bi-play-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </section>
  );
}
