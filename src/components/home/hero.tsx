import {
  FacebookIcon,
  InstagramIcon,
  Xicon,
  WhatsAppIcon,
  BehanceIcon,
} from "../svgs";
import { Capa } from "../ui";

export default function Hero() {
  return (
    <section className="relative px-4 sm:px-8 md:px-16 lg:px-[100.14px] pt-8 sm:pt-12 md:pt-16 lg:pt-[99px] pb-10 sm:pb-16 md:pb-20 lg:pb-[130px] font-dm bg-black/30 rounded-[11.308px] flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-[35px]">
      <Capa className="z-0" src="/images/hero.svg" />
      <div className="relative z-10 flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-2">
        <figure className="border-2 sm:border-4 lg:border-[6.695px] border-[#FFFFFF66] border-solid rounded-full lg:rounded-[139px] w-fit">
          <img
            alt="hero"
            draggable={false}
            src="/images/me.svg"
            className="mx-auto block w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-auto lg:h-auto"
          />
        </figure>

        <div className="flex flex-col justify-center items-center gap-3 sm:gap-4 lg:gap-[11px]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white text-center">
            Hello, <span className="text-primary">Hey, I'm Christian</span>
          </h1>
          <p className="text-center text-sm sm:text-base md:text-lg lg:text-[23px] leading-6 sm:leading-7 md:leading-8 lg:leading-[42px] text-[#FFFFFF80] max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-[786px] px-4 lg:px-0">
            Experienced UI designer skilled in achieving seamless end user
            experiences. Managed design lifecycles strategically to meet product
            performance goals.
          </p>
        </div>
        {/* social icons */}
        <div className="flex gap-2 sm:gap-3 lg:gap-4 flex-wrap justify-center">
          <Social icon={<BehanceIcon />} />
          <Social icon={<FacebookIcon />} />
          <Social icon={<WhatsAppIcon />} />
          <Social icon={<InstagramIcon />} />
          <Social icon={<Xicon />} />
        </div>
      </div>
    </section>
  );
}

export function Social({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="py-3 px-3 sm:py-4 sm:px-4 lg:py-[20px] lg:px-[20px] transition-all duration-300 hover:bg-[#D8E710]/80 bg-[#D8E710] rounded-full flex items-center justify-center">
      {icon}
    </div>
  );
}
