import React from "react";
import { useState } from "react";
import axios from "axios";
import right from "./assets/Frame.png"
import logo from "./assets/logo.png"
import "./styles/signin.css"
import { useNavigate } from "react-router-dom";

function signin() {
  let navigate=useNavigate()
  const [firstname, Setfirstname] = useState();
  const [lastname, Setlastname] = useState();
  const [email, Setemail] = useState();
  const [password, Setpassword] = useState();
  const [cnfpassword, Setcnfpassword] = useState();
  async function handleform(e) {
    e.preventDefault();
    if(firstname && lastname && email && password && cnfpassword){
    try {
      if (password === cnfpassword) {
        const response=await axios.post("http://localhost:5353/user/signin",{
            firstname,lastname,email,password,
        })
        console.log(response.data)
        if(response.data==="new user created"){
          

          alert("new user created")
          navigate("/login")
          
          
        }
        
      }
      else{
        alert("password dosen't matthed");
      }
    } catch (err) {
      console.log(err)
    }
  }
  else{
    alert("please enter all details")
  }
  }
  return (
    <div className="mainclass">
    <div className="logoform">
        <img src={logo} alt="" id="logo"/>
      <form id="form">
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",width:"55%",marginBottom:"10px"}}>
          <h2>Create an account</h2>
          <span onClick={()=>navigate("/login")}  style={{color:"blue"}}>Signin instead</span>
        </div>
        
        <label htmlFor="firstname" style={{textAlign:"left",width:"42%",fontSize:"small",padding:"2px"}}>Firstname</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={firstname}
          onChange={(e) => Setfirstname(e.target.value)}
          required
        />
        <br />
        <label htmlFor="lastname" style={{textAlign:"left",width:"42%",fontSize:"small",padding:"2px"}}>Lastname</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={lastname}
          onChange={(e) => Setlastname(e.target.value)}
          required
        />
        <br />
        <label htmlFor="email" style={{textAlign:"left",width:"42%",fontSize:"small",padding:"2px"}}>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => Setemail(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password" style={{textAlign:"left",width:"42%",fontSize:"small",padding:"2px"}}>Paswword</label>
        <input
          type="password"
          name="paswword"
          id="password"
          value={password}
          onChange={(e) => Setpassword(e.target.value)}
          required
        />
        <br />
        <label htmlFor="cnfpassword" style={{textAlign:"left",width:"42%",fontSize:"small",padding:"2px"}}>Confirm Password</label>
        <input
          type="password"
          name="cnfpaswword"
          id="cnfpassword"
          value={cnfpassword}
          onChange={(e) => Setcnfpassword(e.target.value)}
          required
        />
        <br />
        <button onClick={handleform} id="signup">Create new account</button>
      </form>
      </div>
      <img src={right} id="right" />
    </div>
  );
}

export default signin;
