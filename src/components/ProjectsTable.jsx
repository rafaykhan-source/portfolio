import { ProjectCard } from './ProjectCard'

export function ProjectsTable({ projects }) {
  const items = projects.map((project) => (
    <ProjectCard project={project}></ProjectCard>
  ))
  return (
    <>
      <div className="grid px-4 sm:grid-flow-row-dense xl:grid-cols-2">
        {items}
      </div>
    </>
  )
}
