import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../components/constants";
import SectionWrapper from "../components/hoc/SectionWrapper";
import { fadeIn, textVariant } from "../components/utils/motion";

/* ================= SERVICE CARD ================= */

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="w-full sm:w-[260px] md:w-[280px]"
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.3, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-8 px-6 min-h-[260px] flex flex-col justify-evenly items-center">
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[18px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

/* ================= ABOUT SECTION ================= */

const About = () => {
  return (
    <section className="w-full min-h-screen">
      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* HEADER */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            Introduction
          </p>
          <h2 className={styles.sectionHeadText}>
            Overview.
          </h2>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="
            mt-4
            text-secondary
            text-[16px] sm:text-[17px]
            max-w-3xl
            leading-[28px] sm:leading-[30px]
          "
        >
          I'm a skilled software developer with experience in JavaScript,
          and expertise in frameworks like React, Node.js, and Three.js.
          I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that
          solve real-world problems. Let's work together to bring your
          ideas to life!
        </motion.p>

        {/* SERVICE CARDS */}
        <div className="mt-12 flex justify-center">
          <div
            className="
              w-full
              flex flex-wrap
              justify-center
              gap-8 sm:gap-10
            "
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                index={index}
                {...service}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
