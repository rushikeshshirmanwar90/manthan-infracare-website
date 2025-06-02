import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-[#E5E7EB] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 rounded-md bg-[#FFB200] flex items-center justify-center">
                <span className="text-[#2C3E50] font-bold text-xl">RE</span>
              </div>
              <span className="text-xl font-bold text-[#E5E7EB]">RealEstate</span>
            </Link>
            <p className="text-[#E5E7EB]/80 mb-6">
              Building dreams and creating communities with a commitment to quality, innovation, and customer
              satisfaction.
            </p>
            <div className="flex space-x-4">
              {["Facebook", "Twitter", "Instagram", "Linkedin", "Youtube"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-9 h-9 rounded-full bg-[#E5E7EB]/20 flex items-center justify-center hover:bg-[#FFB200] hover:text-[#2C3E50] transition-colors"
                  aria-label={platform}
                >
                  {platform === "Facebook" && <Facebook size={18} />}
                  {platform === "Twitter" && <Twitter size={18} />}
                  {platform === "Instagram" && <Instagram size={18} />}
                  {platform === "Linkedin" && <Linkedin size={18} />}
                  {platform === "Youtube" && <Youtube size={18} />}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Projects", "Services", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <Link href={link === "Home" ? "/" : `#${link.toLowerCase().replace(" ", "")}`} className="text-[#E5E7EB]/80 hover:text-[#FFB200] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Our Projects</h3>
            <ul className="space-y-3">
              {[
                "Sunrise Heights, Mumbai",
                "Green Valley, Bangalore",
                "Riverside Residency, Ahmedabad",
                "Metro Heights, Delhi",
                "Coastal Paradise, Goa",
              ].map((project) => (
                <li key={project}>
                  <Link href="#" className="text-[#E5E7EB]/80 hover:text-[#FFB200] transition-colors">
                    {project}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-[#FFB200] flex-shrink-0 mt-1" size={18} />
                <span className="text-[#E5E7EB]/80">
                  123 Real Estate Tower, Business District, Mumbai, Maharashtra 400001, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-[#FFB200] flex-shrink-0" size={18} />
                <span className="text-[#E5E7EB]/80">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-[#FFB200] flex-shrink-0" size={18} />
                <span className="text-[#E5E7EB]/80">info@realestate.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#E5E7EB]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#E5E7EB]/80 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} RealEstate. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service", "Sitemap"].map((link) => (
                <Link key={link} href="#" className="text-[#E5E7EB]/80 hover:text-[#FFB200] text-sm transition-colors">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

