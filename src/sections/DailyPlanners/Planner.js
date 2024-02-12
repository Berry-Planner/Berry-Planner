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
      canva: "https://www.canva.com/design/DAF6oUf_UGg/Kue5-vSSQrulL-f5Rdzkyw/view?utm_content=DAF6oUf_UGg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: BerryCanva,
    },
    {
      id: 2,
      name: 'Neutral Daily Planner',
      description: 'This is the description for Product 1.',
      image: Neutral,
      canva: "https://www.canva.com/design/DAF5UCcAfaM/HYbgV35hM6TRWTgyqDiIrQ/view?utm_content=DAF5UCcAfaM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: NeutralCanva,
    },
    {
      id: 3,
      name: 'Purple Daily Planner',
      description: 'This is the description for Product 1.',
      image: Purple,
      canva: "https://www.canva.com/design/DAF6ocXxFGM/_giJ7FjUNSnBZgALDJ1dPw/view?utm_content=DAF6ocXxFGM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: PurpleCanva,
    },
    {
      id: 4,
      name: 'Green Daily Planner',
      description: 'This is the description for Product 1.',
      image: Green,
      canva: "https://www.canva.com/design/DAF6WViw6XM/FCGNse6Q8wFPmDL_RaoaxA/view?utm_content=DAF6WViw6XM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: GreenCanva,
    },
    {
      id: 5,
      name: 'Blue Daily Planner',
      description: 'This is the description for Product 1.',
      image: Blue,
      canva: "https://www.canva.com/design/DAF6WQeY04A/mXTtTuIwIq8RBjlAjhGlZw/view?utm_content=DAF6WQeY04A&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: BlueCanva,
    }
  ];

  function AssignemntTrackers(){
    return(
      <section id = "daily-study-planners">
        <h2>Daily Planners</h2>
        <ProductList products={planners} />
      </section>
    )
  }
  
  export default AssignemntTrackers;
