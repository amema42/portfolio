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
        <span className="text-xl font-semibold">{question}</span>
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
      question: "What is Motion+?",
      answer:
        "Motion+ is a one-time fee, lifetime access membership that unlocks the source code for all Motion examples, early access features, premium components, and an exclusive Discord community.",
      defaultOpen: true,
    },
    {
      question: "What does 'lifetime access' mean?",
      answer:
        "Just that! No one needs another subscription in their life. Lifetime access means you'll receive all updates to Motion+ as they're released.",
    },
    {
      question: "How does the team package work?",
      answer:
        "After purchase, you can nominate up to 10 team members to join Motion+.",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="max-w-2xl w-full bg-gray-800 text-white rounded-3xl shadow-lg overflow-hidden p-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </div>
  );
}
