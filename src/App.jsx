import './App.css';
import Accordion from './components/accordion/Accordion';
import Colorpicker from './components/color-picker/Colorpicker';
import {BrowserRouter as Router, Routes, Route, Navigate, Outlet} from 'react-router-dom';
import Sidebar from './components/sidebar';
import Profile from './components/profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { projects } from "./assets/projects";

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/profile" replace />} />

          <Route element={<Sidebar />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/accordion" element={<Accordion />} />
            <Route path="/color-picker" element={<Colorpicker />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App