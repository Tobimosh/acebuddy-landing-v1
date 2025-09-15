"use client";

import { useState } from "react";
import Link from "next/link";

const ChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FAQAccordion = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-[rgba(236,236,236,0.2)]">
      <button
        onClick={onToggle}
        className="w-full py-6 px-0 flex items-center justify-between text-left hover:opacity-80 transition-opacity duration-200 cursor-pointer"
      >
        <h3 className="font-montserrat text-lg font-medium text-[#ECECEC] pr-4 max-[768px]:text-base">
          {question}
        </h3>
        <div
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          } text-[#909DAC]`}
        >
          <ChevronDown />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-[#909DAC] font-inter text-base leading-relaxed max-[768px]:text-sm">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is AceBuddy?",
      answer:
        "AceBuddy is an AI-powered exam productivity tool. It takes any official exam syllabus (like SAT, GRE, IELTS, CFA, PMP, etc.) and instantly breaks it into structured, bite-sized microsessions. Each session is designed to help you cover 100% of your syllabus efficiently and actually retain what you learn.",
    },
    {
      question: "How does Acebuddy work?",
      answer: (
        <div>
          <ol className="ml-5 space-y-2">
            <li>1. You tell AceBuddy which exam you’re preparing for.</li>
            <li>
              2. Our AI agent <b>ANT6</b> maps your exam syllabus into small
              learning units.
            </li>
            <li>
              3. Each unit includes:
              <ul className="list-disc ml-5 space-y-2 list-inside mt-2">
                <li>
                  <b>Highlights</b> (for quick grasp)
                </li>
                <li>
                  <b>Video recommendations</b> (short, focused tutorials)
                </li>
                <li>
                  <b>Textbook-style explanations</b> (clear, exam-level content)
                </li>
                <li>
                  Built-in <b>Spaced Retrieval practice</b> to test yourself.
                </li>
              </ul>
            </li>
            <li>
              4. You study in short sessions → build mastery faster → no
              cramming, no burnout.
            </li>
          </ol>
        </div>
      ),
    },
    {
      question: "Who is AceBuddy for?",
      answer:
        "AceBuddy is built for high-stakes exam takers — students, professionals, or anyone preparing for competitive, certification, or language exams. If your exam has a syllabus, AceBuddy can help you master it.",
    },
    {
      question: "What makes AceBuddy different from youtube or prep courses?",
      answer: (
        <div>
          <p>
            You'd be studying conveniently at your own pace, without judgement.
          </p>
          <ul className="list-disc ml-5 space-y-2 list-inside mt-2">
            <li>
              You don’t waste time searching for the right videos or books —
              AceBuddy uses your exact syllabus.
            </li>
            <li>No irrelevant content, no “over-studying.”</li>
            <li>
              Each session is optimized for <strong>focus and retention</strong>{" "}
              (not endless lectures).
            </li>
            <li>
              Everything is personalized and structured to get you exam-ready on
              time.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "Can I really finish my syllabus in time?",
      answer:
        "Yes. AceBuddy calculates your exam’s total sessions and even shows you how long it’ll take you to finish them based on your pace. This helps you stay on track, avoid procrastination, and know exactly what’s left.",
    },
    {
      question: "Does AceBuddy work offline?",
      answer:
        "Currently, you’ll need internet access. Stay tuned for offline study packs in the future.",
    },
    {
      question: "What Exams are supported?",
      answer:
        "AceBuddy works with all exams that publish a syllabus — from school exams to professional certifications. Popular examples include: SAT, GRE, GMAT, IELTS, CFA, PMP, Medical/Board exams, and more",
    },
    {
      question: "How much does it cost?",
      answer:
        "We’re currently in private beta. Early users get free access. Once launched, pricing will be simple and affordable.",
    },
    {
      question: "How is this different from flashcards or question banks?",
      answer: (
        <div>
          <ul className="list-disc ml-5 space-y-2 list-inside mt-2">
            <li>Flashcards = recall only(mostly without spaced repetition).</li>
            <li>Question banks = practice only.</li>
            <li>
              AceBuddy = the full prep cycle →{" "}
              <b>learn, understand, recall, and master</b> your syllabus.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "Who built AceBuddy?",
      answer:
        "AceBuddy is built by exam-takers who know the pain of failing because of time and retention. Our team turned that frustration into ANT6, the AI agent that helps you master syllabi smarter, not harder.",
    },
    {
      question: "Is my data safe?",
      answer:
        " Yes. Your study data is private and only used to improve your learning experience. We do not share or sell your exam prep activity.",
    },
    {
      question: "Can I earn with AceBuddy?",
      answer: (
        <div>
          <p className="mb-3">
            Absolutely. Join our Contributor Pilot Program to learn more about
            how you can earn recurring income with AceBuddy.
          </p>
          <Link
            href="https://forms.fillout.com/t/9QDQgUUtsSus"
            className="text-[#fff] hover:underline"
          >
            → Sign up to learn more
          </Link>
        </div>
      ),
    },
    {
      question: "Can organizations or academic institutions use AceBuddy?",
      answer: (
        <div>
          <p className="mb-3">
            Yes. If you’re from a school, bootcamp, or education provider
            looking to empower your learners, email us at
          </p>
          <a
            href="mailto:partner@acebuddy.so"
            className="text-[#fff] hover:underline"
          >
            📩 partner@acebuddy.so
          </a>
        </div>
      ),
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Header section */}
      <div className="max-w-[1200px] mx-auto px-6 pt-20 pb-16 max-[768px]:pt-16 max-[768px]:pb-12">
        <div className="text-center mb-16 max-[768px]:mb-12">
          <div className="w-10 h-10 bg-gradient-to-br from-[#000075] to-[#0000A0] rounded-lg mb-6 mx-auto flex items-center justify-center">
            <span className="text-white text-xl">💡</span>
          </div>
          <h1
            className="font-montserrat text-5xl font-medium mb-6 max-[768px]:text-4xl max-[480px]:text-3xl"
            style={{
              background:
                "linear-gradient(145.55deg, #ECECEC 20.35%, rgba(236, 236, 236, 0) 128.73%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Frequently Asked Questions
          </h1>
          <p className="font-inter text-lg text-[#909DAC] max-w-2xl mx-auto max-[768px]:text-base">
            Everything you need to know about AceBuddy and how it works
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <FAQAccordion
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleAccordion(index)}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 max-[768px]:mt-12">
          <p className="font-inter text-[#909DAC] mb-6 max-[768px]:text-sm">
            Still have questions? We're here to help.
          </p>
          <Link
            href="mailto:support@acebuddy.so"
            className="inline-block font-montserrat border-[1.24px] border-[rgba(255,255,255,0.3)] px-8 py-3 rounded-full text-base font-normal text-[#F2F4F8] bg-transparent hover:bg-[#000075] hover:font-semibold transition-all duration-300"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
