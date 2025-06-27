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
        "AceBuddy is your AI-powered exam prep companion — built to help you learn smarter and retain better. With tools like FOCUS TODAY (your adaptive daily study guide) and ACE CARDS (intelligent flashcards for retention), you'll move through your syllabus with focus, speed and confidence.",
    },
    {
      question: "Who is AceBuddy for?",
      answer:
        "AceBuddy is designed for high-stakes test takers; whether you're prepping for medical school, law school, a professional certification, or a national exam. If your future depends on passing, we've got your back.",
    },
    {
      question: "What types of exams does AceBuddy support?",
      answer: (
        <div>
          <p className="mb-3">We support a range of exams, including:</p>
          <ul className="space-y-2 pl-4">
            <li>• College entrance exams (SAT, ACT, JEE, etc.)</li>
            <li>• Graduate admissions (MCAT, LSAT, GRE, GMAT, etc.)</li>
            <li>
              • Professional certifications/Licensure exams (USMLE, PMP, CFA,
              NCLEX, etc.)
            </li>
            <li>• National high school exams (WASSCE, A-Levels, CBSE, etc.)</li>
            <li>• Language proficiency tests (IELTS, TOEFL, HSK, etc.)</li>
          </ul>
        </div>
      ),
    },
    {
      question: "What devices is AceBuddy available on?",
      answer: "AceBuddy is currently available via web app on desktop.",
    },
    {
      question: "Is AceBuddy free?",
      answer:
        "While all features are free during beta, our FOCUS TODAY guided learning feature will remain free afterward. After beta, our ACE CARDS flashcards will be available in two ways: Build your own sets for free, or purchase expertly crafted sets from contributors in-app.",
    },
    {
      question: "Can I earn with AceBuddy?",
      answer:
        "Absolutely. Join our Contributor Program to share your high-quality study notes or flashcards and earn recurring income as others use them.",
    },
    {
      question: "Can organizations or academic institutions use AceBuddy?",
      answer:
        "Yes. If you're from a school, bootcamp, or education provider looking to empower your learners, email us at partner@acebuddy.so",
    },
    {
      question: "How does AceBuddy know what to teach me?",
      answer:
        "AceBuddy prompts you during onboarding to choose your exam, select your preferred study resources, and share your exam date. Then, our system generates a personalized plan based on your exam syllabus broken into bite-sized sessions based on your syllabus and timeline.",
    },
    {
      question: "What's included in a FOCUS TODAY session?",
      answer:
        "Each session is a short, focused burst of learning, structured as free mapped video tutorials and textbooks sections. You can do as many sessions per day as you like — we track your progress in real-time.",
    },
    {
      question: "I found a bug or have feedback. What should I do?",
      answer:
        "We love feedback. Use the in-app bug flag, thumbs-up/down menu, or email us at support@acebuddy.so",
    },
    {
      question: "How do I join the beta?",
      answer: (
        <div>
          <p className="mb-3">
            We're currently onboarding early testers. If you are interested,
            please fill the signup form and we'll reach out to you shortly.
          </p>
          <Link
            href="https://forms.fillout.com/t/9QDQgUUtsSus"
            className="text-[#000075] hover:underline"
          >
            → Join Beta Waitlist
          </Link>
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
