import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/NotFound/NotFound";
import MenuBar from "./components/include/MenuBar/MenuBar";
import Login from "./components/pages/Login/Login";
import AuthProvider from "./context/AuthProvider";
import Footer from "./components/include/Footer/Footer";
import MyOrders from "./components/pages/MyOrders/MyOrders";
import ManageAllOrders from "./components/pages/ManageAllOrders/ManageAllOrders";
import AddService from "./components/pages/AddService/AddService";
import Blogs from "./components/pages/Blogs/Blogs";
import Gallery from "./components/pages/Gallery/Gallery";
import PlaceOrder from "./components/pages/PlaceOrder/PlaceOrder";
import PrivateRoute from "./private/PrivateRoute";

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Router>
          <MenuBar></MenuBar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/blogs">
              <Blogs />
            </Route>
            <Route exact path="/gallery">
              <Gallery />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/myOrders">
              <MyOrders />
            </Route>

            <Route exact path="/allOrders">
              <ManageAllOrders />
            </Route>

            <PrivateRoute exact path="/addService">
              <AddService />
            </PrivateRoute>

            <PrivateRoute exact path="/packages/:id">
              <PlaceOrder />
            </PrivateRoute>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
