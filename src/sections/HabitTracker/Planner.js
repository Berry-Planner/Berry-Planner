import ProductList from '../../components/ProductList';
import Berry from "./images/Berry.png";
import Neutral from "./images/Neutral.png";
import Purple from "./images/Purple.png";
import Green from "./images/Green.png";
import Blue from "./images/Blue.png";
import BerryCanva from "./pdfs/Berry Habit.pdf";
import NeutralCanva from "./pdfs/Neutral Habit.pdf";
import PurpleCanva from "./pdfs/Purple Habit.pdf";
import GreenCanva from "./pdfs/Green Habit.pdf";
import BlueCanva from "./pdfs/Blue Habit.pdf";

const planners = [
    {
      id: 1,
      name: 'Berry Habit Tracker',
      description: 'This is the description for Product 1.',
      image: Berry,
      canva: "https://www.canva.com/design/DAF--0qou9Q/kjRIpA4uB-FJf-h0zn25gQ/view?utm_content=DAF--0qou9Q&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: BerryCanva,
    },
    {
      id: 2,
      name: 'Neutral Habit Tracker',
      description: 'This is the description for Product 1.',
      image: Neutral,
      canva: "https://www.canva.com/design/DAF--6bcXiA/YIUFvU7j5xU4bp6zPZUNFw/view?utm_content=DAF--6bcXiA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: NeutralCanva,
    },
    {
      id: 3,
      name: 'Purple Habit Tracker Planner',
      description: 'This is the description for Product 1.',
      image: Purple,
      canva:"https://www.canva.com/design/DAF-_dJyOw8/ozihJILqmcNTm1EilWkSmw/view?utm_content=DAF-_dJyOw8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: PurpleCanva,
    },
    {
      id: 4,
      name: 'Green Habit Tracker',
      description: 'This is the description for Product 1.',
      image: Green,
      canva: "https://www.canva.com/design/DAF-_X9yJwQ/F6KxDcwxDN-4euTDc-PmOQ/view?utm_content=DAF-_X9yJwQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: GreenCanva,
    },
    {
      id: 5,
      name: 'Blue Habit Tracker',
      description: 'This is the description for Product 1.',
      image: Blue,
      canva: "https://www.canva.com/design/DAGAMJABr7s/QDrGJRvRhwL6NnxkBvHcIA/view?utm_content=DAGAMJABr7s&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: BlueCanva,
    }
  ];

  function HabitTracker(){
    return(
      <section id = "Habit Tracker">
        <h2>Habit Tracker</h2>
        <ProductList products={planners} />
      </section>
    )
  }
  
  export default HabitTracker;
