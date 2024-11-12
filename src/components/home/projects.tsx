import { Button } from "../ui";

export default function Projects() {
  return (
    <section className="px-[88px] pt-[82px] pb-[108px] flex flex-col gap-[63.16px] ">
      <h3 className="text-[40px] text-center font-dm font-bold text-[#DADADA]">
        My Projects
      </h3>
      <div className="grid grid-cols-3 gap-[30px]">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}

export function ProjectCard() {
  return (
    <div className="flex flex-col">
      <div className="w-full flex  flex-row">
        <div className="w-full h-[200px] bg-white"></div>
        <div className="w-full h-[200px] bg-[#161616]"></div>
      </div>
      <div className="pl-[8px] pr-[16px] pt-[40.6px] pb-[21.7px]">
        <h4 className="text-[18px]  leading-[21.74px] text-left text-primary">
          E-tutor - Education & Online LMS
        </h4>
        <p>Website, Design</p>
        <Button className="border-[#D8E710] border-[1.18px] ">View File</Button>
      </div>
    </div>
  );
}
