"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function YogaTypes() {
  const yogaTypes = [
    {
      id: 1,
      icon: "/demos/yoga/images/yoga-icons/color/svg/asana_lotus_col.svg",
      title: "Bal Sanskar & Kids Yoga",
      description:
        "Improving concentration, confidence, discipline, and healthy development in children.\nलहान मुलांमध्ये एकाग्रता, आत्मविश्वास व चांगले संस्कार विकसित करण्यासाठी विशेष वर्ग.",
      borderColor: "#9DC3E2",
    },
    {
      id: 2,
      icon: "/demos/yoga/images/yoga-icons/color/svg/asana_cobra.svg",
      title: "Garbh Sanskar Yoga",
      description:
        "Safe and guided yoga sessions supporting healthy pregnancy and emotional well-being.\nगर्भावस्थेत आई व बाळाच्या आरोग्यासाठी सुरक्षित आणि मार्गदर्शित योग सत्रे.",
      borderColor: "#FFB5CC",
    },
    {
      id: 3,
      icon: "/demos/yoga/images/yoga-icons/color/svg/man_well.svg",
      title: "Weight Loss Yoga",
      description:
        "Structured programs for weight management, fat reduction, and lifestyle improvement.\nवजन कमी करणे आणि निरोगी जीवनशैलीसाठी विशेष योग प्रशिक्षण.",
      borderColor: "#F4ABEF",
    },
    {
      id: 4,
      icon: "/demos/yoga/images/yoga-icons/color/svg/kundalini_col.svg",
      title: "Face Yoga & Beauty Wellness",
      description:
        "Natural techniques for glowing skin, reduced wrinkles, and facial toning.\nचेहऱ्यावरील तेज वाढवणे व त्वचेची निगा राखण्यासाठी फेस योगा.",
      borderColor: "#F2A490",
    },
    {
      id: 5,
      icon: "/demos/yoga/images/yoga-icons/color/svg/lotus_col.svg",
      title: "Power Yoga & Fitness",
      description:
        "Strength-building yoga to improve stamina, flexibility, and overall fitness.\nपॉवर योगामुळे ताकद, लवचिकता व सहनशक्ती वाढते.",
      borderColor: "#9DD2D8",
    },
    {
      id: 6,
      icon: "/demos/yoga/images/yoga-icons/color/svg/om_col.svg",
      title: "Therapeutic Yoga",
      description:
        "Special yoga sessions for Thyroid, BP, Sugar, and lifestyle disorders.\nथायरॉईड, बी.पी., शुगर यांसारख्या समस्यांसाठी विशेष योग प्रशिक्षण.",
      borderColor: "#D0E6A5",
    },
  ];

  return (
    <section
      id="section-yogas"
      className="section section-yogas mb-0"
      style={{
        backgroundColor: "rgba(126, 150, 128, 0.2)",
        padding: "100px 0",
      }}
    >
      <div className="container">
        <header className="mb-5 text-center">
          <h2 className="fw-bold">Yoga Classes & Wellness Programs</h2>
          <p className="text-muted mt-2">
            Specialized yoga programs for children, women, and all age groups
            focusing on physical fitness, mental strength, and overall wellness.
            <br />
            बालसंस्कार, गर्भसंस्कार, वेट लॉस, फेस योगा आणि सर्वांगीण आरोग्यासाठी
            विशेष योग वर्ग.
          </p>
        </header>
        <motion.div
          className="row"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {yogaTypes.map((yoga) => (
            <motion.div
              key={yoga.id}
              className="col-md-6 col-lg-4 mt-5"
              variants={itemVariants}
            >
              <motion.div
                className="card overflow-hidden"
                style={{ borderTopColor: yoga.borderColor }}
                whileHover={{
                  y: -10,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
              >
                <div className="card-body">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Image
                      src={yoga.icon}
                      alt={yoga.title}
                      width={60}
                      height={60}
                      className="mb-3"
                    />
                  </motion.div>
                  <h3 className="h5 fw-semibold">{yoga.title}</h3>
                  <p className="text-black-50">{yoga.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
