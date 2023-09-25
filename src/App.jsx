import "./App.css";
import Navigation from "./component/navigation";
import Footer from "./component/footer";
import Main from "./page/Main";

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
