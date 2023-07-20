import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { motion } from "framer-motion";

import { initialOpacity, animateOpacity, exitOpacity, transitionDuration} from './config/constants'

import Home from "./pages/Home";
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Education from './pages/Education';
import WorkExperience from './pages/WorkExperience';
import Header from './components/Header';


import './assets/App.css';
import './assets/Fonts.css';


const App = () => {

  const HomeTransition = () => {
    return (<motion.div
      className="container text-center"
      initial={{ opacity: initialOpacity }}
      animate={{ opacity: animateOpacity }}
      exit={{ opacity: exitOpacity }}
      transition={{ duration: transitionDuration }}
    >
      <Home />
    </motion.div>)
  }

  const ProjectsTransition = () => {
    return (<motion.div
      className="container text-center"
      initial={{ opacity: initialOpacity }}
      animate={{ opacity: animateOpacity }}
      exit={{ opacity: exitOpacity }}
      transition={{ duration: transitionDuration }}
    >
      <Projects />
    </motion.div>)
  }

  const EducationTransition = () => {
    return (<motion.div
      className="container text-center"
      initial={{ opacity: initialOpacity }}
      animate={{ opacity: animateOpacity }}
      exit={{ opacity: exitOpacity }}
      transition={{ duration: transitionDuration }}
    >
      <Education />
    </motion.div>)
  }

  const WorkExperienceTransition = () => {
    return (<motion.div
      className="container text-center"
      initial={{ opacity: initialOpacity }}
      animate={{ opacity: animateOpacity }}
      exit={{ opacity: exitOpacity }}
      transition={{ duration: transitionDuration }}
    >
      <WorkExperience />
    </motion.div>)
  }

  const ContactMeTransition = () => {
    return (<motion.div
      className="container text-center"
      initial={{ opacity: initialOpacity }}
      animate={{ opacity: animateOpacity }}
      exit={{ opacity: exitOpacity }}
      transition={{ duration: transitionDuration }}
    >
      <ContactMe />
    </motion.div>)
  }

  const HeaderTransition = () => {
    return (<motion.div
      className="container text-center"
      initial={{ opacity: initialOpacity }}
      animate={{ opacity: animateOpacity }}
      exit={{ opacity: exitOpacity }}
      transition={{ duration: transitionDuration }}
    >
      <Header />
    </motion.div>)
  }

  return (
    <>
      <BrowserRouter>
        <HeaderTransition />
        <Routes>
          <Route path="/" element={<HomeTransition /> }/>
          <Route path="/education" element={<EducationTransition /> }/>
          <Route path="/projects" element={<ProjectsTransition /> }/>
          <Route path="/work-experience" element={<WorkExperienceTransition /> }/>
          <Route path="/contact-me" element={<ContactMeTransition /> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
