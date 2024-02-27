import ProductList from '../../components/ProductList';
import Berry from "./images/Berry.png";
import Neutral from "./images/Neutral.png";
import Purple from "./images/Purple.png";
import Green from "./images/Green.png";
import Blue from "./images/Blue.png";
import BerryCanva from "./pdfs/Berry Weekly.pdf";
import NeutralCanva from "./pdfs/Neutral Weekly.pdf";
import PurpleCanva from "./pdfs/Purple Weekly.pdf";
import GreenCanva from "./pdfs/Green Weekly.pdf";
import BlueCanva from "./pdfs/Blue Weekly.pdf";

const planners = [
  {
    id: 1,
    name: 'Berry Weekly Planner',
    description: 'This is the description for Product 1.',
    image: Berry,
    canva: "https://www.canva.com/design/DAF6oeSBxkA/whp2KwukT3tcQbarjI7KZA/view?utm_content=DAF6oeSBxkA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
    download: BerryCanva,
  },
  {
    id: 2,
    name: 'Neutral Weekly Planner',
    description: 'This is the description for Product 1.',
    image: Neutral,
    canva: "https://www.canva.com/design/DAF6KOCfNaQ/nrSueE5M3_mHh1-hoWGgmQ/view?utm_content=DAF6KOCfNaQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
    download: NeutralCanva,
  },
  {
    id: 3,
    name: 'Purple Weekly Planner',
    description: 'This is the description for Product 1.',
    image: Purple,
    canva: "https://www.canva.com/design/DAF6oepZ_50/RrAlVsQcPfVbtmqorEfG9A/view?utm_content=DAF6oepZ_50&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
    download: PurpleCanva,
  },
  {
    id: 4,
    name: 'Green Weekly Planner',
    description: 'This is the description for Product 1.',
    image: Green,
    canva: "https://www.canva.com/design/DAF6WD9rDco/IHjIfjyU9apTnSUEf9db2Q/view?utm_content=DAF6WD9rDco&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
    download: GreenCanva,
  },
  {
    id: 5,
    name: 'Blue Weekly Planner',
    description: 'This is the description for Product 1.',
    image: Blue,
    canva: "https://www.canva.com/design/DAF6WCXttWQ/3kHReF3NP47csZcly3x9ww/view?utm_content=DAF6WCXttWQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
    download: BlueCanva,
  }
];

function WeeklyPlanner() {
  return (
    <section id="weekly-planner">
      <h2>Weekly Planners</h2>
      <ProductList products={planners} />
    </section>
  )
}
export default WeeklyPlanner;
