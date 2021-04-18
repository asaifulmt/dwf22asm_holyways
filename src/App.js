// import { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/global.css"

import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Navbar from "./components/navbar";
import ModalLogin from "./components/modalLogin";
import ModalRegister from "./components/modalRegister";
import { UserContextProvider } from "./contexts/userContext";
import PrivateRoute from "./components/privateRoute";
import DetailDonate from "./pages/detailDonate";
import { ModalContextProvider } from "./contexts/modalContext";
import ProfilePage from "./pages/profilePage";

function App() {
  // const [visibleLoginModal, setVisibleLoginModal] = useState(false)
  // const [visibleLoginRegister, setVisibleRegisterModal] = useState(false)
  return (
    <ModalContextProvider>
      <UserContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <PrivateRoute
              exact
              path="/donate/:id"
              component={DetailDonate}
            />
            <PrivateRoute
              exact
              path="/profile"
              component={ProfilePage}
            />

            <Route component={NotFound} />
          </Switch>
          <ModalLogin />
          <ModalRegister />
          {/* {
            visibleLoginModal && (
              <ModalLogin isVisible={visibleLoginModal} onHide={() => setVisibleLoginModal(false)} showModalRegister={() => setVisibleRegisterModal(true)} />
            )
          }
          {
            visibleLoginRegister && (
              <ModalRegister isVisible={visibleLoginRegister} onHide={() => setVisibleRegisterModal(false)} showModalLogin={() => setVisibleLoginModal(true)} />
            )
          } */}
        </Router>
      </UserContextProvider>
    </ModalContextProvider>
  )
}

export default App;
