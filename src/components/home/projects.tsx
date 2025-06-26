import { Button, Image } from "../ui";

export default function Projects() {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-[88px] py-8 sm:py-12 md:py-16 lg:py-[82px] pb-10 sm:pb-16 md:pb-20 lg:pb-[108px] flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-[63.16px]">
      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-center font-dm font-bold text-[#DADADA]">
        My Projects
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-[30px]">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}

export function ProjectCard() {
  return (
    <div className="flex flex-col h-auto sm:h-auto lg:h-[286.26px]">
      <div className="w-full flex flex-row">
        <div className="w-[50%] bg-white h-32 sm:h-40 lg:h-auto"></div>
        <figure className="w-[50%]">
          <Image
            src="/images/project.svg"
            alt="project"
            className="w-full h-32 sm:h-40 lg:h-auto object-cover"
          />
        </figure>
      </div>
      <div className="px-2 sm:px-3 lg:pl-[8px] lg:pr-[16px] pt-4 sm:pt-6 lg:pt-[40.6px] pb-3 sm:pb-4 lg:pb-[21.7px] flex flex-col gap-3 sm:gap-4 lg:gap-[16px] items-start">
        <h4 className="text-base sm:text-lg lg:text-[18px] leading-5 sm:leading-6 lg:leading-[21.74px] text-left text-primary">
          E-tutor - Education & Online LMS
        </h4>
        <p className="text-sm sm:text-base lg:text-base text-[#FFFFFF80]">
          Website, Design
        </p>
        <Button className="border-[#D8E710] border-[1.18px] text-sm sm:text-base">
          View File
        </Button>
      </div>
    </div>
  );
}
