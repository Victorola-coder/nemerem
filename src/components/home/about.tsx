import {
  workHistory,
  designSkills,
  workingTools,
  techExperience,
} from "../../data/data";

export default function About() {
  return (
    <section className="px-[90px] py-[181px] bg-black/20">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[80px]">
          {/* Left Column - Work History */}
          <div className="space-y-[40px]">
            <h2 className="text-[32px] md:text-[25px] font-extrabold md:tracking-[-0.02em] md:leading-[48px] text-[#DADADA] font-dm">
              Work History
            </h2>
            <div className="space-y-[30px]">
              {workHistory.map((work) => (
                <WorkHistoryCard key={work.id} {...work} />
              ))}
            </div>
          </div>

          {/* Right Column - Skills, Tools, Experience */}
          <div className="space-y-[50px]">
            {/* Design Skills */}
            <div className="space-y-[30px]">
              <h2 className="text-[32px] md:text-[25px] font-bold md:tracking-[-0.02em] md:leading-[48px] text-[#DADADA] font-dm">
                Design Skills
              </h2>
              <div className="space-y-[15px]">
                {designSkills.map((skill) => (
                  <SkillItem key={skill.id} name={skill.name} />
                ))}
              </div>
            </div>

            {/* Working Tools */}
            <div className="space-y-[30px]">
              <h2 className="text-[32px] md:text-[40px] font-bold text-white font-dm">
                Working Tools
              </h2>
              <div className="grid grid-cols-5 gap-[20px]">
                {workingTools.map((tool) => (
                  <ToolItem key={tool.id} {...tool} />
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-[30px]">
              <h2 className="text-[32px] md:text-[40px] font-bold text-white font-dm">
                Experience
              </h2>
              <div className="grid grid-cols-5 gap-[20px]">
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
    <div className="bg-[#1A1A2E]/50 max-w-[765px] rounded-[16px] p-[24px] md:p-[32px] border border-[#FFFFFF1A]">
      <div className="space-y-[16px]">
        <h3 className="text-[24px] md:text-[28px] font-bold text-white font-dm">
          {title}
        </h3>
        <div className="space-y-[8px]">
          <p className="text-[16px] md:text-[18px] text-[#D8E710] font-medium">
            {company} | {period}
          </p>
          <p className="text-[14px] md:text-[16px] text-[#FFFFFF80] font-dm leading-[24px] md:leading-[28px]">
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
    <div className="flex items-center space-x-[12px]">
      <div className="w-[8px] h-[8px] rounded-full bg-[#D8E710]"></div>
      <p className="text-[16px] md:text-[18px] text-[#FFFFFF80]">{name}</p>
    </div>
  );
}

// Tool Item Component
function ToolItem({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex flex-col items-center space-y-[12px] group cursor-pointer">
      <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-[#FFFFFF0D] rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-300">
        <img
          src={icon}
          alt={name}
          className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] object-contain"
          onError={(e) => {
            // Fallback to a placeholder if image fails to load
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <p className="text-[12px] md:text-[14px] text-[#FFFFFF80] text-center font-medium">
        {name}
      </p>
    </div>
  );
}

// Experience Item Component
function ExperienceItem({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex flex-col items-center space-y-[12px] group cursor-pointer">
      <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-[#1A1A2E] rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-300 border border-[#FFFFFF1A]">
        <img
          src={icon}
          alt={name}
          className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] object-contain"
          onError={(e) => {
            // Fallback to a placeholder if image fails to load
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <p className="text-[12px] md:text-[14px] text-[#FFFFFF80] text-center font-medium">
        {name}
      </p>
    </div>
  );
}
