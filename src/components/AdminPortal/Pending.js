import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";


function Pending() {
  let [status, setStatus] = useState([]);
  

  async function showStatus() {
    let response = await axios.get(
      `https://63c935f5904f040a9658bca5.mockapi.io/applyleave`
    );
    let newArr = response.data;
    if (response.status === 200) {
      setStatus(newArr.filter((e) => e.isPending === true));
    }
  }
  useEffect(() => {
    showStatus();
  }, []);

  let handleApprove = async (e) => {
    console.log(e.id, "0" + e.pl);

    if ("0" + e.pl === e.calcTot || "0" + e.pl > e.calcTot) {
      let isApproved = true;
      let isPending = false;
      let isRejected = false;
      let pl = "0" + e.pl - e.calcTot;
      let data = {
        isApproved,
        isPending,
        isRejected,
        pl,
      };
      let res = await axios.put(
        `https://63c935f5904f040a9658bca5.mockapi.io/applyleave/${e.id}`,
        data
      );
      if (res.status === 200) {
        showStatus();
      }
    } else {
      alert("Cannot be  approved as pl is lesser than leave applied");
    }
  };

  let handleReject = async (e) => {
    console.log(e.id);
    let isApproved = false;
    let isPending = false;
    let isRejected = true;

    let data = {
      isApproved,
      isPending,
      isRejected,
    };
    let res = await axios.put(
      `https://63c935f5904f040a9658bca5.mockapi.io/applyleave/${e.id}`,
      data
    );
    if (res.status === 200) {
      showStatus();
    }
  };

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
              <th>Action</th>
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
                  <td>
                    <Button
                      variant="success"
                      onClick={() => {
                        handleApprove(e);
                      }}
                    >
                      Approve
                    </Button>
                    &nbsp; &nbsp;
                    <Button
                      variant="danger"
                      onClick={() => {
                        handleReject(e);
                      }}
                    >
                      Reject
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

export default Pending;
