import {
  workHistory,
  designSkills,
  workingTools,
  techExperience,
} from "../../data/data";

export default function About() {
  return (
    <section className="px-4 sm:px-8 lg:px-[90px] py-8 sm:py-16 lg:py-[181px] bg-black/20">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-[60px] xl:gap-[80px]">
          {/* Left Column - Work History */}
          <div className="space-y-6 lg:space-y-[40px]">
            <h2 className="text-2xl sm:text-3xl lg:text-[25px] font-extrabold lg:tracking-[-0.02em] lg:leading-[48px] text-[#DADADA] font-dm">
              Work History
            </h2>
            <div className="space-y-4 sm:space-y-6 lg:space-y-[30px]">
              {workHistory.map((work) => (
                <WorkHistoryCard key={work.id} {...work} />
              ))}
            </div>
          </div>

          {/* Right Column - Skills, Tools, Experience */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-[50px]">
            {/* Design Skills */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-[30px]">
              <h2 className="text-2xl sm:text-3xl lg:text-[25px] font-bold lg:tracking-[-0.02em] lg:leading-[48px] text-[#DADADA] font-dm">
                Design Skills
              </h2>
              <div className="space-y-3 sm:space-y-4 lg:space-y-[15px]">
                {designSkills.map((skill) => (
                  <SkillItem key={skill.id} name={skill.name} />
                ))}
              </div>
            </div>

            {/* Working Tools */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-[30px]">
              <h2 className="text-2xl sm:text-3xl lg:text-[25px] font-bold lg:tracking-[-0.02em] lg:leading-[48px] text-[#DADADA] font-dm">
                Working Tools
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-[20px]">
                {workingTools.map((tool) => (
                  <ToolItem key={tool.id} {...tool} />
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-[30px]">
              <h2 className="text-2xl sm:text-3xl lg:text-[25px] font-bold lg:tracking-[-0.02em] lg:leading-[48px] text-[#DADADA] font-dm">
                Experience
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-[20px]">
                {techExperience.map((tech) => (
                  <ExperienceItem key={tech.id} {...tech} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Work History Card Component
function WorkHistoryCard({
  title,
  company,
  period,
  description,
}: {
  title: string;
  company: string;
  period: string;
  description: string;
}) {
  return (
    <div className="bg-[#1A1A2E]/50 lg:max-w-[765px] rounded-[16px] p-4 sm:p-6 lg:p-[24px] xl:p-[32px] border border-[#FFFFFF1A]">
      <div className="space-y-3 sm:space-y-4 lg:space-y-[16px]">
        <h3 className="text-lg sm:text-xl lg:text-[24px] xl:text-[28px] font-bold text-white font-dm">
          {title}
        </h3>
        <div className="space-y-2 lg:space-y-[8px]">
          <p className="text-sm sm:text-base lg:text-[16px] xl:text-[18px] text-[#D8E710] font-medium">
            {company} | {period}
          </p>
          <p className="text-sm sm:text-base lg:text-[14px] xl:text-[16px] text-[#FFFFFF80] font-dm leading-5 sm:leading-6 lg:leading-[24px] xl:leading-[28px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

// Skill Item Component
function SkillItem({ name }: { name: string }) {
  return (
    <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-[12px]">
      <div className="w-2 h-2 lg:w-[8px] lg:h-[8px] rounded-full bg-[#D8E710]"></div>
      <p className="text-sm sm:text-base lg:text-[16px] xl:text-[18px] text-[#FFFFFF80]">
        {name}
      </p>
    </div>
  );
}

// Tool Item Component
function ToolItem({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex flex-col items-center space-y-2 sm:space-y-3 lg:space-y-[12px] group cursor-pointer">
      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px] bg-[#FFFFFF0D] rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-300">
        <img
          src={icon}
          alt={name}
          className="w-6 h-6 sm:w-7 sm:h-7 lg:w-[30px] lg:h-[30px] xl:w-[35px] xl:h-[35px] object-contain"
          onError={(e) => {
            // Fallback to a placeholder if image fails to load
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <p className="text-xs sm:text-sm lg:text-[12px] xl:text-[14px] text-[#FFFFFF80] text-center font-medium">
        {name}
      </p>
    </div>
  );
}

// Experience Item Component
function ExperienceItem({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex flex-col items-center space-y-2 sm:space-y-3 lg:space-y-[12px] group cursor-pointer">
      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px] bg-[#1A1A2E] rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-300 border border-[#FFFFFF1A]">
        <img
          src={icon}
          alt={name}
          className="w-6 h-6 sm:w-7 sm:h-7 lg:w-[30px] lg:h-[30px] xl:w-[35px] xl:h-[35px] object-contain"
          onError={(e) => {
            // Fallback to a placeholder if image fails to load
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <p className="text-xs sm:text-sm lg:text-[12px] xl:text-[14px] text-[#FFFFFF80] text-center font-medium">
        {name}
      </p>
    </div>
  );
}
