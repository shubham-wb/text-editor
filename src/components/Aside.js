import React from "react";
import SearchBar from "./SearchBar";
import add from "../assets/images/add.svg";
import "../assets/css/Aside.css";
function Aside() {
  return (
    <aside>
      <div className='account'>
        <div className='account-dp'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/7795/7795326.png'
            alt=''
          ></img>
        </div>
        <div className='account-details'>
          <div className='acc-name'>John Doe</div>
          <div className='acc-email'>Johnny@email.com</div>
        </div>
      </div>
      <div className='search-bar'>
        <SearchBar />
      </div>
      <section className='bookmarks'>
        <h2>bookmarks</h2>
        <ul>
          <li>
            <img
              src='https://cdn-icons-png.flaticon.com/512/1250/1250680.png'
              alt=''
            />
            The Obstacle Is The Way
          </li>
          <li>
            <img
              src='https://cdn-icons-png.flaticon.com/512/1250/1250680.png'
              alt=''
            />
            Carrot Cake
          </li>
        </ul>
      </section>
      <section className='notebooks'>
        <h2>notebooks</h2>
        <ul className='notebooks'>
          <li>
            <img
              src='https://cdn-icons-png.flaticon.com/512/861/861300.png'
              alt=''
            ></img>
            <div>Bookshelf</div>
          </li>
          <li>
            <img
              src='https://cdn-icons-png.flaticon.com/512/861/861300.png'
              alt=''
            ></img>
            <div>Journal</div>
          </li>
          <li>
            <img
              src='https://cdn-icons-png.flaticon.com/512/861/861300.png'
              alt=''
            ></img>
            <div>Health</div>
          </li>
          <li>
            <img
              src='https://cdn-icons-png.flaticon.com/512/861/861300.png'
              alt=''
            ></img>
            <div>Ideas</div>
          </li>
          <li>
            <img
              src='https://cdn-icons-png.flaticon.com/512/861/861300.png'
              alt=''
            ></img>
            <div>Travelling</div>
          </li>
        </ul>
      </section>
      <section className='trash'>
        <img
          src='https://cdn-icons-png.flaticon.com/512/3096/3096673.png'
          alt=''
        ></img>
        <div>Trash</div>
      </section>
      <hr />
      <section className='add-new'>
        <img src={add} alt=''></img>
        <div>Add Note or Notebook</div>
      </section>
    </aside>
  );
}

export default Aside;
