import { useEffect } from "react";
import HomePage from "./HomePage";
import VinePlayground from "./VinePlayground";

export default function App() {
  const vineMode = new URLSearchParams(window.location.search).has("vine");

  // 🔑 FORCE START AT TOP ON LOAD (mobile fix)
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return vineMode ? <VinePlayground /> : <HomePage />;
}
