"use client";

import Image from 'next/image';
import { Button } from '@/app/components/ui/button';
import { showComingSoon } from '@/lib/show-coming-soon';

export default function Hero() {
  return (
    <section className="hero relative z-[14] w-full py-20 pt-10 md:py-20">
      <div className="container-custom">
        <div className="flex w-full flex-col-reverse items-center gap-[32px] lg:flex-row">
          <div className=" flex flex-1 flex-col items-start gap-[16px] px-5 md:mt-0">
            {/* Headline */}
            <div className="flex flex-col gap-1 md:gap-2 font-bold not-italic relative shrink-0 text-[#0b283b] text-4xl md:text-[50px] tracking-[-1px] w-full ">
              <p>One Child.</p>
              <p>One Journey.</p>
              <p>Connected Care.</p>
            </div>
            {/* Sub content */}
            <div className="flex w-full flex-col items-start gap-[12px]">
              <p className="w-full text-[30px] font-bold tracking-[-0.5px] text-[#1a5780]">
                Canadian Pediatric Health SaaS Platform
              </p>
              <p className="w-full text-[20px] font-normal tracking-[-0.5px] text-[#1d5f8b]">
                KiddoCare is the pediatric healthcare SaaS platform that connects families, clinics, and care teams, bringing every part of a child's health journey together.
              </p>
            </div>
            {/* Buttons */}
            <div className="flex w-full flex-col gap-[16px] md:flex-row">
              <Button variant="primary" size="auto" onClick={showComingSoon}>
                Request a Demo
              </Button>
              <Button variant="secondary" size="auto" onClick={showComingSoon}>
                See How It Works
              </Button>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <Image src='/images/heroImage.png' width={598} height={514} alt="Hero Image"  />
          </div>
        </div>
      </div>
    </section>
  );
}
