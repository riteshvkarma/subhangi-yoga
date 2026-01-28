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
      title: "Yoga for Beginners",
      description:
        "Simple and guided yoga sessions to build flexibility, strength, and confidence.\nयोगाची सुरुवात करण्यासाठी सोपे आणि मार्गदर्शित वर्ग.",
      borderColor: "#9DC3E2",
    },
    {
      id: 2,
      icon: "/demos/yoga/images/yoga-icons/color/svg/asana_cobra.svg",
      title: "30+ Yoga Poses",
      description:
        "Learn essential yoga poses for balance, mobility, and overall wellness.\nसंतुलन, लवचिकता आणि आरोग्यासाठी ३०+ योगासनांचा सराव.",
      borderColor: "#FFB5CC",
    },
    {
      id: 3,
      icon: "/demos/yoga/images/yoga-icons/color/svg/man_well.svg",
      title: "Well-Trained Teachers",
      description:
        "Experienced instructors offering safe, mindful, and personalized guidance.\nअनुभवी प्रशिक्षकांकडून सुरक्षित आणि वैयक्तिक मार्गदर्शन.",
      borderColor: "#F4ABEF",
    },
    {
      id: 4,
      icon: "/demos/yoga/images/yoga-icons/color/svg/kundalini_col.svg",
      title: "Holistic Wellness",
      description:
        "Yoga practices that nurture body, mind, and inner awareness.\nशरीर, मन आणि आत्मिक संतुलनासाठी सर्वांगीण योगाभ्यास.",
      borderColor: "#F2A490",
    },
    {
      id: 5,
      icon: "/demos/yoga/images/yoga-icons/color/svg/lotus_col.svg",
      title: "Classes in Nature",
      description:
        "Practice yoga in calm, natural surroundings for deeper relaxation.\nनिसर्गाच्या सान्निध्यात शांत आणि ताजेतवाने योग वर्ग.",
      borderColor: "#9DD2D8",
    },
    {
      id: 6,
      icon: "/demos/yoga/images/yoga-icons/color/svg/om_col.svg",
      title: "Free Trial Class",
      description:
        "Experience our teaching style with a complimentary trial session.\nएक मोफत प्रात्यक्षिक वर्ग घेऊन अनुभव घ्या.",
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
            Beginner-friendly yoga classes, guided practices, meditation, and
            holistic wellness programs designed for mind, body, and balance.
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
