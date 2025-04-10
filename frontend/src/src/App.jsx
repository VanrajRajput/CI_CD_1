import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FetchData from './FetchData';
import Home from './Home'; // This would be your name input page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fetch-data" element={<FetchData />} />
      </Routes>
    </Router>
  );
}

export default App;
