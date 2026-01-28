"use client";

import { useState } from "react";
import Image from "next/image";

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState("monday");

  const scheduleData = {
    monday: [
      {
        time: "8:30 am",
        class: "Namaste Yoga",
        teacher: "Ruby Von Rails",
        image: "/demos/yoga/images/teacher/thumbs/1.jpg",
      },
      {
        time: "9:00 am",
        class: "Vrikshasana (Tree Pose)",
        teacher: "Theodore Handle",
        image: "/demos/yoga/images/teacher/thumbs/2.jpg",
      },
      {
        time: "10:00 am",
        class: "Naukasana (Boat Pose)",
        teacher: "Norman Gordon",
        image: "/demos/yoga/images/teacher/thumbs/3.jpg",
      },
      { time: "11:30 am", class: "Lunch Break" },
      {
        time: "12:30 pm",
        class: "Paschimottanasana",
        teacher: "Jason Response",
        image: "/demos/yoga/images/teacher/thumbs/4.jpg",
      },
      {
        time: "2:30 pm",
        class: "Bandha Sarvangasana Yoga",
        teacher: "Abraham Pigeon",
        image: "/demos/yoga/images/teacher/thumbs/5.jpg",
      },
      {
        time: "4:00 am",
        class: "Vrikshasana (Tree Pose)",
        teacher: "Theodore Handle",
        image: "/demos/yoga/images/teacher/thumbs/2.jpg",
      },
    ],
    tuesday: [
      {
        time: "9:00 am",
        class: "Vrikshasana (Tree Pose)",
        teacher: "Theodore Handle",
        image: "/demos/yoga/images/teacher/thumbs/2.jpg",
      },
      {
        time: "10:00 am",
        class: "Naukasana (Boat Pose)",
        teacher: "Norman Gordon",
        image: "/demos/yoga/images/teacher/thumbs/3.jpg",
      },
      {
        time: "12:30 pm",
        class: "Paschimottanasana",
        teacher: "Jason Response",
        image: "/demos/yoga/images/teacher/thumbs/4.jpg",
      },
      {
        time: "2:30 pm",
        class: "Bandha Sarvangasana Yoga",
        teacher: "Abraham Pigeon",
        image: "/demos/yoga/images/teacher/thumbs/5.jpg",
      },
    ],
    wednesday: [
      {
        time: "8:30 am",
        class: "Namaste Yoga",
        teacher: "Ruby Von Rails",
        image: "/demos/yoga/images/teacher/thumbs/1.jpg",
      },
      {
        time: "9:00 am",
        class: "Vrikshasana (Tree Pose)",
        teacher: "Theodore Handle",
        image: "/demos/yoga/images/teacher/thumbs/2.jpg",
      },
      {
        time: "10:00 am",
        class: "Naukasana (Boat Pose)",
        teacher: "Norman Gordon",
        image: "/demos/yoga/images/teacher/thumbs/3.jpg",
      },
      {
        time: "12:30 pm",
        class: "Paschimottanasana",
        teacher: "Jason Response",
        image: "/demos/yoga/images/teacher/thumbs/4.jpg",
      },
    ],
    thursday: [
      {
        time: "10:00 am",
        class: "Naukasana (Boat Pose)",
        teacher: "Norman Gordon",
        image: "/demos/yoga/images/teacher/thumbs/3.jpg",
      },
      {
        time: "12:30 pm",
        class: "Paschimottanasana",
        teacher: "Jason Response",
        image: "/demos/yoga/images/teacher/thumbs/4.jpg",
      },
      {
        time: "3:00 pm",
        class: "Bandha Sarvangasana Yoga",
        teacher: "Abraham Pigeon",
        image: "/demos/yoga/images/teacher/thumbs/5.jpg",
      },
    ],
    friday: [
      {
        time: "6:30 pm",
        class: "Paschimottanasana",
        teacher: "Jason Response",
        image: "/demos/yoga/images/teacher/thumbs/4.jpg",
      },
      {
        time: "8:30 am",
        class: "Namaste Yoga",
        teacher: "Ruby Von Rails",
        image: "/demos/yoga/images/teacher/thumbs/1.jpg",
      },
      {
        time: "9:00 am",
        class: "Vrikshasana (Tree Pose)",
        teacher: "Theodore Handle",
        image: "/demos/yoga/images/teacher/thumbs/2.jpg",
      },
      {
        time: "2:30 pm",
        class: "Bandha Sarvangasana Yoga",
        teacher: "Abraham Pigeon",
        image: "/demos/yoga/images/teacher/thumbs/5.jpg",
      },
    ],
    saturday: [
      {
        time: "7:20 am",
        class: "Naukasana (Boat Pose)",
        teacher: "Norman Gordon",
        image: "/demos/yoga/images/teacher/thumbs/3.jpg",
      },
      {
        time: "8:30 am",
        class: "Namaste Yoga",
        teacher: "Ruby Von Rails",
        image: "/demos/yoga/images/teacher/thumbs/1.jpg",
      },
      {
        time: "9:00 am",
        class: "Vrikshasana (Tree Pose)",
        teacher: "Theodore Handle",
        image: "/demos/yoga/images/teacher/thumbs/2.jpg",
      },
      {
        time: "2:30 pm",
        class: "Bandha Sarvangasana Yoga",
        teacher: "Abraham Pigeon",
        image: "/demos/yoga/images/teacher/thumbs/5.jpg",
      },
    ],
    sunday: [
      {
        time: "6:30 pm",
        class: "Paschimottanasana",
        teacher: "Jason Response",
        image: "/demos/yoga/images/teacher/thumbs/4.jpg",
      },
      {
        time: "8:30 am",
        class: "Namaste Yoga",
        teacher: "Ruby Von Rails",
        image: "/demos/yoga/images/teacher/thumbs/1.jpg",
      },
      { time: "- Closed -", class: "Rest of the Time" },
    ],
  };

  const days = [
    { key: "monday", label: "Monday | सोमवार" },
    { key: "tuesday", label: "Tuesday | मंगळवार" },
    { key: "wednesday", label: "Wednesday | बुधवार" },
    { key: "thursday", label: "Thursday | गुरुवार" },
    { key: "friday", label: "Friday | शुक्रवार" },
    { key: "saturday", label: "Saturday | शनिवार" },
    { key: "sunday", label: "Sunday | रविवार" },
  ];

  const currentSchedule = scheduleData[activeDay as keyof typeof scheduleData];

  return (
    <section
      className="section section-schedule"
      style={{
        position: "relative",
        overflow: "visible",
        background:
          "linear-gradient(to bottom, rgba(126, 150, 128, 0) 0%, rgba(126, 150, 128, 0.8) 70%) left top",
        backgroundSize: "100% 100%",
        padding: "100px 0",
      }}
    >
      <div className="container">
        <div
          className="heading-block border-bottom-0 mb-6"
          style={{ maxWidth: "700px" }}
        >
          <h2
            className="fw-bold mb-2 text-transform-none"
            style={{ fontSize: "42px", letterSpacing: "-1px" }}
          >
            Yoga <span>Schedule</span> | योग वेळापत्रक
          </h2>
          <p className="lead">
            Find the perfect time for your practice. आपल्या दिनचर्येला अनुरूप
            योगाचे सत्र निवडा.
          </p>
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-4 col-md-5 mt-4 mt-md-0 sticky-sidebar-wrap">
            <div
              className="sticky-sidebar"
              style={{
                position: "sticky",
                top: "120px",
              }}
            >
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                {days.map((day) => (
                  <button
                    key={day.key}
                    className={`nav-link ${activeDay === day.key ? "active" : ""}`}
                    onClick={() => setActiveDay(day.key)}
                    role="tab"
                  >
                    {day.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-7 mt-5 mt-md-0">
            <h5
              id="week-details"
              className="font-body text-black-50 d-inline-block"
            >
              {days.find((d) => d.key === activeDay)?.label} — योग वर्ग
            </h5>
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane schedule-wrap fade show active"
                role="tabpanel"
              >
                <dl className="row g-0 table mb-0">
                  {currentSchedule.map((schedule, idx) => (
                    <div key={idx} style={{ width: "100%" }}>
                      <dt className="col-sm-3">
                        <div className="schedule-time font-primary">
                          {schedule.time}
                        </div>
                      </dt>
                      <dd
                        className="col-sm-9 d-flex justify-content-between align-items-center"
                        style={{ paddingBottom: "1rem" }}
                      >
                        <div className="schedule-desc font-primary">
                          {schedule.class}
                          {schedule.teacher && (
                            <small>- {schedule.teacher}</small>
                          )}
                        </div>
                        {schedule.image && (
                          <a href="#">
                            <Image
                              src={schedule.image}
                              alt="Teacher"
                              width={50}
                              height={50}
                              className="schedule-teacher"
                            />
                          </a>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
