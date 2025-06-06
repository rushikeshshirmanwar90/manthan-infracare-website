import Image from "next/image"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"

import user1 from "@/assets/team/user-1.jpeg"
import user2 from "@/assets/team/user-2.jpeg"
import user3 from "@/assets/team/user-3.jpeg"
import user4 from "@/assets/team/user-4.jpeg"

export function TeamSection() {
  const team = [
    {
      name: "Rajesh Sharma",
      position: "CEO & Founder",
      image: user1,
      bio: "With over 20 years of experience in real estate development, Rajesh leads our company with vision and expertise.",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
        email: "rajesh@realestate.com",
      },
    },
    {
      name: "Priya Patel",
      position: "Chief Architect",
      image: user2,
      bio: "Award-winning architect with a passion for sustainable design and innovative living spaces.",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
        email: "priya@realestate.com",
      },
    },
    {
      name: "Vikram Singh",
      position: "Sales Director",
      image: user3,
      bio: "Bringing properties and people together with a customer-first approach and market expertise.",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
        email: "vikram@realestate.com",
      },
    },
    {
      name: "Ananya Desai",
      position: "Marketing Manager",
      image: user4,
      bio: "Creative strategist who builds our brand presence and connects our properties with the right audience.",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
        email: "ananya@realestate.com",
      },
    },
  ]

  return (
    <section id="team" className="py-20 bg-[#E5E7EB]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-[#2C3E50] bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FFB200] to-[#2C3E50] mx-auto mb-6"></div>

          <p className="text-[#2C3E50] max-w-2xl mx-auto">
            Our talented professionals bring expertise, passion, and dedication to every project we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-[#E5E7EB] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-80">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2C3E50]">{member.name}</h3>
                <p className="text-[#FFB200] font-medium mb-3">{member.position}</p>
                <p className="text-[#2C3E50] text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  {["linkedin", "twitter", "facebook", "email"].map((platform) => (
                    <a
                      key={platform}
                      href={""}
                      className="w-8 h-8 rounded-full bg-[#2C3E50] flex items-center justify-center text-[#E5E7EB] hover:bg-[#FFB200] hover:text-[#2C3E50] transition-colors"
                      aria-label={`${member.name}'s ${platform}`}
                    >
                      {platform === "linkedin" && <Linkedin size={16} />}
                      {platform === "twitter" && <Twitter size={16} />}
                      {platform === "facebook" && <Facebook size={16} />}
                      {platform === "email" && <Mail size={16} />}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

