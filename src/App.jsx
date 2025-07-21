import { IntroCard } from './components/IntroCard'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { ProjectsTable } from './components/ProjectsTable'

const projects = [
  {
    name: 'Marshmallow',
    url: 'https://github.com/rafaykhan-source/marshmallow/',
    description:
      'Automates administrative and managerial tasks on Princeton EBCAO Discords.',
    skills: ['Python', 'Docker', 'PANDAS', 'Discord API'],
  },
  {
    name: 'Portfolio Page',
    url: 'https://github.com/rafaykhan-source/portfolio',
    description:
      'A website heavily inspired by a very popular remote version control service.',
    skills: ['React', 'Tailwind CSS', 'JavaScript', 'Vite'],
  },
  {
    name: 'Mentor Match',
    url: 'https://github.com/rafaykhan-source/mentor-match/',
    description:
      'An algorithm to form mentorship groups between student mentees and mentors.',
    skills: ['Python', 'JSON', 'Object Oriented Programming'],
  },
  {
    name: 'Ranked Choice Matcher',
    url: 'https://github.com/rafaykhan-source/ranked-choice-matcher',
    description:
      'An algorithm/automation program for assigning people to (simultaneous) events based on ranked preferences.',
    skills: ['Python', 'Object Oriented Programming'],
  },
  {
    name: 'Calendar Stopwatch',
    url: 'https://github.com/rafaykhan-source/calendar-stopwatch',
    description:
      'A stopwatch program that automatically logs sessions to Google Calendar.',
    skills: ['Python', 'Google Calendar API', 'SQL'],
  },
  {
    name: 'Pomodoro Timer',
    url: 'https://github.com/rafaykhan-source/COS126-FinalProject',
    description:
      'A study timer, made as my final project for COS126 at Princeton University.',
    skills: ['Java', 'Unit Testing', 'Debugging'],
  },
]

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <header>
        <NavBar></NavBar>
      </header>
      <main className="flex-grow">
        <div className="grid grid-flow-row place-items-center">
          <div>
            <IntroCard></IntroCard>
          </div>
          <div>
            <ProjectsTable projects={projects}></ProjectsTable>
          </div>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}
