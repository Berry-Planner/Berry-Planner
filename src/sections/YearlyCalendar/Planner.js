import ProductList from '../../components/ProductList';
import Berry from "./images/Berry.png";
import Neutral from "./images/Neutral.png";
import Purple from "./images/Purple.png";
import Green from "./images/Green.png";
import Blue from "./images/Blue.png";
import BerryCanva from "./pdfs/Berry Weekly Study.pdf";
import NeutralCanva from "./pdfs/Neutral Weekly Study.pdf";
import PurpleCanva from "./pdfs/Purple Weekly Study.pdf";
import GreenCanva from "./pdfs/Green Weekly Study.pdf";
import BlueCanva from "./pdfs/Blue Weekly Study.pdf";

const planners = [
  {
    id: 1,
    name: 'Berry Weekly Study Planner',
    description: 'This is the description for Product 1.',
    image: Berry,
    canva: "youtube.com",
    download: BerryCanva,
  },
  {
    id: 2,
    name: 'Neutral Weekly Study Planner',
    description: 'This is the description for Product 1.',
    image: Neutral,
    canva: "youtube.com",
    download: NeutralCanva,
  },
  {
    id: 3,
    name: 'Purple Weekly Study Planner',
    description: 'This is the description for Product 1.',
    image: Purple,
    canva: "youtube.com",
    download: PurpleCanva,
  },
  {
    id: 4,
    name: 'Green Weekly Study Planner',
    description: 'This is the description for Product 1.',
    image: Green,
    canva: "youtube.com",
    download: GreenCanva,
  },
  {
    id: 5,
    name: 'Blue Weekly Study Planner',
    description: 'This is the description for Product 1.',
    image: Blue,
    canva: "youtube.com",
    download: BlueCanva,
  }
];

  function MonthlyCalendars(){
    return(
      <section id = "monthly-calendars">
        <h2>Monthly Calendars</h2>
        <ProductList products={planners} />
      </section>
    )
  }
  export default MonthlyCalendars;
