import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Login from './pages/Loign';
import Register from './pages/Register';
import NotFound from './components/NotFound/NotFound';
import Dashboard from './pages/Dashboard';
import HouseDetail from './pages/HouseDetail';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/house-detail/:id" component={HouseDetail} />


        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
