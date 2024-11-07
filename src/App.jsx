import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./components/Details";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}