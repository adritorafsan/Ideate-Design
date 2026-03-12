
import { Routes, Route } from "react-router-dom"
import Process from "./components/Process"
import About from "./components/About"
import MainIndex from "./components/MainIndex"

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<MainIndex />} />
        <Route path='/process' element={<Process />} />
        <Route path='/about' element={<About />} />
      </Routes>

      
    </>
  )
}

export default App
