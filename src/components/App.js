import React, { useState } from "react";
import Aside from "./Aside";
import Editor from "./Editor";
import "../assets/css/App.css";
import Add from "./Add";
import UploadAndDisplayImage from "./UploadAndDisplayImage";
const App = () => {
  let [elements, setElements] = useState([]);

  function handleAdd(value) {
    if (value === 0) {
      setElements((prev) => [...prev, <UploadAndDisplayImage />]);
    } else {
      setElements((prev) => [
        ...prev,
        <Editor
          placeholder={"Write something..."}
          data={{
            Editor: {
              paddingBottom: "40px",
              paddingLeft: "10px",
              borderRadius: "10px",
              border: "2px solid whitesmoke",
              height: "max-content",
              width: "80%",
              marginTop: "20px",
            },
          }}
        />,
      ]);
    }
  }

  return (
    <div className='App'>
      <Add data={handleAdd} />
      <Aside />
      <div className='main'>
        <div className='main-heading'>Write Story</div>
        <hr></hr>
        <Editor
          placeholder={"Write something..."}
          data={{
            Editor: {
              paddingTop: "20px",
              paddingLeft: "20px",
              borderRadius: "26px",
              boxShadow: "#fbddc1 -2px 3px 19px -8px",
              border: "1px solid whitesmoke",
              height: "80px",
              width: "80%",
              marginTop: "20px",
            },
          }}
        />
        {elements.length !== 0 ? elements.map((elem) => elem) : null}
      </div>
    </div>
  );
};

export default App;
