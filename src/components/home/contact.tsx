import { Button } from "../ui";

export default function Contact() {
  return (
    <section className="relative px-[100.14px] pt-[99px] pb-[130px] font-dm bg-black/30 rounded-[11.308px] flex flex-col items-center justify-center gap-[35px]">
      <div className="relative z-10 flex flex-col items-center gap-[15px]">
        <h2 className="text-[40px] font-bold text-white">Thank You!</h2>
        <h5 className="text-[20px] text-primary">
          For sparing some time and review my work.
        </h5>
        <p className="text-[#FFFFFF80]">
          Do you have great idea and want to share. Let’s make something amazing
          together
        </p>
        <div>
          <Button className="bg-secondary text-dark w-[252px] font-semibold active:motion-preset-confetti ">
            Get in touch with me
          </Button>
        </div>
      </div>
    </section>
  );
}
