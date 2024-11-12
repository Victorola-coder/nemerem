import {
  FacebookIcon,
  InstagramIcon,
  Xicon,
  WhatsAppIcon,
  BehanceIcon,
} from "../svgs";

export default function Hero() {
  return (
    <section className="relative px-[100.14px] pt-[99px] pb-[130px] font-dm bg-black/30 rounded-[11.308px] flex flex-col items-center justify-center gap-[35px]">
      <div className="flex flex-col items-center justify-center gap-2">
        <figure className="border-[6.695px] border-[#FFFFFF66] border-solid rounded-[139px] w-fit">
          <img
            alt="hero"
            draggable={false}
            src="/images/me.svg"
            className="mx-auto block"
          />
        </figure>

        <div className="flex flex-col justify-center items-center gap-[11px]">
          <h1 className="text-[40px] font-bold text-white">
            Hello, <span className="text-primary">Hey, I’m Christian</span>
          </h1>
          <p className="text-center text-[23px] leading-[42px]  text-[#FFFFFF80] max-w-[786px]">
            Experienced UI designer skilled in achieving seamless end user
            experiences. Managed design lifecycles strategically to meet product
            performance goals.
          </p>
        </div>
        {/* social icons */}
        <div className="flex gap-4">
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
    <div className="py-[20px] px-[20px] transition-all duration-300 hover:bg-[#D8E710]/80 bg-[#D8E710] rounded-full flex items-center justify-center">
      {icon}
    </div>
  );
}
