import { motion } from "framer-motion";
import ComputersCanvas from "../components/canvas/Computers";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden">

      {/* TEXT CONTENT (MOUSE EVENTS DISABLED) */}
      <div
        className="
          absolute inset-0
          top-[90px] sm:top-[110px]
          max-w-7xl mx-auto
          flex items-start gap-5
          px-4 sm:px-8 lg:px-12
          z-10
          pointer-events-none   /* 🔥 MAIN FIX */
        "
      >
        {/* LEFT LINE */}
        <div className="flex flex-col items-center mt-5">
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-32 sm:h-64 lg:h-80 violet-gradient" />
        </div>

        {/* TEXT */}
        <div>
          <h1 className="
            font-black text-white
            text-[36px] xs:text-[42px]
            sm:text-[56px] md:text-[64px]
            lg:text-[80px]
          ">
            Hi, I'm <span className="text-[#915EFF]">KUNAL GUPTA</span>
          </h1>

          <p className="
            mt-3 text-[#dfd9ff] font-medium
            text-[14px] xs:text-[16px]
            sm:text-[20px] md:text-[22px]
            lg:text-[26px]
            max-w-xl
          ">
            I develop 3D visuals, user
            <br className="hidden sm:block" />
            interfaces and web applications
          </p>
        </div>
      </div>

      {/* 3D CANVAS (MOUSE EVENTS ENABLED) */}
   <div className="absolute inset-0 pointer-events-auto top-[40%] left-[30%]">
  <ComputersCanvas />
</div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 sm:bottom-10 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[26px] h-[46px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;
