
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VisionSection from './components/VisionSection';
import CoreValues from './components/CoreValues';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Founder from './components/Founder';
function App() {


  return (
     <>
      <Navbar />
      <Hero />
     <VisionSection />
       <CoreValues />
     <Services />
       <CTA />
       <Founder/>
      <Footer />
    </>
  )
}

export default App
