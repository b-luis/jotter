import { useState, useEffect } from "react";
import { Start, Header, Notes, SelectedNote } from "./components";

const App = () => {
  return (
    <>
      <Start />
      <Header />
      <Notes />
      <SelectedNote />
    </>
  );
};

export default App;
