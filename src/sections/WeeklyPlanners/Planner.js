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
    canva: "https://www.canva.com/design/DAF7BmScidU/PVWWq0H6S4hZj_UmfLRyAw/view?utm_content=DAF7BmScidU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
    download: BerryCanva,
  },
  {
    id: 2,
    name: 'Neutral Weekly Planner',
    description: 'This is the description for Product 1.',
    image: Neutral,
    canva: "https://www.canva.com/design/DAF7BmkO5Jo/7Zb3DSXbRB-ySt4IyLynKA/view?utm_content=DAF7BmkO5Jo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
    download: NeutralCanva,
  },
  {
    id: 3,
    name: 'Purple Weekly Planner',
    description: 'This is the description for Product 1.',
    image: Purple,
    canva: "https://www.canva.com/design/DAF7BnlxGXg/2BgCfEi5ZUH8_15ZodyXjw/view?utm_content=DAF7BnlxGXg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
    download: PurpleCanva,
  },
  {
    id: 4,
    name: 'Green Weekly Planner',
    description: 'This is the description for Product 1.',
    image: Green,
    canva: "https://www.canva.com/design/DAF7BvTFBz4/uzEiHvVekB1kQDCcbJqgdQ/view?utm_content=DAF7BvTFBz4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
    download: GreenCanva,
  },
  {
    id: 5,
    name: 'Blue Weekly Planner',
    description: 'This is the description for Product 1.',
    image: Blue,
    canva: "https://www.canva.com/design/DAF66Vt3ngE/Yp-8y3KX3Nr2OLyXotIpFg/view?utm_content=DAF66Vt3ngE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
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
