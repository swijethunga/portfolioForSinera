import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          
          <h2 className="text-3xl md:text-4xl font-bold">Relevant Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[500px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Editorial Pillar Meber"
            subTitle="MoraSpirit(2023 - present)"
            result=""
            des=""
          />
          <ResumeCard
            title="Editor"
            subTitle="Leo Club of University of Moratuwa(2022 - 2023)"
            result=""
            des=""
          />
          <ResumeCard
            title="Committee Member"
            subTitle=" Information Technology Society, Faculty of IT, University of Moratuwa(2022 - 2023)"
            result=""
            des=""
          />
          <ResumeCard
            title="1st year Batch Representative"
            subTitle="Faculty of Information Technology, University of Moratuwa(2021 - 2022)"
            result=""
            des=""
          />
        </div>
      </div>
      
        
    </motion.div>
  );
};

export default Experience;
