import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[500px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc (Hons)in Information Technology & Management"
            subTitle="Faculty of Information Technology, University of Moratuwa (2021 - 2025)"
            result=""
            des=""
          />
          <ResumeCard
            title="Diploma in English"
            subTitle="Wayamba University of Sri Lanka(2020 - 2021)"
            result=""
            des=""
          />
          <ResumeCard
            title="G.C.E. (A/L) Examination 2019"
            subTitle="Dhammissara National School"
            result="3As"
            des=""
          />
        </div>
      </div>
      {/* part Two */}

      
    </motion.div>
  );
};

export default Education;
