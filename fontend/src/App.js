import { Routes, Route,  BrowserRouter as Router, } from 'react-router-dom';
import Home from "./pages/Home";
import Info from "./pages/Profile";
import Login from 'pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />

        <Route path='/profile' element={<Info />} />
        <Route path='*' element={<p>not found</p>} />

      </Routes>
    </Router>
  );
}

export default App;
