import {Route,BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./pages/Home";
import TankDetails from "./pages/TankDetails";
import { useState } from "react";
import AuthForm from "./pages/AuthForm";
import API from "./utils/API";
import NewTank from "./pages/NewTank";
import NavBar from "./components/NavBar";


function App() {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userId, setUserId] = useState(0);
  const handleLogin = loginObj=>{
    API.login(loginObj).then(loginData=>{
      setToken(loginData.token);
      setIsLoggedIn(true);
      setUserId(loginData.user.id)
    }).catch(err=>{
      console.log('err', err)
    })
  }
  const handleSignup = signupObj=>{
    API.signup(signupObj).then(loginData=>{
      setToken(loginData.token);
      setIsLoggedIn(true);
      setUserId(loginData.user.id)
    }).catch(err=>{
      console.log('err', err)
    })
  }

  return (
    <>
      {/* TODO: navbar */}
      <Router>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/tank/:id" element={<TankDetails userId={userId} token={token}/>}/>
          <Route path="/login" element={<AuthForm type="login" handleSubmit={handleLogin}/>}/>
          <Route path="/signup" element={<AuthForm type="signup" handleSubmit={handleSignup}/>}/>
          <Route path="/newtank" element={<NewTank isLoggedIn={isLoggedIn} token={token}/>}/>
        </Routes>
      </Router>
    </>

  )
}

export default App
