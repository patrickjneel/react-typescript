import { useState } from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <h2>Corgis Rock</h2>
      </header>
    </div>
  );
};

export default App;
