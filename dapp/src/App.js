import Login from './pages/Login'
import Register from './pages/Register'
import Upload from './pages/Upload'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Slider from './components/Slider'
import bg1 from './assets/img/bg3.jpg'
import bg2 from './assets/img/bg12.jpg'
import bg3 from './assets/img/bg15.jpg'


function App() {
  return (
    <div className="app">
      {/* Music Streaming */}
    {/* <Navbar></Navbar>
    <Hero imageSrc={bg1}></Hero>
    <Slider imageSrc={bg2} title={'Chase Aesthetics Brah'} subtitle={'We listen to hardstyle in the gym'}>
    </Slider>
    <Slider imageSrc={bg3} title={'Chase Aesthetics Brah'} subtitle={'We listen to hardstyle in the gym'}>
  </Slider> */}
  {/* <Upload/> */}
  <Register/>
  {/* <Login/> */}
  </div>

  );
}

export default App;
