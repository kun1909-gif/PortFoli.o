import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import EarthCanvas from "./canvas/Earth";
import { SectionWrapper } from "../components/hoc";
import { slideIn } from "../components/utils/motion";

const Contact = () => {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        alert("Thank you 🙌 I will get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error("EmailJS Error:", error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center  px-4">
    <div
  className="mx-auto w-[1200px] 
  min-h-[80vh]
  flex xl:flex-row flex-col-reverse gap-12 
  overflow-hidden 
  px-10 sm:px-16 py-16 
  rounded-3xl shadow-2xl"
>
        {/* CONTACT FORM */}
    <motion.div
  variants={slideIn("left", "tween", 0.2, 1)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="flex-[0.85]
  bg-black/75 backdrop-blur-2xl
  p-1 rounded-xl
  border border-white/10
  shadow-[0_0_40px_rgba(0,0,0,0.45)]"
>
  {/* HEADER */}
  <div className="mb-10 p-6 rounded-2xl bg-white/5 
flex flex-col items-center text-center">
  <p className={`${styles.sectionSubText} text-amber-400`}>
    Let’s connect
  </p>

  <h3 className={`${styles.sectionHeadText} text-white`}>
    Contact Me
  </h3>

  <p className="text-gray-400 mt-3 max-w-md">
    Have a project, idea, or question?  
    Fill out the form and I’ll reply soon 🚀
  </p>
</div>

  {/* FORM */}
  <form
    ref={formRef}
    onSubmit={handleSubmit}
    className="p-6 flex flex-col gap-7 rounded-2xl"
  >
 {/* NAME */}
<div className="flex flex-col items-center gap-3">
  <label className="text-gray-300 text-[20px] text-center">
    Your Name
  </label>

  <input
    type="text"
    name="name"
    value={form.name}
    onChange={handleChange}
    placeholder="John Doe"
    required
    className="bg-black/40 py-4 px-6 rounded-2xl
    text-white placeholder:text-gray-500 text-[15px]
    border border-white/10
    h-[48px]
    w-full max-w-[420px]
    text-center
    focus:border-amber-400
    focus:ring-2 focus:ring-amber-400/30
    outline-none transition-all duration-300"
  />
</div>

   {/* EMAIL */}
<div className="flex flex-col items-center gap-3">
  <label className="text-gray-300 text-[20px] text-center">
    Email Address
  </label>

  <input
    type="email"
    name="email"
    value={form.email}
    onChange={handleChange}
    placeholder="you@example.com"
    autoComplete="email"
    inputMode="email"
    required
    className="bg-black/40 py-4 px-6 rounded-2xl
    text-white placeholder:text-gray-500 text-[15px]
    border border-white/10
    h-[48px]
    w-full max-w-[420px]
    text-center
    focus:border-amber-400
    focus:ring-2 focus:ring-amber-400/30
    outline-none transition-all duration-300"
  />
</div>


   {/* MESSAGE */}
<div className="flex flex-col items-center gap-3">
  <label className="text-gray-300 text-[20px] ">
    Your Message
  </label>

  <textarea
    rows={5}
    name="message"
    value={form.message}
    onChange={handleChange}
    placeholder="Tell me about your project or idea..."
    required
    className="bg-black/40 py-4 px-6 rounded-2xl
    text-white placeholder:text-gray-500
    border border-white/10
    h-[80px]
    w-full max-w-[420px]
    text-center
    focus:border-amber-400
    focus:ring-2 focus:ring-amber-400/30
    outline-none transition-all duration-300 resize-none"
  />
</div>


    {/* BUTTON */}
<div className="flex justify-center">
  <button
    type="submit"
    className="
    mt-6
    bg-gradient-to-r from-amber-400 to-orange-500
    px-12 py-4
    rounded-full w-[200px] h-[40px]
    text-black font-semibold
    text-[15px]
    shadow-xl shadow-amber-400/30
    hover:scale-105 hover:shadow-amber-400/50
    transition-all duration-300
    "
  >
    {loading ? "Sending..." : "Send Message 🚀"}
  </button>
</div>
  </form>
</motion.div>


        {/* EARTH CANVAS */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] 
          rounded-2xl overflow-hidden"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
