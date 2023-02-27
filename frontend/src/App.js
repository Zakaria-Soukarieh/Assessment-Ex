
// import './App.css';
// import Component from './components.js'
// function App() {
//   return (
//     <div className="App">
//       <Component />
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Dashboard from './pages/Dashboard.jsx'


function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    
    </>
  )
}

export default App
