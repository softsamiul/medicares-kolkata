import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Experts from './pages/Experts/Experts';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Profile from './pages/Profile/Profile';
import Services from './pages/Services/Services';
import AuthProvider from './shared/AuthProvider/AuthProvider';
import DoctorDetails from './shared/Doctors/DoctorDetails/DoctorDetails';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';
import Login from './shared/Login/Login';
import PrivateRoute from './shared/PrivateRoute/PrivateRoute';
import Register from './shared/Register/Register';
import ServiceDetails from './shared/SharedServices/SingleService/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/services">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path="/services/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute exact path="/experts">
              <Experts></Experts>
            </PrivateRoute>
            <PrivateRoute path="/experts/:id">
              <DoctorDetails></DoctorDetails>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/profile">
              <Profile></Profile>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
