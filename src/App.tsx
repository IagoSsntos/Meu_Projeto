import {BrowserRouter, Routes, Route } from "react-router-dom"
import Pratos from "./pages/Pratos/Pratos"
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/pratos" element={ <Pratos /> } />
      </Routes>
    </BrowserRouter>
    </>
         
  )
}

export default App
