import React from 'react';
import '../components/DropDownMenu.css';

const TrackerDropDown = () =>{
  return (
    <div class="navbar">
      <div class="dropdown">
        <button class="dropbtn">Trackers
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#habit-tracker">Habit Tracker</a>
          <a href="#assignment-trackers">Assignment Tracker</a>
          <a href="#monthly-goal-tracker">Monthly Goal Tracker</a>
        </div>
      </div>
    </div>
  );
};

export default TrackerDropDown;