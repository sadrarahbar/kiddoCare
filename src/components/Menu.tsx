"use client";

import { useState } from "react";

const menuItems = [
  { label: "Services", targetId: "services" },
  { label: "Applications", targetId: "applications" },
  { label: "Why KiddoCare", targetId: "why-us" },
  { label: "Challenges", targetId: "challenges" },
  { label: "FAQ", targetId: "faq" },
  { label: "Our Team", targetId: "our-team" },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (targetId: string) => {
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Toggle main navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="flex size-10 cursor-pointer flex-col items-center justify-center gap-1.5  md:hidden"
      >
        <span className="h-0.5 w-6 rounded-full bg-white" />
        <span className="h-0.5 w-6 rounded-full bg-white" />
        <span className="h-0.5 w-6 rounded-full bg-white" />
      </button>

      <nav
        aria-label="Main navigation"
        className="hidden items-center gap-[32px] md:flex"
      >
        {menuItems.map((item) => (
          <button
            key={item.targetId}
            onClick={() => handleClick(item.targetId)}
            type="button"
            className="cursor-pointer border-0 bg-transparent p-0"
          >
            <span className="whitespace-nowrap text-[16px] font-medium leading-[24px] tracking-[-0.5px] text-white transition-colors hover:text-[#2795dd]">
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      {isOpen && (
        <div className="mobileMenu fixed inset-0 z-50 flex flex-col bg-[#0b283b] px-5 py-5 md:hidden">
          <div className="flex items-center gap-5 border-b-1 border-white/25 pb-5">
            <button
              type="button"
              aria-label="Close main navigation"
              onClick={() => setIsOpen(false)}
              className="flex size-10 cursor-pointer items-center justify-center rounded-[8px] p-0 text-[48px] leading-none text-white transition-colors "
            >
              ×
            </button>
            <span className=" text-[25px] font-semibold leading-[28px] text-white">
              Menu
            </span>
          </div>

          <nav
            aria-label="Mobile navigation"
            className="mt-10 flex flex-col items-start gap-8 px-5"
          >
            {menuItems.map((item) => (
              <button
                key={item.targetId}
                onClick={() => handleClick(item.targetId)}
                type="button"
                className="cursor-pointer border-0 bg-transparent p-0"
              >
                <span className="whitespace-nowrap text-[22px] font-medium leading-[24px] tracking-[-0.5px] text-white transition-colors hover:text-[#2795dd]">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
