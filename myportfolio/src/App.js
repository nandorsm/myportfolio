import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Contact from './components/page/Contact';
import Home from './components/page/Home'
import Projects from './components/page/Projects'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact='true' element={<Home/>} ></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </Router>
    

  );
}

export default App;
