// src/App.js
import React from 'react';
import AssignmentTracker from './sections/AssignmentTrackers/Planner';
import DailyPlanner from './sections/DailyPlanners/Planner';
import YearlyCalendar from './sections/YearlyCalendar/Planner';
import WeeklyPlanner from './sections/WeeklyPlanners/Planner';
import WeeklyStudyPlanner from './sections/WeeklyStudyPlanners/Planner';
import DailyStudyPlanners from './sections/DailyStudyPlanners/Planner';
import PersonalToDo from './sections/PersonalToDo/Planner';
import EveryDayPlanner from './sections/365DayPlanner/Planner'
import SchoolToDo from './sections/SchoolToDo/Planner';
import './App.css';
import HabitTracker from './sections/HabitTracker/Planner';
import NavBar from './components/NavBar';


const weeklyLinks = {
  title: "Weekly",
  link1: "#weekly-study-planner",
  link2: "#weekly-planner",
  option1: "Planner",
  option2: "Study Tracker"
}

function Header() {
  return (
    <header>
      <h1>Berry Planner</h1>
      <NavBar week={weeklyLinks} />
      <NavBar weekly = {weeklyLinks}/>
    </header>
  );
}


function ProductDisplay(){
  return(
    <section id = "display">
      <PersonalToDo/>
      <SchoolToDo/>
      <HabitTracker/>
      <DailyStudyPlanners/>
      <DailyPlanner/>
      <AssignmentTracker/>
      <WeeklyPlanner/>
      <WeeklyStudyPlanner/> 
      <YearlyCalendar/>
      <EveryDayPlanner/>
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
