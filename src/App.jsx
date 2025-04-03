import './App.css'
import Accordion from './components/accordion/Accordion'
import Colorpicker from './components/color-picker/Colorpicker'
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/accordion" element={<Accordion />}></Route>
          <Route path="/color-picker" element={<Colorpicker />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

function Home () {
  return (
    <>
      <h1>Home</h1>
    </>
  )
}