import Carousel from './components/Carousel'
import HeroSection from './components/HeroSection'
import NavBar from './components/Navbar'
import Project from './components/Project'
export default function Home() {
  return (
    <main style={{height:"1024vh"}} className="flex min-h-screen flex-col bg-[#121212] sm:h-100">
      <NavBar/>
      <div className='container mx-auto px-12 py-4'>
      <HeroSection/>
      </div>
      <Carousel/>
      <Project/>
    </main>
  )
}
