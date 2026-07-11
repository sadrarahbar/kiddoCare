import Logo from './Logo';
import Menu from './Menu';

export default function Header() {
  return (
    <header className="relative z-[16] w-full bg-[#0b283b]">
      <div className="container-custom px-5">
        <div className="flex flex-row-reverse justify-end md:justify-start md:flex-row gap-5 md:gap-10 h-[80px] w-full items-center  py-[16px]">
          <Logo />
          <Menu />
        </div>
      </div>
    </header>
  );
}
