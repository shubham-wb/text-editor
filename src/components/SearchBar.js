import React from "react";
import { useState } from "react";
import searchIco from "../assets/images/search.svg";
import close from "../assets/images/close.svg";

function SearchBar() {
  let [value, setValue] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setValue((value = event.target.value));
  };
  return (
    <div className='search-bar' style={Styles.searchBar}>
      <input
        type='text'
        value={value}
        onChange={handleChange}
        style={Styles.input}
        placeholder='Search'
      ></input>
      {value !== "" ? (
        <img
          style={Styles.svg}
          src={close}
          onClick={() => {
            setValue((value = ""));
          }}
          alt=''
        ></img>
      ) : (
        <img style={Styles.svg} src={searchIco} alt=''></img>
      )}
    </div>
  );
}

const Styles = {
  searchBar: {
    justifyContent: "center",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "transparent",
    borderBottom: "2px solid gray",

    marginTop: "5px",
    alignItems: "flex-end",
  },

  input: {
    backgroundColor: "transparent",
    height: "70%",
    width: "90%",
    fontSize: "1rem",
    borderColor: "transparent",
  },

  svg: {
    cursor: "pointer",
    height: "72%",
    width: "10%",
  },
};

export default SearchBar;
