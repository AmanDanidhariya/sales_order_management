import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import ColorModeSwitch from "./components/ColorModeSwitch";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <>
      <div>
        <ColorModeSwitch /> 
      </div>

      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element="page Not Found"/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
