// src/App.js
import React from 'react';
import AssignmentTracker from './sections/AssignmentTrackers/Planner';
import DailyPlanner from './sections/DailyPlanners/Planner';
import YearlyCalendar from './sections/YearlyCalendar/Planner';
import WeeklyPlanner from './sections/WeeklyPlanners/Planner';
import WeeklyStudyPlanner from './sections/WeeklyStudyPlanners/Planner';
import DailyStudyPlanners from './sections/DailyStudyPlanners/Planner';
import './App.css';



function Header() {
  return (
    <header>
      <h1>Berry Planner</h1>
      {/* <div className='overview'>
        <div className='jump-to'>
          <a href="#monthly-calendar">Monthly Calendars |  </a>
          <a href="#weekly-planner">Weekly Planners  |  </a>
          <a href="#weekly-study-planner">Weekly Study Planners  |  </a>
          <a href="#daily-planner">Daily Planners  |  </a>
          <a href="#assignment-tracker">Assignment Trackers</a>
        </div>
      </div> */}
    </header>
  );
}


function ProductDisplay(){
  return(
    <section id = "display">
      <DailyStudyPlanners/>
      <WeeklyPlanner/>
      <WeeklyStudyPlanner/> 
      <AssignmentTracker/>
      <DailyPlanner/>
      <YearlyCalendar/>
    </section>
  )
}



function User(){
  return(
    <section id = "user">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZNlrSbjaHEvF8iDyZanOH7wxUPaSvLWKKd5_2rQko4LoNGw/viewform">Planner Survey</a>
      <br/>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZNlrSbjaHEvF8iDyZanOH7wxUPaSvLWKKd5_2rQko4LoNGw/viewform">Experiance Survey</a>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <User/>
      <p>&copy; 2023 Berry Planner. All rights reserved.</p>
    </footer>
  );
}



function App() {
  return (
    <div>
      <Header />
      <ProductDisplay/>
      <Footer/>
    </div>
  );
}

export default App;
