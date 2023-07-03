import { useState } from "react";
import HistoryButton from "./components/HistoryButton";
import TimerOptions from "./components/TimerOptions";
import "./App.css";

function App() {
  const [historyIsOpened, setHistoryIsOpened] = useState(false);

  return (
    <div className="main-container">
      <div className="header">
        <h1>Work Timer</h1>
        <HistoryButton
          onClick={() => setHistoryIsOpened((prev) => !prev)}
          historyIsOpened={historyIsOpened}
        />
      </div>
      <TimerOptions />
    </div>
  );
}

export default App;
