import { useState } from "react";
import Header from "./assets/components/Header";
import MainComponent from "./assets/components/MainComponent";
import Footer from "./assets/components/Footer";
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
