import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Signin from "./pages/Signin"
import Signout from "./pages/Signout"
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/about" element = {<About />}/>
        <Route path = "/sign-in" element = {<Signin />}/>
        <Route path = "/singout" element = {<Signout />}/>
        <Route path = "/dashboard" element = {<Dashboard />}/>
        <Route path = "/projects" element = {<Projects />}/>


      </Routes>
    </BrowserRouter>
  )
}
