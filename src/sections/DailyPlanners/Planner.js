import ProductList from '../../components/ProductList';
import Berry from "./images/Berry.png";
import Neutral from "./images/Neutral.png";
import Purple from "./images/Purple.png";
import Green from "./images/Green.png";
import Blue from "./images/Blue.png";
import BerryCanva from "./pdfs/Berry Daily.pdf";
import NeutralCanva from "./pdfs/Neutral Daily.pdf";
import PurpleCanva from "./pdfs/Purple Daily.pdf";
import GreenCanva from "./pdfs/Green Daily.pdf";
import BlueCanva from "./pdfs/Blue Daily.pdf";

const planners = [
    {
      id: 1,
      name: 'Berry Daily Planner',
      description: 'This is the description for Product 1.',
      image: Berry,
      canva: "youtube.com",
      download: BerryCanva,
    },
    {
      id: 2,
      name: 'Neutral Daily Planner',
      description: 'This is the description for Product 1.',
      image: Neutral,
      canva: "youtube.com",
      download: NeutralCanva,
    },
    {
      id: 3,
      name: 'Purple Daily Planner',
      description: 'This is the description for Product 1.',
      image: Purple,
      canva: "youtube.com",
      download: PurpleCanva,
    },
    {
      id: 4,
      name: 'Green Daily Planner',
      description: 'This is the description for Product 1.',
      image: Green,
      canva: "youtube.com",
      download: GreenCanva,
    },
    {
      id: 5,
      name: 'Blue Daily Planner',
      description: 'This is the description for Product 1.',
      image: Blue,
      canva: "youtube.com",
      download: BlueCanva,
    }
  ];

  function AssignemntTrackers(){
    return(
      <section id = "assignment-trackers">
        <h2>Daily Planners</h2>
        <ProductList products={planners} />
      </section>
    )
  }
  
  export default AssignemntTrackers;
