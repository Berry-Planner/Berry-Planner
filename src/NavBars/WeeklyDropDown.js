import React from 'react';
import '../components/DropDownMenu.css';

const WeeklyDropDown = () =>{
  return (
    <div class="navbar">
      <div class="dropdown">
        <button class="dropbtn">Weekly Planners
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#weekly-planner">Weekly Planner</a>
          <a href="#weekly-study-planner">Weekly Study Planner</a>
        </div>
      </div>
    </div>
  );
};

export default WeeklyDropDown;