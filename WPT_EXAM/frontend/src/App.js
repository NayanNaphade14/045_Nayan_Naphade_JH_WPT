import { useState } from "react";
export default function App() {
  return (
    <div>
      <Header />
      <InputData />
    </div>
  );

}


function Header() {
  const [studentname, change] = useState("By-(Nayan Naphade JH)(045)");
  const [appname, change1] = useState("MyChatApp");

  return (
    <div className="container-fluid">
      <div className="row bg-secondary align-items-center">
        <div className="fw-bold fs-2 mb-2 mt-2 text-light col-3">{appname}</div>
        <div className="col text-light fs-small">{studentname}</div>
      </div>

    </div>
  );
}

function InputData() {
  const [msg, changemsg] = useState("");
  const checkmsg = (e) => {
    const newmsg = e.target.value;
    changemsg(newmsg);
  };

  const [list, setmsg] = useState([]);
  const sendmsg = () => {
    const newdata = msg;
    const btmsg = [newdata, ...list];
    setmsg(list);
    changemsg("");
  };

  return (
    <>
    <div className="container-fluid row justify-content-center">
      <div>
        <input className="col w-75 mt-5 h-35 fs-3 btn-btnputline-primary" type="text" name="" id="" value={msg} onChange={checkmsg}
          placeholder="lets check here" />
        <input className="ms-2 w-20 h-35" type="button" value="Send" onClick={sendmsg} />
      </div>

      </div>
      <div className="row r31 justify-content-start mb-3 " id="i1">
            <div></div>
        </div>
         <div className="row r32 justify-content-start mb-3 " id="i1">
             <div className=''></div>
         </div>
    
    </>

  )



}










