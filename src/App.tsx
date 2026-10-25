import { Shell } from './components/Layout'
import { About, Contact, Experience, Hero, Skills } from './components/Sections'

function App() {
  return (
    <Shell page="home">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </Shell>
  )
}

export default App
