import { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/global.css"

import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Navbar from "./components/navbar";
import ModalLogin from "./components/modalLogin";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  return (
    <Router>
      <Navbar onClickLogin={() => setModalIsVisible(true)} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
      {
        modalIsVisible && (
          <ModalLogin isVisible={modalIsVisible} onHide={() => setModalIsVisible(false)} />
        )
      }
    </Router>
  )
}

export default App;
