import React from 'react';
import '../components/DropDownMenu.css';

const DailyDropDown = () =>{
  return (
    <div class="navbar">
      <div class="dropdown">
        <button class="dropbtn">Daily Planners
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#daily-planners">Daily Planner</a>
          <a href="#daily-study-planners">Daily Study Planner</a>
        </div>
      </div>
    </div>
  );
};

export default DailyDropDown;