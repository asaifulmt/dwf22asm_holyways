import { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/global.css"

import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Navbar from "./components/navbar";
import ModalLogin from "./components/modalLogin";
import ModalRegister from "./components/modalRegister";

function App() {
  const [visibleLoginModal, setVisibleLoginModal] = useState(false)
  const [visibleLoginRegister, setVisibleRegisterModal] = useState(false)
  return (
    <Router>
      <Navbar onClickLogin={() => setVisibleLoginModal(true)} onClickRegister={() => setVisibleRegisterModal(true)}/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
      {
        visibleLoginModal && (
          <ModalLogin isVisible={visibleLoginModal} onHide={() => setVisibleLoginModal(false)} showModalRegister={() => setVisibleRegisterModal(true)} />
        )
      }
      {
        visibleLoginRegister && (
          <ModalRegister isVisible={visibleLoginRegister} onHide={() => setVisibleRegisterModal(false)} showModalLogin={() => setVisibleLoginModal(true)} />
        )
      }
    </Router>
  )
}

export default App;
