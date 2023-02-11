import React, { useState } from "react";
import "./App.css";

const UserInput= () => {
    const[num1, setnum1] = useState("");
    const[num2, setnum2] = useState("");
    const[result,setresult] = useState("");
    const[ans, setans] = useState("");
    const[error, seterrror] = useState("");
    const[success, setsuccess] = useState("");


    const calculate = (action) =>{
        if(num1 !== "" && num2 !== ""){
          setresult("Result = ");
            if(action === "+") setans(Number(num1) + Number(num2));
            else if(action === "-") setans(Number(num1) - Number(num2));
            else if(action === "*") setans(Number(num1) * Number(num2));
            else if(action === "/") setans(Number(num1) / Number(num2));
            seterrror("");
            setsuccess("Success : Your result is shown above!");
        }
        else if(num1 === "" && num2 !== "") {
          setans("");
          setresult("");
          setsuccess("");
          seterrror("Error : Num1 cannot be empty")
        }
        else if(num1 !== "" && num2 === "") {
          setans("");
          setresult("");
          setsuccess("");
          seterrror("Error : Num2 cannot be empty")
        }
        else if(num1 === "" && num2 === "") {
          setans("");
          setresult("");
          setsuccess("");
          seterrror("Error : Input cannot be empty")
        }
    }

  return (
    <div className="container">
      <div>
        <input type="text" placeholder="Num 1" name="num1" value={num1} onChange={(event) => {
          setnum1(event.target.value);
        }} /> <br />
        <input type="text" placeholder="Num 2" name="num2" value={num2} onChange={(event) => {
          setnum2(event.target.value);
        }} />
      </div>
      <button onClick={() =>{calculate ("+")}}>+</button>
      <button onClick={() =>{calculate ("-")}}>-</button>
      <button onClick={() =>{calculate ("*")}}>*</button>
      <button onClick={() =>{calculate ("/")}}>/</button>
      <div className="resultBox">{result}{ans}
        <div className="error">{error}</div>
        <div className="success">{success}</div>
      </div>     
    </div>
  );
}

export default UserInput;
