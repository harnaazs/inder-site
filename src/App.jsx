import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Expertise from './components/Expertise'
import Education from './components/Education'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'

export default function App() {
  return (
    <>
      <CursorGlow />
      <Navigation />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Timeline />
      <Divider />
      <Expertise />
      <Divider />
      <Education />
      <Divider />
      <Footer />
    </>
  )
}

function Divider() {
  return (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-border-gold to-transparent" />
  )
}
