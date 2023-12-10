import {Route, Routes} from "react-router-dom";
import './App.css'
import LoginPage from "./pages/LoginPage";

function App() {

  return (
    <Routes>
      <Route index element={<LoginPage></LoginPage>}></Route>
    </Routes>
  )
}

export default App
