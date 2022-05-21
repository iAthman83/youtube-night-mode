import logo from "./logo.svg";
import "./App.css";
import { Hero, About } from "./sections/index";
import { NightModeComponent } from "./components/index";
import { useContext } from "react";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const night = theme.state.nightMode;
  return (
    <div
      style={{
        backgroundColor: night ? "#222222" : "#f5f5f5",
        color: night ? "#BDC1C6" : "#222222",
      }}
      className="App"
    >
      <NightModeComponent />
      <Hero />
      <About />
    </div>
  );
}

export default App;
