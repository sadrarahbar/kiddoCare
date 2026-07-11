import Image from "next/image";

type LogoProps = {
  type?: "dark" | "light";
};

export default function Logo({ type = "dark" }: LogoProps) {
  const logoSrc = type === "light" ? "/images/logoLight.svg" : "/images/desktopLogo.svg";

  return (
    <div className="relative h-[34px] w-[183px] shrink-0">
      <Image
        src={logoSrc}
        alt="KiddoCare Logo"
        fill
        className="object-contain"
      />
    </div>
  );
}
