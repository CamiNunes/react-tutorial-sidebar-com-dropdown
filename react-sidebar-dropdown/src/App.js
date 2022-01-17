import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview/Overview';
import Users from './pages/Overview/Users';
import Revenue from './pages/Overview/Revenue';

import Reports from './pages/Reports/Report';
import Report1 from './pages/Reports/Report1';
import Report2 from './pages/Reports/Report2';
import Report3 from './pages/Reports/Report3';

import Products from './pages/Products/Products';

import Team from './pages/Team/Team';

import Message from './pages/Message/Message';
import Message1 from './pages/Message/Message1';
import Message2 from './pages/Message/Message2';
import Message3 from './pages/Message/Message3';

import Support from './pages/Support/Support';

function App() {
  return (
    <Router>
      <Sidebar/>
      <Switch>
        <Route path="/overview" exact component={Overview}/>
        <Route path="/overview/users" exact component={Users}/>
        <Route path="/overview/revenue" exact component={Revenue}/>

        <Route path="/reports" exact component={Reports}/>
        <Route path="/reports/report1" exact component={Report1}/>
        <Route path="/reports/report2" exact component={Report2}/>
        <Route path="/reports/report3" exact component={Report3}/>

        <Route path="/products" exact component={Products}/>

        <Route path="/team" exact component={Team}/>

        <Route path="/message" exact component={Message}/>
        <Route path="/message/message1" exact component={Message1}/>
        <Route path="/message/message2" exact component={Message2}/>
        <Route path="/message/message3" exact component={Message3}/>

        <Route path="/support" exact component={Support}/>
      </Switch>
    </Router>
  );
}

export default App;
