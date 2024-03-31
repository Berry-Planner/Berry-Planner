import React from 'react';
import '../components/DropDownMenu.css';

const YearlyDropDown = () =>{
  return (
    <div class="navbar">
      <div class="dropdown">
        <button class="dropbtn">Yearly Planners
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#yearly-calendar">Yearly Calendar</a>
          <a href="#365-Day-Planner">365 Day Planner</a>
        </div>
      </div>
    </div>
  );
};

export default YearlyDropDown;