import ProductList from '../../components/ProductList';
import Berry from "./images/Berry.png";
import Neutral from "./images/Neutral.png";
import Purple from "./images/Purple.png";
import Green from "./images/Green.png";
import Blue from "./images/Blue.png";
import BerryCanva from "./pdfs/Berry Monthly Goal.pdf";
import NeutralCanva from "./pdfs/Neutral Monthly Goal.pdf";
import PurpleCanva from "./pdfs/Purple Monthly Goal.pdf";
import GreenCanva from "./pdfs/Green Monthly Goal.pdf";
import BlueCanva from "./pdfs/Blue Monthly Goal.pdf";

const planners = [
    {
      id: 1,
      name: 'Berry Monthly Goal Tracker',
      description: 'This is the description for Product 1.',
      image: Berry,
      canva: "https://www.canva.com/design/DAGAuDz_weU/u2lCSEWWFnDrGQr7rmnTUQ/view?utm_content=DAGAuDz_weU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: BerryCanva,
    },
    {
      id: 2,
      name: 'Neutral Monthly Goal Tracker',
      description: 'This is the description for Product 1.',
      image: Neutral,
      canva: "https://www.canva.com/design/DAGAuMx8ApU/qZPmohNRiJCpmWkqJ_aOnw/view?utm_content=DAGAuMx8ApU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: NeutralCanva,
    },
    {
      id: 3,
      name: 'Purple Monthly Goal Tracker',
      description: 'This is the description for Product 1.',
      image: Purple,
      canva:"https://www.canva.com/design/DAGAuBZLQvE/xMUItV57ctcsXJXVgbILqA/view?utm_content=DAGAuBZLQvE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: PurpleCanva,
    },
    {
      id: 4,
      name: 'Green Monthly Goal Tracker',
      description: 'This is the description for Product 1.',
      image: Green,
      canva: "https://www.canva.com/design/DAGAuLPDPUw/EeIF-wh94D0naay7D-02UQ/view?utm_content=DAGAuLPDPUw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: GreenCanva,
    },
    {
      id: 5,
      name: 'Blue Monthly Goal Tracker',
      description: 'This is the description for Product 1.',
      image: Blue,
      canva: "https://www.canva.com/design/DAGAuFLSz_I/5oIvcD_s4GP0HE4VsukQlw/view?utm_content=DAGAuFLSz_I&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: BlueCanva,
    }
  ];

  function MonthlyGoalTracker(){
    return(
      <section id = "monthly-goal-tracker">
        <h2>Monthly Goal Trackers</h2>
        <ProductList products={planners} />
      </section>
    )
  }
  
  export default MonthlyGoalTracker;
