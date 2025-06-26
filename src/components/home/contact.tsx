import { Button, Capa } from "../ui";

export default function Contact() {
  return (
    <section className="relative px-4 sm:px-8 md:px-16 lg:px-[100.14px] pt-8 sm:pt-12 md:pt-16 lg:pt-[99px] pb-10 sm:pb-16 md:pb-20 lg:pb-[130px] font-dm bg-black/30 rounded-[11.308px] flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-[35px]">
      <Capa className="z-0" />
      <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 lg:gap-[15px] text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white">
          Thank You!
        </h2>
        <h5 className="text-base sm:text-lg lg:text-[20px] text-primary">
          For sparing some time and review my work.
        </h5>
        <p className="text-sm sm:text-base lg:text-base text-[#FFFFFF80] max-w-xs sm:max-w-md lg:max-w-none px-4 lg:px-0">
          Do you have great idea and want to share. Let's make something amazing
          together
        </p>
        <div className="mt-2 sm:mt-4 lg:mt-0">
          <Button className="bg-secondary text-dark w-full sm:w-64 lg:w-[252px] font-semibold active:motion-preset-confetti text-sm sm:text-base">
            Get in touch with me
          </Button>
        </div>
      </div>
    </section>
  );
}
