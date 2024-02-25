import { useState } from "react";
import "./App.css";
import AuthPage from "./components/AuthPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <main className="min-h-[100vh] relative">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<AuthPage />}></Route>
          {/* <Route path="/Home" element={<Home />}></Route> */}
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
