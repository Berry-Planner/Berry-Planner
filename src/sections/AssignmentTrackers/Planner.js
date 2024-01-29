import ProductList from '../../components/ProductList';
import Berry from "./Berry.png";
import Neutral from "./Neutral.png";
import Purple from "./Purple.png";
import Green from "./Green .png";
import Blue from "./Blue.png";

const planners = [
    {
      id: 1,
      name: 'Berry Daily Assignment Tracker',
      description: 'This is the description for Product 1.',
      image: Berry,
    },
    {
      id: 2,
      name: 'Neutral Daily Assignment Tracker',
      description: 'This is the description for Product 1.',
      image: Neutral,
    },
    {
      id: 3,
      name: 'Purple Daily Assignment Tracker',
      description: 'This is the description for Product 1.',
      image: Purple,
    },
    {
      id: 4,
      name: 'Green Daily Assignment Tracker',
      description: 'This is the description for Product 1.',
      image: Green,
    },
    {
      id: 5,
      name: 'Blue Daily Assignment Tracker',
      description: 'This is the description for Product 1.',
      image: Blue,
    }
  ];

  function AssignemntTrackers(){
    return(
      <section id = "assignment-trackers">
        <h2>Assignment Trackers</h2>
        <ProductList products={planners} />
      </section>
    )
  }
  
  export default AssignemntTrackers;
