import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home'
import Rooms from './Pages/Rooms'
import SingleRoom from './Pages/SingleRoom'
import Error from './Pages/Error'
import RoomContextProvider from './Context';
import Footer from './Components/Footer';
const App = () => {
  return ( 
    <RoomContextProvider>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms' component={Rooms} />
        <Route exact path='/rooms/:slug' component={SingleRoom} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </Router>
    </RoomContextProvider>
   );
}
 
export default App;
