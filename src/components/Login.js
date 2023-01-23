import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Login() {
  let Navigate = useNavigate();
  // let [data, setData] = useState([])

  function handleLogin() {
    let Uname = document.getElementById("username").value;
    let Pword = document.getElementById("password").value;

    sessionStorage.setItem("username", Uname);
    sessionStorage.setItem("password", Pword);

    let username = sessionStorage.getItem("username");
    let password = sessionStorage.getItem("password");
    if (username === "admin" && password === "admin") {
      Navigate("/all-users");
    } else {
      getData(username, password);
    }
  }

  let getData = async (username, password) => {
    console.log(username, password);
    let respopnse = await axios.get(
      `https://63c935f5904f040a9658bca5.mockapi.io/users`
    );
    let data = respopnse.data;
    let newArr = data.filter((e) => e.username === username);
    console.log(newArr);
    if (newArr.length === 0) {
      alert("UserName not found");
    } else {
      newArr.map((e) => {
        if (e.password === password) {
          return Navigate("/profile");
        } else {
          alert("Invalid password");

          return false;
        }
      });
    }
  };

  function handleSignup() {
    Navigate("/signup");
  }

  return (
    <div id="content-wrapper" className="login">
      <img src='https://res.cloudinary.com/daxcuerse/image/upload/v1674384946/theecode_qtqex1.jpg' alt='logo'></img>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your UserName"
            id="username"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            id="password"
            required
          />
        </Form.Group>
        <Button variant="primary" onClick={() => handleLogin()}>
          Login
        </Button>
        &nbsp;
        <Button variant="primary" onClick={() => handleSignup()}>
          SignUp
        </Button>
      </Form>
    </div>
  );
}

export default Login;
