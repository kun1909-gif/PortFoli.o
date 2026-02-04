import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../components/hoc";
import { fadeIn, textVariant } from "../components/utils/motion";
import { testimonials } from "../components/constants";

/* ================= FEEDBACK CARD ================= */

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="
      bg-black-200
      p-6 sm:p-8
      rounded-3xl
      w-full sm:w-[300px] md:w-[320px]
      min-h-[260px]
      shadow-lg
      hover:-translate-y-2
      transition-transform duration-300
    "
  >
    <p className="text-white font-black text-[36px] leading-none">"</p>

    <div className="mt-3">
      <p className="text-white text-[14px] leading-relaxed">
        {testimonial}
      </p>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-white font-medium text-[14px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} • {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="
            w-14 h-14
            rounded-full
            object-cover
            border-2 border-amber-400
          "
        />
      </div>
    </div>
  </motion.div>
);

/* ================= FEEDBACKS SECTION ================= */

const Feedbacks = () => {
  return (
    <section className="w-full top-2">
      
      {/* HEADER */}
      <motion.div
        variants={textVariant()}
        className="text-center mb-6"
      >
        <p className={styles.sectionSubText}>
          What others say
        </p>
        <h2 className={styles.sectionHeadText}>
          Testimonials.
        </h2>
      </motion.div>

      {/* FEEDBACK CARDS */}
      <div className="
        flex flex-wrap
        justify-center
        gap-8
      ">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>

    </section>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");
