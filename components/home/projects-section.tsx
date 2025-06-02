"use client"

import { useEffect, useState } from "react"
import { ProjectCard } from "@/components/Project/project-card"
import { Project } from "@/types/Project"
import { getProjects } from "@/functions/projects"

export function ProjectsSection() {

  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data)
      setLoading(false)
    }

    fetchProjects()
  }, [loading])


  const [filter, setFilter] = useState("all")

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.projectType === filter)
  return (
    <section id="projects" className="py-20 bg-[#E5E7EB]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-[#2C3E50] bg-clip-text text-transparent">
            Our Real Estate Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FFB200] to-[#2C3E50] mx-auto mb-6"></div>

          <p className="text-[#2C3E50] max-w-2xl mx-auto">
            Discover our portfolio of premium properties across India, designed for modern living and investment
            opportunities.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-[#2C3E50]/10 rounded-lg p-1">
            {["all", "ongoing", "completed", "upcoming"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${filter === type
                  ? "bg-[#ffb300b3] text-[#2C3E50] shadow-md"
                  : "text-[#E5E7EB] hover:bg-[#2C3E50]/80"
                  }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)} {type === "all" ? "Projects" : ""}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16">
              <span className="text-4xl mb-4">🚧</span>
              <h3 className="text-2xl font-semibold text-[#2C3E50] mb-2">
                {filter === "all"
                  ? "No projects available at the moment."
                  : `${filter.charAt(0).toUpperCase() + filter.slice(1)} projects are coming soon!`}
              </h3>
              <p className="text-[#2C3E50]/70">
                Stay tuned for exciting updates and new opportunities.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

