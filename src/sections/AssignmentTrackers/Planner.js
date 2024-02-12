import ProductList from '../../components/ProductList';
import Berry from "./images/Berry.png";
import Neutral from "./images/Neutral.png";
import Purple from "./images/Purple.png";
import Green from "./images/Green .png";
import Blue from "./images/Blue.png";
import BerryCanva from "./pdfs/Berry Assignment Tracker.pdf";
import NeutralCanva from "./pdfs/Neutral Assignment Tracker.pdf";
import PurpleCanva from "./pdfs/Purple Assignment Tracker.pdf";
import GreenCanva from "./pdfs/Green Assignment Tracker.pdf";
import BlueCanva from "./pdfs/Blue Assignment Tracker.pdf";

const planners = [
    {
      id: 1,
      name: 'Berry Assignment Tracker',
      description: 'This is the description for Product 1.',
      image: Berry,
      canva: "https://www.canva.com/design/DAF6oEafCrE/RveY-iAuxj9kFwt0iQTlfA/view?utm_content=DAF6oEafCrE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: BerryCanva,
    },
    {
      id: 2,
      name: 'Neutral Assignment Tracker',
      description: 'This is the description for Product 1.',
      image: Neutral,
      canva: "https://www.canva.com/design/DAF1YLJOfYc/ubZTPdqEEnjwLoNf227dZQ/view?utm_content=DAF1YLJOfYc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: NeutralCanva,
    },
    {
      id: 3,
      name: 'Purple Assignment Tracker',
      description: 'This is the description for Product 1.',
      image: Purple,
      canva: "https://www.canva.com/design/DAF6oGx0FSs/AOO94VKQsKMdtMVI1yLQHA/view?utm_content=DAF6oGx0FSs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: PurpleCanva,
    },
    {
      id: 4,
      name: 'Green Assignment Tracker',
      description: 'This is the description for Product 1.',
      image: Green,
      canva: "https://www.canva.com/design/DAF6oHPDEY8/WANhDwvRjypRO3rhbDByqQ/view?utm_content=DAF6oHPDEY8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: GreenCanva,
    },
    {
      id: 5,
      name: 'Blue Assignment Tracker',
      description: 'This is the description for Product 1.',
      image: Blue,
      canva: "https://www.canva.com/design/DAF6Wed3dm8/P91L4W343vW5dbcGjmDIWA/view?utm_content=DAF6Wed3dm8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: BlueCanva,
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
