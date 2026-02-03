import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../components/constants";
import SectionWrapper from "../components/hoc/SectionWrapper";
import { fadeIn, textVariant } from "../components/utils/motion";

const ServiceCard = ({ index, title, icon }) => (
<Tilt
  className="pl-[10px] xs:w-[200px] w-[250px] mx-auto"
  options={{
    max: 45,
    scale: 1,
    speed: 450,
  }}
>

    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center">
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section className="min-h-screen w-full relative pl-3.5">
      
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
    className="mt-4 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px] pl-1.5"

      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

<div className="mt-20 mx-auto max-w-7xl px-6 sm:px-12 flex flex-wrap justify-center lg:justify-start gap-10">


  {services.map((service, index) => (
    <ServiceCard
      key={service.title}
      index={index}
      {...service}
    />
  ))}
</div>


    </section>
  );
};

export default SectionWrapper(About, "about");
