import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../components/hoc";
import { projects } from "../components/constants/index";
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
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        {/* IMAGE */}
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="mt-5 text-center sm:text-left">
          <h3 className="text-white font-bold text-[22px]">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px]">
            {description}
          </p>
        </div>

        {/* TAGS */}
        <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-2">
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
    <section className="flex flex-col items-center text-center">
      
      {/* HEADER */}
<motion.div variants={textVariant()} className="text-left w-full -ml-8">
  <p className={styles.sectionSubText}>My work</p>
  <h2 className={styles.sectionHeadText}>Projects.</h2>
</motion.div>

{/* DESCRIPTION */}
<motion.p
  variants={fadeIn("", "", 0.1, 1)}
  className="
    mt-1
    text-secondary text-[17px]
    max-w-3xl leading-[30px]
    text-left
    -ml-8
  "
>
  Following projects showcase my skills and experience through
  real-world examples of my work. Each project is briefly described with
  links to code repositories and live demos. It reflects my ability to
  solve complex problems, work with different technologies, and manage
  projects effectively.
</motion.p>
<br />
      {/* PROJECT CARDS */}
      <div className="mt-10 flex flex-wrap justify-center gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>

    </section>
  );
};

export default SectionWrapper(Works, "");
