import ProductList from '../../components/ProductList';
import Berry from "./images/Berry.png";
import Neutral from "./images/Neutral.png";
import Purple from "./images/Purple.png";
import Green from "./images/Green.png";
import Blue from "./images/Blue.png";
import BerryCanva from "./pdfs/Berry Yearly Calendar.pdf";
import NeutralCanva from "./pdfs/Neutral Yearly Calendar.pdf";
import PurpleCanva from "./pdfs/Purple Yearly Calendar.pdf";
import GreenCanva from "./pdfs/Green Yearly Calendar.pdf";
import BlueCanva from "./pdfs/Blue Yearly Calendar.pdf";

const planners = [
  {
    id: 1,
    name: 'Berry Yearly Calendar',
    description: 'This is the description for Product 1.',
    image: Berry,
    canva: "youtube.com",
    download: BerryCanva,
  },
  {
    id: 2,
    name: 'Neutral Yearly Calendar',
    description: 'This is the description for Product 1.',
    image: Neutral,
    canva: "youtube.com",
    download: NeutralCanva,
  },
  {
    id: 3,
    name: 'Purple Yearly Calendar',
    description: 'This is the description for Product 1.',
    image: Purple,
    canva: "youtube.com",
    download: PurpleCanva,
  },
  {
    id: 4,
    name: 'Green Yearly Calendar',
    description: 'This is the description for Product 1.',
    image: Green,
    canva: "youtube.com",
    download: GreenCanva,
  },
  {
    id: 5,
    name: 'Blue Yearly Calendar',
    description: 'This is the description for Product 1.',
    image: Blue,
    canva: "youtube.com",
    download: BlueCanva,
  }
];

  function YearlyCalendar(){
    return(
      <section id = "yearly-calendar">
        <h2>Yearly Calendars</h2>
        <ProductList products={planners} />
      </section>
    )
  }
  export default WeeklyStudyPlanner;
