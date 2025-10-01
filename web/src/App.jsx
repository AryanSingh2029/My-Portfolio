import React from "react";
import HeroStudio from "./components/HeroStudio";

function App() {
  return (
    <>
      {/* point to your JPG in /public */}
      <HeroStudio imageSrc="/myroom.jpg" />
    </>
  );
}
export default App;
