import React, { useState } from "react";
import add from "../assets/images/plus.svg";
import image from "../assets/images/image.svg";
import write from "../assets/images/write.svg";

function Add(props) {
  let [showBtn, setShowBtn] = useState(false);
  return (
    <>
      <div className='add-btn'>
        {showBtn ? (
          <div className='choose-btn'>
            <img
              src={image}
              alt='add'
              data-toggle='tooltip'
              data-placement='left'
              title='Add Image'
              onClick={() => {
                props.data(0);
              }}
            />
            <img
              src={write}
              alt='add-text'
              data-toggle='tooltip'
              data-placement='left'
              title='Add Text'
              onClick={() => {
                props.data(1);
              }}
            />
          </div>
        ) : null}
        <div
          className='add-btn-img'
          onClick={() => {
            setShowBtn((prev) => !prev);
          }}
        >
          <img src={add} alt='plus'></img>
        </div>
      </div>
    </>
  );
}

export default Add;
