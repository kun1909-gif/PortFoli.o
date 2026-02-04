import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../components/hoc";
import { projects } from "../components/constants";
import { fadeIn, textVariant } from "../components/utils/motion";

/* ================= PROJECT CARD ================= */

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className="bg-tertiary p-5 rounded-2xl w-full sm:w-[340px] md:w-[360px]"
      >
        {/* IMAGE */}
        <div className="relative w-full h-[200px] sm:h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[20px] sm:text-[22px]">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed">
            {description}
          </p>
        </div>

        {/* TAGS */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[13px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

/* ================= WORKS SECTION ================= */

const Works = () => {
  return (
    <section className="w-full">
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* HEADER */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="
            mt-3
            text-secondary
            text-[16px] sm:text-[17px]
            max-w-3xl
            leading-[28px] sm:leading-[30px]
          "
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described
          with links to code repositories and live demos. It reflects my
          ability to solve complex problems, work with different
          technologies, and manage projects effectively.
        </motion.p>

        {/* PROJECT CARDS */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 sm:gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SectionWrapper(Works, "projects");
