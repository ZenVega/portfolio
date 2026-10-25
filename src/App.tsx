import { Shell } from './components/Layout'
import { About, Contact, Experience, Hero, Projects, Skills } from './components/Sections'

function App() {
  return (
    <Shell page="home">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </Shell>
  )
}

export default App
