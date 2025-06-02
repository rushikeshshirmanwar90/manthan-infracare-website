"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export function FaqSection() {
  const faqs = [
    {
      question: "What types of properties do you offer?",
      answer:
        "We offer a wide range of properties including residential apartments, villas, row houses, commercial spaces, and plots. Our portfolio caters to various budgets and preferences across multiple cities in India.",
    },
    {
      question: "How can I schedule a site visit?",
      answer:
        "You can schedule a site visit by contacting our sales team through the contact form on our website, calling our customer service number, or visiting our office. We'll arrange a convenient time for you to tour the property with one of our representatives.",
    },
    {
      question: "What are the payment plans available?",
      answer:
        "We offer flexible payment plans including construction-linked plans, down payment plans with discounts, and customized payment schedules. The specific options vary by project, and our sales team can provide detailed information based on your interest.",
    },
    {
      question: "Do you provide home loans or financing options?",
      answer:
        "While we don't directly provide home loans, we have partnerships with major banks and financial institutions that offer competitive interest rates and loan terms. Our team can assist you with the loan application process and documentation.",
    },
    {
      question: "What amenities are included in your residential projects?",
      answer:
        "Our residential projects typically include amenities such as swimming pools, fitness centers, landscaped gardens, children's play areas, clubhouses, security systems, and parking facilities. Specific amenities vary by project and are detailed in the project brochures.",
    },
    {
      question: "How do I track the construction progress of my property?",
      answer:
        "We provide regular construction updates through our customer portal, email newsletters, and site visits. Registered customers can access construction timelines, photos, and milestone achievements for their specific property.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-[#E5E7EB] to-[#2C3E50]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-[#2C3E50]  bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FFB200] to-[#2C3E50] mx-auto mb-6"></div>

          <p className="text-[#2C3E50] max-w-2xl mx-auto">
            Find answers to common questions about our properties, services, and processes.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`mb-4 border border-[#2C3E50]/15 rounded-lg transition-colors duration-300
                ${openIndex === index
                  ? "bg-[#FFF8E1] border-l-4 border-l-[#FFCB13] shadow-md"
                  : "bg-white border-l-4 border-l-transparent"
                }`}
            >
              <button
                className={`w-full flex items-center justify-between p-5 text-left transition-colors duration-300
                  ${openIndex === index ? "bg-[#FFF3C4]" : ""}
                `}
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className={`font-semibold transition-colors duration-300
                  ${openIndex === index
                    ? "text-[#202D42] drop-shadow-sm"
                    : "text-[#2C3E50]"
                  }`}
                >
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-[#FFCB13]" size={20} />
                ) : (
                  <ChevronDown className="text-[#2C3E50]" size={20} />
                )}
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`px-5 overflow-hidden transition-all duration-300
                  ${openIndex === index ? "max-h-96 py-3" : "max-h-0 py-0"}
                `}
                aria-hidden={openIndex !== index}
              >
                <p className={`transition-colors duration-300
                  ${openIndex === index
                    ? "text-[#202D42] bg-[#FFF8E1] rounded-md p-2"
                    : "text-[#2C3E50]/80"
                  }`}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  )
}

