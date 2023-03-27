import { Container } from "react-bootstrap"
import NavMenu from "./components/NavMenu"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Store from "./pages/Store"
import { StoreContextProvider } from "./contexts/StoreContext"

function App() {
  return (
    <StoreContextProvider>
      <Container>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </StoreContextProvider>
  )
}

export default App
