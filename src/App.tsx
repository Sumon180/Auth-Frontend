import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<h1 className="text-5xl font-bold">404</h1>} />
          {/* Other routes */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
