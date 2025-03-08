import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Header from "./components/Header/Header";
import Education from "./components/Education/Education";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <Education />
  </StrictMode>
);
