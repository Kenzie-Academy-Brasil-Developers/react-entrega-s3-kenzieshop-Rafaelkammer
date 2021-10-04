import "./App.css";
import Navbar from "./components/Navbar";
import Routes from "./routes";

function App() {
  return (
    <div>
      <header className="App-header">
        <Navbar />
        <Routes />
      </header>
    </div>
  );
}

export default App;
