import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

function Rejected() {
  let [status, setStatus] = useState([]);
  let navigate = useNavigate();

  async function showStatus() {
    let response = await axios.get(
      `https://63c935f5904f040a9658bca5.mockapi.io/applyleave`
    );
    let newArr = response.data;
    if (response.status === 200) {
      setStatus(newArr.filter((e) => e.isRejected === true));
    }
  }
  useEffect(() => {
    showStatus();
  }, []);
  return (
    <div id="content-wrapper">
      <div className="row">
        <Table striped bordered hover>
          <thead>
            <tr>
     
              <th>Name</th>
              <th>Leavetype</th>
              <th>From Date</th>
              <th> To Date</th>
              <th> Total Days</th>
              <th>PL Available</th>
              <th> Reason</th>

              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {status.map((e) => {
              return (
                <tr key={e.id}>
               
                  <td>{e.username}</td>
                  <td>{e.leavetype}</td>
                  <td>{e.from}</td>
                  <td>{e.to}</td>
                  <td>{e.calcTot}</td>
                  <td>{e.pl}</td>
                  <td>{e.reason}</td>
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
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Rejected;
