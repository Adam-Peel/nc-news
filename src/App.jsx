import { useState } from "react";
import MainComponent from "./assets/main-app/MainComponent";
import "./App.css";

function App() {
  const [userId, setUserId] = useState(2);

  return (
    <>
      <MainComponent userId={userId} />
    </>
  );
}

export default App;
