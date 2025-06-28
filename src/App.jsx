import { useState } from "react";
import Header from "./assets/main-app/Header";
import MainComponent from "./assets/main-app/MainComponent";
import "./App.css";
import Sidebar from "./assets/main-app/main-component/Sidebar";

function App() {
  const [userId, setUserId] = useState(2);

  return (
    <>
      <Sidebar />
      <Header setUserId={setUserId} />
      <MainComponent userId={userId} />
    </>
  );
}

export default App;
