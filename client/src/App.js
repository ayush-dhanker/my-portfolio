import { Routes, Route } from 'react-router-dom';
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Iridescence from './Components/Iridescence';
import Orb from './Components/Orb';
import dp from './assets/dp.png'
import Threads from './Components/Threads';
import SplashCursor from './Components/SplashCursor';
import SocialLinks from './Components/SocialLinks';
import Timeline from './Components/Timeline';
import Navbar from './Components/Navbar';

function App() {
  // const items = [
  //   { label: "Home", href: "/" },
  //   { label: "Jobs", href: "/jobs" },
  //   { label: "About", href: "/about" },
  // ];
  const experience = [
    {
      title: "Software Engineer",
      subtitle: "ABC Corp | 2020 - Present",
      description: "Building scalable web apps using React and Node.js."
    },
    {
      title: "Frontend Developer",
      subtitle: "XYZ Ltd | 2018 - 2020",
      description: "Focused on UI/UX and responsive design."
    },
    {
      title: "Intern",
      subtitle: "Startup Inc | 2017 - 2018",
      description: "Worked on bug fixes and small feature improvements."
    }
  ];
  return (
    <div className="app">

      <SplashCursor
      // SPLAT_FORCE={0.5}
      />
      <Navbar />

      {/* Image/ display */}
      <div className="orb-frame">
        <div className="orb-layer">
          <Orb
            hoverIntensity={0.5}
            rotateOnHover
            hue={0}
            forceHoverState={false}
            style={{ width: "100%", height: "100%" }}
            className="orb"
          />
        </div>
        <img src={dp} alt="display_picture" className="orb-photo" />
      </div>

      {/* Intro */}
      <div className='intro'>
        <h1>AYUSH DHANKER</h1>
        <p>Master’s in Data & Knowledge Engineering</p>
        <p>[ Aspiring AI/ML Engineer ]</p>
        <SocialLinks />
      </div>

      <div style={{ width: '100%', height: '300px', position: 'relative' }}>
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
          color={[0, 0, 0]}
        />
      </div>

      {/* experience and education  */}
      <div className='profile'>
        <div>
          <h3>EXPERIENCE</h3>
          <Timeline steps={experience} activeStep={2} />
          <h3>EDUCATION</h3>
          <Timeline steps={experience} activeStep={2} />
        </div>

        <div>
          <h2>About Me</h2>
          <p></p>
        </div>
      </div>

      {/* <Iridescence
        color={[1, 1, 1]}
        mouseReact={true}
        amplitude={0.1}
        speed={1.0}
      /> */}
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