import { useState } from "react";
import svgPaths from "@/imports/Final-1/svg-30j3xpnyjl";

const faqData = {
  title: "Frequently Asked Questions",
  subtitle: "Clear answers for families, clinics, providers, and care teams.",
  questions: [
    {
      question: "What is KiddoCare?",
      answer:
        "KiddoCare is a pediatric health platform that connects child health records, family engagement, clinical workflows, and care team collaboration in one secure experience.",
      open: true,
    },
    {
      question: "Is KiddoCare designed for families or clinics?",
      answer: "",
      open: false,
    },
    {
      question: "How does KiddoCare help clinics and providers?",
      answer: "",
      open: false,
    },
    {
      question: "Does KiddoCare support secure health data sharing?",
      answer: "",
      open: false,
    },
    {
      question: "Can KiddoCare help reduce administrative workload?",
      answer: "",
      open: false,
    },
    {
      question: "How can clinics and providers get started?",
      answer: "",
      open: false,
    },
  ],
  cta: {
    heading: "Ready to bring connected pediatric care to your clinic?",
    subtext: "Let's explore how KiddoCare can support your families, providers, and care teams.",
    primaryBtn: "Request a Demo",
    secondaryBtn: "Contact Us",
  },
};

function MinusIcon() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <path d={svgPaths.pd4a8f00} fill="#0B283B" />
      </svg>
    </div>
  );
}

function PlusIcon() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <path d={svgPaths.p2cd26500} fill="#0B283B" />
      </svg>
    </div>
  );
}

export default function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="bg-white content-stretch flex flex-col items-center py-[128px] relative shrink-0 w-full z-[4]">
      {/* Header */}
      <div className="content-stretch flex flex-col gap-[16px] h-[205px] items-center justify-center px-[32px] relative shrink-0 w-full max-w-[1280px]">
        <p className="font-['Inter',sans-serif] font-bold leading-[48px] not-italic relative shrink-0 text-[#0b283b] text-[48px] text-center tracking-[-1.2px] whitespace-nowrap w-full">
          {faqData.title}
        </p>
        <p className="font-['Inter',sans-serif] font-normal leading-[32.5px] not-italic relative shrink-0 text-[#1a5780] text-[20px] text-center w-full">
          {faqData.subtitle}
        </p>
      </div>

      {/* Questions */}
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[32px] relative shrink-0 w-full max-w-[1280px] mt-[64px]">
        {faqData.questions.map((faq, i) => {
          const isOpen = i === openIndex;
          return (
            <div key={i} className="relative shrink-0 w-full">
              {isOpen && faq.answer ? (
                <div className="bg-[rgba(184,227,255,0.5)] relative rounded-[16px] shrink-0 w-full">
                  <div aria-hidden className="absolute border border-[#1a5780] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <p className="font-['Inter',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#0b283b] text-[20px] tracking-[-0.0195px] whitespace-nowrap">
                        {faq.question}
                      </p>
                      <button
                        onClick={() => setOpenIndex(-1)}
                        className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]"
                      >
                        <MinusIcon />
                      </button>
                    </div>
                    <p className="font-['Inter',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#072033] text-[18px] w-full">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-white h-[104px] relative rounded-[12px] shrink-0 w-full">
                  <div aria-hidden className="absolute border-[#b8e3ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="flex flex-col items-center justify-center size-full">
                    <div className="content-stretch flex flex-col isolate items-center justify-center p-[32px] relative size-full">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full z-[1]">
                        <p className="font-['Inter',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#0b283b] text-[20px] tracking-[-0.0195px] whitespace-nowrap">
                          {faq.question}
                        </p>
                        <button
                          onClick={() => setOpenIndex(i)}
                          className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]"
                        >
                          <div aria-hidden className="absolute border border-[#b8e3ff] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                          <PlusIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* CTA Box */}
      <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full max-w-[1280px]">
        <div className="content-stretch flex flex-col items-start px-[32px] relative shrink-0 w-full">
          <div className="bg-[#072033] relative rounded-[32px] shrink-0 w-full">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-start p-[48px] relative size-full">
                <div className="absolute bg-[rgba(59,130,246,0.1)] blur-[32px] left-[-40px] rounded-[9999px] size-[395px] top-[-150.19px]" />
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[576px] min-w-[576px] relative shrink-0 w-[576px]">
                    <p className="font-['Inter',sans-serif] font-bold leading-[36px] not-italic relative shrink-0 text-[30px] text-white tracking-[-0.0293px] w-full whitespace-pre-wrap">
                      {faqData.cta.heading}
                    </p>
                    <p className="font-['Inter',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#94c8f3] text-[18px] tracking-[-0.0352px] w-full">
                      {faqData.cta.subtext}
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[16.01px] items-start relative shrink-0">
                    <div className="bg-white content-stretch flex flex-col h-[60px] items-center justify-center px-[32px] py-[17px] relative rounded-[12px] shrink-0">
                      <p className="font-['Inter',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#0b283b] text-[18px] text-center tracking-[-0.0703px] whitespace-nowrap">
                        {faqData.cta.primaryBtn}
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col h-[60px] items-center justify-center px-[32px] py-[16px] relative rounded-[12px] shrink-0">
                      <div aria-hidden className="absolute border border-[#94c8f3] border-solid inset-0 pointer-events-none rounded-[12px]" />
                      <p className="font-['Inter',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#94c8f3] text-[18px] text-center tracking-[0.0352px] whitespace-nowrap">
                        {faqData.cta.secondaryBtn}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
