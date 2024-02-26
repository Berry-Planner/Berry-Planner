import ProductList from '../../components/ProductList';
import Berry from "./images/Berry.gif";
import Neutral from "./images/Neutral.gif";
import Purple from "./images/Purple.gif";
import Green from "./images/Green.gif";
import Blue from "./images/Blue.gif";
import BerryCanva from "./pdfs/Berry Yearly.pdf";
import NeutralCanva from "./pdfs/Neutral Yearly.pdf";
import PurpleCanva from "./pdfs/Purple Yearly.pdf";
import GreenCanva from "./pdfs/Green Yearly.pdf";
import BlueCanva from "./pdfs/Blue Yearly.pdf";

const planners = [
  {
    id: 1,
    name: 'Berry Yearly Calendar',
    description: 'This is the description for Product 1.',
    image: Berry,
    canva: "https://www.canva.com/design/DAF8Qkl8H68/H_PIGK1mNz8E81ASlZ3tQQ/view?utm_content=DAF8Qkl8H68&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
    download: BerryCanva,
  },
  {
    id: 2,
    name: 'Neutral Yearly Calendar',
    description: 'This is the description for Product 1.',
    image: Neutral,
    canva: "https://www.canva.com/design/DAF8Qt5tK1w/wWhA4s44kSbPQ-PKKwmkUg/view?utm_content=DAF8Qt5tK1w&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
    download: NeutralCanva,
  },
  {
    id: 3,
    name: 'Purple Yearly Calendar',
    description: 'This is the description for Product 1.',
    image: Purple,
    canva: "https://www.canva.com/design/DAF8QmlXKU8/s-n2BYiVRjukC3hTGH-RLg/view?utm_content=DAF8QmlXKU8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
    download: PurpleCanva,
  },
  {
    id: 4,
    name: 'Green Yearly Calendar',
    description: 'This is the description for Product 1.',
    image: Green,
    canva: "https://www.canva.com/design/DAF8QqDnsdA/qfwOTd3LvDFY-iBuAoCHkw/view?utm_content=DAF8QqDnsdA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
    download: GreenCanva,
  },
  {
    id: 5,
    name: 'Blue Yearly Calendar',
    description: 'This is the description for Product 1.',
    image: Blue,
    canva: "https://www.canva.com/design/DAF7OQKIMMI/2Do78zCBGzFO5Jx5TshbMg/view?utm_content=DAF7OQKIMMI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
    download: BlueCanva,
  }
];

  function YearlyCalendar(){
    return(
      <section id = "yearly-calendar">
        <h2>Yearly Calendars</h2>
        <ProductList products={planners} />
      </section>
    )
  }
  export default YearlyCalendar;
