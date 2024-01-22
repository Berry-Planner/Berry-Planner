// src/App.js
import React from 'react';
import ProductList from './components/ProductList';
import './App.css';


const personalProd = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is the description for Product 1.',
    image: 'logo.svg',
  },
  {
    id: 2,
    name: 'Product 1',
    description: 'This is the description for Product 1.',
    image: 'logo.svg',
  },
  {
    id: 3,
    name: 'Product 1',
    description: 'This is the description for Product 1.',
    image: 'logo.svg',
  },
  {
    id: 4,
    name: 'Product 1',
    description: 'This is the description for Product 1.',
    image: 'logo.svg',
  }
];

const schoolProd = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is the description for Product 1.',
    image: 'logo.svg',
  },
  {
    id: 2,
    name: 'Product 1',
    description: 'This is the description for Product 1.',
    image: 'logo.svg',
  },
  {
    id: 3,
    name: 'Product 1',
    description: 'This is the description for Product 1.',
    image: 'logo.svg',
  },
  {
    id: 4,
    name: 'Product 1',
    description: 'This is the description for Product 1.',
    image: 'logo.svg',
  },
  {
    id: 5,
    name: 'Product 1',
    description: 'This is the description for Product 1.',
    image: 'logo.svg',
  }
];

const calProd = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is the description for Product 1.',
    image: 'logo.svg',
  },
  {
    id: 2,
    name: 'Product 1',
    description: 'This is the description for Product 1.',
    image: 'logo.svg',
  },
  {
    id: 3,
    name: 'Product 1',
    description: 'This is the description for Product 1.',
    image: 'logo.svg',
  },
  {
    id: 4,
    name: 'Product 1',
    description: 'This is the description for Product 1.',
    image: 'logo.svg',
  }
];

function Header() {
  return (
    <header>
      <h1>Berry Planner</h1>
      <div className='overview'>
        <div className='jump-to'>
          <a href="#cal">Calendars  |</a>
        </div>
        <div className='jump-to'>
          <a href="#school">School Planners  |</a>
        </div>
        <div className='jump-to'>
          <a href="#per">Personal Planners</a>
        </div>
      </div>
    </header>
  );
}


function Calendars(){
  return(
    <section id = "cal">
      <h2>Calendars</h2>
      <ProductList products={calProd} />
    </section>
  )
}

function School(){
  return(
    <section id = "school">
      <h2>School Planners</h2>
      <ProductList products={schoolProd} />
    </section>
  )
}


function Personal(){
  return(
    <section id = "per">
      <h2>Personal Planners</h2>
      <ProductList products={personalProd} />
    </section>
  )
}

function ProductDisplay(){
  return(
    <section id = "display">
      <Calendars/>
      <School/>
      <Personal/>
      
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
