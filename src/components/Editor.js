import { React, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css"; //used bubble css for bubble toolbar

//Quill editor functiona; Component
export function Editor(props) {
  let [quillState, setQuillState] = useState("");
  const handleChange = (html) => {
    setQuillState(html);
  };

  return (
    <div>
      <ReactQuill
        style={props.data.Editor}
        theme='bubble'
        onChange={handleChange}
        value={quillState}
        modules={Editor.modules}
        formats={Editor.formats}
        bounds={".app"}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Editor;

Editor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],

    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];
