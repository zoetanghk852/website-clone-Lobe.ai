import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./component/navigation";
import Footer from "./component/footer";
import Home from "./page/Home";
import Tour from "./page/tourpage/Tour";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tour" element={<Tour />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
