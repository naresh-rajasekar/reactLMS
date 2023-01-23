import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

function Profile() {
  let username = sessionStorage.getItem("username");
  let navigate = useNavigate();
  let [data, setData] = useState([]);
  let [status, setStatus] = useState([]);
  // let [status, setStatus] = useStatus('NOT APPLIED')

  async function showProfile() {
    let response = await axios.get(
      `https://63c935f5904f040a9658bca5.mockapi.io/users`
    );
    let newArr = response.data;
    if (response.status === 200) {
      setData(newArr.filter((e) => e.username === username));
    }

    showStatus(username);
  }

  useEffect(() => {
    showProfile();
  }, []);

  async function showStatus(uname) {
    let response = await axios.get(
      `https://63c935f5904f040a9658bca5.mockapi.io/applyleave`
    );
    let newArr = response.data;
    if (response.status === 200) {
      setStatus(newArr.filter((e) => e.username === uname));
    }
  }

  let handleDelete = async (e) => {
    if (e.isApproved === true) {
      alert("Only pending requests can be deleted");
    } else if (e.isRejected === true) {
      alert("Only pending requests can be deleted");
    } else {
      try {
        let res = await axios.delete(
          `https://63c935f5904f040a9658bca5.mockapi.io/applyleave/${e.id}`
        );
        if (res.status === 200) {
          showStatus(username);
        }
      } catch (error) {
        console.log();
      }
    }
  };

  let handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div id="content-wrapper" >
      <nav className=" topnav">
                PROFILE
              <span style={{"float":"right"}}> <a
                      href='/login'
                      onClick={() => {
                        handleLogout();
                      }}
                    ><i className="fa fa-sign-out" aria-hidden="true"></i>
                      Logout
                    </a>
                    <a
                      
                      
                        href="/signup"
                      
                    ><i className="fas fa-edit"></i>
                      Edit 
                    </a></span>
            </nav>
      <div className="row ">
        <Table striped bordered hover>
          <thead>
            
            
            <tr>
            <th>Emp Id</th>
              <th>Photo</th>
              
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Role</th>

              
            </tr>
          </thead>

          <tbody>
            {data.map((e) => {
              return (
                <tr key={e.id}>
                  <td>{e.empno}</td>
                 
                  <td>
                    <img src={e.photo} alt={"profilepic"} />
                  </td>

                  <td>{e.ename}</td>
                  <td>{e.email}</td>
                  <td>{e.mobile}</td>
                  <td>{e.role}</td>

                  
                </tr>
              );
            })}
          </tbody>
        </Table>
        <br />
        <br />
      </div>
      <div className="topTitle topnav"><b>Previous Request Records</b><span >  <Button style={{"float":"right"}}
                      variant="primary"
                      onClick={() => {
                        navigate("/apply-leave");
                      }}
                    ><i className="fa fa-paper-plane" aria-hidden="true"></i>
                      Apply Leave
                    </Button></span></div>
      <div className="row">        
        <br></br>
        <Table striped bordered hover>
          <thead>
            <tr>
             
              <th>Leavetype</th>
              <th>From Date</th>
              <th> To Date</th>
              <th> Total Days</th>
              <th> Reason</th>
              <th>PL Available</th>

              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {status.map((e) => {
              return (
                <tr key={e.id}>
                
                  <td>{e.leavetype}</td>
                  <td>{e.from}</td>
                  <td>{e.to}</td>
                  <td>{e.calcTot}</td>
                  <td>{e.reason}</td>
                  <td>{e.pl}</td>
                  <td>
                    {" "}
                    {e.isPending ? (
                      <b>Pending</b>
                    ) : e.isApproved ? (
                      <b>Approved</b>
                    ) : (
                      <>Rejected</>
                    )}
                  </td>
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

export default Profile;
