import { Building2, Home, Landmark, Users, Briefcase, BarChart3 } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: <Building2 size={40} className="text-[#314353]" />,
      title: "Residential Properties",
      description: "Find your dream home from our selection of apartments, villas, and houses across prime locations.",
    },
    {
      icon: <Landmark size={40} className="text-[#314353]" />,
      title: "Commercial Spaces",
      description: "Premium office spaces, retail outlets, and commercial buildings for your business needs.",
    },
    {
      icon: <Home size={40} className="text-[#314353]" />,
      title: "Property Management",
      description: "Comprehensive management services for property owners, including maintenance and tenant relations.",
    },
    {
      icon: <Users size={40} className="text-[#314353]" />,
      title: "Consultancy Services",
      description: "Expert advice on property investment, legal matters, and market trends from our specialists.",
    },
    {
      icon: <Briefcase size={40} className="text-[#314353]" />,
      title: "Investment Opportunities",
      description: "Curated investment options in high-growth areas with potential for significant returns.",
    },
    {
      icon: <BarChart3 size={40} className="text-[#314353]" />,
      title: "Market Analysis",
      description: "Detailed reports and insights on real estate market trends to inform your investment decisions.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#e5e7eb98] to-[#2C3E50]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#2C3E50] to-[#FFB200] bg-clip-text text-transparent">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FFB200] to-[#2C3E50] mx-auto mb-6"></div>

          <p className="text-[#e6e7e8] max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to meet your needs, from finding your dream home to maximizing
            your investment returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#E5E7EB] p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border-[1.5px] border-[#ffb30086]    group hover:border-[#314353] "
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-3">{service.title}</h3>
              <p className="text-[#2C3E50]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

