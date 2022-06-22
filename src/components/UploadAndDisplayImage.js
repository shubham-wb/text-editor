import React, { useState, createRef } from "react";
import "../assets/css/uploadImage.css"; // css file

//functional component to add image
const UploadAndDisplayImage = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);
  let imageInput = createRef();

  //handle click of add image button ---> clicking on input element
  const handleClick = () => {
    imageInput.current.click();
  };

  return (
    <div className='upload-img'>
      {selectedImage ? (
        <div>
          <img
            alt='not fount'
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button className='btn-remove' onClick={() => setSelectedImage(null)}>
            Remove
          </button>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 style={{ fontWeight: "400" }}>Click on Upload to add an Image</h3>
          <div className='button' id='btn' onClick={handleClick}>
            <div id='circle'></div>
            <h5>Upload Image</h5>
          </div>
          <input
            type='file'
            name='myImage'
            ref={imageInput}
            onChange={(event) => {
              setSelectedImage(event.target.files[0]);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default UploadAndDisplayImage;
