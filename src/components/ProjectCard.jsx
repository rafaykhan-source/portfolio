export function ProjectCard({ project }) {
  const skills = project.skills.map((skill) => (
    <div className="rounded-md border-2 border-blue-300 border-opacity-75 px-2 text-sm">
      {skill}
    </div>
  ))
  return (
    <>
      <a
        href={project.url}
        className="delay-50 grid-col grid gap-1 rounded-xl border-2 border-solid border-gray-700 p-8 transition duration-200 ease-in-out hover:-translate-y-1 hover:border-gray-400"
      >
        <div className="text-xl font-semibold">{project.name}</div>
        <div>{project.description}</div>
        <div className="flex flex-col place-items-center gap-1 sm:flex-row">
          {skills}
        </div>
      </a>
    </>
  )
}
