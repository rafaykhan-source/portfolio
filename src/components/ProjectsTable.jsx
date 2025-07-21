import { ProjectCard } from './ProjectCard'

export function ProjectsTable({ projects }) {
  const items = projects.map((project) => (
    <ProjectCard project={project}></ProjectCard>
  ))
  return (
    <>
      <div className="grid grid-cols-1 place-items-center gap-8">
        <div className="text-4xl font-bold">Projects</div>
        <div className="mx-4 grid grid-flow-row-dense gap-2 px-4 lg:grid-cols-2">
          {items}
        </div>
      </div>
    </>
  )
}
