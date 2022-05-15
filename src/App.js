import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Display from './Pages/Display';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
       <Router>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/display/:currencyname" element={<Display />} />
         </Routes>
       </Router>



      </div>
  )
}

export default App;
