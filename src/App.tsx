import './App.css';
import {  Route, Switch } from 'react-router-dom';
import Home from './Pages/Home'
import Treatments from './Pages/Treatments'
import EnquireNow from './Pages/EnquireNow';
import Thankyou from './Pages/Thankyou';

function App() {
  return (
      <main>
          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/treatments" component={Treatments} exact />
              <Route path="/enquirenow" component={EnquireNow} exact />
              <Route path="/thankyou" component={Thankyou} exact />

          </Switch>
      </main>
  )
}

export default App;
