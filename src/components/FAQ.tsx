"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 px-6 text-left text-white hover:bg-gray-800 rounded-2xl"
      >
        <span className="text-lg font-semibold">{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-4 text-gray-300">{answer}</div>
      </motion.div>
    </div>
  );
};

export default function FAQ() {
  const faqs: FAQItemProps[] = [
    {
      question: "Who am I?",
      answer: "I am a passionate developer focused on modern web technologies.",
      defaultOpen: true,
    },
    {
      question: "What do I do?",
      answer: "I build scalable and maintainable web applications.",
    },
    {
      question: "What tech do I use?",
      answer: "I specialize in React, Next.js, Tailwind, and backend technologies.",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full bg-gray-800 text-white rounded-3xl shadow-lg overflow-hidden p-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </div>
  );
}
