
import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';


// import Home from './Home.js'
import './Login.css'

// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Link

// } from "react-router-dom"

export default function Login() {

    const [id, setid] = useState('')
    const [password, setpassword] = useState('')
    const [token, settoken] = useState('0')


    function userLogin() {

        let data = { id, password }

        fetch('https://reqres.in/api/login', {                  // link to login
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((resp) => {
                // console.log(resp)
                resp=JSON.stringify(resp)
                if(resp==='true') {
                settoken('1')
                window.location.href = "http://localhost:3000/home"
                }
                else window.location.href = "https://www.google.com"
                }
            )
        })
        
    }



    return (
        <div>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    {/* <!-- Tabs Titles --> */}

                    {/* <!-- Icon --> */}
                    <div className="fadeIn first">
                        <img src="https://www.fintechfutures.com/files/2016/04/EdgeVerve-Infosys.png" id="icon" alt="User Icon" />
                    </div>


                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="Account Number" value={id} onChange={(e) => { setid(e.target.value) }} required />
                    <input type="password" id="password" className="fadeIn third" name="login" placeholder="Password (DOB as YYYY-MM-DD)" value={password} onChange={(e) => { setpassword(e.target.value) }} required />

                    {/* <Link className="btn btn-warning" style={{marginBottom:"25px",marginTop:"10px"}} to="/home" onClick={
                        userLogin
                    }>Login</Link> */}

                    <button className="btn btn-warning"  style={{marginBottom:"25px",marginTop:"10px"}} onClick={
                        userLogin 
                    }>Login</button>


                    




                </div>
            </div>
        </div>
    )
}
