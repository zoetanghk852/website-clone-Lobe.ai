import "./App.css";
import "react-router-dom";
import Navigation from "./component/navigation";
import Footer from "./component/footer";
import Main from "./page/Main";
import { Tour } from "./page/tourpage/Tour";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
