import { useState } from "react";
import './App.css';
import Pestañas from "../Pestañas/Pestañas";

const App = () => {
  const pestañas = [
    { label: 'Tab 1', content: 'Tab 1 content is showing here' },
    { label: 'Tab 2', content: 'Tab 2 content is showing here' },
    { label: 'Tab 3', content: 'Tab 3 content is showing here' }
  ];

  return (
    <div className="App">
      <Pestañas pestañas={pestañas} />
    </div>
  );
};

export default App;

