"use client"
import type React from "react"
import { useState } from "react"
import { MapPin, Phone, Mail, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-20 bg-[#E5E7EB]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-[#2C3E50]  bg-clip-text text-transparent">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FFB200] to-[#2C3E50] mx-auto mb-6"></div>

          <p className="text-[#2C3E50] max-w-2xl mx-auto">
            Have questions or need more information? Reach out to our team and we&#39;ll be happy to assist you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-[#2C3E50] p-8 rounded-xl text-[#E5E7EB] mb-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-4 text-[#FFB200] flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Our Office</h4>
                    <p>123 Real Estate Tower, Business District, Mumbai, Maharashtra 400001, India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-4 text-[#FFB200] flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p>+91 98765 43210</p>
                    <p>+91 22 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-4 text-[#FFB200] flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p>info@realestate.com</p>
                    <p>sales@realestate.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3768.28693299356!2d77.291714!3d19.182665999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDEwJzU3LjYiTiA3N8KwMTcnMzAuMiJF!5e0!3m2!1sen!2sin!4v1727374104623!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="bg-[#E5E7EB] rounded-xl shadow-lg p-8 border border-[#2C3E50]/20">
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#2C3E50] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-[#2C3E50]/30 rounded-md focus:ring-2 focus:ring-[#FFB200] focus:border-[#FFB200] outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#2C3E50] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-[#2C3E50]/30 rounded-md focus:ring-2 focus:ring-[#FFB200] focus:border-[#FFB200] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#2C3E50] mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[#2C3E50]/30 rounded-md focus:ring-2 focus:ring-[#FFB200] focus:border-[#FFB200] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#2C3E50] mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-[#2C3E50]/30 rounded-md focus:ring-2 focus:ring-[#FFB200] focus:border-[#FFB200] outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Property Information">Property Information</option>
                    <option value="Site Visit">Schedule a Site Visit</option>
                    <option value="Investment Opportunity">Investment Opportunity</option>
                    <option value="Career">Career</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#2C3E50] mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-[#2C3E50]/30 rounded-md focus:ring-2 focus:ring-[#FFB200] focus:border-[#FFB200] outline-none transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#FFB200] text-[#2C3E50] font-medium hover:shadow-lg transition-all"
                >
                  Send Message <Send size={16} className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

