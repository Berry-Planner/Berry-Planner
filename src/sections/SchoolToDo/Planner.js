import ProductList from '../../components/ProductList';
import Berry from "./images/Berry.png";
import Neutral from "./images/Neutral.png";
import Purple from "./images/Purple.png";
import Green from "./images/Green.png";
import Blue from "./images/Blue.png";
import BerryCanva from "./pdfs/Berry School To-Do.pdf";
import NeutralCanva from "./pdfs/Neutral School To-Do.pdf";
import PurpleCanva from "./pdfs/Purple School To-Do.pdf";
import GreenCanva from "./pdfs/Green School To-Do.pdf";
import BlueCanva from "./pdfs/Blue School To-Do.pdf";

const planners = [
    {
      id: 1,
      name: 'Berry School To-Do',
      description: 'This is the description for Product 1.',
      image: Berry,
      canva: "https://www.canva.com/design/DAGATVf9ZLY/dRtCLOzXHeM219kfnKtCGw/view?utm_content=DAGATVf9ZLY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: BerryCanva,
    },
    {
      id: 2,
      name: 'Neutral School To-Do',
      description: 'This is the description for Product 1.',
      image: Neutral,
      canva: "https://www.canva.com/design/DAGATRp9_YM/DK1SDAiYZ_CfZZwiETzOjg/view?utm_content=DAGATRp9_YM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: NeutralCanva,
    },
    {
      id: 3,
      name: 'Purple School To-Do',
      description: 'This is the description for Product 1.',
      image: Purple,
      canva:"https://www.canva.com/design/DAGATb62PFI/aUzhebkiRzCd3zbBLB7gDA/view?utm_content=DAGATb62PFI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: PurpleCanva,
    },
    {
      id: 4,
      name: 'Green School To-Do',
      description: 'This is the description for Product 1.',
      image: Green,
      canva: "https://www.canva.com/design/DAGATeDnwFg/dUV1GuVNoOXgLEnf-F29pg/view?utm_content=DAGATeDnwFg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: GreenCanva,
    },
    {
      id: 5,
      name: 'Blue School To-Do',
      description: 'This is the description for Product 1.',
      image: Blue,
      canva: "https://www.canva.com/design/DAGAMJABr7s/QDrGJRvRhwL6NnxkBvHcIA/view?utm_content=DAGAMJABr7s&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      download: BlueCanva,
    }
  ];

  function SchoolToDo(){
    return(
      <section id = "School-to-do">
        <h2>School To-Do Planners</h2>
        <ProductList products={planners} />
      </section>
    )
  }
  
  export default SchoolToDo;
