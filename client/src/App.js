import { Routes, Route } from 'react-router-dom';
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Orb from './Components/Orb';
import dp from './assets/dp.png'
import Threads from './Components/Threads';
import SplashCursor from './Components/SplashCursor';
import SocialLinks from './Components/SocialLinks';
import Timeline from './Components/Timeline';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import MagicMarquee from './Components/MagicMarquee';
import { Highlighter } from './Components/Highlighter';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

function App() {
  const experience = [
    {
      title: "Junior Web Developer",
      subtitle: "Palpixel Private Limited | Aug 2023 – Feb 2024",
      // description: "Building scalable web apps using ReactJS and Node.js."
    },
    {
      title: "Software developer Intern",
      subtitle: "Perspective | Sept 2022 – May 2023 ",
      // description: "Focused on UI/UX and responsive design."
    },
  ];
  const education = [
    {
      title: "Master in Data and Knowledge Engineering",
      subtitle: "OTTO-VON-GUERICKE-UNIVERSITY | GERMANY",
      description: "Apr 2024 - pursuing"
    },
    {
      title: "Bachelor of Technology in Computer Science ",
      subtitle: "GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY | New Delhi, INDIA ",
      description: "Aug 2019 - July 2023"
    },
  ];
  return (
    <div className="app">

      {/* <SplashCursor /> */}
      <Navbar />

      {/* Image/ display */}
      <div id='home' style={{ padding: '80px 0 0' }}>
        <div className="orb-frame" >
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
      </div>

      {/* Intro */}
      <div className='intro'>
        <h1>AYUSH DHANKER</h1>
        <p>Master’s in Data & Knowledge Engineering</p>
        <p><Highlighter action="highlight" color="#FFFE37" animationDuration='2000'>[ Aspiring AI/ML Engineer ]</Highlighter></p>
        <SocialLinks />

      </div>
      {/* 
      <div style={{ width: '100%', height: '200px', position: 'relative', display: 'flex', alignItems: 'center', zIndex: '-1' }}>
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
          color={[0, 0, 0]}
        />
      </div> */}

      {/* experience and education  */}
      <div id='about' style={{ padding: '80px 0 0' }}>
        <div className='profile' >
          <div>

            <h2>ABOUT</h2>
            <p style={{ padding: '2.2rem', paddingRight: '3rem' }}>
              I’m a Master’s student in Data Science Engineering with a strong foundation in Computer Science and hands-on experience in machine learning and full-stack development.
              I work fluently with Python (Scikit-learn, PyTorch), JavaScript/React, SQL, FastAPI, and Git, building everything from RESTful APIs to interactive data visualizations. Through internships and projects,
              I’ve applied these skills to develop practical, end-to-end solutions that bridge data and software.
            </p>

            <h2>EXPERIENCE</h2>
            <Timeline steps={experience} activeStep={2} />

            <h2>EDUCATION</h2>
            <Timeline steps={education} activeStep={2} />

            <div>
              <MagicMarquee />
            </div>

          </div>

          <div>
            <h2>SKILLS</h2>
            <Skills />
          </div>
        </div>
      </div>



      {/* Projects */}
      <div id='projects'>
        <Projects />
      </div>

      <Contact />

      <Footer />
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