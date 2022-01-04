import React from "react";
import {Route, BrowserRouter} from "react-router-dom";
import AllData from "./AllData";
import Balance from "./Balance";
import CreateAccount from "./CreateAccount";
import Deposit from "./Deposit";
import Home from "./Home";
import Login from "./Login";
import NavBar from "./NavBar";
import Withdraw from "./Withdraw";

function App() {
  const [users, setUsers] = React.useState({users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]});
  return (
    <BrowserRouter>
      <NavBar/>
     
     
        <div className="container" style={{padding: "20px"}}>
        <Route exact path="/">
            <Home users={users} />
          </Route>
          <Route path="/create-account/">
            <CreateAccount users={users} setUsers={setUsers} />
          </Route>
          <Route path="/login/">
            <Login users={users} />
          </Route>
          <Route path="/deposit/">
            <Deposit users={users} setUsers={setUsers}/>
          </Route>
          <Route path="/withdraw/">
            <Withdraw users={users} setUsers={setUsers} />
          </Route>
          <Route path="/balance/">
            <Balance users={users} />
          </Route>
          <Route path="/all-data/">
            <AllData users={users} />
          </Route>
        </div>
          
    </BrowserRouter>
  );
}

export default App;