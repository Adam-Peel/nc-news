import { useState } from "react";
import MainComponent from "./assets/main-app/MainComponent";
import Header from "./assets/main-app/Header";
import "./App.css";
import Footer from "./assets/main-app/Footer";

function App() {
  const [userId, setUserId] = useState(2);

  return (
    <>
      <Header />
      <MainComponent userId={userId} />
      <Footer />
    </>
  );
}

export default App;
