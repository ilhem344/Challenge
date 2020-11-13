import "./App.css";
import { Switch, Route } from "react-router-dom";
import home from "./pages/home";
import aboutUs from "./pages/aboutUs";
import error from "./pages/error";
import Navbarre from "./components/Navbarre";
import Footer from "./components/footer";
import JuiceDetails from "./components/JuiceDetails";
function App() {
  return (
    <div className="App">
      <Navbarre />
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/aboutus" component={aboutUs} />
        <Route path="/drink/:idDrink" component={JuiceDetails} />
        <Route path="/*" component={error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
