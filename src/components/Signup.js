import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  let navigate = useNavigate();

  let [ename, setEname] = useState("");
  let [username, setUsername] = useState("");
  let [mobile, setMobile] = useState("");
  let [role, setRole] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [photo, setPhoto] = useState("");

  let handleSubmit = async () => {
    let data = {
      ename,
      username,
      mobile,
      role,
      email,
      password,
      photo,
    };

    getUser(data);
  };

  let getUser = async (obj) => {
    let response = await axios.get(
      `https://63c935f5904f040a9658bca5.mockapi.io/users`
    );

    let newArr = response.data;

    let Uname = sessionStorage.getItem("username");
    var info = newArr.filter((e) => e.username === Uname);
    let id;
      info.map((e) => {
      id = e.id;
      return id;
    });
    console.log("======>getid", id);
    if (id) {
      // var info = newArr.filter((e)=>e.username === Uname)

      // var id = info.map((e)=> {return e.id})

      //   if (id ) {
      try {
        let loginUser = sessionStorage.getItem("username");
        if (loginUser === obj.username) {
          //if username is not changed

          let res = await axios.put(
            `https://63c935f5904f040a9658bca5.mockapi.io/users/${id}`,
            obj
          );
          if (res.status === 200) {
            navigate("/profile");
          }
        } else if (loginUser !== obj.username) {
          //if username is changed
          console.log("test");
          let newName = obj.username;
          let getdata = await axios.get(
            `https://63c935f5904f040a9658bca5.mockapi.io/users`
          );
          let res = getdata.data;
          let newArr = res.filter((e) => e.username === newName);
          // console.log('userchanging',newArr)
          if (newArr.length === 0) {
            let updataUser = await axios.put(
              `https://63c935f5904f040a9658bca5.mockapi.io/users/${id}`,
              obj
            );
            if (updataUser.status === 200) {
              sessionStorage.setItem("username", newName);
              navigate("/profile");
            }
          } else {
            alert("Please give different username");

            navigate("/signup");
          }
        }
      } catch (error) {
        alert(error);
      }
      //   }
    } else {
      let newUser = obj.username;
      console.log("=====>", newUser);
      let getdata = await axios.get(
        `https://63c935f5904f040a9658bca5.mockapi.io/users`
      );
      let res = getdata.data;
      let newArr = res.filter((e) => e.username === newUser);
      console.log(newArr);
      if (newArr.length === 0) {
        try {
          let res = await axios.post(
            "https://63c935f5904f040a9658bca5.mockapi.io/users",
            obj
          );
          if (res.status === 201) {
            navigate("/login");
          }
        } catch (error) {
          alert("Please try again");
          console.log(error);
          navigate("/signup");
        }
      } else {
        alert("username already exists");
      }
    }
  };

  let editUser = async () => {
    //this function will prepopulate the fields

    let response = await axios.get(
      `https://63c935f5904f040a9658bca5.mockapi.io/users`
    );

    let newArr = response.data;
    let Uname = sessionStorage.getItem("username");

    if (response.status === 200) {
      var info = newArr.filter((e) => e.username === Uname);
    }
    console.log("data====>", info);

    info.map((e) => {
      setEname(e.ename);
      setUsername(e.username);
      setMobile(e.mobile);
      setRole(e.role);
      setEmail(e.email);
      setPassword(e.password);
      setPhoto(e.photo);
    });
  };

  useEffect(() => {
    editUser();
  }, []);

  return (
    <div id="content-wrapper">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Name"
            value={ename}
            onChange={(e) => setEname(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Photo</Form.Label>
          <img src={photo} alt={"pic"}/>
          <Form.Control
            type="text"
            placeholder="Enter the link of the photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
          <Form.Text>Please Use Cloudinary</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Your Mobile Number"
            value={mobile}
            min = {10}
            max = {10}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Role</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Your Name"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Text>Please remember the password</Form.Text>
        </Form.Group>

        <Button variant="primary" onClick={() => handleSubmit()}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
