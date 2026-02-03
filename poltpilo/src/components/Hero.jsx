import { motion } from "framer-motion";
import ComputersCanvas from "../components/canvas/Computers"


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">

      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 px-6 sm:px-16">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px]">
            Hi, I'm <span className="text-[#915EFF]">KUNAL GUPTA</span>
          </h1>

          <p className="mt-2 text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px]">
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>
      
      
      
     
< ComputersCanvas />
      
      


      <div className="absolute xs:bottom-10 bottom-12 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[25px] h-[44px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [24, 24, 24] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;
