import React from 'react';
import '../components/DropDownMenu.css';

const ToDoDropDown = () =>{
  return (
    <div class="navbar">
      <div class="dropdown">
        <button class="dropbtn">To-Dos
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#School-to-do">School To Do</a>
          <a href="#personal-to-do">Personal To Do</a>
        </div>
      </div>
    </div>
  );
};

export default ToDoDropDown;