import React from "react";
import axios from "axios";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Link from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AllUsers() {
  let [data, setData] = useState([]);
  let navigate = useNavigate()

  let getData = async () => {
    let response = await axios.get(
      `https://63c935f5904f040a9658bca5.mockapi.io/users`
    );
    let newArr = response.data;
    if (response.status === 200) {
      setData(newArr);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let handleDelete = async (e) => {
    let res = await axios.delete(
      `https://63c935f5904f040a9658bca5.mockapi.io/users/${e.id}`
    );
    if (res.status === 200) {
      getData();
    }
  };

  let handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  return (
    <div
      id="content-wrapper"
      className="d-flex flex-column"
      style={{ display: "flex" }}
    >
      <div>
        <nav className="topnav">
          <a href="/all-users"><i className="fa fa-users" aria-hidden="true"></i>All Users</a>
          <a href="/pending"><i className="fa-solid fa-clock"></i>Pending</a>
          <a href="/approved"><i className="fa fa-check" aria-hidden="true"></i>Approved</a>
          <a href="/rejected"><i className="fa fa-ban" aria-hidden="true"></i>Rejected</a>
          <a href="/login" onClick={()=>handleLogout()}><i className="fa fa-sign-out" aria-hidden="true"></i>Logout</a>
        </nav>
      </div>
      <div className="row">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>photo</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Role</th>
              <th>Email</th>
              <th> UserName</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((e) => {
              return (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>
                    <img src={e.photo} />
                  </td>
                  <td>{e.ename}</td>
                  <td>{e.mobile}</td>
                  <td>{e.role}</td>
                  <td>{e.email}</td>
                  <td>{e.username}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => {
                        handleDelete(e);
                      }}
                    ><i className="fa fa-trash" aria-hidden="true"></i>
                      Delete 
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default AllUsers;
