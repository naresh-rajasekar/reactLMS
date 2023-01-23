
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function AskLeave() {
  let navigate = useNavigate();
  let [leavetype, setLeavetype] = useState("");
  let [reason, setReason] = useState("");
  let [from, setFrom] = useState("");
  let [to, setTo] = useState("");
  let [pl, setPl] = useState(1);

  let username = sessionStorage.getItem("username");

  let getPl = Number(sessionStorage.getItem("pl"));
  const currentMonth = new Date().getMonth() + 1;

  async function showStatus() {
    let username = sessionStorage.getItem("username");

    let response = await axios.get(
      `https://63c935f5904f040a9658bca5.mockapi.io/applyleave`
    );

    let newArr = response.data;

    let userArr = newArr.filter((e) => e.username === username);
    let takepl = userArr.filter((e) => e.isApproved === true);
    let getPl;
 takepl.map((e) => {
      if (e.isApproved === true) {
        getPl = e.pl;
        updatePl(getPl);
       
      }
    });
  }
  showStatus();

  function updatePl() {
    if (currentMonth === 1 && getPl === 1) {
      setPl((pl = 1));
    } else if (currentMonth === 1 && getPl === 0) {
      setPl((pl = 0));
    } else if (currentMonth === 2 && getPl === 1) {
      setPl((pl = 2));
    } else if (currentMonth === 2 && getPl === 0) {
      setPl((pl = 1));
    } else if (currentMonth === 3 && getPl === 2) {
      setPl((pl = 3));
    } else if (currentMonth === 3 && getPl === 1) {
      setPl((pl = 2));
    } else if (currentMonth === 3 && getPl === 0) {
      setPl((pl = 1));
    } else if (currentMonth === 4 && getPl === 3) {
      setPl((pl = 4));
    } else if (currentMonth === 4 && getPl === 2) {
      setPl((pl = 3));
    } else if (currentMonth === 4 && getPl === 1) {
      setPl((pl = 2));
    } else if (currentMonth === 4 && getPl === 0) {
      setPl((pl = 1));
    } else if (currentMonth === 5 && getPl === 4) {
      setPl((pl = 5));
    } else if (currentMonth === 5 && getPl === 3) {
      setPl((pl = 4));
    } else if (currentMonth === 5 && getPl === 2) {
      setPl((pl = 3));
    } else if (currentMonth === 5 && getPl === 1) {
      setPl((pl = 2));
    } else if (currentMonth === 5 && getPl === 0) {
      setPl((pl = 1));
    } else if (currentMonth === 6 && getPl === 5) {
      setPl((pl = 6));
    } else if (currentMonth === 6 && getPl === 4) {
      setPl((pl = 5));
    } else if (currentMonth === 6 && getPl === 3) {
      setPl((pl = 4));
    } else if (currentMonth === 6 && getPl === 2) {
      setPl((pl = 3));
    } else if (currentMonth === 6 && getPl === 1) {
      setPl((pl = 2));
    } else if (currentMonth === 6 && getPl === 0) {
      setPl((pl = 1));
    } else if (currentMonth === 7 && getPl === 6) {
      setPl((pl = 7));
    } else if (currentMonth === 7 && getPl === 5) {
      setPl((pl = 6));
    } else if (currentMonth === 7 && getPl === 4) {
      setPl((pl = 5));
    } else if (currentMonth === 7 && getPl === 3) {
      setPl((pl = 4));
    } else if (currentMonth === 7 && getPl === 2) {
      setPl((pl = 3));
    } else if (currentMonth === 7 && getPl === 1) {
      setPl((pl = 2));
    } else if (currentMonth === 7 && getPl === 0) {
      setPl((pl = 1));
    } else if (currentMonth === 8 && getPl === 7) {
      setPl((pl = 8));
    } else if (currentMonth === 8 && getPl === 6) {
      setPl((pl = 7));
    } else if (currentMonth === 8 && getPl === 5) {
      setPl((pl = 6));
    } else if (currentMonth === 8 && getPl === 4) {
      setPl((pl = 5));
    } else if (currentMonth === 8 && getPl === 3) {
      setPl((pl = 4));
    } else if (currentMonth === 8 && getPl === 2) {
      setPl((pl = 3));
    } else if (currentMonth === 8 && getPl === 1) {
      setPl((pl = 2));
    } else if (currentMonth === 8 && getPl === 0) {
      setPl((pl = 1));
    } else if (currentMonth === 9 && getPl === 8) {
      setPl((pl = 9));
    } else if (currentMonth === 9 && getPl === 7) {
      setPl((pl = 8));
    } else if (currentMonth === 9 && getPl === 6) {
      setPl((pl = 7));
    } else if (currentMonth === 9 && getPl === 5) {
      setPl((pl = 6));
    } else if (currentMonth === 9 && getPl === 4) {
      setPl((pl = 5));
    } else if (currentMonth === 9 && getPl === 3) {
      setPl((pl = 4));
    } else if (currentMonth === 9 && getPl === 2) {
      setPl((pl = 3));
    } else if (currentMonth === 9 && getPl === 1) {
      setPl((pl = 2));
    } else if (currentMonth === 9 && getPl === 0) {
      setPl((pl = 1));
    } else if (currentMonth === 10 && getPl === 9) {
      setPl((pl = 10));
    } else if (currentMonth === 10 && getPl === 8) {
      setPl((pl = 9));
    } else if (currentMonth === 10 && getPl === 7) {
      setPl((pl = 8));
    } else if (currentMonth === 10 && getPl === 6) {
      setPl((pl = 7));
    } else if (currentMonth === 10 && getPl === 5) {
      setPl((pl = 6));
    } else if (currentMonth === 10 && getPl === 4) {
      setPl((pl = 5));
    } else if (currentMonth === 10 && getPl === 3) {
      setPl((pl = 4));
    } else if (currentMonth === 10 && getPl === 2) {
      setPl((pl = 3));
    } else if (currentMonth === 10 && getPl === 1) {
      setPl((pl = 2));
    } else if (currentMonth === 10 && getPl === 0) {
      setPl((pl = 1));
    } else if (currentMonth === 11 && getPl === 10) {
      setPl((pl = 11));
    } else if (currentMonth === 11 && getPl === 9) {
      setPl((pl = 10));
    } else if (currentMonth === 11 && getPl === 8) {
      setPl((pl = 9));
    } else if (currentMonth === 11 && getPl === 7) {
      setPl((pl = 8));
    } else if (currentMonth === 11 && getPl === 6) {
      setPl((pl = 7));
    } else if (currentMonth === 11 && getPl === 5) {
      setPl((pl = 6));
    } else if (currentMonth === 11 && getPl === 4) {
      setPl((pl = 5));
    } else if (currentMonth === 11 && getPl === 3) {
      setPl((pl = 4));
    } else if (currentMonth === 11 && getPl === 2) {
      setPl((pl = 3));
    } else if (currentMonth === 11 && getPl === 1) {
      setPl((pl = 2));
    } else if (currentMonth === 11 && getPl === 0) {
      setPl((pl = 1));
    } else if (currentMonth === 12 && getPl === 11) {
      setPl((pl = 12));
    } else if (currentMonth === 12 && getPl === 10) {
      setPl((pl = 11));
    } else if (currentMonth === 12 && getPl === 9) {
      setPl((pl = 10));
    } else if (currentMonth === 12 && getPl === 8) {
      setPl((pl = 9));
    } else if (currentMonth === 12 && getPl === 7) {
      setPl((pl = 8));
    } else if (currentMonth === 12 && getPl === 6) {
      setPl((pl = 7));
    } else if (currentMonth === 12 && getPl === 5) {
      setPl((pl = 6));
    } else if (currentMonth === 12 && getPl === 4) {
      setPl((pl = 5));
    } else if (currentMonth === 12 && getPl === 3) {
      setPl((pl = 4));
    } else if (currentMonth === 12 && getPl === 2) {
      setPl((pl = 3));
    } else if (currentMonth === 12 && getPl === 1) {
      setPl((pl = 2));
    } else if (currentMonth === 12 && getPl === 0) {
      setPl((pl = 1));
    } else {
      alert("Invalid Entry.Please try again or less chance for PL approval");
    }
  }

  function multiFunc(e) {
   
    if (leavetype === "casual") {
      console.log("test casual");
      let dtToday = new Date();
      let month = ("0" + (dtToday.getMonth() + 1)).slice(-2);
      
      let day = ("0" + dtToday.getDate()).slice(-2);
      let year = dtToday.getFullYear();
      let minDate = year + "-" + month + "-" + day;


      e.target.setAttribute("min", minDate);
     
    } else if (leavetype === "emergency") {
      console.log("test emergency");
      let dtToday = new Date();
      let SevenDaysAgo = new Date(new Date().setDate(dtToday.getDate() - 7));
      let month = ("0" + (SevenDaysAgo.getMonth() + 1)).slice(-2);
      let day = ("0" + SevenDaysAgo.getDate()).slice(-2);
      let year = SevenDaysAgo.getFullYear();
      let minDate = year + "-" + month + "-" + day;

      e.target.setAttribute("min", minDate);
      
     
    }
    
  }

//   const disabledDate = (e) => {
//     if    (new Date().getDay() === 0 || new Date().getDay() === 6){
//       return e.target.setAttribute("disable", new Date().getDay() === 0 || new Date().getDay() === 6)
//     }
    
// };

  let handleSubmit = async () => {
   
    if(new Date(to).getDay() ===0 || new Date(to).getDay() ===0 || new Date(from).getDay=== 0 || new Date(from).getDay === 6){
      alert('PL cannot be applied on weekends')
    }else{
      let isPending = true;
      let isApproved = false;
      let isRejected = false;
      let calcTot =
        [
          Number(
            (new Date(to).getTime() - new Date(from).getTime()) / (3600000 * 24)
          ),
        ] + 1;
  
      let data = {
        leavetype,
        reason,
        from,
        to,
        calcTot,
        pl,
        username,
        isPending,
        isApproved,
        isRejected,
      };
      let res = await axios.post(
        `https://63c935f5904f040a9658bca5.mockapi.io/applyleave`,
        data
      );
      if (res.status === 201) {
        navigate("/profile");
      }

    }
   
  };

  return (
    <div id="content-wrapper">
      <h1>AskLeave</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Leave Type</Form.Label>
          <Form.Select
            defaultValue={"select"}
            onChange={(e) => setLeavetype(e.target.value)}
          >
            <option value={"select"} disabled>
              Select type
            </option>
            <option value={"casual"}>Casual</option>
            <option value={"emergency"}>Emergency</option>
          </Form.Select>
        </Form.Group>
        {/* <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" value={ename} onChange={(e)=>{setEname(e.target.value)}} />{}
    </Form.Group> */}

        <Form.Group className="mb-3">
          <Form.Label>Reason</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the reason"
            value={reason}
            onChange={(e) => {
              setReason(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>From</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter Your Name"
            value={from}
        
            
            onChange={(e) => {
              setFrom(e.target.value);
            }}
            onClick={(e) => multiFunc(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>To</Form.Label>
          <Form.Control
            type="date"
           
            placeholder="Enter Your Name"
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
            }}
            onClick={(e) => multiFunc(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>PL Available</Form.Label>
          <Form.Control
            type="text"
            placeholder="Number of PL available"
            value={pl}
            onChange={(e) => {
              setPl(e.target.value);
            }}
            disabled
          />
        </Form.Group>

        <Button variant="primary" onClick={() => handleSubmit()}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AskLeave;
