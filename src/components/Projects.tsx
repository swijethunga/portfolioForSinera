import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectThree , evem, expensetrack} from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title=""
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Event Management System"
            des=" As Level 02 Project we assign to develop a event management system. As a group member I was responsiable for track and record all income/expenses, cash in flows/outflows and  keep details of 3rd party vedors who engage with a particular event that organized by a company. Actually the whole system is developned for internal purpose of the company"
            src={evem}
          />
          <ProjectsCard
            title="Expense tracker"
            des=" A small expense tracking app implemented to farmilar with the logic to get support to complete my assigned task in Level 02 Project"
            src={expensetrack}
          />
          <ProjectsCard
            title="RIBA Virtual Exhibition"
            des=" I worked as a business analysis for RIBA Virtual Exhibition which is a platform created for our fellow undergraduates of Faculty of Architeture University of Moratuwa to showchase their projects virtually"
            src={projectThree}
          />
          
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
