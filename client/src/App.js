import { Routes, Route } from 'react-router-dom';
import './App.css';
import Iridescence from './Components/Iridescence';
import Orb from './Components/Orb';
import dp from './assets/dp.png'

function App() {
  // const items = [
  //   { label: "Home", href: "/" },
  //   { label: "Jobs", href: "/jobs" },
  //   { label: "About", href: "/about" },
  // ];
  return (
    <div className="app">

      {/* <div style={{ width: '100%', height: '600px', position: 'relative' }} >
        <img className='display_pic' src={dp} alt='disply_picture' />
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div> */}
      <div className="orb-frame">
        {/* ORB LAYER (on top so the ring overlaps the image edge) */}
        <div className="orb-layer">
          <Orb
            hoverIntensity={0.5}
            rotateOnHover
            hue={0}
            forceHoverState={false}
            /* if Orb accepts style/className, keep both */
            style={{ width: "100%", height: "100%" }}
            className="orb"
          />
        </div>

        {/* IMAGE LAYER (centered inside the ring) */}
        <img src={dp} alt="display_picture" className="orb-photo" />
      </div>

      <Iridescence
        color={[1, 1, 1]}
        mouseReact={true}
        amplitude={0.1}
        speed={1.0}
      />
      {/* <div className="grid h-screen place-content-center bg-black">
        <Navigation />
      </div> */}
      {/* <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/apply/:jobId" element={<Application />} />
        </Routes>
      </div> */}
    </div>
  );
}

export default App;