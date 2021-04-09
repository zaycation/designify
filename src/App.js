import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/Scroller";
import HomePage from "./pages/HomePage";
import Loader from "./pages/LoadingPage";
import PricingPage from "./pages/PricingPage";
import ServicesPage from "./pages/ServicesPage";
import ExamplesPage from "./pages/ExamplesPage";

import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        {/*
        <Route path="/loan-options" component={Options} />
        <Route path="/about" component={About} />
         */}
        <Route path="/examples" component={ExamplesPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/pricing" component={PricingPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/" component={Loader} />
      </Switch>
    </Router>
  );
}

export default App;
