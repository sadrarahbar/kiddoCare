"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";

export default function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState(0);
  const questions = [
    {
      question: "What is KiddoCare?",
      answer:
        "KiddoCare is a digital health platform designed to help families and care providers organize and manage a child’s health journey in one place.",
    },
    {
      question: "Who is KiddoCare designed for?",
      answer: "KiddoCare is designed for families and the healthcare professionals involved in children’s care, including clinics, physicians, and other members of the care team."
    },
    {
      question: "What makes KiddoCare different from a general health app?",
      answer: "KiddoCare is built specifically around children’s health, with a focus on growth, development, vaccinations, preventive care, and long-term health information."
    },
    {
      question: "How can KiddoCare help my family?",
      answer: "KiddoCare helps families keep important health information organized, follow their child’s progress over time, and have relevant information available when it is needed."
    },
    {
      question: "What information can I keep in KiddoCare?",
      answer: "Families can organize information such as health history, growth measurements, vaccination records, medications, allergies, appointments, developmental milestones, and important documents."
    },
    {
      question: "Why is it helpful to keep my child’s health information in one place?",
      answer: "Keeping information together makes it easier to find, review, update, and share when needed. It can also help families provide care teams with a clearer and more complete health history."
    },
    {
      question: "Why should I keep health information even when my child is healthy?",
      answer: "Information collected during healthy periods provides a useful baseline. Over time, it can help families and care providers understand what is normal for that individual child and recognize meaningful changes more clearly."
    },
    {
      question: "Why is tracking growth over time important?",
      answer: "A single measurement provides limited information. Following height, weight, and other measurements over time helps show the child’s growth pattern and may make important changes easier to recognize."
    },
    {
      question: "Can KiddoCare help me follow developmental milestones?",
      answer: "KiddoCare is designed to help families record and follow important developmental milestones, creating a clearer view of the child’s progress over time."
    },
{
      question: "Can KiddoCare help me manage vaccination records?",
      answer: "Yes. KiddoCare is designed to help families keep vaccination information organized and accessible, making it easier to review previous vaccines and prepare for future appointments."
    }
  ];

  return (
    <section id="faq" className="relative z-[4] w-full bg-white py-[96px] md:py-[128px]">
      {/* Header */}
      <div className="container-custom flex flex-col items-center gap-[16px] text-center">
        <h2 className="w-full text-[40px] font-bold leading-[48px] tracking-[-1.2px] text-[#0b283b] md:text-[48px]">
          Frequently Asked Questions
        </h2>
        <p className="w-full text-[20px] font-normal leading-[32.5px] text-[#1a5780]">
          Clear answers for families, clinics, providers, and care teams.
        </p>
      </div>

      {/* Questions */}
      <div className="container-custom">
        <ul className=" mt-[16px] md:mt-[64px] flex flex-col gap-[16px] px-5 md:px-0">
          {questions.map((faq, i) => {
            const isOpen = i === openIndex;
            return (
              <li
                key={faq.question}
                className={`
                w-full rounded-[16px] p-[24px] transition-colors duration-300 md:p-[32px]
                ${isOpen && faq.answer ? "border border-[#1a5780] bg-[rgba(184,227,255,0.5)]" : "border-[0.5px] border-[#b8e3ff] bg-[rgba(184,227,255,0.05)]"}
              `}
              >
                <div className="flex w-full items-center justify-between gap-[16px]">
                  <h3 className="text-[20px] font-semibold leading-[28px] tracking-[-0.0195px] text-[#0b283b]">
                    {faq.question}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className={`
                    flex cursor-pointer size-[40px] shrink-0 items-center justify-center rounded-full bg-white
                    ${isOpen && faq.answer ? "drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]" : "border border-[#B8E3FF]"}
                  `}
                  >
                    <div className="relative h-[16px] w-[14px] shrink-0 transition-transform duration-300">
                      {isOpen && faq.answer ?
                        (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.4284 8C15.4284 8.55313 14.9177 9 14.2856 9H1.71415C1.082 9 0.571289 8.55313 0.571289 8C0.571289 7.44687 1.082 7 1.71415 7H14.2856C14.9177 7 15.4284 7.44687 15.4284 8Z" fill="#0B283B" />
                        </svg>
                        )
                        :
                        (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.14272 2.5C9.14272 1.94687 8.632 1.5 7.99986 1.5C7.36772 1.5 6.857 1.94687 6.857 2.5V7H1.71415C1.082 7 0.571289 7.44687 0.571289 8C0.571289 8.55313 1.082 9 1.71415 9H6.857V13.5C6.857 14.0531 7.36772 14.5 7.99986 14.5C8.632 14.5 9.14272 14.0531 9.14272 13.5V9H14.2856C14.9177 9 15.4284 8.55313 15.4284 8C15.4284 7.44687 14.9177 7 14.2856 7H9.14272V2.5Z" fill="#0B283B" />
                        </svg>
                        )
                      }
                    </div>
                  </button>
                </div>
                <div
                  className={`
                  grid transition-[grid-template-rows,opacity,margin-top] duration-300 ease-in-out
                  ${isOpen && faq.answer ? "mt-[24px] grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"}
                `}
                >
                  <div className="overflow-hidden">
                    <p className="w-full text-[18px] font-normal leading-[26px] text-[#072033]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {/* CTA Box */}
      <div className="container-custom pt-[32px]">
        <div className=" px-5 md:px-0">
          <div className="relative overflow-hidden rounded-[32px] bg-[#072033] p-[32px] md:p-[48px]">

            {/* Shadow */}
            <div className="absolute left-[-40px] top-[-150.19px] size-[395px] rounded-full bg-[rgba(59,130,246,0.1)] blur-[32px]" />

            {/* Content */}
            <div className="relative flex flex-col lg:flex-row items-start justify-between gap-[32px] lg:items-center">
              <div className="flex lg:max-w-[600px] flex-col gap-[16px]">
                <p className="w-full text-[30px] font-bold leading-[36px] tracking-[-0.0293px] text-white">
                  Ready to bring connected pediatric care to your clinic?
                </p>
                <p className="w-full text-[18px] font-normal leading-[28px] tracking-[-0.0352px] text-[#94c8f3]">
                  Let's explore how KiddoCare can support your families, providers, and care teams.
                </p>
              </div>
              <div className="flex w-full flex-col gap-[16px] sm:flex-row lg:w-auto">
                <Button size="auto" className="flex-1 h-[60px] bg-white px-[32px] py-[17px] text-[18px] font-bold leading-[24px] tracking-[-0.0703px] text-[#0b283b] hover:bg-[#eef8ff]">
                  Request a Demo
                </Button>
                <Button size="auto" className="flex-1 h-[60px] border border-[#94c8f3] bg-transparent px-[32px] py-[16px] text-[18px] font-bold leading-[24px] tracking-[0.0352px] text-[#94c8f3] hover:bg-white/10">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </section>
  );
}
