import React from 'react';
import{BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import AuthenticationComponent from './components/AuthenticationComponent'
import loginPage from './components/LoginPage'
import Protected from './components/Protected'


function App() {
  return (
   <BrowserRouter>
   <Switch>
     <Route path="/LoginPage" component={loginPage} />
     <Route path="/" exact component={Home}/>
     <AuthenticationComponent>
     <Route path="/Protected" component={Protected} />
     </AuthenticationComponent>
   </Switch>
   </BrowserRouter>
  );
}

export default App;
