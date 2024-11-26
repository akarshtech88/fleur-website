
import './App.css'
import Navbar from './components/Navbar'
import Mainsection from './components/Mainsection'
import Data from './components/Data'
import Maindata from './components/Maindata'
import Testimonial from './components/Testimonial'
// import Progressection from './components/Progressection'
import DataSection from './components/DataSection'
import Team from './components/Team'
import Clientsection from './components/Clientsection'
import Tweetsection from './components/Tweetsection'
import Endsection from './components/Endsection'
import Footer from './components/Footer'

function App() {
  return (
    <div>
     
   <Navbar/>
   <Mainsection/>
   <Data/>
   <Maindata/>
   <Testimonial/>
   {/* <Progressection/> */}
   <DataSection/>
   <Team/>
   <Clientsection/>
   <Tweetsection/>
   <Endsection/>
   <Footer/>
   







    </div>
  )
}

export default App
