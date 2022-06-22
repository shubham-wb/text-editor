import React, { useState } from "react";
import add from "../assets/images/plus.svg";
import image from "../assets/images/image.svg";
import write from "../assets/images/write.svg";

//function to add components Image/text
function Add(props) {
  let [showBtn, setShowBtn] = useState(false);

  //function to rotate add Button (UI Part)
  function addTransition() {
    if (showBtn) {
      return `rotateZ(45deg)`;
    } else {
      return `rotateZ(180deg)`;
    }
  }

  const styles = {
    add: {
      transform: addTransition(),
    },
  };
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
        <div className='add-btn-img'>
          <img
            src={add}
            alt='plus'
            id='pls-btn'
            style={styles.add}
            onClick={() => {
              setShowBtn((prev) => !prev);
            }}
          ></img>
        </div>
      </div>
    </>
  );
}

export default Add;
