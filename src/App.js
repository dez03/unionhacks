import Home from "./pages/Home"
import './App.css'
import sponsorshipinfo from "./pages/sponsorshipinfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router className="app">
      {/* <ScrollToTop /> */}
      <Home />
      <sponsorshipinfo />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsorshipinfo" element={<sponsorshipinfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;