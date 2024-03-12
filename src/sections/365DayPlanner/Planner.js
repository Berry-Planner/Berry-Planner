import ProductList from '../../components/ProductList';
import Berry from "./images/Berry.gif";
import Neutral from "./images/Neutral.gif";
import Purple from "./images/Purple.gif";
import Green from "./images/Green.gif";
import Blue from "./images/Blue.gif";
import BerryCanva from "./pdfs/Berry 365.pdf";
import NeutralCanva from "./pdfs/Neutral 365.pdf";
import PurpleCanva from "./pdfs/Purple 365.pdf";
import GreenCanva from "./pdfs/Green 365.pdf";
import BlueCanva from "./pdfs/Blue 365.pdf";

const planners = [
    {
      id: 1,
      name: 'Berry 365 Day Planner',
      description: 'This is the description for Product 1.',
      image: Berry,
      canva: "https://www.canva.com/design/DAF-StU6-aE/BKlT_JDOO09G78qYAhyM_A/view?utm_content=DAF-StU6-aE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: BerryCanva,
    },
    {
      id: 2,
      name: 'Neutral 365 Day Planner',
      description: 'This is the description for Product 1.',
      image: Neutral,
      canva: "https://www.canva.com/design/DAF-SbmNw9k/H3RXBKnYbYny4KN81Mbs1g/view?utm_content=DAF-SbmNw9k&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: NeutralCanva,
    },
    {
      id: 3,
      name: 'Purple 365 Day Planner',
      description: 'This is the description for Product 1.',
      image: Purple,
      canva: "https://www.canva.com/design/DAF-SUh0wRE/mDkcKSk_CxxLDoEmE5hbQA/view?utm_content=DAF-SUh0wRE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: PurpleCanva,
    },
    {
      id: 4,
      name: 'Green 365 Day Planner',
      description: 'This is the description for Product 1.',
      image: Green,
      canva: "https://www.canva.com/design/DAF-SgPoIm8/Op0lZY0DmWO_23xh2kZRcw/view?utm_content=DAF-SgPoIm8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: GreenCanva,
    },
    {
      id: 5,
      name: 'Blue 365 Day Planner',
      description: 'This is the description for Product 1.',
      image: Blue,
      canva: "https://www.canva.com/design/DAF-SWVvP-k/meyH2ug76UkbfPCrt3hTnQ/view?utm_content=DAF-SWVvP-k&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: BlueCanva,
    }
  ];

  function EveryDayPlanner(){
    return(
      <section id = "365-Day-Planner">
        <h2>365 Day Planners</h2>
        <ProductList products={planners} />
      </section>
    )
  }
  
  export default EveryDayPlanner;
