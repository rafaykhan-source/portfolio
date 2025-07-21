import { ProjectCard } from './ProjectCard'

export function ProjectsTable({ projects }) {
  const items = projects.map((project) => (
    <ProjectCard project={project}></ProjectCard>
  ))
  return (
    <>
      <div className="grid grid-flow-row-dense gap-2 px-4 lg:grid-cols-2">
        {items}
      </div>
    </>
  )
}
