import {Route, Routes} from "react-router-dom";
import './App.css'
import IndexPage from "./pages/indexpage";

function App() {

  return (
    <Routes>
      <Route index element={<IndexPage></IndexPage>}></Route>
    </Routes>
  )
}

export default App
