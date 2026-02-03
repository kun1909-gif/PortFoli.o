import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../components/hoc";
import { fadeIn, textVariant } from "./utils/motion";
import { testimonials } from "./constants/index";

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
    variants={fadeIn("", "spring", index * 0.4, 0.75)}
    className="
      bg-black-200
      p-8
      rounded-3xl
      w-full sm:w-[320px]
      shadow-lg
      hover:-translate-y-2
      transition-all duration-300
    "
  >
    {/* QUOTE */}
    <p className="text-white font-black text-[42px] leading-none">"</p>

    {/* TESTIMONIAL */}
    <div className="mt-3">
      <p className="text-white tracking-wide text-[15px] leading-relaxed">
        {testimonial}
      </p>

      {/* USER INFO */}
      <div className="mt-8 flex justify-between items-center gap-4">
        <div className="flex-1">
          <p className="text-white font-medium text-[15px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[13px]">
            {designation} • {company}
          </p>
        </div>

        {/* IMAGE */}
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="
            w-16 h-16
            rounded-full
            object-cover
            border-2 border-amber-400
            shadow-md
          "
        />
      </div>
    </div>
  </motion.div>
);

/* ================= FEEDBACKS SECTION ================= */

const Feedbacks = () => {
  return (
    <section className="mt-20 flex justify-center">
      <div className="w-full max-w-7xl rounded-[24px] bg-black-100">

        {/* HEADER (LEFT ALIGNED) */}
        <div
          className={`
            rounded-2xl
            ${styles.padding}
            min-h-[180px]
            flex items-center
            justify-start
            text-left
          `}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>
              What others say
            </p>
            <h2 className={styles.sectionHeadText}>
              Testimonials.
            </h2>
          </motion.div>
        </div>

        {/* FEEDBACK CARDS CONTAINER */}
        <div className="flex justify-center -mt-16 pb-20">
          <div
            className="
              flex flex-wrap justify-center
              gap-12
              w-full max-w-[900px]
              rounded-3xl
              shadow-2xl
              p-10
            "
          >
            {testimonials.map((testimonial, index) => (
              <FeedbackCard
                key={testimonial.name}
                index={index}
                {...testimonial}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SectionWrapper(Feedbacks, "");
