import { useState } from "react";
import Header from "./assets/main-app/Header";
import MainComponent from "./assets/main-app/MainComponent";
import Footer from "./assets/main-app/Footer";
import "./App.css";

function App() {
  const [userId, setUserId] = useState(2);

  return (
    <>
      <Header setUserId={setUserId} />
      <MainComponent userId={userId} />
      <Footer />
    </>
  );
}

export default App;
