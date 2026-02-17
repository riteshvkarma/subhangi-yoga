"use client";

import { useState } from "react";
import Image from "next/image";

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState("monday");

  const scheduleData = [
    {
      time: "6:00 AM - 7:00 AM",
      class: "Morning Yoga Session | सकाळी योग सत्र",
      teacher: "For Women, Gents & Ladies | सर्वांसाठी",
      image: "/demos/yoga/images/teacher/thumbs/1.jpg",
    },
    {
      time: "8:15 AM - 9:15 AM",
      class: "General Yoga Practice | सर्वसाधारण योगाभ्यास",
      teacher: "For Everyone | सर्वांसाठी",
      image: "/demos/yoga/images/teacher/thumbs/2.jpg",
    },
    {
      time: "5:00 PM - 6:00 PM",
      class: "Evening Yoga Batch | सायंकाळी योग सत्र",
      teacher: "For Everyone | सर्वांसाठी",
      image: "/demos/yoga/images/teacher/thumbs/3.jpg",
    },
    {
      time: "7:15 PM - 8:15 PM",
      class: "Advanced / Power Yoga | प्रगत / पॉवर योग",
      teacher: "For Everyone | सर्वांसाठी",
      image: "/demos/yoga/images/teacher/thumbs/5.jpg",
    },
  ];

  return (
    <section
      className="section section-schedule"
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse at center, rgba(255,221,148,.7),rgba(255,221,148,1), transparent 70%)",
        padding: "130px 0",
      }}
    >
      {/* Decorative Background Shapes */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-120px",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(ellipse at center, rgba(255,221,148,.7),rgba(255,221,148,1)), transparent 70%)",

          borderRadius: "50%",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          left: "-150px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(126,150,128,0.18) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div
          className="heading-block border-bottom-0 mb-6"
          style={{ maxWidth: "700px" }}
        >
          <h2
            className="fw-bold mb-4 text-transform-none"
            style={{
              fontSize: "46px",
              letterSpacing: "-1px",
              background: "linear-gradient(90deg, #6f8f75, #4f6d57)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Weekly Yoga Schedule | साप्ताहिक योग वेळापत्रक
          </h2>
        </div>
        <div className="row justify-content-between">
          <div className="col-md-12 mt-5 mt-md-0">
            <h5
              id="week-details"
              className="font-body text-black-50 d-inline-block"
            >
              Daily Yoga Sessions | दररोज योग सत्रे
            </h5>
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane schedule-wrap fade show active"
                role="tabpanel"
              >
                <div className="schedule-list">
                  {scheduleData.map((schedule, idx) => (
                    <div
                      key={idx}
                      className="d-flex flex-column flex-md-row justify-content-between align-items-md-center px-4 py-2 mb-4 rounded shadow-sm bg-white"
                      style={{
                        borderRadius: "18px",
                        background: "rgba(255,255,255,0.8)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(126,150,128,0.15)",
                        transition: "all 0.35s ease",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-6px)";
                        e.currentTarget.style.boxShadow =
                          "0 18px 35px rgba(0,0,0,0.08)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0px)";
                        e.currentTarget.style.boxShadow =
                          "0 10px 25px rgba(0,0,0,0.05)";
                      }}
                    >
                      {/* Time */}
                      <div
                        className="mb-3 mb-md-0"
                        style={{ minWidth: "110px" }}
                      >
                        <h5
                          className="mb-0 fw-semibold"
                          style={{
                            color: "#5f7f67",
                            fontSize: "19px",
                            fontWeight: 700,
                          }}
                        >
                          {schedule.time}
                        </h5>
                      </div>

                      {/* Class Details */}
                      <div className="flex-grow-1 px-md-4">
                        <h6 className="mb-1 fw-semibold text-dark">
                          {schedule.class}
                        </h6>
                        {schedule.teacher && (
                          <small className="text-muted">
                            Instructor: {schedule.teacher}
                          </small>
                        )}
                      </div>

                      {/* Teacher Image */}
                      {schedule.image && (
                        <div className="mt-3 mt-md-0">
                          <Image
                            src={schedule.image}
                            alt={schedule.teacher || "Yoga Instructor"}
                            width={60}
                            height={60}
                            className="rounded-circle"
                            style={{
                              objectFit: "cover",
                              boxShadow: "0 6px 16px rgba(126,150,128,0.35)",
                              border: "3px solid white",
                            }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
